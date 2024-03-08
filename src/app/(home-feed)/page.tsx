import AddPostForm from './_components/add-post-form';
import Footer from './_components/footer';
import Feed from './_components/feed';
import Header from './_components/header';
import { Suspense } from 'react';

export default function Home() {
  // const { user } = useUser();
  // console.log('current user', user);
  return (
    <main className="overflow-none relative flex h-full min-h-[100dvh] flex-col border-x border-gray-400/40 shadow-sm dark:border-gray-600/40">
      <section className="border-b border-gray-400/40 px-6 py-4 dark:border-gray-600/40">
        <Header />
        <AddPostForm />
      </section>
      <Suspense fallback={<div>Loading...</div>}>
        <Feed />
      </Suspense>
      <Footer />
    </main>
  );
}
