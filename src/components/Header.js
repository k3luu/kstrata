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
                <Link to="/experience"><h5>Experience</h5></Link>
                <Link to="/projects"><h5>Projects</h5></Link>
                <Link to="/about"><h5>About</h5></Link>
                <a href="http://luusfilm.tumblr.com/" target="_blank">
                    <h5>Photography</h5>
                </a>
                <Footer />
            </header>
        )
    }
}

export default Header
