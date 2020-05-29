import React from 'react';

const Logo = () => {
    const logoStyle = {
        alignItems: 'center',
        backgroundColor: 'rgba(213, 103, 241, 0.541)',
        border: '2px solid #fff',
        borderRadius: '50%',
        color: '#fff',
        display: 'flex',
        fontFamily: 'Lilita One',
        height: '60px',
        justifyContent: "center",
        marginLeft: '10px',
        textShadow: '0 0 3px #0008',
        width: '60px'
    }

    return (
        < div style={logoStyle} >
            <span style={{ fontSize: '30px' }}>Y</span>
            <div>
                <span>YedTech</span>
            </div>
        </div >
    );
}

export default Logo;
