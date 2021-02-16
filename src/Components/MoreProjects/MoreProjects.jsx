import React from "react";
import "./MoreProjects.css";

import Box from "./Box";

const MoreProjects = () => {
  return (
    <div className="more-projects-container">
      <h3 className="more-projects-header">More Projects</h3>
      <div className="more-projects-main-column">
        <div className="more-projects-first-row">
          <Box
            link="https://wildfiretracker.netlify.app/"
            projectName="Wildfire Tracker"
            projectDescription="A JAM Stack Web App that tracks wildfires using NASA's API.!"
            techStack="React | Netlify | NASA API"
          />
          <Box
            link="https://50reactprojects50days.netlify.app/"
            projectName="50 React Projects 50 Days"
            projectDescription="Creating 50 React Projects in 50 Days."
            techStack="React | CSS | JS"
          />
          <Box
            link="https://vetfinder.best/"
            projectName="Vetfinder"
            projectDescription="Quickly find the closest vet hospital in an emergency!"
            techStack="HTML | CSS | JavaScript | Lyft API"
          />
        </div>
        <div className="more-projects-second-row">
          <Box
            link="https://devpost.com/software/greengenefood"
            projectName="GreenGene"
            projectDescription="Find out where your food comes from! (Hackathon Winner)"
            techStack="JavaScript | Google Cloud Platform"
          />
          <Box
            link="https://devpost.com/software/pantori"
            projectName="Pantori"
            projectDescription="Power up your food pantry!"
            techStack="JavaScript | Google Cloud Platform"
          />
          <Box
            link="https://devpost.com/software/snapshop-ktar34"
            projectName="Snapshop"
            projectDescription="Find out where your food comes from! (Hackathon Winner)"
            techStack="JavaScript | Heroku | Python"
          />
        </div>
      </div>
    </div>
  );
};

export default MoreProjects;
