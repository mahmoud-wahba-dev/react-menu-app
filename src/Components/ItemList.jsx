import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Bounce, Fade, Flip, Rotate } from "react-reveal";
import Zoom from "react-reveal/Zoom";

const ItemList = ({ itemData }) => {
  return (
    <>
      <Row>
        {itemData.length >= 0 ? (
          itemData.map((item) => (
            <Zoom>
              <Col key={item.id} sm="12" className="my-4">
                <Card className="d-flex flex-row">
                  <Card.Img
                    className="img_class"
                    variant="top"
                    src={item.imgUrl}
                  />
                  <Card.Body>
                    <div className="d-flex justify-content-between ">
                      <Card.Title className="mb-2"> {item.title} </Card.Title>
                      <div> {item.price} </div>
                    </div>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Zoom>
          ))
        ) : (
          <h2> no data found </h2>
        )}
      </Row>
    </>
  );
};

export default ItemList;
