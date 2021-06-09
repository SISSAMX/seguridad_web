import React, { useState } from 'react';
import {Tabs } from 'antd';
import {
  } from '@ant-design/icons';
import Categoría3 from '../common/components/Components/Dashboard/Categoria3';

const { TabPane } = Tabs;
const css = require('../styles/Home.module.css')

const Categoría3Container =  () =>{

    const OperationsSlot = {
      left:   <><h1 className={css.tituloCategorias3}>Worldwide</h1><span className={css.lineaAbajo2}>_____</span></>,
    };
    
    
      const [position] = React.useState(['left']);
    
      const slot = React.useMemo(() => {
        return position.reduce(
          (acc, direction) => ({ ...acc, [direction]: OperationsSlot[direction] }),
          {},
        );
      }, ['left']);
    
      return (
        <>
          <Tabs tabBarExtraContent={slot} className={css.floatRight} centered>
            <TabPane tab="ALL" key="1">
                <Categoría3/>
            </TabPane>
            <TabPane tab="NEWS" key="2">
                <Categoría3/>
            </TabPane>
            <TabPane tab="TECH" key="3">
                <Categoría3/>
            </TabPane>
            <TabPane tab="STARTUP" key="4">
                <Categoría3/>
            </TabPane>
            <TabPane tab="WORLD" key="5">
                <Categoría3/>
            </TabPane>
          </Tabs>
    </>
    );
  };
export default Categoría3Container;