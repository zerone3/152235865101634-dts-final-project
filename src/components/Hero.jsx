import React, {useState, useEffect} from 'react';
import '../App.css';
import { Button } from './Button';
import './Hero.css';
import axios from 'axios';

function HeroSection() {
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
  return (<>{image && <div className='hero-container' style={{background: 'url('+image[5].strCategoryThumb+')center center/cover no-repeat'}}>
  <h1>WELCOME TO MUKBANG</h1>
  <p>What are you want for eat?</p>
  <div className='hero-btns'>
    <Button
      className='btns'
      buttonStyle='btn--outline'
      buttonSize='btn--large'
    >
      GET STARTED
    </Button>
  </div>
</div>}</>
    
  );
}

export default HeroSection;
