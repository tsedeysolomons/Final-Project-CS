import React from 'react'
import awash from '../../Images/Awash-Woldia1.jpg';
import djbouti from '../../Images/Djbouti1.jpg';
import students from '../../Images/students2.jpg';
import ourTeam from '../../Images/our-team-circle.png';
import ourTrain from '../../Images/our-train-circle.png';
import './Home.css';

function Home() {
  return (
    <section>
        <h3><span>Featured destinations from </span>Addis Ababa</h3>
        <div className='home'>
            <div>
                <img src={awash} alt="#" />
                <p>Awash-weldia</p>
                <p>Book Economy Class Return until 30 Nov 24</p>
                <p>from 1,230 ETB</p>
            </div>
            <div>
                <img src={djbouti} alt="#" />
                <p>Djibouti</p>
                <p>Book Economy Class Return until 30 Nov 24</p>
                <p>from 1,230 ETB</p>
            </div>
            <div>
                <img src={awash} alt="#" />
                <p>Awash-weldia</p>
                <p>Book Economy Class Return until 30 Nov 24</p>
                <p>from 1,230 ETB</p>
            </div>
        </div>
        <div className='home'>
            <div>
                <img src={awash} alt="#" />
                <p>Awash-weldia</p>
                <p>Book Economy Class Return until 30 Nov 24</p>
                <p>from 1,230 ETB</p>
            </div>
            <div>
                <img src={djbouti} alt="#" />
                <p>Djibouti</p>
                <p>Book Economy Class Return until 30 Nov 24</p>
                <p>from 1,230 ETB</p>
            </div>
            <div>
                <img src={awash} alt="#" />
                <p>Awash-weldia</p>
                <p>Book Economy Class Return until 30 Nov 24</p>
                <p>from 1,230 ETB</p>
            </div>
        </div>
        <div className='more'><p>See more fares</p></div>
        <div className='discount'>
            <img src={students} alt="" />
            <div className='discountPromo'>
                <p>SPECIAL OFFER FOR STUDENTS</p>
                <h3>Students enjoy discounts and extras with us</h3>
                <p>Book your travel with Ethiopian rail to enjoy special discount, extra baggage allowance and more</p>
                <button className=''>Learn more</button>
            </div>
        </div>
        <h3>About us</h3>
        <p>Learn more about our history, our business and sustainability initiatives</p>
        <div className='homeAbout'>
            <div>
                <img src={ourTrain} alt="#" />
                <p>Our Business</p>
            </div>
            <div>
                <img src={ourTeam} alt="#" />
                <p>Our Team</p>
            </div>
            <div>
                <img src={ourTrain} alt="#" />
                <p>Our Train</p>
            </div>
             <div>
                <img src={ourTeam} alt="#" />
                <p>Our Team</p>
            </div>
        </div>
    </section>
  )
}

export default Home