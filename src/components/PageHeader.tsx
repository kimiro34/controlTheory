import React from 'react';
import Button from '@mui/material/Button';

const PageHeader = () => {
    return(
        <div style={{
            display:"flex", 
            justifyContent:"space-between", 
            alignItems:"center",  
            height:"58px"
        }}>
            <img src="logo.png" width={195} height={28} style={{marginLeft: '51px'}}/>
            
            <img src="iconPlus.png" width={23} height={23} style={{marginRight:'80px'}}/>
        </div>
    )
}

export default PageHeader;