import React, { useEffect, useState } from 'react'
import './About.css'
import cncImg from '../../assets/electric.jpeg'
import { TiStar } from "react-icons/ti";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowRightLong } from "react-icons/fa6";

const About = ({ data }) => {

  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false
    });
  }, []);

  // fallback content
  const defaultAbout = {
    heading:
      "From Beginner to EV Expert :<span> Hands-On Training That Gets You Hired! </span> ",

    description:
      "Our Electric Vehicle (EV) course is designed to make you truly job-ready for the fastest-growing industry in India. You don’t just learn concepts; you earn a recognized NSQF Level certification while working on live cars and real EV systems.    <br><br>    The training covers complete EV architecture, battery & BMS, motors & controllers, and charging systems, along with hands-on expertise in harness repair, sensors, regenerative braking systems, vehicle diagnostics, fault analysis, and drive systems.           <br><br>          This is not classroom learning, it’s real, practical exposure where you understand how EVs actually work, diagnose issues, and fix them confidently. If you want skills that companies are actively hiring for and a career that is future-proof, this course gives you the right start with real machines, real projects, and real industry experience. ",

    buttonText: "Read More"
  };

  const aboutData = data || defaultAbout;

  const shortText = aboutData.description.slice(0, 700);

  return (
    <>

      <svg width="0" height="0">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(255, 187, 0)" />
            <stop offset="100%" stopColor="rgb(255, 60, 0)" />
          </linearGradient>
        </defs>
      </svg>

      <div className='about'>

        {/* LEFT */}
        <div className="about-left">

          <span className='about-container'>
            <span className='icon'><TiStar /></span> About Us
          </span>

          <img src={cncImg} alt="CNC Machine" className="about-img" />

        </div>

        {/* RIGHT */}
        <div className="about-right">

          <h2
            dangerouslySetInnerHTML={{ __html: aboutData.heading }}
          />

          <p
            dangerouslySetInnerHTML={{
              __html:aboutData.description
            }}
          />

          {/* <button
            className='btn'
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <span>{isExpanded ? "Show Less" : aboutData.buttonText}</span>
            <FaArrowRightLong className='btn-icon' />
          </button> */}

        </div>

      </div>
    </>
  )
}

export default About