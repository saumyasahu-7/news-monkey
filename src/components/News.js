import React, {useEffect, useState} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from 'react-infinite-scroll-component';
import LoadingBar from "react-top-loading-bar";

const News=(props)=>{
    
  const [page, setPage] = useState(1);
  const [articles, setArticles] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  // const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const makeCapital = (String) => {
    return String.charAt(0).toUpperCase() + String.slice(1);
  };

  const updateNews=async ()=> {
    setProgress(40);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setProgress(100);
  }
  
  useEffect(() => {
    document.title = `NewsDino-${makeCapital(props.category)}`;
    updateNews();
    //eslint-disable-next-line
  }, []);

  const fetchData=async ()=>{
    setPage(page+1);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  }

    return (
      <>
        <div className="container my-3">
        <LoadingBar
        color='#f11946'
        progress={progress}
      />
          <h1 className="text-center">
            Top Headlines-{makeCapital(props.category)}
          </h1>
          {/* {loading && <Spinner/>} */}
          <InfiniteScroll
            dataLength={articles.length} //This is important field to render the next data
            next={fetchData}
            hasMore={articles.length < totalResults}
            loader={<Spinner/>}
            endMessage={
              <p style={{ textAlign: 'center' }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            <div className="container">
            <div className="row my-3">
              {articles.map((element,index) => {
                return (
                  <div className="col-md-4" key={index}>
                    <NewsItem
                      imgurl={element.urlToImage}
                      title={element.title}
                      description={element.description}
                      newsurl={element.url}
                      source={element.source.name}
                      publishedAt={element.publishedAt}
                    />
                  </div>
                );
              })}
            </div>
            </div>
          </InfiniteScroll>
        </div>
      </>
    );
  }


News.propTypes={
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number,
    apiKey: PropTypes.string
};

News.defaultProps = {
  country: "in",
  category: "general",
  pageSize: 6,
  apiKey:"e31d030f7a95463fa719d006ce31d0a0"
};
export default News;

