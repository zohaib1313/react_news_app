import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

class News extends Component {
  articles = [];

  constructor(props) {
    super(props);
    this.state = {
      articles: this.articles,
      loading: false,
      pageNo: 1,
      category: this.props.category,
      totalResult: 0,
      setProgress: this.props.setProgress,
    };
  }

  async componentDidMount() {
    this.getData();
  }

  getData = async () => {
    this.state.setProgress(10);
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.state.category}&apiKey=36888a0f37ec4221990136cdf507785d&page=${this.state.pageNo}`;
    this.state.setProgress(20);
    let data = await fetch(url, { cache: "no-store" });
    let parsedData = await data.json();
    this.state.setProgress(80);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      loading: false,
      totalResult: parsedData.totalResults,
    });
    this.state.setProgress(100);
  };

  gotoPreviousPage = async () => {
    this.setState({ pageNo: this.state.pageNo - 1 });
    this.getData();
  };

  gotoNextPage = async () => {
    this.setState({ pageNo: this.state.pageNo + 1 });
    this.getData();
  };

  fetchMoreData = () => {
    this.setState({ pageNo: this.state.pageNo + 1 });
    this.getData();
  };

  render() {
    return (
      <div className="my-5 text-center">
        <h2>News Monkey - {this.state.category} Headline</h2>

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length <= this.state.totalResult}
          loader={<Spinner />}
        >
          <div className="container overflow-hidden">
            <div className="row">
              {this.state.articles.map((element, index) => {
                return (
                  <div key={index} className="col-md-4">
                    <NewsItem
                      key={index + 1}
                      source={element.source.name ?? "Unknown"}
                      title={element.title}
                      description={element.description}
                      newsUrl={element.url}
                      imageUrl={element.urlToImage}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>

        {/* <div className="row my-3 mx-3">
          <div className="d-flex justify-content-evenly">
            <button
              type="button"
              disabled={this.state.pageNo <= 1}
              className="btn btn-dark"
              value="submit"
              onClick={this.gotoPreviousPage}
            >
              &laquo; Previous
            </button>

            <button
              type="button"
              className="btn btn-dark"
              onClick={this.gotoNextPage}
            >
              Next &raquo;
            </button>
          </div>
        </div> */}
      </div>
    );
  }
}

export default News;
