import React from "react";
import {FcLike,FcLikePlaceholder} from "react-icons/fc";
import { toast } from "react-toastify";

function Card(props)
{
    let course=props.course;
    let liked=props.liked;
    let setLiked=props.setLiked;
    function clickHandler()
    {
        if(liked.includes(course.id))
        {
            setLiked((prev)=>prev.filter((cid)=>(cid!==course.id)));
            toast.warning("like removed!!");
        }
        else{
            if(liked.length===0)
            {
                setLiked([course.id]);
            }
            else{
                setLiked((prev)=>[...prev,course.id]);
                
            }
            toast.success("liked successfully");
        }
    }
return(
    <div className="card">
        <div className="image">
            <img src={course.image.url}/>
            <div className="like">
            <button onClick={clickHandler}>
            {
                !liked.includes(course.id)?(<FcLikePlaceholder fontSize="2rem"></FcLikePlaceholder>):(<FcLike fontSize="2rem"></FcLike>)
            }
            </button>
        </div>
        </div>
        
        <div className="text">
            <p className="title">
                {course.title}
            </p>
            <p>
                {
                    course.description.length>100?
                    (course.description.substr(0,100)+"...")
                    :(course.description)
                }
            </p>
        </div>

    </div>
);
}
export default Card;