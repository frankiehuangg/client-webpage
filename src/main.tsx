import React from 'react';
import ReactDOM from 'react-dom/client';
import { Col, Container, Row } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import Routes from './routes/routes.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Container fluid >
    <Row>
      <Col xs={12} md={3} className='sidebar'>
      </Col>
      <Col xs={12} md={9} className='mainbar'>
        <React.StrictMode>
          <Routes />
        </React.StrictMode>
      </Col>
    </Row>
  </Container>,
)
