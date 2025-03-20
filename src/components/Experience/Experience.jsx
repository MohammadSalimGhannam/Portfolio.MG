import React from 'react';

import styles from './Experience.module.css'
import Title from '../Section.Components/Title/Title';
import Card from '../Section.Components/Card/Card'

import Knowledge from '../../assets/Knowledge.png'
import RoadEyeModel from '../../assets/RoadEyeModel.png'
import RoadEyeApp from '../../assets/RoadEyeApp.png'
import familyTree from '../../assets/family-tree.png'
import Portfolio from '../../assets/Portfolio.png'
import dental from '../../assets/DentalClinicManagement.png'

const Experience = () => {
    return (
    <section className={styles.Experience} id="Experience">
        <Title title  ='Experience'/>
        <div className={styles.ExperienceContainer}>
            <Card 
                img={Knowledge}
                alt={Knowledge}
                url='https://github.com/MohammadSalimGhannam/Knowledge'
                Title="Knowledge (Website for Multimedia Course)"
                Role="Developer"
                Technologies="HTML, CSS, JavaScript, Git, GitHub"
                description="Developed a website as part of a college task to pass the practical component of the Multimedia course. Implemented responsive design and interactive features using HTML, CSS, and JavaScript. Utilized Git and GitHub for version control and deployed the project on the World Wide Web."
                descriptionEnable={true}
            />

            <Card 
                img={RoadEyeModel}
                alt={RoadEyeModel}
                url='https://github.com/ezAldinWaez/RoadEyeModel'
                Title="RoadEyeModel (Car Detection and Tracking Model)"
                Role="Machine Learning Engineer"
                Technologies="Python, Jupyter Notebook, NumPy, Pandas, Matplotlib, Seaborn, OpenCV, YOLO v8, Git, GitHub"
                description="Built an image processing and artificial intelligence model to detect and track cars on the road. Collected and analyzed data for each car, including speed and trajectory, and visualized results using Matplotlib and Seaborn. Leveraged OpenCV and YOLO v8 for real-time object detection and tracking. Managed the project using Git and GitHub for version control."
                descriptionEnable={false}
            />

            <Card 
                img={RoadEyeApp}
                alt={RoadEyeApp}
                url='https://github.com/ezAldinWaez/RoadEyeApp'
                Title="RoadEyeApp (Real-Time Road Analysis Web Application)"
                Role="Full-Stack Developer"
                Technologies="Python, Django, JavaScript, HTML, CSS, React, Git, GitHub"
                description="Developed a responsive web application to process road videos and display real-time results, including car detection, tracking, and speed analysis. Integrated the RoadEyeModel into the backend using Django and Python. Designed the frontend using React, HTML, and CSS for a seamless user experience. Utilized Git and GitHub for version control and collaboration."
                descriptionEnable={false}
            />

            <Card 
                img={familyTree}
                alt={familyTree}
                url='https://github.com/ezAldinWaez/family-tree'
                Title="FamilyTree (Hierarchical Family Relationship Website)"
                Role="Full-Stack Developer"
                Technologies="MongoDB, JavaScript, HTML, CSS, React, Git, GitHub"
                description="Created a website to display hierarchical family relationships, from grandparents to children, with advanced features like user authentication and admin roles. Implemented a login system and assigned admin privileges to manage family data. Used MongoDB for database management and React for the frontend. Managed the project using Git and GitHub for version control."
                descriptionEnable={false}
            />

            <Card 
                img={Portfolio}
                alt={Portfolio}
                url='https://github.com/MohammadSalimGhannam/Portfolio.MG'
                Title="Portfolio (Personal Portfolio Website)"
                Role="Developer"
                Technologies="React, Vite, JavaScript, HTML, CSS, Git, GitHub"
                description="Designed and developed a personal portfolio website to showcase my skills, projects, and experience. Built with React and Vite for a fast and responsive user experience. Deployed the website using GitHub Pages and managed the codebase with Git and GitHub."
                descriptionEnable={false}
            />
            <Card 
                img={dental}
                alt={dental}
                url='https://github.com/MohammadSalimGhannam/DentalClinicManagement'
                Title="Dental Clinic Management"
                Role="Developer"
                Technologies="React, Vite, JavaScript, HTML, CSS, Git, GitHub"
                description="Designed and developed a comprehensive Dental Clinic Management System to streamline patient management, appointment scheduling, and billing processes, The application features patient records management, real-time appointment booking, and invoicing capabilities, enhancing the overall efficiency of clinic operations. maintained the codebase using Git and GitHub for version control and collaboration."
                descriptionEnable={false}
            />
            </div>
      </section>);
}

export default Experience;