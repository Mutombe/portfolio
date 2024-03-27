import ProjectsPage from "../projects-page/projects-page";
import React, { useState } from 'react';
import './home.css';
import { MyComponent } from "../../design-util";

function HomePage() {
 return (
    <div className="my-div">
      <ProjectsPage />
    </div>
 );
}


export default HomePage


