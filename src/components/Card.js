import React from 'react';

function Card({ data }) {
  const {
    name,
    minAge,
    maxAge,
    standardizationType,
    adaptiveBehaviors,
    ecologicalAssessments,
    grossMotorSkills,
    healthRelatedFitness,
    objectControlSkills,
    perceptualMotorFunction,
    preambulatoryBehaviors,
    sportsSkills,
    independentAmbulation,
    assistedAmbulation,
    nonAmbulatory,
    referenceType,
    timeToAdminister,
    cost,
    link
  } = data;

  const focusAreas = [
    adaptiveBehaviors && "Adaptive behaviors",
    ecologicalAssessments && "Ecological assessments",
    grossMotorSkills && "Gross motor skills",
    healthRelatedFitness && "Health-related fitness",
    objectControlSkills && "Object control skills",
    perceptualMotorFunction && "Perceptual motor function",
    preambulatoryBehaviors && "Preambulatory behaviors",
    sportsSkills && "Sports skills"
  ].filter(Boolean);

  const ambulationTypes = [
    independentAmbulation && "Independent ambulation",
    assistedAmbulation && "Assisted ambulation",
    nonAmbulatory && "Non-ambulatory"
  ].filter(Boolean);

  return (
    <div className="card">
      <h3>{name}</h3>
      <p><strong>Age: </strong>{minAge === 0 && maxAge 
          ? `Up to ${maxAge} years` 
          : minAge > 0 && !maxAge 
          ? `${minAge} years and older` 
          : minAge === 0 && !maxAge 
          ? 'All ages' 
          : `${minAge} - ${maxAge} years`}
      </p>
      <p><strong>Standardization:</strong> {standardizationType}</p>
      <p><strong>Focus Areas: </strong> {focusAreas.join(', ')}</p>
      <p><strong>Ambulation Type: </strong> {ambulationTypes.join(', ')}</p>
      
      {/*Fix render if type is N/A*/}
      <p><strong>Reference Type: </strong> {referenceType || 'Not available'}</p>

      {/*Fix render if time is N/A*/}
      <p><strong>Time to Administer: </strong> {timeToAdminister ? `${timeToAdminister} minutes` : 'Not available'}</p>

      {/*Fix render if cost is N/A*/}
      <p><strong>Cost: </strong> {cost ? `${cost}` : 'Not available'}</p>

      <a href={link} target="_blank" rel="noopener noreferrer">View Assessment</a>
    </div>
  );
}

export default Card;
