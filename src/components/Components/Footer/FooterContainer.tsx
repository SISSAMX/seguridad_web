import React from 'react';
import { useMediaQuery } from 'react-responsive'
import FooterDefault from './FooterDefault';

const FooterContainer =  () =>{
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
                <footer>
                    <Default>
                        <FooterDefault/>
                    </Default>
                    <Mobile>
                        <h1>Hola</h1>
                    </Mobile>
                </footer>
            </div>
        </>
    )
    }
export default FooterContainer;