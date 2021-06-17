import React from 'react';
import {Col,Row, Tabs } from 'antd';
import moment from 'moment';
import imagen from '../../../assets/fondo.png'
import styles from '@styles/Home.module.css'
const { TabPane } = Tabs;


const Tendencias =  () =>{
    //moment.locale('es');
    moment.locale('en');
    const menuItems = [
        {'id':1, 'imagen': imagen, 'titulo':"Every Product Usted to Create Awkwafina's $846 Oscars Beauty Look", 'fechaPublicacion':'2021-05-9'},{'id':2,'imagen': imagen, 'titulo':"Every Product Usted to Create Awkwafina's $846 Oscars Beauty Look", 'fechaPublicacion':'2021-05-10' }, {'id':3, 'imagen': imagen,'titulo':"Every Product Usted to Create Awkwafina's $846 Oscars Beauty Look", 'fechaPublicacion':'2021-05-11'}
    ]
    return(
        <>
            <div>
            <Tabs defaultActiveKey="1" /* onChange={callback} */ type="card" size="small">
                <TabPane tab="Tendencias" key="1" style={{fontSize:'9px'}}>
                        {menuItems.map((item)=>(
                            <>
                                <Row>
                                    <Col span={11}>
                                        <img src={item.imagen} className={styles.imagenDefault}/>
                                    </Col>
                                    <Col span={12} offset={1}>
                                        <Row>
                                            <p className={styles.letrasTendencia}>{item.titulo}</p>
                                        </Row>
                                        <Row>
                                        <span className={styles.fechaTendencia}>{moment(item.fechaPublicacion).fromNow()}</span>
                                        </Row>
                                    </Col>
                                </Row>
                                <br/>
                            </>
                        ))}
                </TabPane>
                <TabPane tab="Comentarios" key="2" style={{fontSize:'9px'}}>
                    {menuItems.map((item)=>(
                            <>
                                <Row>
                                    <Col span={11}>
                                        <img src={item.imagen} className={styles.imagenDefault}/>
                                    </Col>
                                    <Col span={12} offset={1}>
                                        <Row>
                                            <p className={styles.letrasTendencia}>{item.titulo}</p>
                                        </Row>
                                        <Row>
                                        <span className={styles.fechaTendencia}>{moment(item.fechaPublicacion).fromNow()}</span>
                                        </Row>
                                    </Col>
                                </Row>
                                <br/>
                            </>
                        ))}
                </TabPane>
                <TabPane tab="Último" key="3" style={{fontSize:'9px'}}>
                    {menuItems.map((item)=>(
                            <>
                                <Row>
                                    <Col span={11}>
                                        <img src={item.imagen} className={styles.imagenDefault}/>
                                    </Col>
                                    <Col span={12} offset={1}>
                                        <Row>
                                            <p className={styles.letrasTendencia}>{item.titulo}</p>
                                        </Row>
                                        <Row>
                                        <span className={styles.fechaTendencia}>{moment(item.fechaPublicacion).fromNow()}</span>
                                        </Row>
                                    </Col>
                                </Row>
                                <br/>
                            </>
                        ))}
                </TabPane>
            </Tabs> 
            </div>
        </>
    )
    }
export default Tendencias;