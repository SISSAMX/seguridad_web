import React, { useState } from 'react';
import { useRouter } from "next/router";
import { locales } from "@translations/config";
import useTranslation from "@hooks/useTranslation";

import imagen from '@assets/images/siteLogo.png';
import 'antd/dist/antd.css';
import {Row, Col, Menu, Select, Divider } from 'antd';
import { SearchOutlined, MenuOutlined } from '@ant-design/icons';

const { Option } = Select;
const { SubMenu } = Menu;
const css = require('@styles/Home.module.css')


const HeaderDefault: React.FC = () =>{
    const [searchState, setSearchState] = useState(false);
    const router = useRouter();

    const handleLocaleChange = React.useCallback(
      (e:any) => {
        const regex = new RegExp(`^/(${locales.join("|")})`);
        router.push(
          router.pathname,
          router.asPath.replace(regex, `/${e}`)
        );
      },
      [router]
    );
    const { t, locale } = useTranslation();

    const onClickSearch = (searchState) =>{
        if(searchState==false){
            setSearchState(true)
        }
        else{
            setSearchState(false)
        }
    }

    const menuItems = [
        {'titulo': 'Videovigilancia', 'id':1},{  'titulo': 'Control de Acceso', 'id':2}, {'titulo': 'Transporte Seguro', 'id':3},{ 'titulo': 'Contra Incendios', 'id':4},
        {'titulo': 'Ciberseguridad y TI', 'id':5},{'titulo': 'Seguridad Privada', 'id':6},{ 'titulo': 'Administración de la Seguridad', 'id':7},{ 'titulo': 'Producción Ejecutiva', 'id':8},
        { 'titulo': 'Seguridad Pública', 'id':9},{'titulo': 'El Profesional Opina', 'id':10},{ 'titulo': 'Especial del Bimestre','id':11 },
        { 'titulo': 'Novedades de la Industria', 'id':12}
    ]
    const selectItems = [
        {'titulo': 'Videovigilancia', 'id':13},{  'titulo': 'Control de Acceso', 'id':14}, {'titulo': 'Transporte Seguro', 'id':15},{ 'titulo': 'Contra Incendios', 'id':16},
        {'titulo': 'Ciberseguridad y TI', 'id':17},{'titulo': 'Seguridad Privada', 'id':18},{ 'titulo': 'Administración de la Seguridad', 'id':19},{ 'titulo': 'Producción Ejecutiva', 'id':20},
        { 'titulo': 'Seguridad Pública', 'id':21},{'titulo': 'El Profesional Opina', 'id':22},{ 'titulo': 'Especial del Bimestre','id':23 },
        { 'titulo': 'Novedades de la Industria', 'id':24}
    ]
    const subMenuItems = [
        {'titulo': 'Calendario de Eventos', 'id':25},{  'titulo': 'Biblioteca de Revistas', 'id':26}, {'titulo': 'Biblioteca de Newsletter', 'id':27},{ 'titulo': 'Biblioteca de Infografías', 'id':28},
        {'titulo': 'Galería Fotográfica', 'id':29},{'titulo': 'Videoentrevistas', 'id':30},{ 'titulo': 'Colaboradores', 'id':31},{ 'titulo': 'Estadísticas', 'id':32},
    ]
    const optionMenuItems = [
        {'titulo': 'Inscríbase a la Revista', 'id':33},{  'titulo': 'Políticas de Privacidad', 'id':34}, {'titulo': 'La guía del colaborador', 'id':35},{ 'titulo': 'Contacto', 'id':36},
        {'titulo': 'Anúnciate aquí', 'id':37}
    ]

    const onChangeLanguage = (value) => {

    }
    return(
        <>
            <div className={css.fixed}>
                <div className={css.fondo}>
                    {searchState==false?(
                    <Row>
                        <Col lg={{span:3, offset:1}}>
                            <img src={imagen} id="imagen" alt="imagenLogo" className={css.imagenLogo} />
                        </Col>
                        <Col lg={{span:14, offset:1}}>
                            <Menu mode="horizontal" className={css.fondo} style={{marginLeft:0, marginRight:0, marginTop:0, marginBottom:0}}>
                                {menuItems.map((item)=>(
                                    <>
                                    <Menu.Item className={css.breakText} key={item.id}>
                                        {item.titulo}
                                    </Menu.Item>
                                    </>
                                ))}
                            </Menu>
                        </Col>
                        <Col lg={{span:1}}>
                            <div className={css.espacioArriba} onClick={() => onClickSearch(searchState)}>
                            <SearchOutlined />
                            </div>
                        </Col>
                        <Col lg={{span:1}}>
                            <Menu mode="vertical" className={css.fondo}>
                                <SubMenu key="subMenu1" icon={<MenuOutlined />} style={{color:'white'}}>
                                    {subMenuItems.map((item)=>(
                                        <Menu.Item className={css.breakText} key={item.id}>{item.titulo}</Menu.Item>
                                    ))}
                                    <Divider/>
                                    {optionMenuItems.map((item)=>(
                                        <Menu.Item className={css.breakText} key={item.id}>{item.titulo}</Menu.Item>
                                    ))}
                                </SubMenu>
                            </Menu>
                        </Col>
                        <Col lg={{span:3}}>
                            <div className={css.espacioArriba}>
                                <Select size="small" style={{ width: 100+"%", color:'white'}} placeholder="Change Language" bordered={false} onChange={handleLocaleChange} defaultValue={locale}>
                                    <Option value="es" key={'Spanish'}>
                                    { t("spanish") }
                                    </Option>
                                    <Option value="en" key={'English'}>
                                    { t("english") }
                                    </Option>
                                </Select>
                            </div>
                        </Col>
                    </Row>
                    ):(
                        <Row>
                            <Col lg={{span:3, offset:1}}>
                                <img src={imagen} id="imagen" alt="imagenLogo" className={css.imagenLogo} />
                            </Col>
                            <Col lg={{span:14, offset:1}}>
                                <Select
                                    className={css.espacio}
                                    showSearch
                                    style={{borderRadius:"1em"}}
                                    placeholder = { "Buscar"}
                                    optionFilterProp="children"
                                    allowClear
                                    filterOption={(input, option) =>
                                    option.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                    filterSort={(optionA, optionB) =>
                                    optionA.toLowerCase().localeCompare(optionB.toLowerCase())
                                    }
                                >
                                    {selectItems.map((item)=>(
                                        <Option value={'busqueda'+item.titulo}>{item.titulo}</Option>
                                    ))}
                                </Select>
                            </Col>
                            <Col lg={{span:1}}>
                                <div className={css.espacioArriba} onClick={() => onClickSearch(searchState)}>
                                    <SearchOutlined />
                                </div>
                            </Col>
                            <Col lg={{span:1}}>
                                <Menu mode="vertical" className={css.fondo}>
                                    <SubMenu key="subMenu2" icon={<MenuOutlined />} style={{color:'white'}}>
                                        {subMenuItems.map((item)=>(
                                            <Menu.Item className={css.breakText} key={item.id}>{item.titulo}</Menu.Item>
                                        ))}
                                        <Divider/>
                                        {optionMenuItems.map((item)=>(
                                            <Menu.Item className={css.breakText} key={item.id}>{item.titulo}</Menu.Item>
                                        ))}
                                    </SubMenu>
                                </Menu>
                            </Col>
                            <Col lg={{span:3}}>
                                <div className={css.espacioArriba}>
                                    <Select size="small" style={{ width: 100+"%", color:'white'}} placeholder="Change Language" bordered={false} onChange={onChangeLanguage}>
                                        <Option value="es-MX" key={'Spanish'}>
                                        { t("spanish") }
                                        </Option>
                                        <Option value="en-US" key={'English'}>
                                        { t("english") }
                                        </Option>
                                    </Select>
                                </div>
                            </Col>
                        </Row>  
                    )}
                </div>
            </div>
        </>
    )
    }
export default HeaderDefault;