import React, { useState } from 'react';
import {Col,Row, Button} from 'antd';
import moment from 'moment';
import imagen from '../../../../assets/fondo.png'
import {
    ClockCircleOutlined,
    CommentOutlined
  } from '@ant-design/icons';

const css = require('../../../../styles/Home.module.css')

const Categoría3 =  () =>{
    moment.locale('es');
    //moment.locale('en');
    const menuItems = [
        {'id':1, 'imagen': imagen, 'titulo':"Every Product Usted to Create Awkwafina's $846 Oscars Beauty Look", 'fechaPublicacion':'2021-05-09', 'autor':'Admin'},
        {'id':2,'imagen': imagen, 'titulo':"Every Product Usted to Create Awkwafina's $846 Oscars Beauty Look", 'fechaPublicacion':'2021-05-10',  'autor':'Admin' }, 
        {'id':3, 'imagen': imagen,'titulo':"Every Product Usted to Create Awkwafina's $846 Oscars Beauty Look", 'fechaPublicacion':'2021-05-11',  'autor':'Admin'},
        {'id':4, 'imagen': imagen, 'titulo':"Every Product Usted to Create Awkwafina's $846 Oscars Beauty Look", 'fechaPublicacion':'2021-05-12', 'autor':'Admin'},
    ]
      return (
        <>
         <Row>
            <Col lg={{span:11}}>
                <Row>
                    <img className={css.imagen100} src={menuItems[1].imagen}/>
                </Row>
                <Row>
                <p className={css.letrasGrandes}>{menuItems[1].titulo}</p>
                </Row>
                <div className={css.menosEspacio}/>
                <Row>
                    <Col span={5}>
                        <span className={css.autorCategoria}>De <span className={css.colorRojo}>{menuItems[0].autor}</span></span>
                    </Col>
                    <Col span={8}>
                        <ClockCircleOutlined className={css.colorIcono} /> <span className={css.fechaTendencia}>{moment(menuItems[0].fechaPublicacion).format('MMMM Do YYYY')}</span>
                    </Col>
                    <Col span={6} offset={3}>
                        <CommentOutlined className={css.colorIcono} /> <span className={css.fechaTendencia}>3</span>
                    </Col>
                </Row>
                <Row>
                        <Col span={24}>
                            <p className={css.descripcionGrande}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae cupiditate similique sit quasi esse rerum quisquam dolorem reprehenderit nostrum.</p>
                        </Col>
                        <Button type="default" className={css.botonLeerMas}>Leer más</Button>
                    </Row>
            </Col>
            <Col lg={{span:11, offset:1}}>
                <Row>
                {menuItems.map((item)=>(
                    <Row>
                        <Col span={10}> 
                            <img className={css.imagen100} src={item.imagen}/>
                        </Col>
                        <Col span={13} offset={1}>
                            <p className={css.letrasTendencia}>{item.titulo}</p>
                            <p className={css.fechaCategorias}><ClockCircleOutlined className={css.colorIcono} /> {moment(item.fechaPublicacion).format('MMMM Do YYYY')}</p>
                        </Col>
                    </Row>
                ))}
                </Row>
        </Col>
         </Row>

        </>
    );
  };
export default Categoría3;