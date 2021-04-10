import React from 'react';

function Footer() {

    return (
        <footer>
  
            <div className="row">
                <div className="twelve columns">
                    <ul className="social-links">
                        <li key="linkedin"><a href="https://www.linkedin.com/in/lee-ping-ng/"><i className="fa fa-linkedin"></i></a></li>
                        <li key="github"><a href="https://github.com/leeping-ng"><i className="fa fa-github"></i></a></li>
                    </ul>
        
                    <ul className="copyright">
                        <li>&copy; Copyright 2021 Lee Ping Ng</li>
                        <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>
                    </ul>
        
                </div>
                <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
            </div>
        </footer>
    );
}

export default Footer;