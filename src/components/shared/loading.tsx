import { LoadingSpinner } from '../ui/loading';

export const FeedLoading = () => {
  return (
    <div className="relative flex grow flex-col items-center justify-center overflow-y-scroll">
      <LoadingSpinner size={50} />
    </div>
  );
};
