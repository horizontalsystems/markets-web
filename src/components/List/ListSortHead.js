import { createElement } from 'react'
import { ReactComponent as SortUp } from '../Icon/sort-up.svg'
import { ReactComponent as SortDown } from '../Icon/sort-down.svg'

function ListSortHead({ className, field, fieldString, sort, setSort, children }) {
  const child = []
  const props = { className, role: 'button' }

  if (sort.field === field) {
    if (sort.desc) {
      child.push(<SortDown key="up" />)
    } else {
      child.push(<SortUp key="down" />)
    }
  }

  if (setSort) {
    props.onClick = () => {
      setSort({ field, desc: !sort.desc, fieldString })
    }
  }

  child.push(children)

  return createElement('td', props, child)
}

export default ListSortHead
