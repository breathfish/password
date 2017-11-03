import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router'

class Header extends React.Component{
    render(){
        const {title, imgUrl, linkTo, bgColor} = this.props
        return (
            <header className="header">
                <div>
                    this is header {title}
                </div>
            </header>
        )
    }
}

export default Header