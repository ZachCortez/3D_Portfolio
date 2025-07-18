import React, {useRef} from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);
    const project4Ref = useRef(null);
    const project5Ref = useRef(null);
    const project6Ref = useRef(null);
    const project7Ref = useRef(null);
    const project8Ref = useRef(null);
    const project9Ref = useRef(null);
    const project10Ref = useRef(null);
    const project11Ref = useRef(null);
    const project12Ref = useRef(null);
    const project13Ref = useRef(null);
    const project14Ref = useRef(null);
    const project15Ref = useRef(null);
    const project16Ref = useRef(null);
    const project17Ref = useRef(null);





    useGSAP(() => {

        const projects = [
            project1Ref.current,
            project2Ref.current,
            project3Ref.current,
            project4Ref.current,
            project5Ref.current,
            project6Ref.current,
            project7Ref.current,
            project8Ref.current,
            project9Ref.current,
            project10Ref.current,
            project11Ref.current,
            project12Ref.current,
            project13Ref.current,
            project14Ref.current,
            project15Ref.current,
            project16Ref.current,
            project17Ref.current,
        ];

        projects.forEach((card, index) => {
        gsap.fromTo(card,
            {
                y: 50,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                delay: 0.3 * (index + 1),
                scrollTrigger: {
                    trigger: card,
                    start: "top bottom-=100",
                },
            }
        );
    })
        // Animation for the main section
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5 }
        )
    },[]);

    return (
        <div id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">
                {/*    LEFT    */}
                    <div className="first-project-wrapper">


                        {/*--------------------------------*/}

                        <div className="project">
                            <a
                                href="https://ai-resume-analyzer-delta.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="image-wrapper bg-[#]" ref={project17Ref}>
                                    <img
                                        src="/images/resumind-preview.png" // Replace with actual preview image path
                                        alt="Resumind App Preview"
                                    />
                                </div>
                            </a>

                            <div className="text-content">
                                <a
                                    href="https://github.com/ZachCortez/ai-resume-analyzer"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <h2>🧠 Resumind – AI Resume Analyzer</h2>
                                </a>
                                <p className="text-white-50 md:text-xl">
                                    A fully client-side AI resume analyzer built with React, Zustand, TypeScript,
                                    Tailwind CSS, and OpenAI.
                                    Users can securely upload resumes (PDF/DOCX), view previews, and receive
                                    personalized job-match
                                    feedback and ATS scoring – all in-browser, with no backend required. Powered by GPT
                                    and optimized for modern frontend performance.
                                </p>
                            </div>
                        </div>

                        {/*--------------------------------*/}
                        {/*--------------------------------*/}

                        <div className="project">
                            <a
                                href="https://github.com/ZachCortez/FastFood" // Replace with your actual link
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="image-wrapper bg-[#]" ref={project16Ref}>
                                    <img
                                        src="/images/fastfood-preview.png" // Replace with actual path
                                        alt="FastFood App Preview"
                                    />
                                </div>
                            </a>

                            <div className="text-content">
                                <a
                                    href="https://github.com/ZachCortez/FastFood"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <h2>🍟 FastFood – React Native Food Delivery App</h2>
                                </a>
                                <p className="text-white-50 md:text-xl">
                                    A React Native food delivery app built with TypeScript, Tailwind CSS (via
                                    NativeWind),
                                    and powered by an Appwrite backend. It includes Google Authentication, a smart
                                    search feature,
                                    cart management, and smooth navigation – all designed to deliver a seamless and
                                    modern mobile experience.
                                </p>
                            </div>
                        </div>

                        {/*--------------------------------*/}
                        {/*--------------------------------*/}
                        <div className="project">
                            <a href="https://sushi-green-one.vercel.app/" target="_blank"
                               rel="noopener noreferrer">
                                <div className="image-wrapper bg-[#]" ref={project15Ref}>
                                    <img src="/images/sushi-preview.png" alt="Sushi Restaurant Website"/>
                                </div>
                            </a>
                            <div className="text-content">
                                <a href="https://github.com/ZachCortez/sushi" target="_blank" rel="noopener noreferrer">
                                    <h2>🍣 Sushi Restaurant – Elegant, Responsive Food Experience</h2>
                                </a>
                                <p className="text-white-50 md:text-xl">
                                    A sleek and modern sushi restaurant website showcasing rich visuals and intuitive
                                    navigation. Built using React and Tailwind CSS with GSAP animations for a polished,
                                    responsive, and interactive user experience. Perfect for food businesses looking to
                                    establish an online presence.
                                </p>
                            </div>
                        </div>
                        {/*--------------------------------*/}

                        <div className="project">
                            <a href="https://gta-vi-landing-nu.vercel.app/" target="_blank" rel="noopener noreferrer">
                                <div className="image-wrapper bg-[#]" ref={project14Ref}>
                                    <img src="/images/gta_vi_landing.png" alt="GTA VI Landing Page"/>
                                </div>
                            </a>
                            <div className="text-content">
                                <a href="https://github.com/ZachCortez/gta_vi_landing" target="_blank"
                                   rel="noopener noreferrer">
                                    <h2>🎮 GTA VI Landing Page – Cinematic Scroll Experience</h2>
                                </a>
                                <p className="text-white-50 md:text-xl">
                                    A visually stunning, scroll-driven landing page inspired by GTA VI. Built with
                                    React, GSAP, and Tailwind CSS, it features pinned scenes, parallax effects, image
                                    masking, and synced video transitions to create a responsive and immersive
                                    experience.
                                </p>
                            </div>
                        </div>
                        {/*--------------------------------*/}
                        {/*--------------------------------*/}

                        <div className="project">
                            <a href="https://github.com/ZachCortez/velvet_pour" target="_blank"
                               rel="noopener noreferrer">
                                <div className="image-wrapper bg-[#]" ref={project13Ref}>
                                    <img src="/images/velvetPour.png" alt="VelvetPour"/>
                                </div>
                            </a>
                            <div className="text-content">
                                <a href="https://velvet-pour-gamma.vercel.app/" target="_blank"
                                   rel="noopener noreferrer">
                                    <h2>🍷 Velvet Pour – Modern Animated Landing Page for a Premium Bar</h2></a>
                                <p className="text-white-50 md:text-xl">Velvet Pour is a rich and atmospheric animated
                                    landing page designed for a high-end bar. Built using React, GSAP, and Tailwind CSS,
                                    this project showcases buttery-smooth scroll animations, aesthetic layout
                                    transitions, and a sleek modern vibe meant to capture the ambiance of a luxury
                                    nightlife experience.
                                </p>
                            </div>
                        </div>
                        {/*--------------------------------*/}
                        {/*--------------------------------*/}

                        <div className="project">
                            <a href="https://github.com/ZachCortez/converso" target="_blank" rel="noopener noreferrer">
                                <div className="image-wrapper bg-[#]" ref={project12Ref}>
                                    <img src="/images/Converso_Dashboard.png" alt="Converso"/>
                                </div>
                            </a>
                            <div className="text-content">
                                <a href="https://converso-wheat.vercel.app/" target="_blank" rel="noopener noreferrer">
                                    <h2>🤖 Converso – AI-Powered LMS SaaS Platform with Voice Tutors, Built with Next.js,
                                        Supabase & Stripe</h2></a>
                                <p className="text-white-50 md:text-xl">Converso is a next-gen LMS SaaS platform built
                                    from scratch using Next.js, Supabase, Clerk, and Stripe. Designed for real-time,
                                    interactive learning, Converso integrates Vapi to enable AI-powered voice agents
                                    that act as intelligent tutors across a wide range of topics.
                                </p>
                            </div>
                        </div>
                        {/*--------------------------------*/}
                        {/*---------------------------*/}
                        <div className="project">
                            <a href="https://snap-cast-rosy.vercel.app/" target="_blank" rel="noopener noreferrer">
                                <div className="image-wrapper bg-[#]" ref={project10Ref}>
                                    <img src="/images/snapCastHome.png" alt="SnapCast"/>
                                </div>
                            </a>
                            <div className="text-content">
                                <h2>📸 SnapCast – Full Stack Screen Recording & Video Sharing Platform</h2>
                                <p className="text-white-50 md:text-xl">Full-stack screen recording & video sharing
                                    platform
                                    built with Next.js, Bunny.net & Arcjet. Features Better Auth, video uploads, sharing
                                    via
                                    link, privacy settings, AI transcripts, and more.
                                </p>
                            </div>
                        </div>
                        {/*---------------------------*/}
                        {/*--------------------------------*/}

                        <div className="project">
                            <a href="https://travel-agency-omega-five.vercel.app/" target="_blank"
                               rel="noopener noreferrer">
                                <div className="image-wrapper bg-[#]" ref={project11Ref}>
                                    <img src="/images/travelAgencyHome.png" alt="TravelAgency"/>
                                </div>
                            </a>
                            <div className="text-content">
                                <h2>✈️ Travel Agency Website – Responsive Travel Booking Website</h2>
                                <p className="text-white-50 md:text-xl">A modern travel agency platform with an admin
                                    dashboard and public site. Generate AI-powered trip itineraries based on country,
                                    travel style, interests, group type, and budget — and book trips with ease.
                                </p></div>

                        </div>
                        {/*---------------------------*/}
                        <div className="project">
                            <a href="https://github.com/ZachCortez/Brainwave" target="_blank" rel="noopener noreferrer">
                                <div className="image-wrapper bg-[#]" ref={project2Ref}>
                                    <img src="/images/brainwaveapp.png" alt="BrainWaveApp"/>
                                </div>
                            </a>
                            <div className="text-content">
                                <h2>💡 Brainwave – Modern UI/UX Website</h2>
                                <p className="text-white-50 md:text-xl">Modern UI/UX website, developed using React.js
                                    and Tailwind CSS, exemplifies modern UI/UX principles. Its sleek design, seamless
                                    animations, and overall user experience set a high standard, serving as a reference
                                    or inspiration for future modern applications or websites in general.
                                </p></div>

                        </div>
                        {/*--------------------------------*/}
                        {/*---------------------------*/}
                        <div className="project">
                            <a href="https://github.com/ZachCortez/Podcastr" target="_blank" rel="noopener noreferrer">
                                <div className="image-wrapper bg-[#]" ref={project3Ref}>
                                    <img src="/images/podcastr.png" alt="PodcastrApp"/>
                                </div>
                            </a>
                            <div className="text-content">
                                <h2>🎙 Podcastr – AI-Powered Podcast Platform</h2>
                                <p className="text-white-50 md:text-xl">A cutting-edge AI SaaS platform that enables
                                    users to create, discover, and enjoy podcasts with advanced features like
                                    text-to-audio conversion with multi-voice AI, podcast thumbnail Image generation
                                    and
                                    seamless playback
                                </p></div>

                        </div>
                        {/*--------------------------------*/}


                    </div>

                    {/*    RIGHT    */}
                    <div className="project-list-wrapper overflow-hidden">

                        {/*---------------------------*/}
                        <div className="project">
                            <a href="https://github.com/ZachCortez/ai_mock_interviews" target="_blank"
                               rel="noopener noreferrer">
                                <div className="image-wrapper bg-[#]" ref={project5Ref}>
                                    <img src="/images/robot.png" alt="Library Management Platform"/>
                                </div>
                            </a>
                            <h2>🤖 AI Mock Interviews – AI-Powered Interview Practice Platform</h2>
                            <p className="text-white-50 md:text-xl">Built with Next.js for the user interface and
                                backend logic, Firebase for authentication and data storage, styled with TailwindCSS
                                and
                                using Vapi's voice agents
                            </p>
                        </div>
                        {/*--------------------------------*/}
                        {/*---------------------------*/}
                        <div className="project">
                            <a href="https://github.com/ZachCortez/mobile_movie_app" target="_blank"
                               rel="noopener noreferrer">
                                <div className="image-wrapper bg-[#]" ref={project6Ref}>
                                    <img src="/images/movieapp.png" alt="Library Management Platform"/>
                                </div>
                            </a>
                                <h2>🎬 Mobile Movie App – Cross-Platform Movie Discovery Application</h2>
                                <p className="text-white-50 md:text-xl">Built with Expo, TypeScript, and Tailwind CSS,
                                    this
                                    app fetches movies and creates a popularity algorithm using Appwrite.
                                </p>
                        </div>
                        {/*--------------------------------*/}
                        {/*---------------------------*/}
                        <div className="project">
                            <a href="https://github.com/ZachCortez/Xora" target="_blank"
                               rel="noopener noreferrer">
                                <div className="image-wrapper bg-[#]" ref={project7Ref}>
                                    <img src="/images/xoraapp.png" alt="XoraApp"/>
                                </div>
                            </a>
                                <h2>🧩 Xora – Modern UI/UX SaaS Website</h2>
                                <p className="text-white-50 md:text-xl">Xora is a Modern UI/UX SaaS website developed
                                    using
                                    React.js and Tailwind CSS that exemplifies modern UI/UX principles
                                </p>
                        </div>
                        {/*--------------------------------*/}

                        {/*---------------------------*/}
                        <div className="project">
                            <a href="https://github.com/ZachCortez/sb_banking" target="_blank"
                               rel="noopener noreferrer">
                                <div className="image-wrapper bg-[#]" ref={project8Ref}>
                                    <img src="/images/horizonapp.png" alt="HorizonApp"/>
                                </div>
                            </a>
                                <h2>🏦 Horizon Bank – Online Banking System</h2>
                                <p className="text-white-50 md:text-xl">Built with Next.js, Horizon is a financial SaaS
                                    platform that connects to multiple bank accounts, displays transactions in
                                    real-time, allows users to transfer money to other platform users, and manages their
                                    finances altogether.
                                </p>
                        </div>
                        {/*--------------------------------*/}

                        {/*---------------------------*/}
                        <div className="project">
                            <a href="https://github.com/ZachCortez/CarePulse" target="_blank"
                               rel="noopener noreferrer">
                                <div className="image-wrapper bg-[#]" ref={project9Ref}>
                                    <img src="/images/carepulse.png" alt="Library Management Platform"/>
                                </div>
                            </a>
                                <h2>🏥 CarePulse – Healthcare Patient Management System</h2>
                                <p className="text-white-50 md:text-xl">A healthcare patient management application that
                                    allows patients to easily register, book, and manage their appointments with
                                    doctors,
                                    featuring administrative tools for scheduling, confirming, and canceling
                                    appointments,
                                    along with SMS notifications, all built using Next.js
                                </p>
                        </div>
                        {/*---------------------------*/}
                        <div className="project">
                            <a href="https://github.com/ZachCortez/SaturnBay_Estates" target="_blank"
                               rel="noopener noreferrer">
                                <div className="image-wrapper bg-[#]" ref={project4Ref}>
                                    <img src="/images/onboarding.png" alt="RealEstateApp"/>
                                </div>
                            </a>
                                <div className="text-content">
                                    <h2>🏘️ Real Estate application</h2>
                                    <p className="text-white-50 md:text-xl">Real Estate application with React Native,
                                        featuring Google authentication, dynamic property listings, and user profiles.
                                        Designed with modern tools like Expo SDK 52, Appwrite, Tailwind CSS, and
                                        TypeScript
                                        for a seamless and scalable experience.
                                    </p></div>

                        </div>
                        {/*--------------------------------*/}

                        <div className="project">
                            <a href="https://github.com/ZachCortez/uber-clone" target="_blank"
                               rel="noopener noreferrer">
                                <div className="image-wrapper bg-[#]" ref={project1Ref}>
                                    <img src="/images/project1.png" alt="Ryde"/>
                                </div>
                            </a>
                                <div className="text-content">
                                    <h2>🚙 Uber Clone – Ride-Sharing Mobile App</h2>
                                    <p className="text-white-50 md:text-xl">Modern UI/UX website, developed using
                                        React.js
                                        and Tailwind CSS, exemplifies modern UI/UX principles. Its sleek design,
                                        seamless
                                        animations, and overall user experience set a high standard, serving as a
                                        reference
                                        or inspiration for future modern applications or websites in general.
                                    </p></div>

                        </div>

                        {/*--------------------------------*/}

                    </div>
                </div>
            </div>
        </div>
    )
}
export default ShowcaseSection

