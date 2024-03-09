import AddPostForm from './_components/add-post-form';
import Footer from './_components/footer';
import Feed from './_components/feed';
import Header from './_components/header';
import { Suspense } from 'react';
import { FeedLoading } from '@/components/shared/loading';

export default function Home() {
  return (
    <main className="flex h-[100dvh] flex-col overflow-hidden border-x border-gray-400/40 shadow-sm dark:border-gray-600/40">
      <section className="flex flex-col border-b border-gray-400/40 px-4 py-6 dark:border-gray-600/40">
        {/* <Header /> */}
        <AddPostForm />
      </section>
      <Suspense fallback={<FeedLoading />}>
        <Feed />
      </Suspense>
      <Footer />
    </main>
  );
}
