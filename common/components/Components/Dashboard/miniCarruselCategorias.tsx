import React from 'react';
import {Col, Card, Button, Input, Row } from 'antd';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {
    ClockCircleOutlined,
    QuestionCircleOutlined,
    QuestionOutlined
  } from '@ant-design/icons';
import moment from 'moment';
import imagen from '../../../../assets/fondo.png'

const css = require('../../../../styles/Home.module.css')
const miniCarruselCategorias =  () =>{
    moment.locale('es');
    return(
        <>
            <div>
            <Carousel
            axis='horizontal'
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            showArrows={true}
            >
            <Col span={24}>
                <Card style={{ backgroundImage: `url(${imagen})`}} className={css.containerCarrusel}>
                    <Col span={24} offset={0}>
                            <Col lg={{span:11, offset:6}}>
                                <p className={css.categoriaCarrusel}>Seguridad Pública</p>
                            </Col>
                            <h1 className={css.tituloNoticiaCarrusel}>Hombre pierde la vida tras cruzar la calle sin fijarse.</h1>
                            <span><ClockCircleOutlined /> {moment(Date.now()).format('MMMM Do YYYY')}</span>
                    </Col>
                </Card>
            </Col>
            <Col span={24}>
                <Card style={{ backgroundImage: `url(${imagen})`}} className={css.containerCarrusel}>
                    <Col span={24} offset={0}>
                            <Col lg={{span:11, offset:6}}>
                                <p className={css.categoriaCarrusel}>Seguridad Pública</p>
                            </Col>
                            <h1 className={css.tituloNoticiaCarrusel}>Hombre pierde la vida tras cruzar la calle sin fijarse.</h1>
                            <span><ClockCircleOutlined /> {moment(Date.now()).format('MMMM Do YYYY')}</span>
                    </Col>
                </Card>
            </Col>
            <Col span={24}>
                <Card style={{ backgroundImage: `url(${imagen})`}} className={css.containerCarrusel}>
                    <Col span={24} offset={0}>
                            <Col lg={{span:11, offset:6}}>
                                <p className={css.categoriaCarrusel}>Seguridad Pública</p>
                            </Col>
                            <h1 className={css.tituloNoticiaCarrusel}>Hombre pierde la vida tras cruzar la calle sin fijarse.</h1>
                            <span><ClockCircleOutlined /> {moment(Date.now()).format('MMMM Do YYYY')}</span>
                    </Col>
                </Card>
            </Col>
            </Carousel>
            <br/>
            </div>
        </>
    )
    }
export default miniCarruselCategorias;