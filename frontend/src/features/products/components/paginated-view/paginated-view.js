import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsAsync } from "../../productsSlice";
import ProductCard from "../product-card/product-card";
import styles from "./paginated-view.module.css";

function PaginatedView({ pageSize }) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const [page, setPage] = useState(0);
  const _pageSize = pageSize || 5;
  const pageCount = Math.ceil(products.products.length / _pageSize);

  useEffect(() => {
    dispatch(fetchProductsAsync());
  }, []);

  function onPaginationClick(event) {
    event.preventDefault();
    setPage(parseInt(event.target.dataset.pageIndex));
  }

  function onPaginationPrevClick(event) {
    event.preventDefault();
    if (page > 0) setPage(page - 1);
  }

  function onPaginationNextClick(event) {
    event.preventDefault();
    if (page < pageCount - 1) setPage(page + 1);
  }

  let productsList = "Loading...";
  if (products.status === "idle") {
    productsList = products.products
      .slice(_pageSize * page, _pageSize * page + _pageSize)
      .map((product) => <ProductCard product={product} />);
  }

  let pageList = ["..."];
  if (products.status === "idle") {
    pageList = [];
    for (let i = 0; i < pageCount; i++) {
      pageList.push(
        <li>
          <button
            data-page-index={i}
            onClick={onPaginationClick}
            className={page == i ? styles["pagination-curr"] : ""}
          >
            {i + 1}
          </button>
        </li>
      );
    }
  }

  let pagination = (
    <nav className={styles.pagination}>
      <form>
        <ul>
          <li>
            <button onClick={onPaginationPrevClick}>← Nazaj</button>
          </li>
          {pageList}
          <li>
            <button onClick={onPaginationNextClick}>Naprej →</button>
          </li>
        </ul>
      </form>
    </nav>
  );

  return (
    <div className={styles.view}>
      {pagination}
      <div className={styles.cards}>{productsList}</div>
      {pagination}
    </div>
  );
}

export default PaginatedView;
