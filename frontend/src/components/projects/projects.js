import React, { useEffect, useState } from "react";


function Projects(){
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/projects/')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                return response.json();
            })
            .then(data => setData(data))
            .catch(error => setError(error.message));
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            {data.map(project => (
                <p key={project.id}>{project.name}</p>
            ))}
        </div>
    );
};

export default Projects;