import Filter from './comp/Filter';
import './App.css';
import './comp/style.css'
import Navbar from './comp/Navbar';
import Cards from './comp/Cards';
import { apiUrl,filterdata } from './data';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Spinner from './comp/Spinner';
function App() {
  
    const [courses,setCourses]=useState(null);
    const [category,setCategory]=useState(filterdata[0].title);
    const [loading,setLoading]=useState(true);
    async function fetchData()
  {
    
    try{
      setLoading(true);
      let response=await fetch(apiUrl);
      let output=await response.json();
      setCourses(output.data);
    }
    catch(error){
      toast.error("network problem!!");

    }
    setLoading(false);
  }
  useEffect(()=>{
    fetchData();
  },[])
  return (
    <div className='top'>
     <div>
      <Navbar></Navbar>
     </div>
     <div>
      <Filter filterdata={filterdata}
      category={category} setCategory={setCategory}></Filter>
     </div>
     <div className='w-11/12 max-w-[1200px] justify-content-center mx-auto flex flex-wrap justify-center items-center min-h-[50vw]'> 
      {
        loading?(<Spinner/>):(<Cards category={category} courses={courses}/>)
      }
     </div>
    </div>
  );
}

export default App;
