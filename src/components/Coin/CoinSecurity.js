import React from 'react'
import Card from '../Card/Card'
import CardHead from '../Card/CardHead'
import { Info } from '../Icon'
import List from '../List/List'
import ListItem from '../List/ListItem'

function CoinSecurity({ items }) {
  if (!items) {
    return null
  }

  return (
    <Card>
      <CardHead title="Security Parameters" />
      <List>
        <ListItem className="py-3">
          <div className="text-grey">Privacy</div>
          <div className="text-oz">
            <span className="badge bg-remus text-oz">High</span>
            <Info className="ms-2" role="bottom" />
          </div>
        </ListItem>
        <ListItem className="py-3">
          <div className="text-grey">Issuance</div>
          <small className="text-oz">N/A</small>
        </ListItem>
        <ListItem className="py-3">
          <div className="text-grey">Confiscation-resistance</div>
          <small className="text-oz">N/A</small>
        </ListItem>
        <ListItem className="py-3">
          <div className="text-grey">Censorship-resistance</div>
          <small className="text-oz">N/A</small>
        </ListItem>
        <ListItem className="py-3">
          <div className="text-grey">Audited</div>
          <small className="text-oz">N/A</small>
        </ListItem>
      </List>
    </Card>
  )
}

export default CoinSecurity
