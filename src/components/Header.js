import React from 'react'
import Link from 'gatsby-link'
import Footer from './Footer'
import me from '../assets/images/me.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <Link to="/" className="image avatar"><img src={me} alt="" /></Link>
                    <h1><strong>Kathy Luu</strong></h1>
                    <h5>Frontend Engineer</h5>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
