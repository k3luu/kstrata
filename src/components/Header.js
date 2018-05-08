import React from 'react'

import Footer from './Footer'
import me from '../assets/images/me.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="/" className="image avatar"><img src={me} alt="" /></a>
                    <h1><strong>Kathy Luu</strong></h1>
                    <h5>Frontend Engineer</h5>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
