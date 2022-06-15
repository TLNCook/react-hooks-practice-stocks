import React, { useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [portfolioStocks, setPortfolioStocks] = useState([]);

  function addStockToPortfolio(newStock) {
    const isInPortfolio = portfolioStocks.some(
      (stock) => stock.id === newStock.id
    );
    if (!isInPortfolio) {
      setPortfolio((currentStatePortfolio) => [
        ...currentStatePortfolio,
        newStock,
      ]);
    }
  }

  function removeStockFromPortfolio(stockToRemove) {
    setPortfolio((currentStocks) => 
    currentStocks.filter((stock) => stock.id !== stockToRemove.id)
    );
  }

  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer addStockRoPortfolio={addStockToPortfolio} />
        </div>
        <div className="col-4">
          <PortfolioContainer 
            stocks={portfolio}
            removeStockFromPortfolio={removeStockFromPortfolio}
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
