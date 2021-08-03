import { useEffect, useState } from "react";
import PaginationUI from "../presentationals/paginations";

/**
 * Props
 * arr : Pagination을 사용할 배열
 * onClick : 각 페이지를 눌렀을 때 실행할 함수,
 *           클릭한 요소를 Number 타입으로 함수의 인자로 반환한다.
 */
const Pagination = ({ arr, onClick }) => {
  const unit = 10;
  const MAX_LENGTH = arr.length
  const SET = Math.floor(MAX_LENGTH / unit);

  const [pages, setPages] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (arr < 10) {
      setPages(new Array(MAX_LENGTH).fill(0).map((_, i) => i + 1));
    } else {
      setPages(new Array(10).fill(0).map((_, i) => i + 1));
    };
  }, []);

  const runOnClick = (el) => {
    onClick(el);
  }

  const onClickLeft = () => {
    if (count === 0) return;
    if (count === SET) {
      const result = pages[0] - 10;
      const arrResult = new Array(10).fill(0).map((_, i) => result + i);
      setPages(arrResult);
      const resultCount = count - 1;
      setCount(resultCount);
      return;
    };
    const result = count - 1;
    setCount(result);
    const newArr = pages.map(e => e - 10);
    setPages(newArr);
  };

  const onClickRight = () => {
    if (count + 1 === SET ) {
      const rest = MAX_LENGTH % unit;
      const result = pages.map(e => e + 10).filter((_, i) => i < rest);
      setPages(result);
      const countResult = count + 1;
      setCount(countResult);
      return;
    } else if (count === SET) return;
    const result = count + 1;
    setCount(result);
    const newArr = pages.map(e => e + 10);
    setPages(newArr);
  };

  return <PaginationUI pages={pages} runOnClick={runOnClick} onClickLeft={onClickLeft} onClickRight={onClickRight} />;
};

export default Pagination;
