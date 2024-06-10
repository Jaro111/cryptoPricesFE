//  <div className="detailContainer">
//             <div className="coinDetails">
//               <div className="capSupplyVol">
//                 <div className="coinDetailsContainer">
//                   {/* <p className="coinDetailsContentQ">Symbol: </p>
//                   <p className="coinDetailsContentQ">Market Cap: </p> */}
//                   {/* <p className="coinDetailsContentQ">FDV: </p>
//                   <p className="coinDetailsContentQ">24 hours Volume: </p>
//                   <p className="coinDetailsContentQ">Total Supply: </p>
//                   <p className="coinDetailsContentQ">Max Supply: </p>
//                   <p className="coinDetailsContentQ">Circulating Supply: </p> */}
//                 </div>
//                 <div className="coinDetailsContainer">
//                   {/* <p className="coinDetailsContentA">{coin.symbol}</p>
//                   <p className="coinDetailsContentA">
//                     ${priceFunc(coin.quote.USD.market_cap)}
//                   </p> */}
//                   {/* <p className="coinDetailsContentA">
//                     ${priceFunc(coin.quote.USD.fully_diluted_market_cap)}
//                   </p> */}
//                   {/* <p className="coinDetailsContentA">
//                     ${priceFunc(coin.quote.USD.volume_24h)}
//                   </p>
//                   <p className="coinDetailsContentA">{coin.total_supply}</p>

//                   <p className="coinDetailsContentA">{coin.circ_supply}</p>
//                   <p className="coinDetailsContentA">
//                     {coin.supply === null ? "ထ" : coin.supply}
//                   </p> */}
//                 </div>
//               </div>

//               <div className="capSupplyVol">
//                 <div className="coinDetailsContainer">
//                   {/* <p className="coinDetailsContentQ">Expolorer: </p> */}
//                   {/* <p className="coinDetailsContentQ">Website: </p>
//                   {coin.meta.urls.twitter.length > 0 ? (
//                     <p className="coinDetailsContentQ">twitter: </p>
//                   ) : null} */}
//                   {/* {coin.meta.contractAdress.length > 0 ? (
//                     <p className="coinDetailsContentQ">Contract address: </p>
//                   ) : null} */}
//                   <p className="coinDetailsContentQ">Add to portfolio </p>
//                   <p className="coinDetailsContentQ">Add to watchlist </p>
//                 </div>
//                 <div className="coinDetailsContainer">
//                   {/* {coin.meta.urls.explorer.length > 1 ? (
//                     <DropMenu
//                       clickDrop={() => clickDrop(coin.meta.urls.explorer)}
//                       clickList={clickList}
//                     />
//                   ) : (
//                     <a
//                       className="websiteLink"
//                       href={coin.meta.urls.explorer}
//                       target="_blank"
//                     >
//                       <p className="coinDetailsContentA">
//                         {cutUrl(`${coin.meta.urls.explorer}`)}
//                       </p>
//                     </a>
//                   )} */}
//                   {/* {coin.meta.urls.website.length > 1 ? (
//                     <DropMenu
//                       clickDrop={() => clickDrop(coin.meta.urls.website)}
//                       clickList={clickList}
//                     />
//                   ) : (
//                     <a
//                       className="websiteLink"
//                       href={coin.meta.urls.website}
//                       target="_blank"
//                     >
//                       <p className="coinDetailsContentA">
//                         {cutUrl(`${coin.meta.urls.website}`)}
//                       </p>
//                     </a>
//                   )} */}

//                   {/* {coin.meta.urls.twitter.length > 0 ? (
//                     <p className="coinDetailsContentA">
//                       {coin.meta.urls.twitter}
//                     </p>
//                   ) : null} */}
// {/*
//                   {coin.meta.contractAdress.length > 0 ? (
//                     <DropChain coin={coin} />
//                   ) : null} */}
//                   <div className="addButtonsContainer">
//                     <button className="addButton">
//                       <IoWallet onClick={() => portfolioClick()} />
//                     </button>
//                     <button>
//                       <FaRegStar
//                         className="addButton"
//                         onClick={() => addToWatchList()}
//                       />
//                     </button>
//                     {isAddPortModalVisible && (
//                       <AddCoinPortModal
//                         setIsAddPortModalVisible={setIsAddPortModalVisible}
//                         portfolioList={portfolioList}
//                         user={user}
//                         id={id}
//                       />
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="links"></div>
//           </div>
//         </div>
