import React, {useContext} from 'react';
import {Row, Col} from 'antd';
import CarruselCategorias from '../common/components/Components/Dashboard/CarruselCategorias';
import styles from '../styles/Home.module.css'

const Dashboard  = () =>(
    <>
    <div className={styles.espacioArribaDashboard}/>
    <Col  span={16} offset={4}>
        <Row>
            <Col span={18}>
                <CarruselCategorias/>
            </Col>
        </Row>
    </Col>
    <div className={styles.espacioAbajoDashboard}/>
    </>
);

export default Dashboard;