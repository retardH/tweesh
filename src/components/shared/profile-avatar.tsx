import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

interface ProfileAvatarProps {
  image?: string;
  name?: string;
}
const ProfileAvatar = ({ image, name }: ProfileAvatarProps) => {
  return (
    <Avatar className="cursor-pointer">
      <AvatarImage src={image} />
      <AvatarFallback>{name ?? 'HZ'}</AvatarFallback>
    </Avatar>
  );
};

export default ProfileAvatar;
