import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="https://www.linkedin.com/in/kathy-luu/" target="_blank" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
                        <li><a href="https://github.com/k3luu" target="_blank" className="icon fa-github"><span className="label">Github</span></a></li>
                        <li><a href="https://www.flickr.com/photos/ka-luu/" target="_blank" className="icon fa-flickr"><span className="label">Twitter</span></a></li>
                        <li><a href="mailto:kathyluu820@gmail.com" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
                    </ul>
                    <ul className="copyright">
                        <li>&copy; Kathy Luu 2018</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
