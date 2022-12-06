import React from 'react'
const PageNation = (props) => {
  return (
    <div className="pageBtns">
                    <button className='page-btns' onClick={props.prevPage} disabled={props.currentPage === 1} >
                        Prev
                    </button>
                <p>{" "+props.currentPage+" "}of{" "+props.pageInfo.last_visible_page}</p>
                    <button className="page-btns" onClick={props.nextPage} disabled={!props.pageInfo.has_next_page}>
                            Next
                        </button>
                    <br></br>
                </div>
  )
}
export default PageNation