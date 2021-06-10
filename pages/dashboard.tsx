import React, {useContext} from 'react';
import {Row, Col, Card} from 'antd';
import CarruselCategorias from '../common/components/Components/Dashboard/CarruselCategorias';
import Tendencias from '../common/components/Components/Dashboard/Tendencias';
import styles from '../styles/Home.module.css'
import Categorías from '../common/components/Components/Dashboard/Categoria1';
import HistoriasPopulares from '../common/components/Components/Dashboard/HistoriasPopulars';
import Categoría2 from '../pages/categoria2Container';
import Categoría3Container from './categoria3Container';
import MiniCarruselCategorias from '../common/components/Components/Dashboard/miniCarruselCategorias';
import FormEmail from '../common/components/Components/Dashboard/FormEmail';
import Categoria4 from '../common/components/Components/Dashboard/Categoria4';
import SecciónNegra from '../common/components/Components/Dashboard/seccionNegra';
import anuncio1 from '../assets/anuncio1.png';
import anuncio2 from '../assets/anuncio2.png';
import NoTeLoPierdas from '../common/components/Components/Dashboard/NoTeLoPierdas';
import Categoría5 from '../common/components/Components/Dashboard/Categoria5';
import SocialNetworks from '../common/components/Components/Dashboard/SocialNetworks';
import { useMediaQuery } from 'react-responsive'

const css = require('../styles/Home.module.css')

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
            <Card className={css.containerCardNegra}>
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
            <Card className={css.containerGris}>
                <Col lg={{span:16, offset:3}}>
                <img src={anuncio1} className={css.imagen100}/>
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
                    <img src={anuncio2} className={css.imagen100}/>
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
            <Card className={css.containerCardNegra}>
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
                <Card className={css.containerGris}>
                    <img src={anuncio1} className={css.imagen100}/>
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
                    <img src={anuncio2} className={css.imagen100}/>
                    <Categoria4 titulo={'Teach News'}/>
            </Row>
        </Col>
        </Mobile>
    </>
);

export default Dashboard;