import { clerkClient } from '@clerk/nextjs/server';
import { filterUserDataForClient } from '../utils';

export const getProfileByUsername = async (userId: string) => {
  const [user] = await clerkClient.users.getUserList({
    userId: [userId],
  });

  if (!user) {
    // If we hit here, we need a unsanitized username. So, we need to hit api once more to find the user
    const users = await clerkClient.users.getUserList({
      limit: 200,
    });

    const userExternalAcc = users.find((user) =>
      user.externalAccounts.find((externalAcc) => {
        return externalAcc.id === userId;
      }),
    );

    if (!userExternalAcc) {
      throw new Error('User not found!');
    }
    return filterUserDataForClient(userExternalAcc);
  }

  return filterUserDataForClient(user);
};
