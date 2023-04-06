import React, {useState, useEffect} from 'react'
import NewsItem from './NewsItem'
import Snipper from "./Spinner"
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";



function News (props) {

const [articles, setArticle] = useState([]);
const [loading, setLoading] = useState(false);
const [page, setPage] = useState(1)
const [totalResults, setTotalResults]  = useState(0)

    function capitalizeFirstLetter  (string) {
        return string && string.charAt(0).toUpperCase() + string.substring(1);
    };
    


    const updateNews = async ()=> {
props.setProgress(0)
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}&category=${props.category}` 
        setLoading(true)
        let data = await fetch(url)
        props.setProgress(30)

        let parsedData = await data.json()
        props.setProgress(70)


        setArticle(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false)

     
        props.setProgress(100)



        
    }
useEffect(()=>{
    document.title = `${capitalizeFirstLetter(props.category)} - NewNews`

    updateNews();
// eslint-disable-next-line
},[])

   


    // handlePrevClick = async () => {
    //     // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.apiKey}&page=${this.state.page - 1}&pageSize=${props.pageSize}&category=${props.category}
    //     // `;

    //     // this.setState({ loading: true })
    //     // let data = await fetch(url)
    //     // let parsedData = await data.json()


    //     // this.setState({
    //     //     page: this.state.page - 1,
    //     //     articles: parsedData.articles,
    //     //     loading: false
    //     // })
    //     this.setState({
    //         page: this.state.page - 1
    //     })
    //     this.updateNews();
    // }

    // handleNextClick = async () => {

    //     // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize))) {
    //     //     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=98cb04567b974be39598b2c4abb97f2b&page=${this.state.page + 1}&pageSize=${props.pageSize}&category=${props.category}
    //     //     `;
    //     //     this.setState({ loading: true })
    //     //     let data = await fetch(url)
    //     //     let parsedData = await data.json()


    //     //     this.setState({
    //     //         page: this.state.page + 1,
    //     //         articles: parsedData.articles,
    //     //         loading: false
    //     //     })
    //     // }

        

    //     this.setState({
    //         page: this.state.page + 1
    //     })
    //     this.updateNews();

    // }

    const fetchMoreData = async () => {
         

        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}&category=${props.category}` 

        setLoading(true)
        const data = await fetch(url)
        const parsedData = await data.json()

        setArticle(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        setPage(page+1)


      }; 


        return (
<>
<h2 className='text-center' style={{margin:"35px 0px", marginTop:"90px"}}>NewNews -{capitalizeFirstLetter(props.category)}  Top Headlines</h2>
               
                <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          inverse={false} 

          hasMore={articles.length !== totalResults}
          loader={<Snipper />}

        ><div className="container">
                <div className='row'>
                    {loading && <Snipper />}
           
                    
                    {articles.map((element) => {
                        return <div className="col-md-4" key={element.urlz}>
                            <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                        </div>
                    })}

                </div>
                </div>
                </InfiniteScroll>
                </>

        )
    
}

News.propTypes = {
    country: PropTypes.string.isRequired,
    pageSize: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired
};



export default News
