'use client';
import ThemeToggle from '@/components/shared/theme-toggle';
import { UserButton } from '@clerk/nextjs';

const Header = () => {
  return (
    <div className="mb-4 flex items-center justify-between">
      <UserButton
        appearance={{
          elements: {
            userButtonAvatarBox: {
              width: 45,
              height: 45,
            },
          },
        }}
      />
      <ThemeToggle />
    </div>
  );
};

export default Header;
