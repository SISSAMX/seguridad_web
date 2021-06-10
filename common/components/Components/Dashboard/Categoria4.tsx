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


const Categoria4 =  (titulo) =>{
    moment.locale('es');
    //moment.locale('en');
    const menuItems = [
        {'id':1, 'imagen': imagen, 'titulo':"Every Product Usted to Create Awkwafina's $846 Oscars Beauty Look", 'fechaPublicacion':'2021-05-09', 'categoria':'Internet'},
        {'id':2,'imagen': imagen, 'titulo':"Every Product Usted to Create Awkwafina's $846 Oscars Beauty Look", 'fechaPublicacion':'2021-05-10',  'categoria':'Internet' }, 
    ]

    return(
        <>
        <br/>
        <h1 className={css.tituloCategorias}>{titulo.titulo}</h1><span className={css.lineaAbajoRoja}>_____</span>
        <Divider/>
        {menuItems.map((item)=>(
            <>
            <Row>
                <Col span={24}>
                    <div className={css.containerImage}>
                        <img className={css.imagenLogo} src={menuItems[0].imagen}/>
                        <p className={css.textBottomImage}>{menuItems[0].categoria}</p>
                    </div>
                </Col>
                <Col span={24}>
                    <p className={css.letrasGrandes}>{item.titulo}</p>
                    <div className={css.menosEspacio}/>
                </Col>
                <Col span={24}>
                    <ClockCircleOutlined className={css.colorIcono} /> <span className={css.fechaCategorias}>{moment(item.fechaPublicacion).format('MMMM Do YYYY')}</span>
                </Col>
            </Row>
            <br/>
            </>
        ))}
            <br/>
        </>
    )
    }
export default Categoria4;