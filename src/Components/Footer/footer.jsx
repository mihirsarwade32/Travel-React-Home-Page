import React, {useEffect} from 'react';
import './footer.css';
import video1 from '../../Asset/video4.mp4'
import { FiSend } from "react-icons/fi"
import { MdTravelExplore } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { SiTripadvisor } from "react-icons/si";
import { FiChevronRight } from "react-icons/fi";

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

    useEffect(()=>{
        Aos.init({duration:2000})
    }, [])



    return (
        <section className='footer'>
            <div className="videoDiv">
                <video src={video1} loop autoPlay muted type="video/mp4"></video>
            </div>

            <div className="secContent container">
                <div className="contactDiv flex">
                    <div data-aos="fade-up" className="text">
                        <small>KEEP IN TOUCH</small>
                        <h2>Travel With Us</h2>
                    </div>

                    <div className="inputDiv flex">
                        <input type="text" placeholder='Enter E-mail Address' />
                        <button data-aos="fade-up" className='btn flex' type='submit'>SEND <FiSend className='icon' /></button>
                    </div>
                </div>

                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href="#" className='logo flex'><MdTravelExplore className='icon' />MyTravel</a>
                        </div>

                        <div data-aos="fade-up" className="footerParagraph">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat pariatur soluta dolore alias tempora accusantium ex eveniet consectetur ab! Voluptas, quasi vitae perferendis fugit labore ut nulla nihil totam magnam!
                        </div>

                        <div data-aos="fade-up" className="footerSocials flex">
                            <AiOutlineTwitter className='icon' />
                            <AiOutlineYoutube className='icon' />
                            <AiOutlineInstagram className='icon' />
                            <SiTripadvisor className='icon' />
                        </div>

                    </div>



                    <div  className="footerLinks grid">

                        {/* {One Group} */}
                        <div data-aos="fade-up" data-aos-duration="4500" className="linkGroup">
                            <span className="groupTitle">
                                OUR AGENCY
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Services
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Insurance
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Agency
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Tourism
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Payment
                            </li>

                        </div>

                        {/* {Second Group} */}
                        <div data-aos="fade-up" data-aos-duration="4500" className="linkGroup">
                            <span className="groupTitle">
                                PARTNERS
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Bookings
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Rent Cars 
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Hostel World
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Trivago
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Trip Advisor
                            </li>

                        </div>

                        {/* {Third Group} */}
                        <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
                            <span className="groupTitle">
                                LAST MINUTE
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                London
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                California
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Indonesia
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Europe
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon' />
                                Oceania
                            </li>

                        </div>

                    </div>

                    <div className="footerDiv flex">
                        <small>BEST TRAVEL WEBSITE THEME</small>
                        <small>COPYRIGHT&copy; REVERSED - MIHIR SARWADE</small>
                    </div>




                </div>
            </div>

        </section>
    )
}

export default Footer