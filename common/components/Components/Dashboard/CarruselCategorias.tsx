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
const CarruselCategorias =  () =>{
    moment.locale('es');
    return(
        <>
            <div>
            <Row>
                <Col lg={{span:5}} xs={{span:11}}>
                    <Button className={css.botonAzul}><QuestionCircleOutlined className={css.iconoPregunta} /> Seguridad Info</Button>
                </Col>
                <Col lg={{span:19}} xs={{span:13}}>
                    <Input placeholder="Lorem ipstum" suffix={<QuestionOutlined style={{ color: 'rgba(0,0,0,.45)' }} />} />
                </Col>
            </Row>
            <br/>
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
                    <Col span={18} offset={2}>
                        <div className={css.abajo}>
                            <div className={css.espacioAbajoCarrusel}/>
                            <Col lg={{span:6}}>
                            <p className={css.categoriaCarrusel}>Seguridad Pública</p>
                            </Col>
                            <h1 className={css.tituloNoticiaCarrusel}>Hombre pierde la vida tras cruzar la calle sin fijarse.</h1>
                            <span className={css.autor}>De Admin</span>
                            <span className={css.espacioIzquierda}><ClockCircleOutlined /> {moment(Date.now()).format('MMMM Do YYYY')}</span>
                        </div>
                    </Col>
                </Card>
            </Col>
            <Col span={24}>
                <Card style={{ backgroundImage: `url(${imagen})`}} className={css.containerCarrusel}>
                    <Col span={18} offset={2}>
                        <div className={css.abajo}>
                            <div className={css.espacioAbajoCarrusel}/>
                            <Col lg={{span:6}}>
                            <p className={css.categoriaCarrusel}>Seguridad Pública</p>
                            </Col>
                            <h1 className={css.tituloNoticiaCarrusel}>Hombre pierde la vida tras cruzar la calle sin fijarse.</h1>
                            <span className={css.autor}>De Admin</span>
                            <span className={css.espacioIzquierda}><ClockCircleOutlined /> {moment(Date.now()).format('MMMM Do YYYY')}</span>
                        </div>
                    </Col>
                </Card>
            </Col>
            <Col span={24}>
                <Card style={{ backgroundImage: `url(${imagen})`}} className={css.containerCarrusel}>
                    <Col span={18} offset={2}>
                        <div className={css.abajo}>
                            <Col lg={{span:6}}>
                            <div className={css.espacioAbajoCarrusel}/>
                            <p className={css.categoriaCarrusel}>Seguridad Pública</p>
                            </Col>
                            <h1 className={css.tituloNoticiaCarrusel}>Hombre pierde la vida tras cruzar la calle sin fijarse.</h1>
                            <span className={css.autor}>De Admin</span>
                            <span className={css.espacioIzquierda}><ClockCircleOutlined /> {moment(Date.now()).format('MMMM Do YYYY')}</span>
                        </div>
                    </Col>
                </Card>
            </Col>
            </Carousel>
            <br/>
            <br/>
            </div>
        </>
    )
    }
export default CarruselCategorias;