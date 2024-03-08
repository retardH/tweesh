'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { createNewPost } from '@/lib/actions/posts';
import { useEffect, useRef } from 'react';
import { useFormState } from 'react-dom';
import toast from 'react-hot-toast';

const AddPostForm = () => {
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
    <form ref={formRef} className="flex items-center gap-2" action={formAction}>
      <Input
        required
        name="content"
        placeholder="Type some emojis..."
        className="flex-1 border-none bg-transparent px-0 text-base outline-none placeholder:text-base focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
      />
      <Button variant="ghost" type="submit">
        Post
      </Button>
    </form>
  );
};

export default AddPostForm;
