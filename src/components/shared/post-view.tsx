'use client';
import ProfileAvatar from './profile-avatar';
import { addUserDataToPosts } from '@/lib/actions/posts';
import { formatDistance } from 'date-fns';
import Link from 'next/link';

type PostViewProps = Awaited<ReturnType<typeof addUserDataToPosts>>[0];

const PostView = (props: PostViewProps) => {
  const { post, author } = props;
  return (
    <div className="flex items-center gap-2 border-b border-gray-400/40 p-4">
      <ProfileAvatar image={author.profileImageUrl} />
      <div className="flex flex-col gap-1">
        <div className="flex items-center">
          <Link
            href={`/${author.id}`}
            className="cursor-pointer text-gray-700 dark:text-gray-300"
          >{`@${author.username ?? author.externalUsername}`}</Link>
          <span className="mx-1 font-semibold">·</span>
          <span className="text-gray-600 dark:text-gray-400">
            {formatDistance(Date.now(), post.createdAt!)} ago
          </span>
        </div>
        <div>
          <p className="text-2xl">{post.content}</p>
        </div>
      </div>
    </div>
  );
};

export default PostView;
