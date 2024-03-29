'use server';
import { clerkClient, currentUser } from '@clerk/nextjs/server';
import { desc, eq } from 'drizzle-orm';
import db from '../db';
import { posts } from '../db/schema';
import { PostWithUser } from '../type-definitions';
import { filterUserDataForClient } from '../utils';
import { z } from 'zod';
import { revalidatePath, unstable_noStore as noStore } from 'next/cache';

const CreatePostFormSchema = z.object({
  content: z.string().emoji('Only emojis are allowed!'),
});

export const addUserDataToPosts = async (postsData: PostWithUser[]) => {
  const userIds = postsData.map((post) => post.authorId);
  const users = (
    await clerkClient.users.getUserList({
      userId: userIds,
      limit: 100,
    })
  ).map(filterUserDataForClient);

  return postsData.map((post) => {
    const author = users.find((user) => user.id === post.authorId);

    if (!author) {
      console.error('Author not found ', post);
      throw new Error('Author does not exists');
    }

    if (!author.username) {
      if (!author.externalUsername) {
        console.error('Author has no Connected Account!');
        throw new Error('Author has no Connected account!');
      }

      author.username = author.externalUsername;
    }

    return {
      post,
      author: {
        ...author,
        username: author.username ?? 'username not found',
      },
    };
  });
};

export const createNewPost = async (_, formData: FormData) => {
  const result = CreatePostFormSchema.safeParse({
    content: formData.get('content'),
  });

  if (!result.success) {
    console.log(result.error.flatten().fieldErrors.content?.[0]);
    return {
      status: 'error',
      message: result.error.flatten().fieldErrors.content?.[0],
    };
  }

  const user = await currentUser();

  if (!user) {
    throw new Error('You are not logged in!');
  }

  await db.insert(posts).values({ ...result.data, authorId: user.id });
  revalidatePath('/');
};

export const getPosts = async () => {
  noStore();
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(2000);
    }, 2000);
  });
  const results = await db.select().from(posts).orderBy(desc(posts.createdAt));
  return addUserDataToPosts(results);
};

export const getPostsByUserId = async (id: string) => {
  noStore();

  const results = await db
    .select()
    .from(posts)
    .where(eq(posts.authorId, id))
    .orderBy(posts.createdAt);

  return addUserDataToPosts(results);
};

export const deletePosts = async () => {
  await db.delete(posts);
};
