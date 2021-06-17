import React, {useContext} from 'react';
import {Row, Col, Card} from 'antd';
import CarruselCategorias from '@components/Components/Dashboard/CarruselCategorias';
import styles from '@styles/Home.module.css'
import Tendencias from '@components/Components/Dashboard/Tendencias';
import Categorías from '@components/Components/Dashboard/Categoria1';
import HistoriasPopulares from '@components/Components/Dashboard/HistoriasPopulars';
import Categoría2 from './categoria2Container';
import Categoría3Container from './categoria3Container';
import MiniCarruselCategorias from '@components/Components/Dashboard/miniCarruselCategorias';
import FormEmail from '@components/Components/Dashboard/FormEmail';
import Categoria4 from '@components/Components/Dashboard/Categoria4';
import SecciónNegra from '@components/Components/Dashboard/seccionNegra';
import anuncio1 from '../../assets/anuncio1.png';
import anuncio2 from '../../assets/anuncio2.png';
import NoTeLoPierdas from '@components/Components/Dashboard/NoTeLoPierdas';
import Categoría5 from '@components/Components/Dashboard/Categoria5';
import SocialNetworks from '@components/Components/Dashboard/SocialNetworks';
import { useMediaQuery } from 'react-responsive'

const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
}
const Default = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 768 })
    return isNotMobile ? children : null
}

const Dashboard  = () =>(
    <>
     <Default>
        <div className={styles.espacioArribaDashboard}/>
        <Col lg={{span:17, offset:3}} xs={{span:22, offset:1}}>
            <Row>
                <Col lg={{span:16}}>
                    <CarruselCategorias/>
                    <Categorías titulo={'Featured Stories'}/>
                    <Categoría2/>
                    <Categoría3Container/>
                </Col>
                <Col lg={{span:7, offset:1}}>
                    <Tendencias/>
                    <HistoriasPopulares/>
                    <MiniCarruselCategorias/>
                    <FormEmail/>
                    <Categoria4 titulo={'Science'}/>
                </Col>
            </Row>
        </Col>
        <Row>
            <Card className={styles.containerCardNegra}>
            <Col lg={{span:17, offset:3}} xs={{span:22, offset:1}}>
                <SecciónNegra/>
            </Col>
            </Card>
        </Row>
        <Col lg={{span:17, offset:3}} xs={{span:22, offset:1}}>
            <Row>
                <Col lg={{span:16}}>
                    <br/>
                    <Categorías titulo={'Lifestyle'}/>
                </Col>
                <Col lg={{span:7, offset:1}}>
                    <Categoria4 titulo={'Travel'}/>
                </Col>
            </Row>
        </Col>
        <Row>
            <Col span={24}>
            <Card className={styles.containerGris}>
                <Col lg={{span:16, offset:3}}>
                <img src={anuncio1} className={styles.imagen100}/>
                </Col>
            </Card>
            </Col>
        </Row>
        <Col lg={{span:17, offset:3}} xs={{span:22, offset:1}}>
            <Row>
                <Col lg={{span:16}}>
                    <br/>
                    <Categoría5/>
                    <br/>
                </Col>
                <Col lg={{span:7, offset:1}}>
                    <SocialNetworks/>
                    <NoTeLoPierdas/>
                    <img src={anuncio2} className={styles.imagen100}/>
                    <Categoria4 titulo={'Teach News'}/>
                </Col>
            </Row>
        </Col>
        </Default>
        <Mobile>
        <div className={styles.espacioArribaDashboard}/>
        <Col xs={{span:22, offset:1}}>
                    <CarruselCategorias/>
                    <Tendencias/>
                    <Categorías titulo={'Featured Stories'}/>
                    <HistoriasPopulares/>
                    <Categoría2/>
                    <MiniCarruselCategorias/>
                    <FormEmail/>
                    <Categoría3Container/>
                    <Categoria4 titulo={'Science'}/>
        </Col>
        <Row>
            <Card className={styles.containerCardNegra}>
                <SecciónNegra/>
            </Card>
        </Row>
        <br/>
        <Col xs={{span:22, offset:1}}>
               <Categorías titulo={'Lifestyle'}/>
               <Categoria4 titulo={'Travel'}/>
        </Col>
        <Row>
            <Col span={24}>
                <Card className={styles.containerGris}>
                    <img src={anuncio1} className={styles.imagen100}/>
                </Card>
            </Col>
        </Row>
        <Col xs={{span:22, offset:1}}>
            <Row>
                    <br/>
                    <Categoría5/>
                    <br/>
                    <SocialNetworks/>
                    <NoTeLoPierdas/>
                    <img src={anuncio2} className={styles.imagen100}/>
                    <Categoria4 titulo={'Teach News'}/>
            </Row>
        </Col>
        </Mobile>
    </>
);

export default Dashboard;
