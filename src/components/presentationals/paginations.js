const PaginationUI = ({ pages, runOnClick, onClickLeft, onClickRight }) => {
  return (
    <div style={{display: 'flex', width: 400, justifyContent: 'space-between' }}>
      <div style={{cursor: "pointer"}} onClick={onClickLeft}>arrow</div>
      {pages.map((el, i) => (
        <div onClick={() => runOnClick(el)} style={{cursor: "pointer"}} key={i}>{el}</div>
      ))}
      <div style={{cursor: "pointer"}} onClick={onClickRight}>arrow</div>
    </div>
  );
};

export default PaginationUI;
