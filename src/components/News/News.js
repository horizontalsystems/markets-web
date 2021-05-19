import React from 'react'
import moment from 'moment'
import cn from 'classnames'

function News({ title, news }) {
  return (
    <div className="card rounded-3 bg-lawrence shadow-sm border-0 h-100">
      {news.map((item, index) => {
        const isFirst = index === 0
        const isLast = index === news.length - 1
        const classes = {
          'rounded-top-3': isFirst,
          'rounded-bottom-3': isLast,
          'border-bottom': (!isFirst && !isLast),
          'bg-jeremy': !isFirst
        }

        return (
          <div className={cn('card-body', classes)} key={index}>
            {isFirst && <h5 className="card-title text-warning">
              {title}
            </h5>}
            <a href={item.url} className="text-decoration-none" target="_blank" rel="noreferrer">
              <p className={cn('card-text fw-500', { 'text-oz': isFirst, 'text-bran': !isFirst })}>
                {item.title}
              </p>
              <p className="card-text">
                <small className="text-grey">{moment(item.published_on * 1000).fromNow()}</small>
              </p>
            </a>
          </div>
        )
      })}
    </div>
  )
}

export default News
