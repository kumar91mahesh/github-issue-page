import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Item = ({ title, comments }) => (<ListGroup.Item>
<Row>
    <Col>{title} </Col>
    {/* <Col></Col> */}
    {/* <Col></Col> */}
    <Col>
        <Row> 
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col>&#128172; {comments} </Col>
        </Row>
    </Col>
  </Row>
    {/* {title} &#128172; {comments}  */}
    </ListGroup.Item>);

  Item.propTypes = {
  title: PropTypes.string.isRequired
};

export default Item;
