"use client"
// import { Montserrat_Alternates } from "next/font/google";
import Image from "next/image";
// import { setTimeout } from "node:timers/promises";

import { useEffect, useState, useRef } from "react";

export default function Home() {

    // const scrollRef = useRef(null);
    const scrollRef = useRef<HTMLDivElement>(null);

  const [isMobile, setIsMobile] = useState(false);
  const [isTrue, setIsTrue] = useState(false)

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
    }, 5000);

    return () => clearInterval(interval);
  }, [isMobile]);

const handleOpenForm = () => {
  setIsTrue(!isTrue)
}

const handleCloseForm = () =>{
  setIsTrue(false);
}

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
        
        {/* <section className="border-1 w-full"> */}
        {isTrue && (<Form onClose={handleCloseForm}/>)}
        {/* <Form/> */}
        {/* </section> */}

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
              <button onClick={handleOpenForm} className="CTA-button bg-[var(--CTA-button-bg)] rounded-2xl py-2 font-medium
                sm:w-[45%] sm:py-3 sm:text-2xl sm:font-extralight 
                xl:w-90
              ">Free Consultation</button>
            </div>
          </div>
          {/* <Form></Form> */}
        </section>
        {/* about Section */}
        <section id="about" className="px-12 py-16 max-w-5xl mx-auto space-y-6 sm:px-25 sm:text-center lg:px-8">
          <h3 className="text-4xl montserrat-alternates font-medium w-3/4 sm:w-full lg:text-6xl lg:py-8">About Parranopolis Studio</h3>
          <p className="text-2xl lg:text-4xl lg:font-extralight">Parranopolis Studio helps businesses grow by building intelligent, modern, and efficient digital tools. 
            We specialize in custom software development, web &amp; mobile applications, and business automation. 
            Our mission is to empower SMBs to thrive in the digital age—without the complexity. 
            {/* Whether you&apos;re running a local clinic, a small restaurant, or a service-based business, we&apos;re here to deliver premium solutions that save time and drive results. */}
          </p>
        </section>
        {/* services Section */}
        <section className="bg-[var(--dark-background)] text-white py-16 mx-auto w-full space-y-6" id="services">
          <h3 className="px-12 py-8 text-4xl montserrat-alternates font-medium w-3/4 sm:w-full sm:px-25 sm:text-center lg:text-6xl lg:py-16">Discover What We Do</h3>
          <article className="flex overflow-x-auto w-[90%] m-auto snap-x snap-mandatory scroll-smooth gap-8
          md:flex-wrap md:justify-center lg:w-[95%]
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
        <section id="trust-heading" className=" py-16 w-full space-y-6 sm:text-center justify-around md:py-20 lg:py-40">
          <h3 className="text-4xl montserrat-alternates font-medium px-12 md:px-0 lg:text-6xl">Why Businesses Trust on Us?</h3>
          <p className="text-2xl md:text-3xl font-light px-12 md:px-20 lg:text-4xl lg:font-extralight lg:px-60 lg:py-15">We don&apos;t just build software we create long-term growth strategies that adapt to your business needs</p>
          <div>
            <article className="text-white flex flex-col gap-12">

              <div className="flex flex-col justify-around items-center gap-12 bg-[var(--bg-card)] px-12 py-16 w-5/6 rounded-tr-[50px] rounded-br-[50px] shadow-[0_2px_70px_rgba(0,0,0,0.95)]
              md:flex-row-reverse md:text-left md:pl-30 lg:pl-60
              ">
                <Image src={'/images/location.webp'} width={190} height={190} alt="location" className="w-[133px] h-[133px]"/>
                <div>
                  <h3 className="pb-4 text-2xl font-bold md:text-3xl lg:text-5xl">We Understand Small Business Needs</h3>
                  <p className="text-xl md:text-2xl lg:text-3xl lg:font-extralight">We work directly with entrepreneurs and managers to create tools that actually solve problems.</p>
                </div>
              </div>

              <div className="bg-[var(--bg-card)] text-right flex flex-col justify-around items-center gap-12 px-12 py-16 w-5/6 ml-auto rounded-tl-[50px] rounded-bl-[50px] shadow-[0_2px_90px_rgba(0,0,0,0.95)] 
              md:flex-row md:pr-30 lg:pr-60
              
              ">
                <Image src={'/images/modern.webp'} width={190} height={190} alt="location" className="w-[133px] h-[133px]"/>
                <div>
                  <h3 className="pb-4 text-2xl font-bold md:text-3xl lg:text-5xl">Modern Design Meets Functionality</h3>
                  <p className="text-xl md:text-2xl lg:text-3xl lg:font-extralight">Your software should be elegant and effective. We deliver both.</p>
                </div>
              </div>

              <div className="flex flex-col justify-around items-center gap-12 bg-[var(--bg-card)] px-12 py-16 w-5/6 rounded-tr-[50px] rounded-br-[50px] shadow-[0_20px_70px_rgba(0,0,0,0.95)]
              md:flex-row-reverse md:text-left md:pl-30 lg:pl-60">
                <Image src={'/images/friendly.webp'} width={190} height={190} alt="location" className="w-[133px] h-[133px]"/>
                <div>
                  <h3 className="pb-4 text-2xl font-bold md:text-3xl lg:text-5xl">Fast Turnaround, Long-Term Value</h3>
                  <p className="text-xl md:text-2xl lg:text-3xl lg:font-extralight">From first meeting to launch, we work fast—without sacrificing quality. And we’re here to support your business as it grows.</p>
                </div>
              </div>
              
              <div className="bg-[var(--bg-card)] text-right  flex flex-col justify-around items-center gap-12 px-12 py-16 w-5/6 ml-auto rounded-tl-[50px] rounded-bl-[50px] shadow-[0_2px_90px_rgba(0,0,0,0.95)] 
              md:flex-row md:pr-30 lg:pr-60
              ">
                <Image src={'/images/scalable.webp'} width={190} height={190} alt="location" className="w-[133px] h-[133px]"/>
                <div>
                  <h3 className="pb-4 text-2xl font-bold md:text-3xl lg:text-5xl">Scalable, Secure, Reliable</h3>
                  <p className="text-xl md:text-2xl lg:text-3xl lg:font-extralight">Built on modern tech stacks with best practices in performance and security.</p>
                </div>
              </div>
              
            </article>
          </div>
        </section>

        {/* Call-To-Action Section */}
        <section id="contact" className="px-12 py-16 w-full space-y-6 bg-[var(--CTA-bg)] bg-[url(/images/CTA-bg.webp)] bg-cover bg-no-repeat text-white bg-blend-screen
        sm:px-35 sm:text-center sm:space-y-18 md:py-18 lg:py-28">
        {/* <section id="contact" className="px-12 py-16 w-full space-y-6 bg-gradient-to-tl from-[var(--CTA-button-bg)] to-[var(--blue2)"> */}
          <h3 className="text-4xl sm:text-5xl montserrat-alternates font-semibold text-center lg:text-6xl">Ready to Take Your Business to the Next Level?</h3>
          <p className="text-2xl sm:text-3xl lg:text-4xl">Get in touch to discuss your business goals. Whether you&apos;re starting from scratch or want to improve what you have, we&apos;ll help you take the next step—smartly and affordably.</p>
          <div className="flex justify-center gap-5">
            <span><Image src={'/images/laptop.webp'} width={50} height={50} alt="laptop" /></span>
            {/* <button className="bg-[var(--CTA-button-bg)] text-white ">Get a Free Consultation</button> */}
            <button className="CTA-button bg-[var(--CTA-button-bg)] rounded-2xl py-2 px-6 font-medium
                sm:w-[45%] sm:py-3 sm:text-2xl sm:font-extralight 
                xl:w-90
              " onClick={handleOpenForm}>Free Consultation</button>
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

