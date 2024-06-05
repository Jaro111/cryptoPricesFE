export const CoinCardUserMenu = () => {
  return (
    <div className="CoinCardUser">
      <div className="cmcContainer">
        <div className="tickerUserDiv">
          <div className="tickerContentContainer">
            <p className="coinCardMenuCont">SYMBOL</p>
          </div>

          <div className="logoUserContainer"></div>
        </div>
        <div className="priceUserContainer">
          <p className="coinCardMenuCont">PRICE</p>
        </div>
      </div>
      <div className="addPortfolioContainer"></div>

      <div className="userHoldingsDetails">
        <div className="userBuyPrice">
          <p className="coinCardMenuCont">BUY PRICE</p>
        </div>
        <div className="userCoinQty">
          <p className="coinCardMenuCont">QTY</p>
        </div>
        <div className="userHoldingsBuyDetailsProfit">
          <div className="valueDiv">
            <p className="coinCardMenuCont">HOLDING VALUE</p>
          </div>
          <div className="valueDiv">
            <p className="coinCardMenuCont">CHANGE</p>
          </div>

          <div className="valueDiv">
            <p className="coinCardMenuCont">CHANGE</p>
          </div>
        </div>
      </div>
    </div>
  );
};
