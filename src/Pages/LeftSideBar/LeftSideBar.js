import React, { useEffect, useState } from 'react';
import { Link,} from 'react-router-dom';
import Details from '../Details/Details';

const LeftSideBar = () => {
    const [courses, setCourses] = useState([])

    useEffect(()=>{
        fetch('https://be-skillful-server.vercel.app/courses')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    return (
        <div>
        <h3>Programs we Provide:</h3>
        <div>
            {
                courses?.map(course => <Details
                    key={course.id}
                    course={course}
                ></Details>)

            }
        </div>
    </div>
    );
};

export default LeftSideBar;