import React from 'react'

function CoinVolume() {
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5 g-4">
      <div className="col">
        <div className="text-grey">Volume 24h</div>
        <div className="divider my-2" />
        <div className="text-bran">$ 683,263,708,818</div>
      </div>
      <div className="col">
        <div className="text-grey">Market Cap</div>
        <div className="divider my-2" />
        <div className="text-bran">$ 683,263,708,818</div>
      </div>
      <div className="col">
        <div className="text-grey">In Circulation</div>
        <div className="divider my-2" />
        <div className="text-bran">$ 683,263,708,818</div>
      </div>
      <div className="col">
        <div className="text-grey">Total Supply</div>
        <div className="divider my-2" />
        <div className="text-bran">$ 683,263,708,818</div>
      </div>
      <div className="col">
        <div className="text-grey">Diluted MCap</div>
        <div className="divider my-2" />
        <div className="text-bran">$ 683,263,708,818</div>
      </div>
    </div>
  )
}

export default CoinVolume
