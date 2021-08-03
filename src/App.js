import Pagination from "./components/containers/pagination";

const App = () => {
  const data = new Array(43).fill(1);
  const onClick = (el) => console.log(el);

  return <Pagination arr={data} onClick={onClick} />
};

export default App;
