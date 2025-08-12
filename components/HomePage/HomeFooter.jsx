import React from 'react';
import Container from '@mui/material/Container';
import Link from 'next/link';
import { FaInstagram, FaYoutube, FaXTwitter, } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";  


export default function HomeFooter() {
    return (
        <>
            <footer className="py-10">
                <Container maxWidth="lg">
                <div className="flex flex-col md:flex-row justify-between xl:items-center gap-6">
                    <div className="text-left">
                    <div className="text-2xl font-extrabold text-yellow-400">
                        <img src="https://nmtdevserver.com/doach/black-logo.png" alt="image" className='w-[40%] h-auto mb-3' />
                    </div>
                    <div className="text-black">DOACH Inc.</div>
                    <div className="text-black">Delaware C-Corp</div>
                    <div className="text-black">team@doach.ai</div>
                    </div>

                    <div className="flex items-center gap-3">
                    <a className="w-10 h-10 rounded-full flex items-center justify-center hover:!bg-yellow-400 transition duration-300" href="#" aria-label="Instagram">
                        <FaInstagram className='text-black text-[20px]' />
                    </a>
                    <a className="w-10 h-10 rounded-full flex items-center justify-center hover:!bg-yellow-400 transition duration-300" href="#" aria-label="TikTok">
                        <FaTiktok className='text-black text-[20px]' />
                    </a>
                    <a className="w-10 h-10 rounded-full flex items-center justify-center hover:!bg-yellow-400 transition duration-300" href="#" aria-label="YouTube">
                        <FaYoutube className='text-black text-[20px]' />
                    </a>
                    <a className="w-10 h-10 rounded-full flex items-center justify-center hover:!bg-yellow-400 transition duration-300" href="#" aria-label="X">
                        <FaXTwitter className='text-black text-[20px]' />
                    </a>
                    </div>
                </div>
                </Container>
            </footer>
        </>
    )
}
