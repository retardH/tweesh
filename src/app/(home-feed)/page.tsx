'use client';
import { Button } from '@/components/ui/button';
import { createNewPost, deletePosts } from '@/lib/actions/posts';
import { SignInButton, useUser } from '@clerk/nextjs';

export default function Home() {
  const { user } = useUser();
  console.log('current user', user);
  return (
    <main className="flex flex-col gap-4 p-6">
      <div>Hi There!</div>
      <SignInButton>
        <Button>Sign In</Button>
      </SignInButton>
      <form action={deletePosts}>
        <Button variant="destructive">Delete</Button>
      </form>
    </main>
  );
}
