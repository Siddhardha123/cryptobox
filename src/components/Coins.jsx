import React from 'react';
import CoinItem from './CoinItem';
import Coin from '../routes/Coin'
import {Link} from 'react-router-dom';
const Coins = (props) => {
  return (
    <div className="max-w-[1000px] m-auto pt-4">
      <div>
        <div className="flex bg-[#26272b] items-center justify-between shadow-lg font-bold  rounded-md p-4 shadow-[#000000] m-2">
          <p >#</p>
          <p>Coin</p>
          <p>Price</p>
          <p>24 hours</p>
          <p className="hide-mobile">Volume</p>
          <p className="hide-mobile ">Market cap</p>
        </div>

        {props.coins.map((coins) => {
          return (
            <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id}>
              <CoinItem coins={coins} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Coins