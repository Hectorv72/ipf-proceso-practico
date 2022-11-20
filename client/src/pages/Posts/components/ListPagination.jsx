import React, { useEffect, useState } from 'react'
import { Pagination } from 'react-bootstrap'

const ListPagination = ({ page = 0, pages = 0, onClickItem, onClickNext, onClickPrev, onClickFirst, onClickLast }) => {
  const [pag, setPag] = useState([])

  const generateArray = () => {
    const lista = []
    for (let i = 1; i <= pages; i++) {
      lista.push(<Pagination.Item active={i === page} onClick={() => onClickItem(i)} key={`pagination-${i}`}>{i}</Pagination.Item>)
    }
    return lista
  }

  useEffect(() => setPag(generateArray()), [pages, page])

  return (
    <Pagination>
      {onClickFirst && <Pagination.First onClick={onClickFirst} />}
      {onClickPrev && <Pagination.Prev onClick={onClickPrev} />}
      {pag}
      {onClickNext && <Pagination.Next onClick={onClickNext} />}
      {onClickLast && <Pagination.Last onClick={onClickLast} />}
    </Pagination>
  )
}

export default ListPagination