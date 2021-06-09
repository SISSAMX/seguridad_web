import React, { useState } from 'react';
import {Button, Col,Row,Divider,Menu } from 'antd';
import moment from 'moment';
import {FormattedMessage} from 'react-intl';
import imagen from '../../../../assets/fondo.png'
import {
    ShareAltOutlined,
    ClockCircleOutlined
  } from '@ant-design/icons';

const css = require('../../../../styles/Home.module.css')




const HistoriasPopulares =  () =>{
    //moment.locale('es');
    moment.locale('en');
    const menuItems = [
        {'id':1, 'imagen': imagen, 'titulo':"Every Product Usted to Create Awkwafina's $846 Oscars Beauty Look", 'shares':92},
        {'id':2,'imagen': imagen, 'titulo':"Every Product Usted to Create Awkwafina's $846 Oscars Beauty Look", 'shares':21 }, 
        {'id':3, 'imagen': imagen,'titulo':"Every Product Usted to Create Awkwafina's $846 Oscars Beauty Look", 'shares':18},
        {'id':4, 'imagen': imagen,'titulo':"Every Product Usted to Create Awkwafina's $846 Oscars Beauty Look", 'shares':11},
        {'id':5, 'imagen': imagen,'titulo':"Every Product Usted to Create Awkwafina's $846 Oscars Beauty Look", 'shares':20}
    ]

    return(
        <>
        <h1 className={css.tituloCategorias}>Populares Historias</h1><span className={css.lineaAbajo}>_____</span>
        <Divider/>
            <Row>
                <Col lg={{span:24}}>
                    <img src={menuItems[0].imagen} className={css.imagenDefault}/>
                </Col>
                <Col lg={{span:24}}>
                    <Row>
                        <Col span={20}>
                            <p className={css.letrasHistoria}>{menuItems[0].titulo}</p>
                        </Col>
                        <Col span={2}>
                       <span className={css.numeroGrande}><span className={css.lineaIzquierda}/><span style={{marginLeft:'.3em'}}/>01</span>
                        </Col>
                    </Row>
                    <div className={css.menosEspacio}/>
                    <Row>
                        <Col span={24}>
                        <ShareAltOutlined className={css.colorIconoGris}/><span className={css.shares}> {menuItems[0].shares} shares</span>
                        </Col>
                    </Row>
                </Col>
               <div className={css.lineaAbajoGruesa}/>
            </Row>
            <div className={css.espacioArriba}/>
            <Row>
                {menuItems.map((item)=>(
                    <Row>
                        <Col span={4}>
                            <span className={css.circuloConNumero}>0{item.id}</span>
                        </Col>
                        <Col span={20}>
                            <p className={css.letrasTitulo}>{item.titulo}</p>
                            <div className={css.menosEspacio}/>
                            <p className={css.shares}><ShareAltOutlined className={css.colorIconoGris}/>{item.shares} shares</p>
                        </Col>
                    </Row>
                ))}
            </Row>
            <br/>
        </>
    )
    }
export default HistoriasPopulares;