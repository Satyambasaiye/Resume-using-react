import React from 'react';
import './Resume.css'; // Import the CSS file

const Resume = () => {
  return (<>
  
  
    <div className="resume-container">
      
      <div className="left-column">
        <h2>Satyam Basaiye</h2>

        <div className="summary"> 
        <h3>Summary</h3>         
          <p>Ambitious to kick start the career with globally
recognized organization which will give me global
exposure to enhance my skills and knowledge for
mutual benefits of the organization</p>
        </div>
        <div className="address">
          <h3>Address</h3>
          <p>Undangaon, tq. Sillod, Aurangabad- 431112 </p>
          <p>Phone: 9604249151</p>
          <p>Email: satyambsaiye123@email.com</p>
        </div>
       
        <div className="academic-details">
          <h3>Academic Details</h3>
          <p>B. Tech | 4rd year <br></br>
Mgm’s Jawaharlal
Nehru Engineering
College, Aurangabad
CGPA -9.02 </p>
<p>XII | 2019<br></br>
Jawahar Navodaya
Vidyalaya, Aurangabad
Percentage – 74.60% </p>
<p>
    X | 2017 <br></br>
Savitribai Phule high
school, Undangaon
Percentage – 88.80% 
</p>

        </div>
      </div>
      <div className="right-column">
      <div className="skills">
        <br></br>
        
          <h3>Skills</h3>
          <ul>
            <li>HTML </li>

            <li>CSS</li>
            <li>JavaScript</li>
            <li>Python</li>
            <li>Java</li>
            <li>Sql</li>
            <li>React</li>
          </ul>
        </div>
        <div className="certificates">
          <h3>Certificate</h3>
          <ul>
            <li>The joy of computing using python </li>
            <li><i>12-Weeks NPTEL course by IIT Ropar </i></li>
          </ul>
          <ul>
            <li> Introduction to Machine Learning  </li>
            <li><i>12-weeks NPTEL course by IIT madras</i> </li>
          </ul>
        </div>
        <div className="projects">
          <h3>Projects</h3>
          <ul>
            <li>Blockchain Based Online Auction System </li>
            <li><i>Decentralised system enabling users to create
and participate in auctions. </i></li>
          </ul>
        </div>
      </div>
    </div>
    </>
  );
  
};

export default Resume;
