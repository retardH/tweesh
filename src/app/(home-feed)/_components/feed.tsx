'use server';
import PostView from '@/components/shared/post-view';
import { getPosts } from '@/lib/actions/posts';
import React from 'react';

const Feed = async () => {
  const data = await getPosts();

  return (
    <div className="relative flex grow flex-col overflow-y-hidden">
      {data?.map((fullPost) => {
        return <PostView key={fullPost.post.id} {...fullPost} />;
      })}
    </div>
  );
};

export default Feed;
