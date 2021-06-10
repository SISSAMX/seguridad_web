import React, { useState } from 'react';
import {Col,Row} from 'antd';
import moment from 'moment';
import imagen from '../../../../assets/fondo.png'
import {
    ClockCircleOutlined
  } from '@ant-design/icons';

const css = require('../../../../styles/Home.module.css')

const Categoría2 =  () =>{
    moment.locale('es');
    //moment.locale('en');
    const menuItems = [
        {'id':1, 'imagen': imagen, 'titulo':"Every Product Usted to Create Awkwafina's $846 Oscars Beauty Look", 'fechaPublicacion':'2021-05-09', 'autor':'Admin'},
        {'id':2,'imagen': imagen, 'titulo':"Every Product Usted to Create Awkwafina's $846 Oscars Beauty Look", 'fechaPublicacion':'2021-05-10',  'autor':'Admin' }, 
        {'id':3, 'imagen': imagen,'titulo':"Every Product Usted to Create Awkwafina's $846 Oscars Beauty Look", 'fechaPublicacion':'2021-05-11',  'autor':'Admin'},
        {'id':4, 'imagen': imagen, 'titulo':"Every Product Usted to Create Awkwafina's $846 Oscars Beauty Look", 'fechaPublicacion':'2021-05-12', 'autor':'Admin'},
        {'id':5,'imagen': imagen, 'titulo':"Every Product Usted to Create Awkwafina's $846 Oscars Beauty Look", 'fechaPublicacion':'2021-05-13',  'autor':'Admin' }, 
        {'id':6, 'imagen': imagen,'titulo':"Every Product Usted to Create Awkwafina's $846 Oscars Beauty Look", 'fechaPublicacion':'2021-05-14',  'autor':'Admin'},
    ]
      return (
        <>
         <Row>
            <Col lg={{span:11}}>
                <div className={css.containerImage}>
                    <img className={css.imagen100} src={menuItems[0].imagen}/>
                    <p className={css.textCenteredImage}>{menuItems[0].titulo}</p>
                    <p className={css.textCenteredImage2}><ClockCircleOutlined/> {moment(menuItems[0].fechaPublicacion).format('MMMM Do YYYY')}</p>
                </div>
                <br/>
                <Row>
                    <Col span={10}> 
                        <img className={css.imagen100} src={menuItems[1].imagen}/>
                    </Col>
                    <Col span={13} offset={1}>
                        <p className={css.letrasTendencia}>{menuItems[1].titulo}</p>
                        <p className={css.fechaCategorias}><ClockCircleOutlined className={css.colorIcono} /> {moment(menuItems[1].fechaPublicacion).format('MMMM Do YYYY')}</p>
                    </Col>
                </Row>
                <Row>
                    <Col span={10}> 
                        <img className={css.imagen100} src={menuItems[2].imagen}/>
                    </Col>
                    <Col span={13} offset={1}>
                        <p className={css.letrasTendencia}>{menuItems[2].titulo}</p>
                        <p className={css.fechaCategorias}><ClockCircleOutlined className={css.colorIcono} /> {moment(menuItems[2].fechaPublicacion).format('MMMM Do YYYY')}</p>
                    </Col>
                </Row>
            </Col>
            
            <Col lg={{span:11, offset:1}}>
                <div className={css.containerImage}>
                    <img className={css.imagen100} src={menuItems[3].imagen}/>
                    <p className={css.textCenteredImage}>{menuItems[3].titulo}</p>
                    <p className={css.textCenteredImage2}><ClockCircleOutlined/> {moment(menuItems[3].fechaPublicacion).format('MMMM Do YYYY')}</p>
                </div>
                <br/>
                <Row>
                    <Col span={10}> 
                        <img className={css.imagen100} src={menuItems[4].imagen}/>
                    </Col>
                    <Col span={13} offset={1}>
                        <p className={css.letrasTendencia}>{menuItems[4].titulo}</p>
                        <p className={css.fechaCategorias}><ClockCircleOutlined className={css.colorIcono} /> {moment(menuItems[4].fechaPublicacion).format('MMMM Do YYYY')}</p>
                    </Col>
                </Row>
                <Row>
                    <Col span={10}> 
                        <img className={css.imagen100} src={menuItems[5].imagen}/>
                    </Col>
                    <Col span={13} offset={1}>
                        <p className={css.letrasTendencia}>{menuItems[5].titulo}</p>
                        <p className={css.fechaCategorias}><ClockCircleOutlined className={css.colorIcono} /> {moment(menuItems[5].fechaPublicacion).format('MMMM Do YYYY')}</p>
                    </Col>
                </Row>
            </Col>
         </Row>
         <br/>
         <br/>
        </>
    );
  };
export default Categoría2;