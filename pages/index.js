import Head from "next/head";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const [logoText, setLogoText] = useState("A Z");

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    const hasAnimated = localStorage.getItem("logoAnimated");
    if (!hasAnimated) {
      setTimeout(() => {
        setLogoText("AramBiZ");
        localStorage.setItem("logoAnimated", "true");
      }, 1500);
    } else {
      setLogoText("AramBiZ");
    }
  }, []);

  return (
    <div className="bg-black text-white min-h-screen font-sans scroll-smooth">
      <Head>
        <title>AramBiz</title>
        <link rel="stylesheet" href="https://unpkg.com/aos@2.3.1/dist/aos.css" />
      </Head>

      <nav className="fixed w-full bg-black bg-opacity-90 border-b border-gray-800 z-50 px-6 py-4 flex justify-between items-center transition-all duration-700">
        <h1 className="text-xl font-bold">{logoText}</h1>
        <div className="space-x-6">
          <a href="#about" className="hover:text-gray-300 transition">About</a>
          <a href="#services" className="hover:text-gray-300 transition">Services</a>
          <a href="#contact" className="hover:text-gray-300 transition">Contact</a>
        </div>
      </nav>

      <section className="flex flex-col items-center justify-center h-screen text-center px-4">
        <div className="mb-4 text-3xl font-bold tracking-widest transition-all duration-1000 ease-out text-white">
          {logoText}
        </div>
        <h2 className="text-4xl md:text-6xl font-bold" data-aos="fade-up">We Build Automation-First Businesses.</h2>
        <p className="text-gray-300 mt-4 max-w-xl mx-auto" data-aos="fade-up" data-aos-delay="300">
          AramBiz is a Tamil Nadu-based tech firm helping founders go from Zero to Launch.
        </p>
        <a href="#contact" className="inline-block mt-6 px-6 py-3 border border-white rounded hover:bg-white hover:text-black transition-all" data-aos="zoom-in" data-aos-delay="600">
          Let’s Talk
        </a>
      </section>

      <section id="about" className="px-6 py-24 bg-black text-white" data-aos="fade-right">
        <h3 className="text-3xl font-bold mb-4">About Us</h3>
        <p className="max-w-3xl text-gray-300">AramBiz is founded by Jai Kumaresh and family, with a vision to empower startups through smart automation, branding, and AI-enhanced tech solutions — built for Tamil Nadu, with global standards.</p>
      </section>

      <section id="services" className="px-6 py-24 bg-gray-900 text-white" data-aos="fade-left">
        <h3 className="text-3xl font-bold mb-4">Our Services</h3>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Startup Consulting & Strategy</li>
          <li>Website & Branding Design</li>
          <li>Workflow Automation</li>
          <li>AI Tool Development & SaaS MVPs</li>
        </ul>
      </section>

      <section id="contact" className="px-6 py-24 bg-black text-white" data-aos="fade-up">
        <h3 className="text-3xl font-bold mb-4">Contact</h3>
        <p className="text-gray-300">Email: <a href="mailto:jaikumareshb@gmail.com" className="underline">jaikumareshb@gmail.com</a></p>
        <p className="text-gray-300 mt-2">Location: Chennai, Tamil Nadu</p>
      </section>

      <a href="#contact"
         className="fixed bottom-6 right-6 bg-white text-black font-semibold px-5 py-3 rounded-full shadow-lg hover:bg-gray-200 transition-all z-50"
      >
        Let’s Talk
      </a>
    </div>
  );
}
