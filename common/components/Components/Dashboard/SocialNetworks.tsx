import React from 'react';
import {Col,Row, Divider, Card } from 'antd';
import moment from 'moment';
import imagen from '../../../../assets/fondo.png'
import { createFromIconfontCN } from '@ant-design/icons';

const css = require('../../../../styles/Home.module.css')

const SocialNetworks =  () =>{
    //moment.locale('es');
    moment.locale('en');
    const menuItems = [
        {'id':1, 'icon': 'icon-facebook', 'typeFans':"Fans", 'numberFans':128+'k'},
        {'id':2, 'icon': 'icon-twitter', 'typeFans':"Followers", 'numberFans':45+'k'},
        {'id':3, 'icon': 'icon-instagram', 'typeFans':"Followers", 'numberFans':211+'k'},
        {'id':4, 'icon': 'icon-pinterest', 'typeFans':"Followers", 'numberFans':2.3+'k'},
        {'id':5, 'icon': 'icon-youtube', 'typeFans':"Subscribers", 'numberFans':1.2+'m'},
        {'id':6, 'icon': 'icon-behance', 'typeFans':"Followers", 'numberFans':182},
        {'id':7, 'icon': 'icon-flickr', 'typeFans':"Followers", 'numberFans':728},
        {'id':8, 'icon': 'icon-iCloud', 'typeFans':"Followers", 'numberFans':2.3+'k'},
        {'id':9, 'icon': 'icon-RSS', 'typeFans':"Subscribers", 'numberFans':234+'k'},

    ]

    const IconFont = createFromIconfontCN({
        scriptUrl: ['//at.alicdn.com/t/font_2606451_ls1qojhiij.js'
        ]
    })

    return(
        <>
            <div>
            <br/>
            <h1 className={css.tituloCategorias}>Social Networks</h1><span className={css.lineaAbajo}>_____</span>
            <Divider/>
            <Row>
                {menuItems.map((item)=>(
                    <Col lg={{span:8}} xs={{span:8}}>
                        <Card className={css.cardIconos}>
                            <IconFont type={item.icon} className={css.iconosSocial} />
                            <p className={css.numFans}>{item.numberFans}</p>
                            <p className={css.typeFans}>{item.typeFans}</p>
                        </Card>
                    </Col>
                ))}
            </Row> 
            </div>
        </>
    )
    }
export default SocialNetworks;