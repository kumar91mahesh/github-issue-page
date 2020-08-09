import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Item from './Item';
const ItemList = ({ itemList }) => (
  <Jumbotron>
    <ListGroup>
      {itemList.map((toDo, index) => (
        <Item key={index} {...toDo} />
      ))}
    </ListGroup>
  </Jumbotron>
);

ItemList.propTypes = {
  itemList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default ItemList;