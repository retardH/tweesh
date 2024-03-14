import AddPostForm from './_components/add-post-form';
import Footer from './_components/footer';
import Feed from './_components/feed';
import { Suspense } from 'react';
import { FeedLoading } from '@/components/shared/loading';
import { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <main className="flex h-[100dvh] flex-col overflow-hidden border-x border-gray-400/40 shadow-sm dark:border-gray-600/40">
      <section className="flex flex-col border-b border-gray-400/40 bg-gray-100 p-4 dark:border-gray-600/40 dark:bg-gray-900">
        <AddPostForm />
      </section>
      <Suspense fallback={<FeedLoading />}>
        <Feed />
      </Suspense>
      <Footer />
    </main>
  );
};

export default Home;
