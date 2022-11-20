import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import ListPagination from './ListPagination'

const DataList = ({ items = [], renderItem = () => null }) => {
  const [pages, setPages] = useState(0)
  const [page, setPage] = useState(1)
  const itemsPerPage = 4

  useEffect(() => {
    setPages(items.length > 0 ? Math.ceil(items.length / itemsPerPage) : 0)
  }, [items])

  const handleChangePage = (page) => setPage(page)

  const handleNextPage = () => setPage(prev => prev + 1 < pages ? prev + 1 : pages)
  const handlePrevPage = () => setPage(prev => prev - 1 > 0 ? prev - 1 : 1)

  return (
    <div>
      <div>
        {items.slice((page - 1) * itemsPerPage, page * itemsPerPage).map(renderItem)}
      </div>
      <div className='d-flex justify-content-center'>
        <ListPagination page={page} pages={pages} onClickPrev={handlePrevPage} onClickNext={handleNextPage} onClickItem={handleChangePage} />
      </div>
    </div>
  )
}

export default DataList