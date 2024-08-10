import React from "react";
const NewsItem=(props)=>{
    let {imgurl, title, description, newsurl, source, publishedAt}=props;

    return (
      <div >
        <div className="card my-3 " style={{ width: "18rem"}}>
          <div className="d-flex" style={{justifyContent:'flex-end', position:'absolute' , right:'0'}}>

        <span className="badge rounded-pill bg-danger" style={{ width: "7rem"}}>
    {!source?"Anonymous":source}
  </span>
          </div>
          <img src={!imgurl?"https://www.quantumbalancing.com/images/News2.gif":imgurl} className="card-img-top" alt="..." />
          <div className="card-body">
          
            <h5 className="card-title">{title}</h5>
            <p className="text-danger">Published on {new Date(publishedAt).toGMTString()}</p>
            <p className="card-text">
              {description}
            </p>
            <a href={newsurl} target="_blank"  rel="noreferrer" className="btn btn-dark btn-sm">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }


export default NewsItem;
