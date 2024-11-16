import React from 'react'
import awash from '../../Images/Awash-Woldia1.jpg';
import djbouti from '../../Images/Djbouti1.jpg';
import students from '../../Images/students2.jpg';
import classs from '../../Images/class.jpg';
import food1 from '../../Images/food11.jpg';
import food2 from '../../Images/food21.jpg';
import food3 from '../../Images/food31.jpg';
import food4 from '../../Images/food41.jpg';
import ourTeam from '../../Images/our-team-circle.png';
import ourTrain from '../../Images/our-train-circle.png';
import '../../App.css';
import './Home.css';

function Home() {
  return (
    <section>
        <h3 className='fw-500 text-center'>Featured destinations from <span>Addis Ababa</span></h3>
        <div className='row d-flex gap-5 m-5'>
            <div className='col-md-4 rounded shadow ad'>
                <img src={awash} className=''  alt="#" />
                <div className='text-center'>
                    <p>Awash-weldia</p>
                    <p>Book Economy Class Return until 30 Nov 24</p>
                    <p>from 1,230 ETB</p>
                </div>
            </div>
            <div className='col-md-4 rounded shadow ad'>
                <img src={djbouti} alt="#" />
                <div className='text-center'>
                    <p>Djibouti</p>
                    <p>Book Economy Class Return until 30 Nov 24</p>
                    <p>from 1,230 ETB</p>
                </div>
            </div>
            <div className='col-md-4 rounded shadow ad'>
                <img src={awash} className=''  alt="#" />
                <div className='text-center'>
                    <p>Awash-weldia</p>
                    <p>Book Economy Class Return until 30 Nov 24</p>
                    <p>from 1,230 ETB</p>
                </div>
            </div>
        </div>
        <div className='row d-flex gap-5 m-5'>
            <div className='col-md-4 rounded shadow ad'>
                <img src={awash} className=''  alt="#" />
                <div className='text-center'>
                    <p>Awash-weldia</p>
                    <p>Book Economy Class Return until 30 Nov 24</p>
                    <p>from 1,230 ETB</p>
                </div>
            </div>
            <div className='col-md-4 rounded shadow ad'>
                <img src={djbouti} alt="#" />
                <div className='text-center'>
                    <p>Djibouti</p>
                    <p>Book Economy Class Return until 30 Nov 24</p>
                    <p>from 1,230 ETB</p>
                </div>
            </div>
            <div className='col-md-4 rounded shadow ad'>
                <img src={awash} className=''  alt="#" />
                <div className='text-center'>
                    <p>Awash-weldia</p>
                    <p>Book Economy Class Return until 30 Nov 24</p>
                    <p>from 1,230 ETB</p>
                </div>
            </div>
        </div>
        <div className='text-center m-5 more py-3'><p>See more fares</p></div>

        <div className='text-center'>
            <img src={students} alt="" />
            <div className='discountPromo'>
                <p>SPECIAL OFFER FOR STUDENTS</p>
                <h3 className='fs-1 fw-bold'>Students enjoy discounts and extras with us</h3>
                <p>Book your travel with Ethiopian rail to enjoy special discount, extra baggage allowance and more</p>
                <button className='more px-4 py-2'>Learn more</button>
            </div>
        </div>

        <div className='class row bg-dark container-fluid'>
            <div className='classleft col-md-6'>
                <img src={classs} alt="#" />
            </div>
            <div className='classRight col-md-6 row text-white'>
                {/* <img className='col-md-6 p-1' src={food1} alt="#" />
                <img className='col-md-6 p-1' src={food2} alt="#" />
                <img className='col-md-6 p-1' src={food3} alt="#" />
                <img className='col-md-6 p-1' src={food4} alt="#" /> */}
                <p className='col-md-6 border border-light gap-1'>jjdmkwkm</p>
                <p className='col-md-6 border border-light gap-1'>ncjwkwcc</p>
                <p className='col-md-6 border border-light gap-1'>nncwlknc</p>
                <p className='col-md-6 border border-light gap-1'>ndwknnjd</p>
            </div>
        </div>

        <div>
            <h3 className='text center fw-bold fs-1'>About us</h3>
            <p>Learn more about our history, our business and sustainability initiatives</p>
        </div>
        
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