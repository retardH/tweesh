import { User } from '@clerk/nextjs/server';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const filterUserDataForClient = (user: User) => {
  return {
    id: user.id,
    username: user.username ?? `${user.firstName} ${user.lastName ?? ''}`,
    profileImageUrl: user.imageUrl,
    externalUsername:
      user.externalAccounts.find(
        (externalAccount) =>
          externalAccount.provider === 'oauth_github' || 'google',
      )?.username || null,
  };
};
