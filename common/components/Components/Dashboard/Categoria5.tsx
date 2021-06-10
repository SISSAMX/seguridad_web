import React, { useState } from 'react';
import {Button, Col,Row,Divider,Pagination } from 'antd';
import moment from 'moment';
import {FormattedMessage} from 'react-intl';
import imagen from '../../../../assets/fondo.png'
import {
    CommentOutlined,
    ClockCircleOutlined
  } from '@ant-design/icons';

const css = require('../../../../styles/Home.module.css')




const Categoría5 =  () =>{
    //moment.locale('es');
    moment.locale('en');
    const menuItems = [
        {'id':1, 'imagen': imagen, 'titulo':"Every Product Usted to Create Awkwafina's $846 Oscars Beauty Look", 'fechaPublicacion':'2021-05-9', 'autor':'Admin'},
        {'id':2,'imagen': imagen, 'titulo':"Every Product Usted to Create Awkwafina's $846 Oscars Beauty Look", 'fechaPublicacion':'2021-05-10',  'autor':'Admin' }, 
        {'id':3, 'imagen': imagen,'titulo':"Every Product Usted to Create Awkwafina's $846 Oscars Beauty Look", 'fechaPublicacion':'2021-05-11',  'autor':'Admin'},
        {'id':4, 'imagen': imagen, 'titulo':"Every Product Usted to Create Awkwafina's $846 Oscars Beauty Look", 'fechaPublicacion':'2021-05-9', 'autor':'Admin'},
        {'id':5,'imagen': imagen, 'titulo':"Every Product Usted to Create Awkwafina's $846 Oscars Beauty Look", 'fechaPublicacion':'2021-05-10',  'autor':'Admin' }, 
        {'id':6, 'imagen': imagen,'titulo':"Every Product Usted to Create Awkwafina's $846 Oscars Beauty Look", 'fechaPublicacion':'2021-05-11',  'autor':'Admin'},
    ]

    return(
        <>
        <h1 className={css.tituloCategorias}>Latest News</h1><span className={css.lineaAbajoRoja}>_____</span>
        <Divider/>
            <Row>
                {menuItems.map((item)=>(
                    <>
                        <Col lg={{span:12}}>
                            <img src={menuItems[0].imagen} className={css.imagenDefault}/>
                            <div style={{marginBottom:'2em'}}/>
                        </Col>
                        <Col lg={{span:11, offset:1}}>
                            <Row>
                                <Col span={24}>
                                    <p className={css.letrasTendencia}>{menuItems[0].titulo}</p>
                                </Col>
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
                                    <p className={css.descripcion}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae cupiditate similique sit quasi esse rerum quisquam dolorem reprehenderit nostrum.</p>
                                </Col>
                                <Button type="default" className={css.botonLeerMas}><FormattedMessage id="Leer más" defaultMessage="Leer más"/></Button>
                            </Row>
                        </Col>
                    </>
                 ))}
            </Row> 
            <br/>
                <Pagination  size="small" /*onChange={onChange}*/ total={50} style={{textAlign:"center"}} pageSize={6}/>
        </>
    )
    }
export default Categoría5;