import React from 'react';
import './Education.css';
import EducationCard from '../../components/educationCard/EducationCard';
import { educationInfo } from '../../portfolio';

// error: you need to resolve your current index first

export default function Education() {
   if(educationInfo.viewEducation){
    return (
      <div className="education-section" id="education">
          <h1 className="education-heading">Education</h1>
          <div className="education-card-container">
            {educationInfo.schools.map((school) => (
              <EducationCard school={school} />
            ))}
          </div>
      </div>
    );
  }
  return null;
}
