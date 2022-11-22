import React, { Component } from "react";

class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl,source } = this.props;
    return (
      <div>
        <div className="d-flex card mx-2 my-3 text-center">
          <div
            className="btn btn-sm btn-danger"
            style={{ position: "absolute", zIndex: 10, right: 3, top: 3 }}
          >
           {source ?? "Unknown"}
          </div>

          <img
            src={imageUrl}
            className="card-img-top"
            height={160}
            target="_blank"
            alt=""
          />
          <div className="card-body text-start">
            <h5 className="card-title">{title.slice(0, 40)}...</h5>
            <p className="card-text">{description?.slice(0, 80)}...</p>
            <a
              href={newsUrl}
              className="btn btn-sm btn-dark"
              target="_blank"
              rel="noreferrer"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
