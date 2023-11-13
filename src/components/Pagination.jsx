import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import '../stylesheets/Pagination.css'

const Pagination = ({ itemsPerPage, items, onCurrentItems }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
//   const currentItems = items?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items?.length / itemsPerPage);
  // console.log(currentItems)

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = items?.slice(itemOffset, endOffset);
    onCurrentItems(currentItems);
  }, [itemOffset, items]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage;
    setItemOffset(newOffset);
  };

  return (
    <>
      <ReactPaginate className="pagination"
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default Pagination;
