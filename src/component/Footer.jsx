import React from "react";
import {IoMailSharp} from 'react-icons/io5'
import {AiFillPhone, AiFillInstagram} from 'react-icons/ai'
import logo from '../assets/footer/footer.svg'

const Footer = () => {
    return (
        <div className='bg-abu rounded-t-[64px] xl:rounded-t-[200px] h-[500px] md:h-[700px] flex flex-col gap-3 justify-center items-center relative text-sm'>
            <img className='mt-24 w-1/4' src={logo} alt=''/>
            <p className='text-white text-center max-w-[320px] md:max-w-1240px'>Jl. Glogor Carik 125x, Pemogan, Kec. Denpasar Selatan, Kota Denpasar, Bali</p>
            <div>
                <a href='https://www.instagram.com/sewamobilbali.hiace/'>
                    <div className='flex mb-0.5 justify-center items-center text-white gap-0.5'>
                        {<AiFillInstagram size={20}/>}
                        <p>@sewamobilbali.hiace</p>
                    </div>
                </a>
                <div className='flex mb-0.5 justify-center items-center text-white gap-0.5'>
                    {<IoMailSharp size={20}/>}
                    <p>info@sewahaicebali.com </p>
                </div>
                <div className='flex mb-0.5 justify-center items-center text-white gap-0.5'>
                    {<AiFillPhone size={20}/>}
                    <p>+62 812-3903-6266 (office)</p>
                </div>
                <div className='flex mb-0.5 justify-center items-center text-white gap-0.5'>
                    {<AiFillPhone size={20}/>}
                    <p>+62 812-2998-8786 (Sonia)</p>
                </div>
                <div className='flex mb-0.5 justify-center items-center text-white gap-0.5'>
                    {<AiFillPhone size={20}/>}
                    <p>+62 811-8890-261 (Mahen)</p>
                </div>
            </div>
            <div className='w-full absolute text-center bg-orange bottom-0 font-poppins font-bold text-[10px] md:text-sm'>Copyright @ Sewa Haice Bali 2022. All Right Reserved</div>
        </div>
    )
}

export default Footer