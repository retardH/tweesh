'use client';
import ProfileAvatar from './profile-avatar';
import { addUserDataToPosts } from '@/lib/actions/posts';
import { formatDistance } from 'date-fns';
type PostViewProps = Awaited<ReturnType<typeof addUserDataToPosts>>[0];

const PostView = (props: PostViewProps) => {
  const { post, author } = props;
  return (
    <div className="flex items-center gap-2 border-b border-gray-400/40 px-4 py-5">
      <ProfileAvatar image={author.profileImageUrl} />
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1">
          <h4>@{author.username ?? author.externalUsername}</h4>
          <span>· {formatDistance(Date.now(), post.createdAt!)} ago</span>
        </div>
        <div>
          <p>{post.content}</p>
        </div>
      </div>
    </div>
  );
};

export default PostView;
