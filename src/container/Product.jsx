import React, {useState, useEffect} from 'react';
import '../App.css';
import axios from 'axios';

export default function Products() {
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
  const bg = image[12].strCategoryThumb
  const style = {
    backgroundImage: bg,
  }
  return(
    <div style={style}>
      <h1 className='products'>PRODUCTS</h1>;
    </div>
  ) 
}
