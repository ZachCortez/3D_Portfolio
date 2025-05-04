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





    useGSAP(() => {

        const projects = [project1Ref.current, project2Ref.current, project3Ref.current, project4Ref.current, project5Ref.current, project6Ref.current, project7Ref.current, project8Ref.current];

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
                    <div className="first-project-wrapper" ref={project1Ref}>
                        <div className="image-wrapper">
                        <img src="/images/project1.png" alt="Ryde" />
                        </div>
                        <div className="text-content">
                            <h2>On-Demand Rides Made with a Powerful, User-Friendly App called Ryde</h2>
                            <p className="text-white-50 md:text-xl">An app built with React Native, Expo, & TailwindCSS for a fast, user-friendly experience.
                            </p>
                        </div>
                    </div>

                {/*    RIGHT    */}
                    <div className="project-list-wrapper overflow-hidden">

                        {/*---------------------------*/}
                        <div className="project">
                            <div className="image-wrapper bg-[#]" ref={project2Ref}>
                                <img src="/images/robot.png" alt="Library Management Platform"/>
                            </div>
                            <h2>🤖 AI Mock Interviews – AI-Powered Interview Practice Platform</h2>
                            <p className="text-white-50 md:text-xl">Built with Next.js for the user interface and backend logic, Firebase for authentication and data storage, styled with TailwindCSS and using Vapi's voice agents
                            </p>
                        </div>
                        {/*--------------------------------*/}
                        {/*---------------------------*/}
                        <div className="project">
                            <div className="image-wrapper bg-[#]" ref={project3Ref}>
                                <img src="/images/movieapp.png" alt="Library Management Platform"/>
                            </div>
                            <h2>🎬 Mobile Movie App – Cross-Platform Movie Discovery Application</h2>
                            <p className="text-white-50 md:text-xl">Built with Expo, TypeScript, and Tailwind CSS, this app fetches movies and creates a popularity algorithm using Appwrite.
                            </p>
                        </div>
                        {/*--------------------------------*/}
                        {/*---------------------------*/}
                        <div className="project">
                            <div className="image-wrapper bg-[#]" ref={project4Ref}>
                                <img src="/images/xoraapp.png" alt="Library Management Platform"/>
                            </div>
                            <h2>🧩 Xora – Modern UI/UX SaaS Website</h2>
                            <p className="text-white-50 md:text-xl">Xora is a Modern UI/UX SaaS website developed using React.js and Tailwind CSS that exemplifies modern UI/UX principles
                            </p>
                        </div>
                        {/*--------------------------------*/}
                        {/*---------------------------*/}
                        <div className="project">
                            <div className="image-wrapper bg-[#]" ref={project5Ref}>
                                <img src="/images/podcastr.png" alt="Library Management Platform"/>
                            </div>
                            <h2>🎙 Podcastr – AI-Powered Podcast Platform</h2>
                            <p className="text-white-50 md:text-xl">A cutting-edge AI SaaS platform that enables users to create, discover, and enjoy podcasts with advanced features like text-to-audio conversion with multi-voice AI, podcast thumbnail Image generation and seamless playback
                            </p>
                        </div>
                        {/*--------------------------------*/}
                        {/*---------------------------*/}
                        <div className="project">
                            <div className="image-wrapper bg-[#]" ref={project6Ref}>
                                <img src="/images/carepulse.png" alt="Library Management Platform"/>
                            </div>
                            <h2>🏥 CarePulse – Healthcare Patient Management System</h2>
                            <p className="text-white-50 md:text-xl">A healthcare patient management application that allows patients to easily register, book, and manage their appointments with doctors, featuring administrative tools for scheduling, confirming, and canceling appointments, along with SMS notifications, all built using Next.js
                            </p>
                        </div>
                        {/*--------------------------------*/}
                        {/*---------------------------*/}
                        <div className="project">
                            <div className="image-wrapper bg-[#]" ref={project7Ref}>
                                <img src="/images/horizonapp.png" alt="Library Management Platform"/>
                            </div>
                            <h2>🏦 Horizon Bank – Online Banking System</h2>
                            <p className="text-white-50 md:text-xl">Built with Next.js, Horizon is a financial SaaS platform that connects to multiple bank accounts, displays transactions in real-time, allows users to transfer money to other platform users, and manages their finances altogether.
                            </p>
                        </div>
                        {/*--------------------------------*/}
                        {/*---------------------------*/}
                        <div className="project">
                            <div className="image-wrapper bg-[#]" ref={project8Ref}>
                                <img src="/images/brainwaveapp.png" alt="Library Management Platform"/>
                            </div>
                            <h2>💡 Brainwave – Modern UI/UX Website</h2>
                            <p className="text-white-50 md:text-xl">Modern UI/UX website, developed using React.js and Tailwind CSS, exemplifies modern UI/UX principles. Its sleek design, seamless animations, and overall user experience set a high standard, serving as a reference or inspiration for future modern applications or websites in general.
                            </p>
                        </div>
                        {/*--------------------------------*/}



                        {/*-----------template for more projects----------------*/}
                        {/*<div className="project">*/}
                        {/*    <div className="image-wrapper bg-[#110066]">*/}
                        {/*        <img src="/images/project2.png" alt="Library Management Platform"/>*/}
                        {/*    </div>*/}
                        {/*    <h2>🤖 title title title</h2>*/}
                        {/*    <p className="text-white-50 md:text-xl">text text text text*/}
                        {/*    </p>*/}
                        {/*</div>*/}
                        {/*--------------------------------*/}



                    </div>
                </div>
            </div>
        </div>
    )
}
export default ShowcaseSection
