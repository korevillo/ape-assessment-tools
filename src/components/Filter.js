import React from 'react';

function Filter({ filters, setFilters, clearFilters }) {
  const handleInputChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;

    if (checked) {
      setFilters({ ...filters, [name]: [...filters[name], value] });
    } else {
      setFilters({
        ...filters,
        [name]: filters[name].filter((option) => option !== value)
      });
    }
  };

  return (
    <div className="filter-container">
      {/* Age Filter */}
      <div>
        <label>Age: </label>
        <input
          type="number"
          name="age"
          value={filters.age}
          onChange={handleInputChange}
        />
      </div>

      {/* Standardization Type Filter */}
      <div>
        <label>Standardization Type: </label>
        <label>
          <input
            type="checkbox"
            name="standardizationType"
            value="Standardized"
            onChange={handleCheckboxChange}
            checked={filters.standardizationType.includes("Standardized")}
          />
          Standardized
        </label>
        <label>
          <input
            type="checkbox"
            name="standardizationType"
            value="Non-standardized"
            onChange={handleCheckboxChange}
            checked={filters.standardizationType.includes("Non-standardized")}
          />
          Non-Standardized
        </label>
      </div>

      {/* Focus Areas Filter */}
      <div>
        <label>Focus Areas: </label>
        <label>
          <input
            type="checkbox"
            name="focusAreas"
            value="adaptiveBehaviors"
            onChange={handleCheckboxChange}
            checked={filters.focusAreas.includes("adaptiveBehaviors")}
          />
          Adaptive behaviors
        </label>
        <label>
          <input
            type="checkbox"
            name="focusAreas"
            value="ecologicalAssessments"
            onChange={handleCheckboxChange}
            checked={filters.focusAreas.includes("ecologicalAssessments")}
          />
          Ecological assessments
        </label>
        <label>
          <input
            type="checkbox"
            name="focusAreas"
            value="grossMotorSkills"
            onChange={handleCheckboxChange}
            checked={filters.focusAreas.includes("grossMotorSkills")}
          />
          Gross motor skills
        </label>
        <label>
          <input
            type="checkbox"
            name="focusAreas"
            value="healthRelatedFitness"
            onChange={handleCheckboxChange}
            checked={filters.focusAreas.includes("healthRelatedFitness")}
          />
          Health-related fitness
        </label>
        <label>
          <input
            type="checkbox"
            name="focusAreas"
            value="objectControlSkills"
            onChange={handleCheckboxChange}
            checked={filters.focusAreas.includes("objectControlSkills")}
          />
          Object control skills
        </label>
        <label>
          <input
            type="checkbox"
            name="focusAreas"
            value="perceptualMotorFunction"
            onChange={handleCheckboxChange}
            checked={filters.focusAreas.includes("perceptualMotorFunction")}
          />
          Perceptual motor function
        </label>
        <label>
          <input
            type="checkbox"
            name="focusAreas"
            value="preambulatoryBehaviors"
            onChange={handleCheckboxChange}
            checked={filters.focusAreas.includes("preambulatoryBehaviors")}
          />
          Preambulatory behaviors
        </label>
        <label>
          <input
            type="checkbox"
            name="focusAreas"
            value="sportsSkills"
            onChange={handleCheckboxChange}
            checked={filters.focusAreas.includes("sportsSkills")}
          />
          Sports skills
        </label>
      </div>

      {/* Ambulation Type Filter */}
      <div>
        <label>Ambulation Type: </label>
        <label>
          <input
            type="checkbox"
            name="ambulationType"
            value="independentAmbulation"
            onChange={handleCheckboxChange}
            checked={filters.ambulationType.includes("independentAmbulation")}
          />
          Independent Ambulation
        </label>
        <label>
          <input
            type="checkbox"
            name="ambulationType"
            value="assistedAmbulation"
            onChange={handleCheckboxChange}
            checked={filters.ambulationType.includes("assistedAmbulation")}
          />
          Assisted Ambulation
        </label>
        <label>
          <input
            type="checkbox"
            name="ambulationType"
            value="nonAmbulatory"
            onChange={handleCheckboxChange}
            checked={filters.ambulationType.includes("nonAmbulatory")}
          />
          Non-Ambulatory
        </label>
      </div>

      {/* Reference Type Filter */}
      <div>
        <label>Reference Type: </label>
        <label>
          <input
            type="checkbox"
            name="referenceType"
            value="Norm-referenced"
            onChange={handleCheckboxChange}
            checked={filters.referenceType.includes("Norm-referenced")}
          />
          Norm-referenced
        </label>
        <label>
          <input
            type="checkbox"
            name="referenceType"
            value="Criterion-referenced"
            onChange={handleCheckboxChange}
            checked={filters.referenceType.includes("Criterion-referenced")}
          />
          Criterion-referenced
        </label>
      </div>

      {/* Clear Filters Button */}
      <button onClick={clearFilters}>Clear Filters</button>
    </div>
  );
}

export default Filter;
