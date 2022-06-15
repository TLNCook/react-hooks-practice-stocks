import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ stocks, removeStockFromPortfolio }) {
  const renderStocks = stocks.map((stock) => (
    <Stock key={stock.id} stock={stock} handleStockClick={removeStockFromPortfolio} />
  ));

  return (
    <div>
      <h2>My Portfolio</h2>
      {renderStocks}
    </div>
  );
}

export default PortfolioContainer;
