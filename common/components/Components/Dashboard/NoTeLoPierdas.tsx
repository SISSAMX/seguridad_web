import React from 'react';
import {Col,Row, Divider } from 'antd';
import moment from 'moment';
import imagen from '../../../../assets/fondo.png'

const css = require('../../../../styles/Home.module.css')
const NoTeLoPierdas =  () =>{
    //moment.locale('es');
    moment.locale('en');
    const menuItems = [
        {'id':1, 'imagen': imagen, 'titulo':"Every Product Usted to Create Awkwafina's $846 Oscars Beauty Look", 'fechaPublicacion':'2021-05-9'},{'id':2,'imagen': imagen, 'titulo':"Every Product Usted to Create Awkwafina's $846 Oscars Beauty Look", 'fechaPublicacion':'2021-05-10' }, {'id':3, 'imagen': imagen,'titulo':"Every Product Usted to Create Awkwafina's $846 Oscars Beauty Look", 'fechaPublicacion':'2021-05-11'}
    ]
    return(
        <>
            <div>
            <br/>
            <h1 className={css.tituloCategorias}>Don't Miss It</h1><span className={css.lineaAbajo}>_____</span>
            <Divider/>
                {menuItems.map((item)=>(
                    <>
                        <Row>
                            <Col span={11}>
                                <img src={item.imagen} className={css.imagenDefault}/>
                            </Col>
                            <Col span={12} offset={1}>
                                <Row>
                                    <p className={css.letrasTendencia}>{item.titulo}</p>
                                </Row>
                                <Row>
                                <span className={css.fechaTendencia}>{moment(item.fechaPublicacion).fromNow()}</span>
                                </Row>
                            </Col>
                        </Row>
                        <br/>
                    </>
                ))}
            </div>
        </>
    )
    }
export default NoTeLoPierdas;