import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding"> 
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef"/>
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What We Believe In</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote"/>
          <p className="p__opensans">Welcome to Swagath, where every bite is a journey through the rich and diverse flavors of North Indian cuisine. Our culinary artisans skillfully blend traditional recipes with a modern twist, creating a symphony of tastes that will transport you straight to the heart of India. From the aromatic spices of Punjab to the delectable kebabs of Lucknow, our menu is a celebration of the region's vibrant culinary heritage. At Swagath, we invite you to savor the essence of North India, where every dish tells a story of tradition, passion, and exquisite taste. Indulge in the warmth of our hospitality as we embark on a gastronomic adventure together</p>
        </div>

        <div className="app__chef-sign">
          <p>Rajendra Kapoor</p>
          <p className="p__opensans">Chef & Founder</p>
        </div>

      </div>
    </div>
  </div>
);

export default Chef;
