import React, { useEffect, useState } from "react";
import Axios from "axios";
import Items from "./Items";
import { RootObject } from "../../models/newsModel";
import { Col, Divider, Row } from "antd";
//const axios = require('axios'); // legacy way

interface Props {
  text: string;
}
const style: React.CSSProperties = {
  margin: "auto",
};

const News: React.FC<Props> = ({ text }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const res = await Axios.get("https://newsapi.org/v2/everything?q=apple&from=2023-01-26&to=2023-01-26&sortBy=popularity&apiKey=901a990155f448a8a964e7ec576d7aff");

      setArticles(res.data.articles);
      console.log(res);
    };
    getArticles();
  }, []);

  return (
    <div style={style}>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {articles.map((item: RootObject, i) => (
          <Col className="gutter-row" span={8}>
            <div>
              <Items key={i} title={item.title} author={item.author} description={item.description} url={item.url} urlToImage={item.urlToImage} publishedAt={item.publishedAt} />
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default News;
