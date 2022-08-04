import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Hero.css';

function HeroSection() {
  return (
    <div className='hero-container'>
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
    </div>
  );
}

export default HeroSection;
