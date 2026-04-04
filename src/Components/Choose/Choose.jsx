import React, { useEffect } from 'react'
import './Choose.css'
import advance from '../../assets/Advanced.png'
import hands from '../../assets/blog.png'
import individual from '../../assets/indvidual.png'
import AOS from "aos";
import "aos/dist/aos.css";

/* fallback content */

const fallbackChoose = [
  {
    image: "https://media.istockphoto.com/id/1919863292/photo/e-learning-education-internet-lessons-and-online-learning-with-webinars-video-tutorials.jpg?s=612x612&w=0&k=20&c=zWAqp6FGH-zm6b0Os_CssxubtrgKh1MyFeMgelFZbOg=",
    title: "Learn What Companies Actually Hire For",
    description:
      "At SkillServe, this course is designed around real Electric Vehicle industry needs, not just theory. You learn battery systems, motor & controller working, wiring, diagnostics, and servicing exactly the way EV workshops and companies expect. The goal is simple: make you job-ready from day one with practical, in-demand skills.",
  },
  {
    image: "https://t4.ftcdn.net/jpg/04/32/85/91/360_F_432859145_r9MvWmdbmwBXqB4rSQJlq8fZckY65u1n.jpg",
    title: "Work on Real EV Systems, Not Just Theory",
    description:
      "SkillServe follows a practical-first approach where you learn by working on real electric vehicles and components. From batteries and controllers to full system diagnostics, you get hands-on experience through live practice and workshop sessions. This builds confidence and prepares you for real EV service and maintenance environments."
  },
  {
    image: "https://institute.careerguide.com/wp-content/uploads/2023/09/1577829_NSQF-1.png",
    title: "Get Certified, Skilled & Job-Ready Faster",
    description:
      "With NSQF-aligned training, you gain both practical skills and recognized certification that adds real value to your career. Along with hands-on experience and industry-relevant training, you become ready to work in EV workshops, service centers, and companies, helping you move faster from learning to earning."
  }
];

const Choose = ({ data }) => {

  useEffect(() => {

    const isMobile = window.innerWidth <= 768;

    AOS.init({
      offset: isMobile ? 50 : 300,
      duration: 1000,
      once: false
    });

  }, []);

  /* agar server data nahi hai to fallback use hoga */

  const chooseData = data && data.length ? data : fallbackChoose;

  return (

    <div className='choose'>

      <h4>Why Choose Us</h4>

{chooseData.map((item, index) => (

  <div
    className="choose-card"
    key={index}
    data-aos="fade-up"
    data-aos-delay="200"
    data-aos-anchor-placement="top-bottom"
  >

    <div className="card-left">
      <img src={item.image || individual} alt={item.title || "choose"} />
    </div>

    <div className="card-right">
      <h3>{item.title || "Default Title"}</h3>

      <p
        dangerouslySetInnerHTML={{
          __html: item?.description || "Default description"
        }}
      ></p>

    </div>

  </div>

))}

    </div>
  )
}

export default Choose



/hrllo