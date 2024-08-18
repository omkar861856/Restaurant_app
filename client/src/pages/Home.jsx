//src/pages/Home.js
import './Home.css';
import { Link } from 'react-router-dom';


// Import images
import dish1 from '../images/dish1.jpg';
import dish2 from '../images/dish2.jpg';
import dish3 from '../images/dish3.jpg';
import heroImage from '../images/hero.jpg'

const Home = () => (
  <div>
    <main className="home">
      <section className="hero" 
      style={{ backgroundImage: `url(${heroImage})` }}>
        <h1>Welcome to Our Restaurant</h1>
        <p>Discover our delicious menu and book a table.</p>
        <Link to="/reservation" className="cta-button">Book a Table</Link>
      </section>

      <section className="featured-dishes">
        <h2>Featured Dishes</h2>
        <div className="dishes">
          <div className="dish">
            <img src={dish1} alt="Dish 1" />
            <h3>Paneer Butter Masala</h3>
            <p> rich & creamy curry made with paneer, spices, onions, tomatoes, cashews and butter.</p>
          </div>
          <div className="dish">
            <img src={dish2} alt="Dish 2" />
            <h3>Fried Rice</h3>
            <p>stir frying cooked rice in a wok with vegetables, soya sauce.</p>
          </div>
          <div className="dish">
            <img src={dish3} alt="Dish 3" />
            <h3>South Indian Meals</h3>
            <p>chapati/paratha, plain rice, bisi bele bath, sambhar, a veg stew dish, 
              fresh curd and papadum along with various vegetable preparations and some condiments</p>
          </div>
        </div>
      </section>

      <section className="customer-reviews">
        <h2>What Our Customers Say</h2>
        <div className="reviews">
          <div className="review">
            <p>"Amazing food and great service! Highly recommend."</p>
            <span>- Nithya</span>
          </div>
          <div className="review">
            <p>"Simply delicious food that keeps you coming back for more."</p>
            <span>- Sudeep</span>
          </div>
          <div className="review">
            <p>"The best dining experience I've had in a long time."</p>
            <span>- Thalsleem</span>
          </div>
          <div className="review">
            <p>"Exceptional dining experience, from the first bite to the last."</p>
            <span>- Venkatesh</span>
          </div>
          <div className="review">
            <p>"Excellent atmosphere and delicious meals."</p>
            <span>- Swapna</span>
          </div>
        </div>
      </section>
    </main>
  </div>
);

export default Home;
