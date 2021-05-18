import React, {useContext} from 'react';
import {Row, Col} from 'antd';
import CarruselCategorias from '../common/components/Components/Dashboard/CarruselCategorias';
import Tendencias from '../common/components/Components/Dashboard/Tendencias';
import styles from '../styles/Home.module.css'

const Dashboard  = () =>(
    <>
    <div className={styles.espacioArribaDashboard}/>
    <Col  span={17} offset={3}>
        <Row>
            <Col span={15}>
                <CarruselCategorias/>
            </Col>
            <Col span={8} offset={1}>
            <Tendencias/>
            </Col>
        </Row>
    </Col>
    <div className={styles.espacioAbajoDashboard}/>
    </>
);

export default Dashboard;