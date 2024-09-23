import React from 'react';

function Header() {

  return (
    <div className='Header'>
        <h1>Adapted Physical Education Assessment Tools</h1>
        <h2>Quickly find the appropriate assessment tools for your students with disabilities in physical education.</h2>
        <div className='Mandates'>
            <p>The Individuals with Disabilities Education Act (2004) mandates the following:</p>
            <li>Parent/family permission obtained prior to assessment.</li>
            <li>A standardized assessment must be used for initial, triannual, and exit assessments (unless the IEP team determines otherwise).</li>
            <li>Assessments must be administered in the student's primary language/preferred method of communication.</li>
            <li>Assessments must be administered by trained personnel using instructions provided by their producer.</li>
            <li>Multiple assessments must be used.</li>
        </div>
    </div>
  );
}

export default Header;
