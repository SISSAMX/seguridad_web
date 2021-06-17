import React, { useState } from 'react';
import {Button, Col,Row,Divider,Menu } from 'antd';
import moment from 'moment';
import styles from '@styles/Home.module.css'
import imagen from '../../../assets/fondo.png'
import {
    CommentOutlined,
    ClockCircleOutlined
  } from '@ant-design/icons';

//const css = require('../../../../styles/Home.module.css')


const Categorías =  (titulo) =>{
    //moment.locale('es');
    moment.locale('en');
    const menuItems = [
        {'id':1, 'imagen': imagen, 'titulo':"Every Product Usted to Create Awkwafina's $846 Oscars Beauty Look", 'fechaPublicacion':'2021-05-9', 'autor':'Admin'},
        {'id':2,'imagen': imagen, 'titulo':"Every Product Usted to Create Awkwafina's $846 Oscars Beauty Look", 'fechaPublicacion':'2021-05-10',  'autor':'Admin' }, 
        {'id':3, 'imagen': imagen,'titulo':"Every Product Usted to Create Awkwafina's $846 Oscars Beauty Look", 'fechaPublicacion':'2021-05-11',  'autor':'Admin'},
    ]

    return(
        <>
        <h1 className={styles.tituloCategorias}>{titulo.titulo}</h1><span className={styles.lineaAbajo}>_____</span>
        <Divider/>
            <Row>
                <Col lg={{span:12}}>
                    <img src={menuItems[0].imagen} className={styles.imagenDefault}/>
                </Col>
                <Col lg={{span:11, offset:1}}>
                    <Row>
                        <Col span={24}>
                            <p className={styles.letrasTendencia}>{menuItems[0].titulo}</p>
                        </Col>
                    </Row>
                    <div className={styles.menosEspacio}/>
                    <Row>
                        <Col span={5}>
                            <span className={styles.autorCategoria}>De <span className={styles.colorRojo}>{menuItems[0].autor}</span></span>
                        </Col>
                        <Col span={8}>
                            <ClockCircleOutlined className={styles.colorIcono} /> <span className={styles.fechaTendencia}>{moment(menuItems[0].fechaPublicacion).format('MMMM Do YYYY')}</span>
                        </Col>
                        <Col span={6} offset={3}>
                            <CommentOutlined className={styles.colorIcono} /> <span className={styles.fechaTendencia}>3</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <p className={styles.descripcion}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae cupiditate similique sit quasi esse rerum quisquam dolorem reprehenderit nostrum.</p>
                        </Col>
                        <Button type="default" className={styles.botonLeerMas}>Leer más</Button>
                    </Row>
                </Col>

            </Row>
            <div className={styles.espacioArriba}/>
            <Row>
                {menuItems.map((item)=>(
                    <Col lg={{span:8, offset:0}}>
                        <Col span={22}>
                            <img src={item.imagen} className={styles.imagenDefault}/>
                        </Col>
                        <Col span={22}>
                            <p className={styles.letrasTendencia}>{item.titulo}</p>
                        </Col>
                        <Col span={22}>
                        <ClockCircleOutlined className={styles.colorIcono}/> <span className={styles.fechaTendencia}>{moment(item.fechaPublicacion).format('MMMM Do YYYY')}</span>
                        </Col>
                    </Col>
                ))}
            </Row>
            <br/>
            <Row>
                <Col lg={{span:8}} xs={{span:7}}>
                    <Divider />
                </Col>
                <Col lg={{span:6, offset:1}} xs={{span:8, offset:1}}>
                    <Button className={styles.botonSombra}>Load More</Button>
                </Col>
                <Col lg={{span:8, offset:1}} xs={{span:7}}>
                    <Divider/>
                </Col>
            </Row>
            <br/>
            <br/>
        </>
    )
    }
export default Categorías;