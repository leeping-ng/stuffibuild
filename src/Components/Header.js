import React from 'react';

function Header() {
    var name = "Lee Ping";
      var occupation= "Engineer";
      var description= "build stuff";
      var city= "Singapore";
     
    return (
        <header id="home">

        <nav id="nav-wrap">
  
           <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>
  
           <ul id="nav" className="nav">
              <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
              <li><a className="smoothscroll" href="#about">About</a></li>
              <li><a className="smoothscroll" href="#portfolio">Works</a></li>
           </ul>
  
        </nav>
  
        <div className="row banner">
           <div className="banner-text">
              <h1 className="responsive-headline">I'm {name}.</h1>
              <h3>I build stuff.</h3>
              <hr />
              {/* <ul className="social">
                 {networks}
              </ul> */}
           </div>
        </div>
  
        <p className="scrolldown">
           <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
        </p>
  
     </header>
    )
}

export default Header;