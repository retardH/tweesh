import { Button } from '@/components/ui/button';
import { createNewPost } from '@/lib/actions/posts';

export default function Home() {
  return (
    <main className="p-6">
      Hi There!
      <form action={createNewPost}>
        <Button type="submit">Create New Post</Button>
      </form>
    </main>
  );
}
