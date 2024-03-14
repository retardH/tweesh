'use client';
import ThemeToggle from '@/components/shared/theme-toggle';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { createNewPost } from '@/lib/actions/posts';
import { UserButton, useUser } from '@clerk/nextjs';
import { useEffect, useRef } from 'react';
import { useFormState } from 'react-dom';
import toast from 'react-hot-toast';

const AddPostForm = () => {
  const { user } = useUser();
  console.log('current user', user);
  // @ts-ignore
  const [formState, formAction] = useFormState(createNewPost, {});
  const formRef = useRef<HTMLFormElement>(null);
  useEffect(() => {
    if (formState?.status === 'error') {
      toast.error(formState.message ?? 'Something went wrong!');
    } else {
      formRef.current?.reset();
    }
  }, [formState]);

  return (
    <div className="flex items-center gap-2">
      <UserButton
        appearance={{
          elements: {
            userButtonAvatarBox: {
              width: 50,
              height: 50,
            },
          },
        }}
      />
      <form
        ref={formRef}
        className="flex grow items-center gap-2"
        action={formAction}
      >
        <Input
          required
          name="content"
          placeholder="Type some emojis..."
          className="flex-1 border-none bg-transparent px-0 text-base outline-none placeholder:text-base focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
        />
        <Button variant="outline" type="submit">
          Post
        </Button>
      </form>
      {/* <div className="fixed right-2 top-2">
        <ThemeToggle />
      </div> */}
    </div>
  );
};

export default AddPostForm;
