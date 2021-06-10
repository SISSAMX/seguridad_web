import React from 'react';
import {Col,Row, Form, Button, Input, Card } from 'antd';
import moment from 'moment';
import imagen from '../../../../assets/fondo.png'
import {
    ClockCircleOutlined
  } from '@ant-design/icons';

const css = require('../../../../styles/Home.module.css')

const SecciónNegra =  () =>{    
    moment.locale('es');
    //moment.locale('en');

    const menuItems = [
        {'id':1, 'imagen': imagen, 'titulo':"Every Product Usted to Create Awkwafina's $846 Oscars Beauty Look", 'fechaPublicacion':'2021-05-09', 'categoria':'Internet'},
        {'id':2,'imagen': imagen, 'titulo':"Every Product Usted to Create Awkwafina's $846 Oscars Beauty Look", 'fechaPublicacion':'2021-05-10',  'categoria':'Internet' },
        {'id':3, 'imagen': imagen, 'titulo':"Every Product Usted to Create Awkwafina's $846 Oscars Beauty Look", 'fechaPublicacion':'2021-05-09', 'categoria':'Internet'},
        {'id':4,'imagen': imagen, 'titulo':"Every Product Usted to Create Awkwafina's $846 Oscars Beauty Look", 'fechaPublicacion':'2021-05-10',  'categoria':'Internet' },  
    ]

    return(
        <>
        <br/>
        <Row>
            
            <Col lg={{span:12}} xs={{span:24}}>
                    <Col span={24}>
                        <div className={css.containerImage}>
                            <img className={css.imagen100} src={menuItems[0].imagen}/>
                            <p className={css.categoriaImage}>{menuItems[0].categoria}</p>
                            <p className={css.titleImage}>{menuItems[0].titulo}</p>
                            <p className={css.textCenteredImage2}><ClockCircleOutlined/> {moment(menuItems[0].fechaPublicacion).format('MMMM Do YYYY')}</p>
                        </div>
                    </Col>
            </Col>
            <Col lg={{span:12}} xs={{span:24}}>
            <Row>
            {menuItems.map((item)=>(
                    <Col lg={{span:12}} xs={{span:24}}>
                        <div className={css.containerImage}>
                            <img className={css.imagen100} src={menuItems[0].imagen}/>
                            <span className={css.categoriaImageMin}>{menuItems[0].categoria}</span>
                            <span className={css.titleImageMin}>{menuItems[0].titulo}</span>
                            <span className={css.textImageMin}><ClockCircleOutlined/> {moment(menuItems[0].fechaPublicacion).format('MMMM Do YYYY')}</span>
                        </div>
                    </Col>
            ))}
            </Row>
            </Col>
            </Row>
            <br/>
    </>
    )
    }
export default SecciónNegra;