import React from 'react';

function About() {
    var name = "Lee Ping Ng";
    var profilepic= "images/profile_pic.png";
    var bio = "I am an AI Engineer";

  return (
    <section id="about">
    <div className="row">
       <div className="three columns">
          <img className="profile-pic"  src={profilepic} alt="Tim Baker Profile Pic" />
       </div>
       <div className="nine columns main-col">
          <h2>About Me</h2>

          <p>{bio}</p>
       </div>
    </div>

 </section>
  );
}

export default About;