import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";

type Props = {
  paginationNumber: number;
  pageIndex: number;
  handlePagination: (pageIndex: number) => void;
};

export default function PaginationButton({
  pageIndex,
  paginationNumber,
  handlePagination,
}: Props) {
  console.log(paginationNumber);
  console.log(pageIndex);
  return (
    <Pagination className="mt-4 flex w-full justify-center">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => {
              pageIndex !== 1 && handlePagination(pageIndex - 1);
            }}
            className={cn("", {
              "cursor-not-allowed": pageIndex === 1,
            })}
          />
        </PaginationItem>
        {Array.from({ length: paginationNumber }, (_, index) => (
          <PaginationItem key={index}>
            <PaginationLink
              onClick={() => handlePagination(index + 1)}
              isActive={index + 1 === pageIndex}
            >
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        {paginationNumber > 5 && (
          <PaginationItem>
            <PaginationLink onClick={() => handlePagination(paginationNumber)}>
              {paginationNumber}
            </PaginationLink>
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationNext
            onClick={() => {
              handlePagination(pageIndex + 1);
            }}
            className={cn("cursor-pointer", {
              "cursor-not-allowed": pageIndex >= paginationNumber,
            })}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
