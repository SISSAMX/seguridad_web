import React, {useContext} from 'react';
import {Row, Col, Menu} from 'antd';
import CarruselCategorias from '../common/components/Components/Dashboard/CarruselCategorias';
import Tendencias from '../common/components/Components/Dashboard/Tendencias';
import styles from '../styles/Home.module.css'
import Categorías from '../common/components/Components/Dashboard/Categoria1';
import HistoriasPopulares from '../common/components/Components/Dashboard/HistoriasPopulars';
import Categoría2 from '../pages/categoria2Container';
import Categoría3Container from './categoria3Container';
import MiniCarruselCategorias from '../common/components/Components/Dashboard/miniCarruselCategorias';

const Dashboard  = () =>(
    <>
    <div className={styles.espacioArribaDashboard}/>
        <Col lg={{span:17, offset:3}} xs={{span:22, offset:1}}>
            <Row>
                <Col lg={{span:15}}>
                    <CarruselCategorias/>
                    <Categorías/>
                    <Categoría2/>
                    <Categoría3Container/>
                </Col>
                <Col lg={{span:8, offset:1}}>
                    <Tendencias/>
                    <HistoriasPopulares/>
                    <MiniCarruselCategorias/>
                </Col>
            </Row>
        </Col>
  {/*   <div className={styles.espacioAbajoDashboard}/> */}
    </>
);

export default Dashboard;