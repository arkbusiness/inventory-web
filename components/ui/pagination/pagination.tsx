import { ArrowLeft, ArrowRight } from "lucide-react";
import { FC } from "react";
import ReactPaginate from "react-paginate";
import "./pagination.css";

interface PaginationProps {
  total: number;
  page: number;
  handlePageClick(value: { selected: number }): void;
}

export const PerPage = 8;

export const Pagination: FC<PaginationProps> = ({
  handlePageClick,
  page = 1,
  total = 0,
}) => {
  return (
    <div className="px-0 pagination-wrapper">
      <ReactPaginate
        breakLabel="..."
        previousLabel={
          <button
            type="button"
            className="h-10 w-[91px] flex items-center justify-center rounded-lg bg-primary text-white text-sm"
          >
            <ArrowLeft size="18px" color="white" />
            <span className="ml-1">Prev</span>
          </button>
        }
        nextLabel={
          <button
            type="button"
            className="h-10 w-[75px] flex items-center justify-center rounded-lg bg-primary text-white"
          >
            <span className="mr-1 text-xs">Next</span>
            <ArrowRight size="18px" color="white" />
          </button>
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        forcePage={page - 1}
        pageCount={Math.ceil(total / PerPage)}
        containerClassName="pagination"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item page-prev"
        previousLinkClassName="page-link"
        nextClassName="page-item page-next"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        renderOnZeroPageCount={() => null}
      />
    </div>
  );
};
