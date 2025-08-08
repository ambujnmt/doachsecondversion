import React from 'react';
import Container from '@mui/material/Container';
import { Link } from '@heroui/react'; 



export default function AboutUs() {
    return (
        <>
            {/* About Us Section Start here */}
            <Container>
                <section className="flex flex-col-reverse md:flex-row items-center gap-4 mt-5">
                    <div className="flex-1">
                        <img src="https://nmtdevserver.com/doach/football-img.webp" alt="image" className="w-[100%] mx-auto h-auto mb-2" />
                    </div>
                    <div className="flex-1">
                        <p className="text-[15px] md:text-md font-normal text-gray-800 leading-[25px] mb-2 text-justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum iusto et velit delectus a quaerat excepturi quasi beatae minima, dolor impedit quidem veritatis aperiam aspernatur, tempora accusamus illum consectetur dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dicta dolor est deserunt obcaecati ut dolorum inventore, ratione totam officiis! Deleniti modi ducimus voluptatum, accusantium dolore blanditiis nam esse! Harum. 
                        </p>
                        <p className="text-[15px] md:text-md font-normal text-gray-800 leading-[25px] mb-2 text-justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum cumque harum ullam consequatur id perferendis animi possimus labore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ad quis laudantium iusto, quos iste officia voluptatum, quo deserunt sapiente porro consequatur dolore excepturi incidunt. Minus, facere in! Facilis, doloremque.
                        </p> 
                    </div> 
                </section>

                <div className="grid grid-col-12 mb-5">
                    <p className="text-[15px] md:text-md font-normal text-gray-800 leading-[25px] mb-2 text-justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum cumque harum ullam consequatur id perferendis animi possimus labore. Rem itaque minima magni rerum placeat quas labore praesentium voluptas corporis quasi!
                    </p> 
                    <p className="text-[15px] md:text-md font-normal text-gray-800 leading-[25px] mb-2 text-justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti libero praesentium qui molestiae minus quas asperiores quisquam rerum, earum nemo, tempore consequatur nesciunt eos tenetur fugit odit, provident dolore doloribus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta temporibus distinctio accusamus fugit animi incidunt commodi repellendus odit eius cumque facere deleniti ipsa nam, vitae expedita adipisci molestias magni doloremque.
                    </p> 
                </div>
            </Container>
        </>
    )
}
