import React from 'react';
import ReactDOM from 'react-dom/client';
import { Col, Container, Row } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import Routes from './routes/routes.tsx';
import Sidebar from './components/Sidebar.tsx';
import Searchbar from './components/Searchbar.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Container fluid >
    <Row className='flex flex-row w-screen h-screen'>
      <Col className='flex-auto basis-1/4 border-r border-slate-600 border-solid'>
        <Sidebar />
      </Col>
      <Col className='mainbar p-0 basis-2/5 z-50'>
        <React.StrictMode>
          <Routes />
        </React.StrictMode>
      </Col>
      <Col className='flex-auto basis-1/3 border-l border-slate-600 border-solid'>
        <Searchbar />
      </Col>
    </Row>
  </Container>,
)
