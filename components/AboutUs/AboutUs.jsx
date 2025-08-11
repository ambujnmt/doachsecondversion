import React from 'react';
import Container from '@mui/material/Container';
import { Link } from '@heroui/react'; 
import HamburgerMenu from '../HomePage/HamburgerMenu';
import HomeFooter from '../HomePage/HomeFooter';



export default function AboutUs() {
    return (
        <>
            <div className="custom-gradient"> 
                                            <section
                                                className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700"
                                                aria-label="Hero"
                                                style={{
                                                    fontFamily: "'Manrope', sans-serif",
                                                    backgroundImage: "url('https://nmtdevserver.com/doach/hero-img4.png')",
                                                    backgroundSize: "cover",
                                                    backgroundPosition: "center"
                                                }}
                                            >
                                
                                                {/* Overlay */}
                                                <div div className="absolute inset-0 bg-black bg-opacity-50"></div>
                                
                                                {/* Hamburger Menu */}
                                                <HamburgerMenu />
                                                {/* // Hamburger Menu */}
                                
                                                {/* Hero content */}
                                                <div className="relative z-20 px-6 max-w-3xl hero-content"> 
                                                <img src="https://nmtdevserver.com/doach/logo.png" alt="image" className="w-[60%] h-auto block m-auto" />
                                                <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl mx-auto">The AI Coach That Adapts to You</p>
                                                </div>
                                 
                                            </section>

                                            <section id="nftc" className="py-24">
                                                <Container>
                                                <div className="text-center"> 
                                                    <h3 className="text-3xl text-center font-bold text-black mb-8">About Doach</h3> 
                                                    <p className="mx-auto text-black mb-3">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ipsam ipsum excepturi eaque enim quo maxime esse molestias odio rerum quia impedit, at perspiciatis unde est aliquid, inventore illum? Eos. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus optio fugit sit architecto perferendis, mollitia quo, alias quia voluptas placeat nobis? Fugiat numquam animi repudiandae accusamus omnis voluptate. Perferendis, facilis.
                                                    </p>
                                                    <p className="mx-auto text-black mb-12">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ipsam ipsum excepturi eaque enim quo maxime esse molestias odio rerum quia impedit, at perspiciatis unde est aliquid, inventore illum? Eos. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus optio fugit sit architecto perferendis, mollitia quo, alias quia voluptas placeat nobis? Fugiat numquam animi repudiandae accusamus omnis voluptate. Perferendis, facilis.
                                                    </p>
 
                                                </div>
                                                </Container>
                                            </section>


                                            <HomeFooter />
            </div>
        </>
    )
}