function Form ({onClose}:{onClose: ()=> void}) {
  const [isShow, setIsShow] = useState(false)

  async function handleSubmit(event:React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.target as HTMLFormElement
    const data = new FormData(form)
    const status = document.querySelector('#statusMessage');
      try {
    const res = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: { 'Accept': 'application/json' }
    });

    if (res.ok) {
      status!.innerHTML = "Message sent, you will be contacted by a member of our team as soon as possible.";
      form.reset();
      setIsShow(true)
      setTimeout(()=>{
        onClose()
      },6000)
    } else {
      status!.innerHTML = "There was a problem sending the message. Please try again.";
    }
  } catch (error) {
    status!.innerHTML = "There was a problem sending the message. Please try again.";
  }
}

  return <>
  <section className="FormModal bg-white w-1/2 p-12 fixed top-1/2 letf-1/2 translate-x-1/2 -translate-y-1/2">
    {!isShow ?<form id="contact-form" action="https://formspree.io/f/mgvzqbrv" method="POST" onSubmit={handleSubmit}>
      <h3 className="text-4xl text-black">Lets Get in Touch</h3>
      <div className="flex flex-col">
        <label htmlFor="name">Your Name</label>
        <input className="border-1" type="text" name="name" placeholder="John" required/>
        
        <label htmlFor="tlf">Phone Number</label>
        <input type="text" className="border-1" id="tlf" name="tlf" placeholder="0000000000" required/>

        <label htmlFor="mail">Email</label>
        <input className="border-1" type="email" id="mail" name="mail" placeholder="mail" required/>
        
        <label htmlFor="textarea">Anything you&apos;d like to add before the call?</label>
        <textarea className="border-1" rows={6} name="Extra message" id="textarea" placeholder="Please add 3 days and times when I can call you or a brief description of your current issue."/>
      </div>
      <button className="" id="my-form-button">Submit</button>
      </form>: ''}
      <article id="statusMessage">
      {isShow ? 'Mensaje enviado' : ''}
      </article>
  </section>
  </>
}