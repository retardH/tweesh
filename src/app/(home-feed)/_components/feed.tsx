'use server';
import React from 'react';
import PostView from '@/components/shared/post-view';
import { getPosts } from '@/lib/actions/posts';

const Feed = async () => {
  const data = await getPosts();
  return (
    <div className="flex grow flex-col overflow-y-scroll">
      {data?.map((fullPost) => {
        return <PostView key={fullPost.post.id} {...fullPost} />;
      })}
    </div>
  );
};

export default Feed;
