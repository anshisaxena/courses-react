import React from "react";
import './style.css'
function Filter(props)
{
    let category=props.category;
    let setCategory=props.setCategory;
    let filterdata=props.filterdata;
    function filterHandler(title)
    {
        setCategory(title);
    }
    return(
        <div className="filter">
            {
                filterdata.map((data)=>{
                    return(<button className="btn"
                     key={data.id}
                     onClick={()=>filterHandler(data.title)}>{data.title}</button>);
                })
            }
        </div>
    );
}
export default Filter;