import React, { useState, useContext } from 'react';
import imagen from '../../../../assets/siteLogo.png';
import iconoMenu from '../../../../assets/icons8-menú-24.png';
import 'antd/dist/antd.css';
import {Row, Col, Menu, Drawer, Input, Select } from 'antd';
import { ReadOutlined, CameraOutlined, InteractionOutlined } from '@ant-design/icons';
import {LanguageContext} from '../../Context/LanguageContext/LanguageContext';
import {injectIntl, FormattedMessage} from 'react-intl';

const { Search } = Input;
const { Option } = Select;
const { SubMenu } = Menu;
const css = require('../../../../styles/Home.module.css')


const HeaderMobile =  ({ intl }) =>{
    const [lang,setLanguage] = useContext(LanguageContext)
    const [visible, setVisible] = useState(false);

    const onOpenMenu = () =>{
        setVisible(true)
    }

    const onCloseMenu = () =>{
        setVisible(false)
    }

    const categoriasItems = [
        {'titulo': 'Videovigilancia', 'id':1},{  'titulo': 'Control de Acceso', 'id':2}, {'titulo': 'Transporte Seguro', 'id':3},{ 'titulo': 'Contra Incendios', 'id':4},
        {'titulo': 'Ciberseguridad y TI', 'id':5},{'titulo': 'Seguridad Privada', 'id':6},{ 'titulo': 'Administración de la Seguridad', 'id':7},{ 'titulo': 'Producción Ejecutiva', 'id':8},
        { 'titulo': 'Seguridad Pública', 'id':9},{'titulo': 'El Profesional Opina', 'id':10},{ 'titulo': 'Especial del Bimestre','id':11 },
        { 'titulo': 'Novedades de la Industria', 'id':12}
    ]
    const galeriaItems = [
        {'titulo': 'Calendario de Eventos', 'id':25},{  'titulo': 'Biblioteca de Revistas', 'id':26}, {'titulo': 'Biblioteca de Newsletter', 'id':27},{ 'titulo': 'Biblioteca de Infografías', 'id':28},
        {'titulo': 'Galería Fotográfica', 'id':29},{'titulo': 'Videoentrevistas', 'id':30},{ 'titulo': 'Colaboradores', 'id':31},{ 'titulo': 'Estadísticas', 'id':32},
    ]
    const optionMenuItems = [
        {'titulo': 'Inscríbase a la Revista', 'id':33},{  'titulo': 'Políticas de Privacidad', 'id':34}, {'titulo': 'La guía del colaborador', 'id':35},{ 'titulo': 'Contacto', 'id':36},
        {'titulo': 'Anúnciate aquí', 'id':37}
    ]

    const onChangeLanguage = (value: string) => {
        //console.log("ver si llega", value)
        if(value=="es-MX"){
          //  setLanguage('es-MX')
            setLanguage({
                lang:'es-MX'
            })
        }
        else{
            setLanguage('en-US')
        }
    }
    const onSearch = value => console.log(value);
    
    return(
        <>
            <div className={css.fixed}>
                <div className={css.fondo}>
                    <Row>
                        <Col span={10} offset={1}>
                            <img src={imagen} id="imagen" alt="imagenLogo" className={css.imagenLogo} />
                        </Col>
                        <Col span={2} offset={9}>
                            <img src={iconoMenu} id="menu" alt="menuIcono" className={css.iconoMenu}  onClick={onOpenMenu} />
                        </Col>
                        <Drawer
                            width={310}
                            title={null}
                            placement="right"
                            closable={true}
                            onClose={onCloseMenu}
                            visible={visible}
                        >
                            <br/>
                            <Col span={24}>
                                <Search placeholder = { intl.formatMessage({ id: 'Buscar', defaultMessage: 'Buscar', })} onSearch={onSearch} />  
                            </Col>
                            <br/>
                            <Col span={24} offset={7}>
                                <Select value={lang} size="small" placeholder="Change Language" bordered={false} onChange={onChangeLanguage}>
                                    <Option value="es-MX" key={'Spanish'}>
                                        <FormattedMessage 
                                        id="Español {emoji}"
                                        defaultMessage="Spanish {emoji}"
                                        values={{ emoji: <span>&#127474;&#127485;</span>}}
                                        />
                                    </Option>
                                    <Option value="en-US" key={'English'}>
                                        <FormattedMessage 
                                        id="Inglés {emoji}"
                                        defaultMessage="English {emoji}"
                                        values={{ emoji: <span>&#127482;&#127480;</span>}}
                                        />
                                    </Option>
                                </Select>
                            </Col>
                            <br/>
                            <Col span={24}>
                                <Menu
                                    defaultOpenKeys={['Acciones']}
                                    mode="inline"
                                >
                                    <SubMenu key="Categorías" icon={<ReadOutlined />} title={<FormattedMessage id="Categorías" defaultMessage="Categorías"/>}>
                                        {categoriasItems.map((item)=>(
                                            <Menu.Item key={item.id}>{item.titulo}</Menu.Item>
                                        ))}
                                    </SubMenu>
                                    <SubMenu key="Galería" icon={<CameraOutlined />} title={<FormattedMessage id="Galería, biblioteca y más" defaultMessage="Galería, biblioteca y más"/>}>
                                        {galeriaItems.map((item)=>(
                                            <Menu.Item key={item.id}>{item.titulo}</Menu.Item>
                                        ))}
                                    </SubMenu>
                                    <SubMenu key="Acciones" icon={<InteractionOutlined />} title={<FormattedMessage id="Acciones" defaultMessage="Acciones"/>}>
                                        {optionMenuItems.map((item)=>(
                                            <Menu.Item key={item.id}>{item.titulo}</Menu.Item>
                                        ))}
                                    </SubMenu>
                                </Menu>
                            </Col>
                        </Drawer>
                    </Row>
                </div>
            </div>
        </>
    )
    }
export default injectIntl(HeaderMobile);