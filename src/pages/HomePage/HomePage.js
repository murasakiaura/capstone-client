import './HomePage.scss';
import { Link } from 'react-router-dom';
import hero from '../../assets/images/hero.png';
import cat from "../../assets/images/cat.png";
import rabbit from "../../assets/images/rabbit.png";
import panda from "../../assets/images/panda.png";
import seaturtle from "../../assets/images/seaturtle.png";
import sealion from "../../assets/images/sealion.png";
import dolphin from "../../assets/images/dolphin2.png";
import penguin from "../../assets/images/penguin.png";
import polarbear from "../../assets/images/polarbear.png";
import bird from "../../assets/images/bird.png";


const HomePage = () => {
  return (
    <div className="home-page">


      {/* Hero Section */}
      <section className="hero">
        <div className="hero__container">
          <h2 className="hero__title">Find Your Perfect Buddy</h2>
          <div className="hero__section">  
          <img className="hero__image" src={hero} alt="Hero image" />
          <p className="hero__description">
          Adopt a pet or sponsor a sea creature and make a global impact, from land to sea, making the world a kinder place.
          </p>
          </div>
          <Link to="/listings" className="hero__button">Browse</Link>
        </div>
      </section>

      {/* Main Section with 3 Images */}
      <section className="main-section">
  <div className="main-section__container">
    <h3 className="main-section__title">Change a Life, Change the World</h3>
    <p className="main-section__description">
      On Little Buddy Street, your adoption or sponsorship makes a global impact. Whether you're welcoming a dog or cat into your home, or sponsoring their care, you're helping create a better world—one furry friend at a time.
    </p>
    <p className="main-section__description">
      Start by choosing your new buddy: playful pups, curious cats, or loyal companions from all over the world. Let’s make the world a kinder place, one adoption at a time.
    </p>
  
  

   
    <div className="main-section__category">
      <div className="main-section__category-container">
      <p className="main-section__caption">Land Animals</p>
      
 <img className="main-section__image" src={cat} alt="Cat for adoption"/>
 <img className="main-section__image" src={panda} alt="panda for adoption"/>
 <img className="main-section__image" src={rabbit} alt="Others for adoption"/>
  
      
 </div>
 
      <div className="main-section__category-container">
      <p className="main-section__caption">Sea Animals</p>
      <img className="main-section__image" src={seaturtle} alt="Sea turtle for adoption"/>
 <img className="main-section__image" src={sealion} alt="Sealion for adoption"/>
 <img className="main-section__image" src={dolphin} alt="Dolphin for adoption"/>
        
      </div>
      <div className="main-section__category-container">
      <p className="main-section__caption">Other Animals</p>
      <img className="main-section__image" src={penguin} alt="Penguin for adoption"/>
 <img className="main-section__image" src={polarbear} alt="Polarbear for adoption"/>
 <img className="main-section__image" src={bird} alt="Bird for adoption"/>
     
      </div>
      </div>
    </div>
</section>

      {/* About Section */}
      <section className="about-section">
  <div className="about-section__container">
    <h3 className="about-section__title">Why Little Buddy Street?</h3>
    <p className="about-section__description">
      Little Buddy Street isn't just a pet adoption platform—it's a global movement. We partner with shelters and charities worldwide to help animals find loving homes while promoting ethical adoption practices.
    </p>
    <p className="about-section__description">
      By adopting a dog, cat, or any other animal, you're contributing to a charitable cause that spans continents. Whether you adopt or sponsor, your support helps us rescue, care for, and place animals in safe homes, while also fighting against animal homelessness and cruelty.
    </p>
    <p className="about-section__description">
      Together, we can make a difference—one adoption at a time.
    </p>
  </div>
</section>

    </div>
  );
};


export default HomePage;