import { LoadingSpinner } from '../ui/loading';

export const FeedLoading = () => {
  return (
    <div className="relative flex grow flex-col items-center justify-center overflow-y-scroll">
      <LoadingSpinner size={50} />
    </div>
  );
};

export const LoadingPage = () => {
  return (
    <div className="absolute left-0 top-0 flex h-screen w-screen items-center justify-center">
      <LoadingSpinner size={64} />
    </div>
  );
};
