import React from 'react';
import coverImage from "../../assets/cover/cover-image.jpg";

function About() {
  return (
    <section className='my-5'>
      <h1 id="about">Travis A. Swift</h1>
      <h3>A recent graduate of Coding Bootcamp at the University of Texas and seeking to become a junior front end developer or other entry level IT position.
      Help me become your next best asset.</h3>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
    </section>
  );
}

export default About;