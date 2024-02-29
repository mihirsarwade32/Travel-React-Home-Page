import React, {useEffect} from 'react';
import './main.css';
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import img from '../../Asset/img.jpeg'
import img2 from '../../Asset/img2.jpeg'
import img3 from '../../Asset/img3.jpeg'
import img4 from '../../Asset/img4.jpeg'
import img5 from '../../Asset/img5.jpeg'
import img6 from '../../Asset/img6.jpeg'
import img7 from '../../Asset/img7.jpeg'
import img8 from '../../Asset/img8.jpeg'
import img9 from '../../Asset/img9.jpeg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
    {
        id: 1,
        imgSrc: img,
        destTitle: 'Bora Bora',
        location: 'New Zealand',
        grade: 'CULTURAL RELAX',
        fees: 'Rs.100000',
        description: 'The epitome of romance, bora Bora is one of the best travel destinations in teh world. This place is known for its luxurious stays and adventurous activities.'
    },

    {
        id: 2,
        imgSrc: img2,
        destTitle: 'Machu Picchu',
        location: 'Peru',
        grade: 'CULTURAL RELAX',
        fees: 'Rs.150000',
        description: 'Huayana Picchu is a mountain in Peru, rising over Machu Picchu, the so-called Lost city of Icans. This place is popular among tourists as the sunrise from the Sun Gate is simply spectacular'
    },

    {
        id: 3,
        imgSrc: img3,
        destTitle: 'Great Barrier Reef',
        location: 'Australia',
        grade: 'CULTURAL RELAX',
        fees: 'Rs.60000',
        description: 'One the most remarkable Australian natural gifts is the Great Barrier Reef. The hallmark of this place is lavish and beauty. Always interesting to be in this place.'
    },

    {
        id: 4,
        imgSrc: img4,
        destTitle: 'Cappadocia',
        location: 'Turkey',
        grade: 'CULTURAL RELAX',
        fees: 'Rs.50000',
        description: 'According to the world Tourism Ranking, 45 million people visit Turkey each year, and from that about 2 million come to visit Cappadocia. This place is known for its luxurious and adventurous activities'
    },

    {
        id: 5,
        imgSrc: img5,
        destTitle: 'Guanajuato',
        location: 'Mexixo',
        grade: 'CULTURAL RELAX',
        fees: 'Rs.130000',
        description: 'A city in central Mexico, Guanajuato is known for its history of silver mining and colonial architecture. the houses in the city are very attractively painted with the most bright colors available. Always Welcome!'
    },

    {
        id: 6,
        imgSrc: img6,
        destTitle: 'Cinque Teree',
        location: 'Italy',
        grade: 'CULTURAL RELAX',
        fees: 'Rs.40000',
        description: 'The vibrant hues of the houses are its benchmark and explain the beauty of this place. Also, if you are a foodie and love seafood, you will be exhilarated with teh choice you are about to get here. Happy exploring great Food!'
    },

    {
        id: 7,
        imgSrc: img7,
        destTitle: 'Angkor Wat',
        location: 'Combodia',
        grade: 'CULTURAL RELAX',
        fees: 'Rs.70000',
        description: 'Angkot wat represents the entire range of Khmer art from the 9th to the 15th century. This temple is considered teh heart and soul of Combodia. This place is known for its luxurious stays and adventurous activities'
    },

    {
        id: 8,
        imgSrc: img8,
        destTitle: 'Taj Mahal',
        location: 'India',
        grade: 'CULTURAL RELAX',
        fees: 'Rs.30000',
        description: 'An immense mausoleum of white marble, built-in  Agra by Mughal emperor Shah Jahan in memory of his wife Mumtaz, the monument is  breathtaking beautiful. This place is known for its luxurious stays amd adventurous activities'
    },

    {
        id: 9,
        imgSrc: img9,
        destTitle: 'Bali Island',
        location: 'Indonesia',
        grade: 'CULTURAL RELAX',
        fees: 'Rs.20000',
        description: 'Bali is an Indonesian Island and one of the best holiday destinations in the Indonesian archipelago. Bali is known for its volcanic mountains, history, art and culture, food, temples and beautiful sandy beaches'
    }

]


const Main = () => {

    useEffect(()=>{
        Aos.init({duration:2000})
    }, [])
    
    return (
        <section className='main container section'>
            <div className="secTitle">
                <h3 data-aos="fade-right" className="title">Most Visited Destinations</h3>
            </div>

            <div className="secContent grid">
                {
                    Data.map(({ id, imgSrc, destTitle, location, grade, fees, description }) => {
                        return (
                            <div key={id} data-aos="fade-up" className="singleDestination">
                                <div className="imageDiv">
                                    <img src={imgSrc} alt={destTitle} />
                                </div>

                                <div className="cardInfo">
                                    <h4 className="destTitle">{destTitle}</h4>
                                    <span className='continent flex'>
                                        <HiOutlineLocationMarker className='icon' />
                                        <span className="name">{location}</span>
                                    </span>

                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>{grade}<small>+1</small></span>
                                        </div>
                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>

                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>

                                    <button className='btn flex'>
                                        DETAILS <HiOutlineClipboardCheck className='icon' />
                                    </button>


                                </div>
                            </div>
                        )
                    })
                }
            </div>



        </section>
    )
}

export default Main