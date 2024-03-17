import React, { useState } from 'react';
import './style.css'
import Card from './Card';
function Cards(props)
{
    let category=props.category;
    let courses=props.courses;
    const [liked,setLiked]=useState([]);
    function getCourses()
    {
        if(category==="All")
        {
            let all=[];
        Object.values(courses).forEach(array=>{
            array.forEach(coursedata=>{
                all.push(coursedata);
            })
        }
            )
            return all;
        }
        else{
                return courses[category];
        }
        
    }
    return (<div className='topcard'><div className='cards'>
        {
            getCourses().map((course)=>(<Card key={course.id} course={course} liked={liked}
            setLiked={setLiked}/>))
        }

    </div> </div>);
}
export default Cards