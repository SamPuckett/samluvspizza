import React from 'react';
import './MoreProjects.css';

import Box from './Box';

const MoreProjects = () => {
  return (
    <div className='more-projects-container'>
      <h3 className='more-projects-header'>More Projects</h3>
      <div className='more-projects-main-column'>
        <div className='more-projects-first-row'>
          <Box
            link='https://sampuckett.github.io/monsters-rolodex/'
            projectName='Monster Rolodex'
            projectDescription='A monster rolodex that includes search functionality!'
            techStack='React | Netlify | RoboHash API'
          />
          <Box
            link='https://sampuckett.github.io/'
            projectName='Old Portfolio'
            projectDescription='My first portfolio website.'
            techStack='React | Bootstrap | GitHub'
          />
          <Box
            link='https://vetfinder.best/'
            projectName='Vetfinder'
            projectDescription='Quickly find the closest vet hospital in an emergency!'
            techStack='HTML | CSS | JavaScript | Lyft API'
          />
        </div>
        <div className='more-projects-second-row'>
          <Box
            link='https://devpost.com/software/greengenefood'
            projectName='GreenGene'
            projectDescription='Find out where your food comes from! (Hackathon Winner)'
            techStack='JavaScript | Google Cloud Platform'
          />
          <Box
            link='https://devpost.com/software/pantori'
            projectName='Pantori'
            projectDescription='Power up your food pantry!'
            techStack='JavaScript | Google Cloud Platform'
          />
          <Box
            link='https://devpost.com/software/snapshop-ktar34'
            projectName='Snapshop'
            projectDescription='Find out where your food comes from! (Hackathon Winner)'
            techStack='JavaScript | Heroku | Python'
          />
        </div>
      </div>
    </div>
  );
};

export default MoreProjects;
