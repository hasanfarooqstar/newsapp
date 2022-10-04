import React, { Component } from "react";
import NewsItem from "./NewsItem";
import React from 'react'

export default function News() {
  return (
    <div>News</div>
  )
}



export class News extends Component {
  render() {
    return (
      <div className="container my-3">
        This is a news component
        <div className="row">
          <div className="col-md-4">
            <NewsItem
              title="myTitle"
              description="mydesc"
              imageurl="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg"
              newsUrl="todo"
            />
          </div>
          <div className="col-md-4">
            <NewsItem title="myTitle" description="mydesc" />
          </div>
          <div className="col-md-4">
            <NewsItem title="myTitle" description="mydesc" />
          </div>
        </div>
      </div>
    );
  }
}

export default News;
