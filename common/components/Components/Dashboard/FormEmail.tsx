import React from 'react';
import {Col,Row, Form, Button, Input, Card } from 'antd';
const css = require('../../../../styles/Home.module.css')
const FormEmail =  () =>{

    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log('Finish:', values);
      };

    return(
        <>
        <Card className={css.containerCard}>
            <Row>
            <p>Subscribe to our mailing list to receives daily updates direct to your inbox!</p>
            </Row>
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
            <Row>
                <Col span={24}>
                <div className={css.espacioTitulo}/>
                <p className={css.textoSpam}>* Odiamos el spam tanto como tú.</p>
                </Col>
            </Row>
        </Card>
    </>
    )
    }
export default FormEmail;