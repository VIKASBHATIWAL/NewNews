import React from 'react'

function NewsItem(props) {

    let { title, description, imageUrl, newsUrl, date, author, source } = props
    return (
      <div className='my-3'>
        <div className="card" >
        <div
        style={{
          display:"flex",
          position:"absolute",
           right:0
        }}
        > <span className="  badge rounded-pill bg-danger" style={{left:"90%", zIndex:"1"}}>
  {source}
  </span></div>
       
          <img src={!imageUrl ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzh6nwo8uxq8Z950-3jpSNHb5Ph0LK3IbKDA&usqp=CAU" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()} </small></p>

            <a href={newsUrl} rel="noreferrer"  target="_blank" className="btn btn-sm btn-dark">Read more</a>
          </div>
        </div>      </div>
    )
  
}

export default NewsItem
