"use client"
// import { Montserrat_Alternates } from "next/font/google";
import Image from "next/image";

import { useEffect, useState, useRef } from "react";

export default function Home() {

    // const scrollRef = useRef(null);
    const scrollRef = useRef<HTMLDivElement>(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768); // md = 768px en Tailwind
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    if (!isMobile || !scrollRef.current) return;

    const container = scrollRef.current;
    const sections = container.querySelectorAll("section");
    let index = 0;
    

    const interval = setInterval(() => {
      index = (index + 1) % sections.length;
      const offset = sections[index].offsetLeft;
      container.scrollTo({
        left: offset,
        behavior: "smooth",
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isMobile]);

  return (
     <div className="min-h-screen flex flex-col" >
        {/* antes de seguir debes arreglar el nav para que cresca deacuerdo al tamaño de la pantalla. agregar efecto parallax */}
      <header className="absolute inset-x-0 to-0">
{/* flex justify-around items-center absolute w-full pt-2 */}
       <nav className="flex items-center justify-between max-w-6x1 mx-auto px-4 py-2" aria-label="Primary">
        <a href="" className="flex items-center gap-2">
          <Image src={'/images/logo2.webp'} width={50} height={50} alt="logo of Parranopolis Studio" />
          <span className="sr-only"> Parranopolis Studio</span>
        </a>
          {/* <Image src={'/images/menu-outline.svg'} width={50} height={50} alt="menu" className="" /> */}
          <ul className="hidden sm:flex gap-6 underline font-medium">
            <li><a href="#about"> About</a></li>
            <li><a href="#services">What We Do</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </nav>
       </header>

      <main id="top" className="flex-1">
        {/* hero Section */}
        <section className="bg-[url(/images/test.png)] bg-no-repeat bg-center bg-size-[150%] h-screen bg-black text-white flex
          lg:bg-size-[100%]
          " role="banner">
          <div className="w-[80%] m-auto flex flex-col justify-center gap-35
            sm:w-[70%] sm:gap-20 
            lg:w-[70%] lg:ml-50
          ">
            <h1 className="text-5xl sm:text-6xl lg:text-8xl sr-only">Parranopolis Studio – Custom Software Solutions for SMBs</h1>
            <h2 className="text-5xl sm:text-6xl lg:text-8xl">
              <span className="font-medium">Powerful Software Solutions for Growing</span> <span className="text-[var(--accent)] accent font-bold">Businesses</span>
            </h2>
            <div className="flex flex-col gap-12">
              <h2 className={`text-2xl text-center font-extralight max-w-[1200px]
                sm:text-left sm:text-3xl sm:font-normal
                lg:text-4xl lg:font-light
                
                `}>Build smarter, faster, and beautifully. We craft custom software, websites, and automations for small and medium-sized businesses.</h2>
              <button className="CTA-button bg-[var(--CTA-button-bg)] rounded-2xl py-2 font-medium
                sm:w-[45%] sm:py-3 sm:text-2xl sm:font-extralight 
                xl:w-90
              ">Free Consultation</button>
            </div>
          </div>
        </section>
        {/* about Section */}
        <section id="about" className="px-12 py-16 max-w-5xl mx-auto space-y-6 sm:px-25 sm:text-center">
          <h3 className="text-4xl montserrat-alternates font-medium w-3/4 sm:w-full">About Parranopolis Studio</h3>
          <p className="text-2xl">Parranopolis Studio helps businesses grow by building intelligent, modern, and efficient digital tools. 
            We specialize in custom software development, web &amp; mobile applications, and business automation. 
            Our mission is to empower SMBs to thrive in the digital age—without the complexity. 
            {/* Whether you&apos;re running a local clinic, a small restaurant, or a service-based business, we&apos;re here to deliver premium solutions that save time and drive results. */}
          </p>
        </section>
        {/* services Section */}
        <section className="bg-[var(--dark-background)] text-white py-16 mx-auto w-full space-y-6" id="services">
          <h3 className="px-12 text-4xl montserrat-alternates font-medium w-3/4 sm:w-full sm:px-25 sm:text-center">Discover What We Do</h3>
          <article className="flex overflow-x-auto w-[90%] m-auto snap-x snap-mandatory scroll-smooth gap-8
          md:flex-wrap md:justify-center
          "
          ref={scrollRef}>
            
            <section className="rounded-4xl min-w-full snap-start bg-[url(/images/web-development.webp)] bg-no-repeat bg-cover h-[500px] flex flex-col justify-end px-12 pb-12 gap-4
            md:min-w-0 md:w-sm
            ">
              <h3 className="text-2xl w-full font-bold">Custom Web Development</h3>
              <p className="text-xl font-light">
                We design sleek, responsive websites tailored to your business goals.
                Fast-loading, mobile-friendly, and optimized for SEO.
              </p>
            </section>

            <section className="rounded-4xl min-w-full snap-start bg-[url(/images/mobile-web-app.webp)] bg-no-repeat bg-cover h-[500px] flex flex-col justify-end px-12 pb-12 gap-4
            md:min-w-0 md:w-sm
            ">
              <h3 className="text-3xl w-full font-bold">Mobile & Web Applications</h3>
              <p className="text-xl font-light">
                Need a tool for internal use or customer engagement? We build
                intuitive, high-performance apps for business operations and customer
                experiences.
              </p>
            </section>

            <section className="rounded-4xl min-w-full snap-start bg-[url(/images/Business-Process-Automation.webp)] bg-no-repeat bg-cover h-[500px] flex flex-col justify-end px-12 pb-12 gap-4
              md:min-w-0 md:w-sm
            ">
              <h3 className="text-3xl w-full font-bold">Business Process Automation</h3>
              <p className="text-xl font-light">
                We automate repetitive tasks—like client intake, email follow-ups, and
                appointment reminders—to help you focus on what really matters.
              </p>
            </section>

            <section className="rounded-4xl min-w-full snap-start bg-[url(/images/maintenance.webp)] bg-no-repeat bg-cover h-[500px] flex flex-col justify-end px-12 pb-12 gap-4
              md:min-w-0 md:w-sm
            ">
              <h3 className="text-3xl w-full font-bold">Ongoing Support & Maintenance</h3>
              <p className="text-xl font-light">
                Enjoy peace of mind with continuous updates, security monitoring, and
                technical support tailored to your business.
              </p>
            </section>
          </article>
        </section>

        {/* Trust Section */}
        <section id="trust-heading" className="px-12 py-16 w-full space-y-6 sm:px-45 sm:text-center">
          <h3 className="text-4xl montserrat-alternates font-medium">Why Businesses Trust on Us?</h3>
          <p className="text-2xl">We don&apos;t just build software we create long-term growth strategies that adapt to your business needs</p>
          <div>
            <article>
              {/* <div className="">
                  <h3>Title</h3>
                  <p>We work directly with entrepreneurs and managers to create tools that actually solve problems.</p>
                  <Image src={'/images/location.webp'} width={100} height={100} alt="location" />
                </div> */}
            </article>
          </div>
        </section>
        {/* Call-To-Action Section */}
        
        <section id="contact" className="px-12 py-16 w-full space-y-6 bg-[var(--CTA-bg)] bg-[url(/images/CTA-bg.webp)] bg-cover bg-no-repeat text-white bg-blend-screen
        sm:px-35 sm:text-center sm:space-y-18">
        {/* <section id="contact" className="px-12 py-16 w-full space-y-6 bg-gradient-to-tl from-[var(--CTA-button-bg)] to-[var(--blue2)"> */}
          <h3 className="text-4xl sm:text-5xl montserrat-alternates font-semibold text-center">Ready to Take Your Business to the Next Level?</h3>
          <p className="text-2xl sm:text-3xl">Get in touch to discuss your business goals. Whether you&apos;re starting from scratch or want to improve what you have, we&apos;ll help you take the next step—smartly and affordably.</p>
          <div className="flex justify-center gap-5">
            <span><Image src={'/images/laptop.webp'} width={50} height={50} alt="laptop" /></span>
            {/* <button className="bg-[var(--CTA-button-bg)] text-white ">Get a Free Consultation</button> */}
            <button className="CTA-button bg-[var(--CTA-button-bg)] rounded-2xl py-2 px-6 font-medium
                sm:w-[45%] sm:py-3 sm:text-2xl sm:font-extralight 
                xl:w-90
              ">Free Consultation</button>
          </div>
        </section>
        <footer className="bg-[var(--dark-background)] text-white px-12 py-16 w-full sm:px-45 sm:text-center space-y-3">
          <address>
            <ul>
              <li>Email: <a href="mailto:parranopolisstudio@gmail.com" className="underline">parranopolisStudio@gmail.com</a></li>
              <li>Phone: <a href="tel:+10000000000" className="underline">(000) 000-0000</a></li>
            </ul>
          </address>
          <ul className="text-sm space-y-3">
            <li>Custom Software Development for Small Businesses</li>
            <li>Web Design for Clinics &amp; Restaurants</li>
            <li>Small Business Automation Tools</li>
            <li>Mobile App Development for SMBs</li>
            <li>Denver-based Software Studio</li>
            <li>Affordable AI Integrations</li>
          </ul>
          {/* <p>Custom Software Development for Small Businesses | Web Design for Clinics and Restaurants | Small Business Automation Tools | Mobile App Development for SMBs | Denver-based Software Studio | Affordable AI Integrations</p> */}
          <p className="text-xs">© 2025 Parranopolis Studio. Made with care to boost your business.</p>
        </footer>
      </main>
     </div>
  );
}
