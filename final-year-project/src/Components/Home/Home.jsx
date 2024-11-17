import React from 'react'
import awash from '../../Images/Awash-Woldia1.jpg';
import djbouti from '../../Images/Djbouti1.jpg';
import students from '../../Images/students2.jpg';
import classs from '../../Images/class.jpg';
import food1 from '../../Images/food1a.jpg';
import food2 from '../../Images/food2a.jpg';
import food3 from '../../Images/food3a.jpg';
import food4 from '../../Images/food4a.jpg';
import ourTeam from '../../Images/our-team-circle.png';
import ourTrain from '../../Images/our-train-circle.png';
import '../../App.css';
import './Home.css';

function Home() {
  return (
    <section>
        {/* Featured Destination*/}
        <div className='my-5'>
            <h3 className='text-center'>Featured destinations from Addis Ababa</h3>
            {/* <h3 className='fw-500 text-center d-flex'> <h3 className='fw-500 fw-bold'></h3></h3> */}
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
            <div className=' see d-flex row text-center'>
                <p className='col-md-4 py-3 text-secondary'>Explore more destination</p>
                <p className='col-md-4 py-3 border shadow rounded'>See more fares</p>
                <p className='col-md-4 py-3 text-secondary'>Be inspired by our route map</p>
            </div>
        </div>
        
        {/* Special Discount */}
        <div className='text-center container m-0'>
            <img className='w-100' src={students} alt="" />
            <div className='discountPromo'>
                <p>SPECIAL OFFER FOR STUDENTS</p>
                <h3 className='fs-1 fw-bold'>Students enjoy discounts and extras with us</h3>
                <p>Book your travel with Ethiopian rail to enjoy special discount, extra baggage allowance and more</p>
                <button className='more px-4 py-2'>Learn more</button>
            </div>
        </div>

        {/* Class Area */}
        <div className='class row'>
            <div className='clasLeft col-md-6 text-end'>
                <img src={classs} alt="#" />
            </div>
            <div className='classRight col-md-6 row gap-2 text-white'>
                <img className='col-md-6 p-1 shadow' src={food1} alt="#" />
                <img className='col-md-6 p-1 shadow' src={food2} alt="#" />
                <img className='col-md-6 p-1 shadow' src={food3} alt="#" />
                <img className='col-md-6 p-1 shadow' src={food4} alt="#" />
            </div>
        </div>

        {/* About Area */}
        <div className='text-center my-5'>
            <div className=''>
                <h3 className='fw-bold fs-1'>About us</h3>
                <p>Learn more about our history, our business and sustainability initiatives</p>
            </div>
            <div className='homeAbout d-flex gap-5'>
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
        </div>
    </section>
  )
}

export default Home