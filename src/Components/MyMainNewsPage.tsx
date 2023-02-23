/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from "react";
import { Alert, Container, Row } from "react-bootstrap";
import { Article } from "../Types/Article";
import SingleArticle from "./SingleArticle";

const MyMainNewsPage = () => {
  const [data, setData] = useState<Article[]>([]);
  const [selectedNews, setSelectedNews] = useState(false);
  const changeSelectedNews = (selected: boolean) => {
    setSelectedNews(selected);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await fetch("https://api.spaceflightnewsapi.net/v3/articles");
        if (res.ok) {
          let data = await res.json();
          console.log(data);
          setData(data);
        } else {
          <Alert variant="danger">ERROR 404: File not Found </Alert>;
        }
      } catch (error) {
        alert(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Container className="d-flex ">
      <Row>
        {data.map((news, i) => {
          return (
            <SingleArticle
              key={i}
              articolo={news}
              index={i}
              changeSel={changeSelectedNews}
            />
          );
        })}
      </Row>
    </Container>
  );
};
export default MyMainNewsPage;
