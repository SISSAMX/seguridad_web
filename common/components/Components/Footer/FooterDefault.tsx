import React from 'react';
import {Row, Col,  Form, Input, Button } from 'antd';
import logo from '../../../../assets/siteLogo.png';
import Link from 'next/link';
import {
    TwitterOutlined,
    LinkedinOutlined,
    FacebookOutlined
  } from '@ant-design/icons';

const css = require('../../../../styles/Home.module.css')

const FooterDefault =  () =>{
    const [form] = Form.useForm();

    const categoriesItems = [
        {'titulo': 'Videovigilancia', 'id':1},{  'titulo': 'Control de Acceso', 'id':2}, {'titulo': 'Transporte Seguro', 'id':3},{ 'titulo': 'Contra Incendios', 'id':4},
        {'titulo': 'Ciberseguridad y TI', 'id':5},{'titulo': 'Seguridad Privada', 'id':6},{ 'titulo': 'Administración de la Seguridad', 'id':7},{ 'titulo': 'Producción Ejecutiva', 'id':8},
        { 'titulo': 'Seguridad Pública', 'id':9},{'titulo': 'El Profesional Opina', 'id':10},{ 'titulo': 'Especial del Bimestre','id':11 },
        { 'titulo': 'Novedades de la Industria', 'id':12}
    ]

    const onFinish = (values: any) => {
        console.log('Finish:', values);
      };

    return(
        <>
            <div className={css.fondoFooter}>
                <Col span={17} offset={3}>
                    <Row>
                        <Col span={8}>
                            <Row>
                                <Col span={15} offset={2}>
                                    <img className={css.logoFooter} src={logo}/>
                                </Col>
                            </Row>
                            <div className={css.espacioImagenTexto}/>
                            <Row>
                                <p className={css.textoFooter}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            </Row>
                            <Row>
                                <p className={css.textoFooter}>Síguenos</p>
                            </Row>
                            <Row>
                                <div className={css.iconosEspacio}>
                                    <Link href="https://twitter.com/Seguridad_En_Am"><TwitterOutlined className={css.iconosFooterSinEspacio}/></Link>
                                    <Link href="https://mx.linkedin.com/company/revista-seguridad-en-américa"><LinkedinOutlined className={css.iconosFooter} /></Link>
                                    <Link href="https://es-la.facebook.com/revistaseguridadenamerica/"><FacebookOutlined className={css.iconosFooter} /></Link>
                                </div>
                            </Row>
                        </Col>
                        <Col span={8} offset={0}>
                            <Row>
                                <Col span={20} offset={2}>
                                <div className={css.espacioTitulo}/>
                                <p className={css.tituloFooter}>Navega en nuestras categorías</p>
                                </Col>
                            </Row>
                            <Row>
                                {categoriesItems.map((item)=>(
                                    <>
                                    <Col span={6} offset={2} className={css.textoCategorias}>
                                        <span>{item.titulo}</span>
                                    </Col>
                                    </>
                                ))}
                            </Row>
                        </Col>
                        <Col span={7} offset={1}>
                            <Row>
                                <Col span={24}>
                                <div className={css.espacioTitulo}/>
                                <p className={css.tituloFooter}>Nuestro Newsletter</p>
                                </Col>
                                
                            </Row>
                            <Row>
                                <p className={css.textoFooter}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            </Row>
                            <Row>
                                    <Form form={form} layout="inline" onFinish={onFinish} size="small">
                                        <Col span={20}>
                                        <Form.Item
                                            rules={[{ required: true, message: 'Por favor ingresa tu correo electrónico.' }]}
                                        >
                                            <Input placeholder="Ingresa tu correo electrónico" />
                                        </Form.Item>
                                        </Col>
                                        <Col span={4}>
                                        <Form.Item>
                                            <Button htmlType="submit" className={css.botonEnviar}>
                                                Enviar
                                            </Button>
                                        </Form.Item>
                                        </Col>
                                    </Form>
                            </Row>
                            <Row>
                                <Col span={24}>
                                <div className={css.espacioTitulo}/>
                                <p className={css.textoSpam}>* Odiamos el spam tanto como tú.</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <hr/>
                    <Row>
                        <Col span={5}>
                            <span className={css.textoFooter}>©2021 Seguridad en América</span>
                        </Col>
                        <Col span={8} offset={11}>
                        <div className={css.textoDerecha}>
                            <span className={css.textoFooter}>Nosotros /</span>
                            <span className={css.textoFooter}> Políticas & Privacidad /</span>
                            <span className={css.textoFooter}> Contáctanos</span>
                        </div>
                        </Col>
                    </Row>
                </Col>
                <br/>
            </div>
        </>
    )
    }
export default FooterDefault;