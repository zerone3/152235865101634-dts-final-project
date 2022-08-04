import React, {useState, useEffect} from 'react';
import './Cards.css';
import Card from './Card';
import axios from 'axios';


function Cards() {
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
  },[ loading])
  console.log(image[3].strCategoryThumb)
  // console.log(image.hasOwnProperty('strCategory'))
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <Card
              src={image[0].strCategoryThumb}
              text={image[0].strCategoryDescription}
              label={image[0].strCategory}
              path='/service'
            />
            <Card
              src={image[1].strCategoryThumb}
              text={image[1].strCategoryDescription}
              label={image[1].strCategory}
              path='/service'
            />
          </ul>
          <ul className='cards__items'>
            <Card
              src={image[4].strCategoryThumb}
              text={image[4].strCategoryDescription}
              label={image[4].strCategory}
              path='/service'
            />
            <Card
              src={image[6].strCategoryThumb}
              text={image[6].strCategoryDescription}
              label={image[6].strCategory}
              path='/product'
            />
            <Card
              src={image[7].strCategoryThumb}
              text={image[7].strCategoryDescription}
              label={image[7].strCategory}
              path='/signup'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;