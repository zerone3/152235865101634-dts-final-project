import React, {useState, useEffect} from 'react';
// import '../App.css';
import axios from 'axios';

export default function Services() {
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);
  useEffect(()=> {
    try {
      setLoading(true);
      axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(res => {
        setImage(res.data.categories);
        setLoading(false);
      })
      
    } catch (error) {
      console.log(error)
      setLoading(false);
    }
  },[image, loading])

  return(
    <>
      {image &&  
        <div >
    <h1 className='services' style={{background: 'url('+image[13].strCategoryThumb+')center center/cover no-repeat'
                      }}>SERVICES</h1>
  </div>}
    </>
    
  ) 
}
