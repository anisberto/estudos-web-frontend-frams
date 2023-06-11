import React from "react";

class Button extends React.Component{
    render(): React.ReactNode {
        return (
            <button 
            style={{padding : '10px', backgroundColor: '#040499', color: 'white', margin: '1rem 5px', border: 'none', borderRadius: '5px'}}>
                Registrar Atividade
            </button>
        )
    }
}

export default Button;