import React from 'react'
import awash from '../../Images/Awash-Woldia1.jpg';
import djbouti from '../../Images/Djbouti1.jpg';
import './Home.css';

function Home() {
  return (
    <section>
        <h3>Featured destinations from Addis Ababa</h3>
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
        <br />
        <br />
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
    </section>
  )
}

export default Home