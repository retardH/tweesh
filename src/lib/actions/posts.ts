'use server';
import { clerkClient, currentUser } from '@clerk/nextjs/server';
import { desc } from 'drizzle-orm';
import db from '../db';
import { posts } from '../db/schema';
import { NewPost, Post } from '../type-definitions';
import { filterUserDataForClient } from '../utils';

export const addUserDataToPosts = async (postsData: Post[]) => {
  const userIds = postsData.map((post) => post.userId);
  const users = (
    await clerkClient.users.getUserList({
      userId: userIds,
      limit: 100,
    })
  ).map(filterUserDataForClient);

  return postsData.map((post) => {
    const author = users.find((user) => user.id === post.userId);

    if (!author) {
      console.error('Author not found ', post);
      throw new Error('Author does not exists');
    }

    if (!author.username) {
      if (!author.externalUsername) {
        console.error('Author has no Github Account!');
        throw new Error('Author has no Github account!');
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

export const createNewPost = async (newPost: Omit<NewPost, 'userId'>) => {
  const user = await currentUser();
  if (!user) {
    throw new Error('You are not logged in!');
  }
  await db.insert(posts).values({ ...newPost, userId: user.id });
};

export const getPosts = async () => {
  const results = await db.select().from(posts).orderBy(desc(posts.createdAt));
  return addUserDataToPosts(results);
};

export const deletePosts = async () => {
  console.log('deleting');
  await db.delete(posts);
};
