import React, { useState } from "react";
import "./Items.css";
import { Button, Image, Typography } from "antd";
import { RootObject } from "../../models/newsModel";
import Modals from "./Modal";

interface NewsItem {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: Date;
  author: string;
}

const Items: React.FC<NewsItem> = ({ title, author, description, url, urlToImage, publishedAt }) => {
  return (
    <>
      <div className="news-item">
        <Image className="news-image" width={470} src={urlToImage} />
        <div>
          <Typography.Text>{title}</Typography.Text>
        </div>
        <Modals urlToImage={urlToImage} author={author} description={description} publishedAt={publishedAt} title={title} url={url} />
      </div>
    </>
  );
};

export default Items;
