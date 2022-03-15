import React from 'react';

const Header = () =>{
    const headerStyle = {
       textAlign:'center',
       background: '#333333',
       padding: '10px',
       color: '#ffffff',
    }
    return (
        <header style={headerStyle}>
            <h1 >Việc cần làm</h1>
        </header>
    )
}
export default Header