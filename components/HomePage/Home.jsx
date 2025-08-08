import React from 'react';
import Container from '@mui/material/Container';
import { Link } from '@heroui/react'; 

export default function Home() {
    return (
        <>
            {/* Hero Section start Here */}
            <section>
                <div className="grid grid-col-12">
                    <img src="https://nmtdevserver.com/doach/hero-img.jpg" alt="image" className='w-[100%] h-auto' />
                </div>
            </section>
            {/* // Hero Section start Here */}

            {/* About Us Section Start here */}
            <Container>
                <section className="flex flex-col-reverse md:flex-row items-center gap-4 my-5">
                    <div className="flex-1">
                        <img src="https://nmtdevserver.com/doach/football-img.webp" alt="image" className="w-[100%] mx-auto h-auto" />
                    </div>
                    <div className="flex-1">
                        <p className="text-[15px] md:text-md font-normal text-gray-800 leading-[25px] mb-2 text-justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum iusto et velit delectus a quaerat excepturi quasi beatae minima, dolor impedit quidem veritatis aperiam aspernatur, tempora accusamus illum consectetur dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dicta dolor est deserunt obcaecati ut dolorum inventore, ratione totam officiis! Deleniti modi ducimus voluptatum, accusantium dolore blanditiis nam esse! Harum. 
                        </p>
                        <p className="text-[15px] md:text-md font-normal text-gray-800 leading-[25px] mb-6 text-justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum cumque harum ullam consequatur id perferendis animi possimus labore. Rem itaque minima magni rerum placeat quas labore praesentium voluptas corporis quasi!
                        </p>
                        <Link href="/aboutUs">
                            <button className="bg-yellow-600 hover:bg-black text-white text-lg px-6 py-2 rounded-lg shadow-md duration-300">
                                Read More
                            </button>
                        </Link>
                    </div> 
                </section>
            </Container>
            {/* // About Us Section Start here */}
        </>
    )
}
