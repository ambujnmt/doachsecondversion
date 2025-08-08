import React from 'react';
import Container from '@mui/material/Container';
import Link from 'next/link';
import { FaLinkedinIn, FaInstagram, FaYoutube, FaXTwitter, FaFacebookF, } from "react-icons/fa6";


export default function HomeFooter() {
    return (
        <>

            <div className='bg-black rounded-tr-[100px] rounded-tl-[100px]'>
                <Container>
                    <div className="grid grid-cols-12 gap-4 py-[30px]">
                        <div className="col-span-4">
                            <div className="text-center">
                                <img src="https://nmtdevserver.com/doach/logo.png" alt="image" className='w-[30%] h-auto block m-auto mb-3' />
                                <p className='text-[#ddd] text-sm leading-[25px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ea, voluptates fuga facere fugiat illo, repudiandae blanditiis nisi illum nulla maiores quas ratione omnis porro adipisci necessitatibus quidem veniam hic!</p>
                            </div>
                        </div>
                        <div className="col-span-4">
                            <div className="text-center">
                                <h3 className='text-[20px] font-bold mb-[15px] text-[#fff] text-center'>Quick Links</h3>
                                <ul className='p-0'> 
                                    <li className='mb-[10px] text-sm'><Link className='!text-[#ddd]' href="javascript:void(0);">Home</Link></li>
                                    <li className='mb-[10px] text-sm'><Link className='!text-[#ddd]' href="javascript:void(0);">About Us</Link></li>
                                    <li className='mb-[10px] text-sm'><Link className='!text-[#ddd]' href="javascript:void(0);">Contact Us</Link></li> 
                                </ul>
                            </div>
                        </div>
                        <div className="col-span-4">
                            <div className="text-center">
                                <h3 className='text-[20px] font-bold mb-[15px] text-[#fff]'>Support</h3>
                                <ul className='p-0'>
                                    <li className='mb-[10px] text-sm'><Link className='!text-[#ddd]' href="javascript:void(0);">Help Center</Link></li>
                                    <li className='mb-[10px] text-sm'><Link className='!text-[#ddd]' href="javascript:void(0);">Privacy Policy</Link></li>
                                    <li className='mb-[10px] text-sm'><Link className='!text-[#ddd]' href="javascript:void(0);">Terms of Service</Link></li> 
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Social Media Links */}
                    <div className="flex justify-center pb-[40px]">
                        <Link href="javascript:void(0);" className="bg-yellow-600 duration-300 !m-[5px] p-[10px] !text-white rounded-full hover:bg-[#000]"><FaFacebookF /></Link>
                        <Link href="javascript:void(0);" className="bg-yellow-600 duration-300 !m-[5px] p-[10px] !text-white rounded-full hover:bg-[#000]"><FaLinkedinIn /></Link>
                        <Link href="javascript:void(0);" className="bg-yellow-600 duration-300 !m-[5px] p-[10px] !text-white rounded-full hover:bg-[#000]"><FaInstagram /></Link>
                        <Link href="javascript:void(0);" className="bg-yellow-600 duration-300 !m-[5px] p-[10px] !text-white 
                        rounded-full hover:bg-[#000]"><FaYoutube /></Link>
                        <Link href="javascript:void(0);" className="bg-yellow-600 duration-300 !m-[5px] p-[10px] !text-white 
                        rounded-full hover:bg-[#000]"><FaXTwitter /></Link>
                    </div>
                    {/* // Social Media Links */} 
                </Container>
            </div>
            {/* copyright section */}
            <div className="grid grid-cols-1 text-center bg-yellow-600 p-[10px]">
                <p className='text-white text-[14px] mb-0'> Copyright © 2025 All Rights Reserved. </p>
            </div>
            {/* // copyright section */}
        </>
    )
}
