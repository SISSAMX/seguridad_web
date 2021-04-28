import React, { useState, useContext } from 'react';
import HeaderDefault from './headerDefault';
import HeaderMobile from './headerMobile';
import { useMediaQuery } from 'react-responsive'

const headerContainer =  () =>{
    const Mobile = ({ children }) => {
        const isMobile = useMediaQuery({ maxWidth: 767 })
        return isMobile ? children : null
    }
    const Default = ({ children }) => {
        const isNotMobile = useMediaQuery({ minWidth: 768 })
        return isNotMobile ? children : null
    }

    return(
        <>
            <div>
                <header>
                    <Default>
                        <HeaderDefault/>
                    </Default>
                    <Mobile>
                        <HeaderMobile/>
                    </Mobile>
                </header>
            </div>
        </>
    )
    }
export default headerContainer;