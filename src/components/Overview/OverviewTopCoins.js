import React from 'react'

import './OverviewTopCoins.scss'
import Icon from '../Icon/Icon'

function OverviewTopCoins({ title, headIcon, seeAllRoute }) {
  return (
    <div className="card bg-lawrence p-3 rounded-3 shadow-sm border-0">
      <div className="pt-2 pb-3 border-bottom fw-500 px-0 d-flex justify-content-between align-items-center">
        <div className="d-flex text-oz">
          <Icon icon={headIcon} className="pe-2" /><span>{title}</span>
        </div>
        {seeAllRoute && <div className="d-flex text-grey">
          <span>See All</span><Icon icon="arrow-right" className="ps-1" />
        </div>}
      </div>
      <div className="table-responsive">
        <table className="table table-borderless mb-0 table-zebra text-bran">
          <thead>
          <tr className="small text-grey">
            <td className="pb-2 pt-2 pe-0">#</td>
            <td className="pb-2 pt-2">Name</td>
            <td className="text-end pb-2 pt-2">Price</td>
            <td className="text-end pb-2 pt-2">24H</td>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td className="small pe-0">1</td>
            <td>
              <div className="d-flex">
                <Icon icon="utk" className="me-3" /><span>GRT</span>
              </div>
            </td>
            <td className="text-end">$2.61</td>
            <td className="text-end text-success">+64.25%</td>
          </tr>
          <tr>
            <td className="small pe-0">2</td>
            <td>
              <div className="d-flex">
                <Icon icon="nu" className="me-3" /><span>NU</span>
              </div>
            </td>
            <td className="text-end">$0.8269</td>
            <td className="text-end text-success">+40.81%</td>
          </tr>
          <tr>
            <td className="small pe-0">3</td>
            <td>
              <div className="d-flex">
                <Icon icon="vgx" className="me-3" /><span>VGX</span>
              </div>
            </td>
            <td className="text-end">$3.38</td>
            <td className="text-end text-success">+39.43%</td>
          </tr>
          <tr>
            <td className="small pe-0">4</td>
            <td>
              <div className="d-flex">
                <Icon icon="utk" className="me-3" /><span>UTK</span>
              </div>
            </td>
            <td className="text-end">$0.4888</td>
            <td className="text-end text-success">+4.25%</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default OverviewTopCoins
