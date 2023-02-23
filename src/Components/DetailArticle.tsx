import { Container, Row, Col, Alert, Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Article } from "../Types/Article";
import { useParams } from "react-router-dom";
const DetailArticle = () => {
  const [specificData, setSpecificData] = useState<Article>({} as Article);
  let params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await fetch(
          `https://api.spaceflightnewsapi.net/v3/articles/${params.id}`
        );
        if (res.ok) {
          let data = await res.json();
          console.log(data);
          setSpecificData(data);
        } else {
          <Alert variant="danger">ERROR 404: not Found </Alert>;
        }
      } catch (error) {
        alert(error);
      }
    };
    fetchData();
  }, [params.id]);
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Card className="border-primary h-100">
              <Card.Img
                variant="top"
                src={specificData.imageUrl}
                style={{ height: "250px" }}
              />
              <Card.Body className=" d-flex flex-column justify-content-between">
                <Card.Title>{specificData.title}</Card.Title>
                <Card.Text>{specificData.summary}</Card.Text>
                <Card.Text>{specificData.publishedAt}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default DetailArticle;
