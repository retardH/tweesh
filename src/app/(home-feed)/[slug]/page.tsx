import PostView from '@/components/shared/post-view';
import { getPostsByUserId } from '@/lib/actions/posts';
import { getProfileByUsername } from '@/lib/actions/profile';
import { NextPage } from 'next';
import Image from 'next/image';
import React from 'react';

const ProfilePage: NextPage<{ params: { slug: string } }> = async ({
  params,
}) => {
  const user = await getProfileByUsername(params.slug);
  const posts = await getPostsByUserId(user.id);
  return (
    <main className="flex h-[100dvh] flex-col overflow-hidden border-x border-gray-400/40 shadow-sm dark:border-gray-600/40">
      <div className="relative h-44 bg-gray-200 dark:bg-gray-900">
        <Image
          width={50}
          height={50}
          src={user.profileImageUrl}
          alt={`${user.username} Profile Image`}
          className="absolute -bottom-10 left-2 size-24 rounded-full border-4 border-white object-cover dark:border-gray-950"
        />
      </div>
      <h4 className="mt-[40px] px-4 text-xl font-semibold">{`@${user.username}`}</h4>
      <div className="mt-4 border-t border-gray-400/40">
        {posts.map((post) => {
          return <PostView key={post.post.id} {...post} />;
        })}
      </div>
    </main>
  );
};

export default ProfilePage;
