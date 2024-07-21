import { FC } from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const isPrevDisabled = currentPage <= 1;
  const isNextDisabled = currentPage >= totalPages;
  const previousButtonText = "Previous";
  const nextButtonText = "Next";

  const buttonClass = (disabled: boolean) => `button-primary`;

  return (
    <div className="flex items-center justify-center space-x-6 mt-6 mb-10">
      <button
        className={buttonClass(isPrevDisabled)}
        disabled={isPrevDisabled}
        onClick={() => onPageChange(currentPage - 1)}
      >
        {previousButtonText}
      </button>
      <span className="text-gray-800 font-bold text-xl">
        {currentPage} / {totalPages}
      </span>
      <button
        className={buttonClass(isNextDisabled)}
        disabled={isNextDisabled}
        onClick={() => onPageChange(currentPage + 1)}
      >
        {nextButtonText}
      </button>
    </div>
  );
};
