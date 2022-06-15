import React from "react";

function Stock({ stock, handleStockClick }) {
  const { id, ticker, name, price, type } = stock;

  function handleClick() {
    handleStockClick(stock);
  }
  return (
    <div onClick={handleClick}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            {ticker}: {price}
          </p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
