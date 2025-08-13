import React, { useEffect, useState, useRef } from "react";
import Container from "@mui/material/Container";
import { Link } from "@heroui/react";
import HamburgerMenu from "./HamburgerMenu";
import HomeFooter from "./HomeFooter";
import StateSlider from "./StateSlider";

export default function Home() {
  const [voiceOpen, setVoiceOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [age, setAge] = useState("");
  const [showParent, setShowParent] = useState(false);
  const signupFormRef = useRef(null);

  // Close voice menu on click outside
  useEffect(() => {
    function handleClick(e) {
      const menu = document.getElementById("voiceMenu");
      const dot = document.getElementById("voiceDot");
      if (!menu || !dot) return;
      if (!menu.contains(e.target) && !dot.contains(e.target)) {
        setVoiceOpen(false);
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  useEffect(() => {
    // age -> parent consent
    const a = parseInt(age, 10);
    if (!isNaN(a) && a < 18) {
      setShowParent(true);
    } else {
      setShowParent(false);
    }
  }, [age]);

  // Intersection observer for simple reveal animations
  useEffect(() => {
    const els = document.querySelectorAll(".reveal-item");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    els.forEach((el) => {
      el.classList.add("opacity-0", "translate-y-6", "transition-all", "duration-600");
      obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  function toggleVoiceMenu() {
    setVoiceOpen((v) => !v);
  }

  function openSignupModal() {
    setModalOpen(true);
    setVoiceOpen(false);
    setTimeout(() => {
      // focus first input if exists
      const el = signupFormRef.current?.querySelector("input, select");
      el && el.focus();
    }, 100);
  }

  function closeSignupModal() {
    setModalOpen(false);
  }

  function downloadApp() {
    // replace with real redirect
    window.alert("Redirecting to app download...");
  }

  function aboutDoach() {
    window.alert(
      "DOACH is an AI-powered coaching platform that personalizes your training experience through advanced analytics and real-time feedback."
    );
  }

  function aboutNFTC() {
    window.alert(
      "The National Free Throw Challenge (NFTC) is a nationwide competition featuring AI-powered coaching and performance analytics."
    );
  }

  function submitSignup(e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());
    // TODO: integrate Mailchimp/Twilio here
    window.alert("Thank you for signing up! You will receive an SMS with the app link shortly.");
    form.reset();
    setModalOpen(false);
  }

  function scrollToNext() {
    const el = document.getElementById("nftc");
    el && el.scrollIntoView({ behavior: "smooth" });
  }

  const states = [
    { key: "california", name: "California", count: 12 },
    { key: "texas", name: "Texas", count: 8 },
    { key: "florida", name: "Florida", count: 10 },
    { key: "newyork", name: "New York", count: 6 },
    { key: "illinois", name: "Illinois", count: 4 },
    { key: "georgia", name: "Georgia", count: 5 },
  ];

    return (
        <>
            {/* Hero section */}
            <section
                className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700"
                aria-label="Hero"
                style={{
                    fontFamily: "'Manrope', sans-serif",
                    backgroundImage: "url('https://nmtdevserver.com/doach/hero-img5.jpg')",
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
                  <Link href="/">
                    <img src="https://nmtdevserver.com/doach/logo.png" alt="image" className="w-[500px] h-auto block m-auto" />
                  </Link>
                  <p className="mt-[50px] text-lg md:text-xl text-black max-w-md mx-auto border !border-[#FFC32B] p-2 bg-[#FFC32B] rounded-full">The AI Coach That Adapts to You</p>
                </div>

                {/* Scroll arrow */}
                <div className="">
                    <button
                        onClick={scrollToNext}
                        aria-label="Scroll to event"
                        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-[#FFC32B] text-3xl animate-bounce z-20 xl:border !border-yellow-500 xl:w-[80px] xl:h-[80px] rounded-full"
                        >
                        ↓
                    </button>
                </div>
            </section>
            {/* // Hero section */}


            <div className="custom-gradient">
                {/* DOACH × CAVS Section */}
                <section id="nftc" className="py-24">
                    <Container maxWidth="lg">
                    <div className="text-center px-4">
                        <h2 className="text-3xl md:text-5xl font-black text-[#fff] mb-4">DOACH</h2>
                        <p className="text-[15px] text-white mb-6">Is the first AI sports assistant built to train, teach, and adapt to every athlete—anytime, anywhere. It delivers real-time feedback, biomechanical insights, and lifelike coaching through voice, video, and sensor data.</p>
                        
                        <h2 className="text-3xl md:text-5xl font-black text-[#fff] mb-3 mt-5">DOACH + CAVS</h2>
                        <h5 className="text-[25px] text-white font-medium mb-2">National Free Throw Challenge (NFTC)</h5>
                        <h5 className="text-[25px] text-white font-medium mb-3">October 17-23, 2025</h5>
                        <p className="text-[15px] text-white mb-6">Is a first-of-its-kind, AI-powered youth sports event connecting players across Ohio, Pennsylvania, and New York. Competitors will shoot, track, and improve in real time while vying for regional bragging rights.</p>

                        {/* <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
                            <div className="event-card bg-white/5 p-6 rounded-2xl border border-[#FFC32B]/20 hover:translate-y-[-6px] transition-transform reveal-item">
                                <div className="text-[#FFC32B] font-semibold mb-2">October 17-23, 2025</div>
                                <div className="text-xl font-semibold mb-2">NFTC Championship</div>
                                <div className="text-white/75">Join athletes nationwide in the ultimate flag touch challenge with real-time AI coaching.</div>
                            </div>

                            <div className="event-card bg-white/5 p-6 rounded-2xl border border-[#FFC32B]/20 hover:translate-y-[-6px] transition-transform reveal-item">
                                <div className="text-[#FFC32B] font-semibold mb-2">Multi-State Event</div>
                                <div className="text-xl font-semibold mb-2">Find Your Location</div>
                                <div className="text-white/75">Participating venues across the country. Find the nearest location and register.</div>
                            </div>

                            <div className="event-card bg-white/5 p-6 rounded-2xl border border-[#FFC32B]/20 hover:translate-y-[-6px] transition-transform reveal-item">
                                <div className="text-[#FFC32B] font-semibold mb-2">Powered by AI</div>
                                <div className="text-xl font-semibold mb-2">Smart Coaching</div>
                                <div className="text-white/75">Experience personalized feedback and adaptive coaching methodology powered by DOACH.</div>
                            </div>
                        </div> */}

                        <div className="mt-12">
                        <button
                            onClick={openSignupModal}
                            className="px-8 py-3 bg-[#FFC32B] text-black rounded-full font-semibold shadow-md hover:bg-yellow-300 transition"
                        >
                            Sign Up for NFTC
                        </button>
                        </div>
                    </div>
                    </Container>
                </section>
                {/* // DOACH × CAVS Section */}



                {/* Find Your NFTC Location Section */}
                <StateSlider />
                {/* // Find Your NFTC Location Section */}



                {/* Partners section */}
                <section className="py-16">
                    <Container maxWidth="lg">
                    <h3 className="text-3xl text-center font-bold text-black mb-8">NFTC Founding Brand Partners</h3>

                        <div className="overflow-hidden">
                            <div className="flex items-center gap-10 animate-marquee">
                                {/* First loop */} 
                                <div className="min-w-[150px] h-14 object-cover rounded-md flex items-center justify-center">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/24/Adidas_logo.png" alt="ADIDAS" className="h-10 object-contain" />
                                </div>
                                <div className="min-w-[150px] h-14 object-cover rounded-md flex items-center justify-center">
                                    <img src="https://logos-world.net/wp-content/uploads/2020/04/Nike-Logo.png" alt="NIKE" className="h-10 object-contain" />
                                </div>
                                <div className="min-w-[150px] h-14 object-cover rounded-md flex items-center justify-center">
                                    <img src="https://cdn-icons-png.flaticon.com/512/15/15476.png" alt="APPLE" className="h-10 object-contain" />
                                </div>
                                <div className="min-w-[150px] h-14 object-cover rounded-md flex items-center justify-center">
                                    <img src="https://www.iconpacks.net/icons/1/free-youtube-icon-123-thumb.png" alt="YOUTUBE" className="h-10 object-contain" />
                                </div> 
                                
                                {/* Duplicate loop for seamless scroll */}
                                <div className="min-w-[150px] h-14 object-cover rounded-md flex items-center justify-center">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/24/Adidas_logo.png" alt="ADIDAS" className="h-10 object-contain" />
                                </div>
                                <div className="min-w-[150px] h-14 object-cover rounded-md flex items-center justify-center">
                                    <img src="https://logos-world.net/wp-content/uploads/2020/04/Nike-Logo.png" alt="NIKE" className="h-10 object-contain" />
                                </div>
                                <div className="min-w-[150px] h-14 object-cover rounded-md flex items-center justify-center">
                                    <img src="https://cdn-icons-png.flaticon.com/512/15/15476.png" alt="APPLE" className="h-10 object-contain" />
                                </div>
                                <div className="min-w-[150px] h-14 object-cover rounded-md flex items-center justify-center">
                                    <img src="https://www.iconpacks.net/icons/1/free-youtube-icon-123-thumb.png" alt="YOUTUBE" className="h-10 object-contain" />
                                </div> 
                            </div>
                        </div>

                    </Container>
                </section>
                {/* // Partners section */}



                {/* Footer */}
                <HomeFooter />
                {/* // Footer */}
            </div>



            {/* Sign Up for NFTC Modal */}
            <div
                className={`fixed inset-0 z-50 flex items-center justify-center bg-black/70 transition-opacity ${
                modalOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
                role="dialog"
                aria-modal="true"
                aria-hidden={!modalOpen}
            >
                <div className="bg-gray-800 rounded-2xl p-8 w-full max-w-md relative">
                    <button
                        aria-label="Close signup"
                        onClick={closeSignupModal}
                        className="absolute top-4 right-4 text-2xl text-[#FFC32B]"
                    >
                        &times;
                    </button>

                    <h3 className="text-xl font-bold text-[#FFC32B] mb-4">Sign Up for NFTC</h3> 
                    <form ref={signupFormRef} id="signupForm" onSubmit={submitSignup} className="space-y-4">
                        <div>
                        <label className="block text-sm font-medium mb-1 text-white">Full Name</label>
                        <input
                            name="name"
                            type="text"
                            required
                            className="w-full px-3 py-2 rounded-md bg-white/5 border border-white/10 focus:border-[#FFC32B] outline-none text-white"
                        />
                        </div>

                        <div>
                        <label className="block text-sm font-medium mb-1 text-white">Age</label>
                        <input
                            name="age"
                            id="ageInput"
                            type="number"
                            min="1"
                            max="120"
                            required
                            onChange={(e) => setAge(e.target.value)}
                            className="w-full px-3 py-2 rounded-md bg-white/5 border border-white/10 focus:border-[#FFC32B] outline-none text-white"
                        />
                        </div>

                        {showParent && (
                        <div>
                            <label className="block text-sm font-medium mb-1 text-white">Parent/Guardian Email</label>
                            <input
                            name="parentEmail"
                            type="email"
                            required={showParent}
                            className="w-full px-3 py-2 rounded-md bg-white/5 border border-white/10 focus:border-[#FFC32B] outline-none text-white"
                            />
                        </div>
                        )}

                        <div>
                        <label className="block text-sm font-medium mb-1 text-white">Skill Level</label>
                        <select name="skillLevel" required className="w-full px-3 py-2 rounded-md bg-white/5 border border-white/10 text-white">
                            <option className="text-black" value="">Select skill level</option>
                            <option className="text-black" value="beginner">Beginner</option>
                            <option className="text-black" value="intermediate">Intermediate</option>
                            <option className="text-black" value="advanced">Advanced</option>
                            <option className="text-black" value="professional">Professional</option>
                        </select>
                        </div>

                        <div>
                        <label className="block text-sm font-medium mb-1 text-white">Phone Number</label>
                        <input
                            name="phone"
                            type="tel"
                            required
                            className="w-full px-3 py-2 rounded-md bg-white/5 border border-white/10 focus:border-[#FFC32B] outline-none text-white"
                        />
                        </div>

                        <button type="submit" className="w-full py-2 bg-[#FFC32B] text-black rounded-md font-semibold hover:bg-yellow-300">
                        Sign Up
                        </button>
                    </form>
                </div>
            </div>
            {/* Sign Up for NFTC Modal */}




            {/* Simple additional CSS for marquee animation (Tailwind doesn't include keyframes here) */}
            <style>{`
                @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                display: flex;
                gap: 2.5rem;
                align-items: center;
                animation: marquee 20s linear infinite;
                }
            `}</style>
        </>
    );
}
