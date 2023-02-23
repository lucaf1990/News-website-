import { Card, Col } from "react-bootstrap";
import { Article } from "../Types/Article";
import { Link } from "react-router-dom";

interface SaP {
  articolo: Article;
  changeSel: (selected: boolean) => void;
  index: number;
}

const SingleArticle = ({ articolo, index }: SaP) => {
  return (
    <Col xs={6} className="mt-5 ">
      <Link to={`/Detail/${articolo.id}`}>
        <Card id="card" className="border-primary h-100">
          <Card.Img
            variant="top"
            src={articolo.imageUrl}
            style={{ height: "250px" }}
          />
          <Card.Body className=" d-flex flex-column justify-content-between">
            <Card.Title>{articolo.title}</Card.Title>
            <Card.Text>{articolo.summary}</Card.Text>
            <Card.Text>{articolo.newsSite}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default SingleArticle;
