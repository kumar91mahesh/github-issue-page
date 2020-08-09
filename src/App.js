import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import ItemListContainer from './containers/ItemListContainer';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <Container>
        <Row className="row">
          <Col xs={12}>
            <Header />
            <ItemListContainer />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
