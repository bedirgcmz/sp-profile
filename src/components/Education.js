import React from "react";
import "./ExprAndEdu.css";
import { motion } from "framer-motion";

const Education = () => {
  const variants2 = {
    fadeIn: {
      y: 100,
      opacity: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
    inactive: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
    fadeOut: {
      opacity: 0,
      y: -100,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  const educations = [
    {
      edu_title: "Full Stack Web Developer",
      company: "HiCoders",
      info: "I had an enjoyable education process that lasted 11 months. I learned a lot from thistraining.",
      date: "14.08.2021 - 02.07.2022",
      icon: "fa-solid fa-laptop-code pe-3",
    },
    {
      edu_title: "Student Coaching",
      company: "Career World",
      info: "Online education, Distance course tracking, Online exams and internationalcertificates",
      date: "12.10.2018 - 15.12.2018",
      icon: "fa-solid fa-person-walking-arrow-right pe-3",
    },
    {
      edu_title: "Primary School Graduate",
      company: "Canakkale Onsekiz Mart Unv.",
      info: "I received 2 years of postgraduate education. I completed my thesis research on The effect of the debate technique in the primary school 4th-grade social sciences course on the coursesuccess and critical thinking.",
      date: "15.09.2014 - 23.07.2016",
      icon: "fa-solid fa-person-chalkboard pe-3",
    },
    {
      edu_title: "Primary School Teacher",
      company: "Canakkale Onsekiz Mart Unv.",
      info: "I have successfully completed my 4-year undergraduate education.",
      date: "15.09.2007 - 16.06.2011",
      icon: "fa-solid fa-person-chalkboard pe-3",
    },
  ];
  return (
    <motion.div
      className="education w-75 mx-auto mt-4 row"
      variants={variants2}
      initial="fadeIn"
      animate="inactive"
      exit="fadeOut"
    >
      <h2 className={`mb-4`}>
        Educations <i className="fas fa-user-graduate ps-3"></i>
      </h2>
      {educations.map((edu, index) => (
        <div className={`education-card col-md-6 col-sm-12 mb-4 position-relative`}>
          <i className="fa-solid fa-thumbtack fs-4 position-absolute"></i>
          <div className="card card-content">
            <h5 id="card-header" className="card-header">
              <i className="fa-solid fa-building pe-3"></i> {edu.company}
            </h5>
            <div className="card-body d-flex flex-column justify-content-between">
              <h5 id="card-title" className="card-title">
                <i className={`${edu.icon}`}></i>
                {edu.edu_title}
              </h5>
              <p id="card-text" className="card-text">
                {edu.info}
              </p>
              <span id="card-date" className={`card-date date py-1 px-2`}>
                {edu.date}
              </span>
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default Education;
