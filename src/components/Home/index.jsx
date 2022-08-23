import React from 'react';

import HomeImageSlider from './../Home/HomeImageSlider';
import Services from './../Home/Services';
import LearnPart from './../Home/LearnPart';
import PostPart from './../Home/PostPart';

import './../../assets/styles/home/home.css';

import slider1 from '../../assets/images/iStock-623680490.jpg';
import slider2 from '../../assets/images/iStock-486715676.jpg';
import slider3 from '../../assets/images/iStock-491208056.jpg';

import bkimage1 from '../../assets/images/58c7e1b9daa10d5c07c32ba4_Image-Home@2x.png';
import bkimage2 from '../../assets/images/58c7e45dfb3921d4300040ec_BG-Home-JumpOff@2x.jpg';
import bkimage3 from '../../assets/images/58c7e98a9bb812e84c0e318d_BG-Home-Bottom@2x.jpg';

class Home extends React.Component {
  render() {
    var postContents = [
      {
        title: '24/7 access to leading doctors and nurses',
        description: 'Great care begins with great medical professionals. Our on-staff professionals bring deep experience in fertility and recognition as leaders in their field. We match you with a highly-rated fertility doctor, and we only work with the best.'
      }, {
        title: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet',
        description: 'Nullam quis risus eget urna mollis ornare vel eu leo. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Maecenas sed diam eget risus varius blandit sit amet non magna. Donec id elit non mi porta gravida at eget metus.'
      }
    ];
    return (
      <div className="home">
        <HomeImageSlider />
        <Services />
        <LearnPart backgroundImage={bkimage1} postContent={postContents[0]} xsOffset={6} />
        <PostPart backgroundImage={bkimage2} overlayColor={'#FBFBFB'} />
        <LearnPart backgroundImage={bkimage3} overlayColor={'#3CB9B9'} postContent={postContents[1]} />
      </div>
    );
  }
}

export default Home;
