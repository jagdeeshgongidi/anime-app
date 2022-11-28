import React from 'react'
const PageNation = (props) => {
  return (
    <div className="pageBtns">
                    <button onClick={props.prevPage} disabled={props.currentPage === 1} >
                        Prev
                    </button>
                <p>{" "+props.currentPage+" "}of{" "+props.pageInfo.last_visible_page}</p>
                    <button onClick={props.nextPage} disabled={!props.pageInfo.has_next_page}>
                            next
                        </button>
                    <br></br>
                </div>
  )
}
export default PageNation