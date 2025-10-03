"use client"
// import { Montserrat_Alternates } from "next/font/google";
import Image from "next/image";
// import { setTimeout } from "node:timers/promises";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
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
                xl:w-90 cursor-pointer
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
                xl:w-90 cursor-pointer
              " onClick={handleOpenForm}>Free Consultation</button>
          </div>
        </section>
        {/* <footer className="bg-[var(--dark-background)] text-white px-12 py-16 w-full sm:px-45 sm:text-center space-y-3"> */}
          <article>

          </article>
          
          
          
          {/* <address>
            <ul>
              <li>Email: <a href="mailto:parranopolisstudio@gmail.com" className="underline">parranopolisStudio@gmail.com</a></li>
              <li>Phone: <a href="tel:+17205619763" className="underline">(720) 561-9763</a></li>
            </ul>
          </address>
          <ul className="text-sm space-y-3">
            <li>Custom Software Development for Small Businesses</li>
            <li>Web Design for Clinics &amp; Restaurants</li>
            <li>Small Business Automation Tools</li>
            <li>Mobile App Development for SMBs</li>
            <li>Denver-based Software Studio</li>
            <li>Affordable AI Integrations</li>
          </ul> */}

          {/* <div className="footer-inner">
    {/* <!-- Brand / Summary --> 
    <div className="footer-brand">
      <Link href="/" className="brand" aria-label="Parranopolis Studio Home">
      Parranopolis Studio
    </Link>
      {/* <a href="/" className="brand" aria-label="Parranopolis Studio Home">Parranopolis Studio</a
      <p className="tagline">
        We help small & mid-sized businesses grow with intelligent, modern, and efficient digital tools:
        custom software, web & mobile apps, and business automation—without the complexity.
      </p>
    </div> */}

    {/* <!-- SEO Footer Links (Option B: service-led + industries) --> */}
    {/* <nav className="footer-nav" aria-label="Services & Industries">
      <ul className="footer-links">
        {/* <!-- Services --> 
        <li><a href="/custom-software" title="Custom Software Development for SMBs">
          <strong>Custom Software Development</strong></a></li>
        <li><a href="/web-development" title="Web Design & Development for Small Businesses">
          <strong>Web Design & Development</strong></a></li>
        <li><a href="/mobile-apps" title="Mobile App Development for SMBs">
          <strong>Mobile App Development for SMBs</strong></a></li>
        <li><a href="/automation" title="Automation Tools for Small Businesses">
          <strong>Small Business Automation Tools</strong></a></li>
        <li><a href="/ai-integrations" title="AI Integrations & Chatbots">
          <strong>AI Chatbots & Integrations</strong></a></li>
        <li><a href="/dashboards" title="Dashboards & Analytics">
          <strong>Dashboards & Data Analytics</strong></a></li>
        <li><a href="/maintenance" title="Support & Maintenance Plans">
          <strong>Ongoing Support & Maintenance</strong></a></li>

        {/* <!-- Industries --
        <li className="divider" aria-hidden="true"></li>
        <li><a href="/industries/home-services" title="Web & Apps for Home Services">
          Home Services</a></li>
        <li><a href="/industries/legal" title="Software for Legal & Immigration">
          Legal</a></li>
        <li><a href="/industries/real-estate" title="Real Estate Websites & CRMs">
          Real Estate</a></li>
        <li><a href="/industries/wellness" title="Wellness, Fitness & Studios">
          Wellness & Fitness</a></li>
        <li><a href="/industries/retail" title="Retail & E-commerce Solutions">
          Retail & E-commerce</a></li>
      </ul>
    </nav> */}

<nav className="footer-nav" aria-label="Services & Industries">
      <ul className="footer-links">
        {/* <!-- Services --> */}
        
          {/* Custom Software Development
        
          Web Design & Development
        
          Mobile App Development for SMBs
        
          Small Business Automation Tools
        
          AI Chatbots & Integrations
        
          Dashboards & Data Analytics
        
          Ongoing Support & Maintenance

        {/* <!-- Industries -->
          Home Services
        
          Legal
        
          Real Estate
        
          Wellness & Fitness
        
          Retail & E-commerce */}
      </ul>
    </nav>
    {/* <!-- Location / Contact --> */}
    {/* <address className="footer-contact" aria-label="Location & Contact">
      <p><strong>Denver, Colorado</strong> · Serving SMBs across Colorado & the U.S.</p>
      <p>Email: <a href="mailto:parranopolisstudio@gmail.com">parranopolisstudio@gmail.com</a> ·
         Phone: <a href="tel:+1-720-561-9763">+1 (720) 5619763</a></p>
      <p><a href="/portfolio">Portfolio</a> · <a href="/pricing">Pricing</a> ·
         <a href="/contact">Free Consultation</a></p>
    </address>

    <small className="legal">
      © <span id="year"></span> Parranopolis Studio. All rights reserved. |
      <a href="/privacy">Privacy</a> · <a href="/terms">Terms</a>
    </small> */}
  {/* </div> */}

  {/* <!-- JSON-LD Organization / LocalBusiness (adjust fields as needed) --> */}
  {/* <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Parranopolis Studio",
    "url": "https://www.parranopolis.com",
    "logo": "https://www.parranopolis.com/assets/logo.png",
    "description": "Boutique software studio building custom software, web & mobile apps, and business automations for SMBs.",
    "areaServed": ["US", "Colorado", "Denver"],
    "contactPoint": [{
      "@type": "ContactPoint",
      "contactType": "sales",
      "email": "parranopolisstudio@gmail.com",
      "telephone": "+1-720-561-9763",
      "areaServed": "US"
    }],
    "sameAs": [
      "https://www.linkedin.com/company/parranopolis-studio"
    ]
  }
  </script> */}

  <script>
    {/* // Set current year
    document.getElementById('year').textContent = new Date().getFullYear(); */}
  </script>
          {/* <p>Custom Software Development for Small Businesses | Web Design for Clinics and Restaurants | Small Business Automation Tools | Mobile App Development for SMBs | Denver-based Software Studio | Affordable AI Integrations</p> */}
          {/* <p className="text-xs">© 2025 Parranopolis Studio. Made with care to boost your business.</p> */}
        {/* </footer> */}
        <Footer/>
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
      status!.innerHTML = `
      <section>
        <h3 class="text-4xl text-black pb-4">Message Sent</h3>
        <p class="text-2xl">You will be contacted by a member of our team as soon as possible.</p>
      </section>`;
      form.reset();
      setIsShow(true)
      setTimeout(()=>{
        onClose()
      },6000)
    } else {
      status!.innerHTML = "There was a problem sending the message. Please try again.";
    }
  } catch (error) {
    status!.innerHTML = `There was a problem sending the message. Please try again. ${error}`;
  }
}

  return <>
  <section role="dialog"
  aria-modal="true"
  aria-labelledby="contact-title" className="
  FormModal rounded-2xl shadow-2xl bg-white
   p-12 
   -translate-x-1/2 -translate-y-1/2
   fixed left-1/2 top-1/2 z-50
   w-5/6 max-w-xl
   ">
    {!isShow ?<form id="contact-form" action="https://formspree.io/f/mgvzqbrv" method="POST" onSubmit={handleSubmit}>
    <div className="flex justify-between items-center">
      <h3 className="text-4xl text-black pb-4">Lets Get in Touch</h3>
      <span className="text-4xl cursor-pointer" onClick={onClose}>X</span>
    </div>
      <div className="flex flex-col gap-4">
        <label htmlFor="name">Your Name</label>
        <input className="p-4 rounded-2xl border-1" type="text" name="name" placeholder="John" required/>
        
        <label htmlFor="tlf">Phone Number</label>
        <input type="tel" className="p-4 rounded-2xl border-1" id="tlf" name="tlf" placeholder="0000000000" required/>

        <label htmlFor="email">Email</label>
        <input className="p-4 rounded-2xl border-1" type="email" id="email" name="mail" placeholder="mail" required/>
        
        <label htmlFor="textarea">Anything you&apos;d like to add before the call?</label>
        <textarea className="p-4 rounded-2xl border-1" rows={6} name="Extra message" id="textarea" placeholder="Please add 3 days and times when I can call you or a brief description of your current issue."/>
      </div>
      <button className="mt-6 bg-[var(--dark-background)] p-4 w-full text-2xl text-white" id="my-form-button">Submit</button>
      </form>: ''}
      <article id="statusMessage" className="text-2xl text-center">
      {isShow ? 
      '' : ''}
      </article>
  </section>
  </>
}

// inside RootLayout <body>, using next/script
import Script from "next/script";

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Parranopolis Studio",
  "url": "www.parranopolisstudio.com",
  "logo": "www.parranopolisstudio.com/logo.png",
  "image": "www.parranopolisstudio.com/og-cover.jpg",
  "description": "Custom software, web & mobile apps, and automations for SMBs.",
  "telephone": "+1-303-555-0123",
  "areaServed": ["Denver CO","Colorado","United States"],
  "sameAs": [
    "https://www.linkedin.com/company/parranopolis-studio",
    "https://github.com/parranopolis"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Web Development" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mobile App Development" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Business Automations" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Maintenance & Support" } }
    ]
  }
};

<Script id="org-schema" type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
function Footer() {
  const services = [
    { label: 'Custom Software Development', href: '/services/custom-software' },
    { label: 'Mobile Apps', href: '/services/mobile-apps' },
    { label: 'AI Chatbots', href: '/services/ai-chatbots' },
    { label: 'Dashboards & Analytics', href: '/services/analytics' },
  ];

  const industries = [
    'Small & Medium Businesses',
    'Clinics / Healthcare',
    'Law Firms',
    'Retail & E-commerce',
  ];

  const org = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Parranopolis Studio',
    url: 'https://parranopolisstudio.com',
    logo: 'https://parranopolisstudio.com/icon.png',
    areaServed: 'United States',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Denver',
      addressRegion: 'CO',
      addressCountry: 'US',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        email: 'parranopolisstudio@gmail.com',
        telephone: '+17205619763',
        contactType: 'sales',
        availableLanguage: ['English', 'Spanish'],
      },
    ],
    // sameAs: [
    //   'https://www.linkedin.com/company/parranopolis-studio',
    //   'https://x.com/parranopolis', // update/remove if not used
    //   'https://github.com/parranopolis'
    // ],
  };

  return (
    <footer className="border-t border-white/10 bg-neutral-950 text-neutral-200 px-12">
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 sm:text-center">
        {/* Footer nav landmark */}
        <nav aria-labelledby="footer-heading" className="grid grid-cols-1 items-start gap-10 md:grid-cols-3">
          <h2 id="footer-heading" className="sr-only">Footer navigation</h2>

          {/* Left: services (internal links) */}
          <div className="">
            <h3 className="mb-3 text-3xl font-semibold tracking-wide text-neutral-400">
              What we build
            </h3>
            <ul className="space-y-2 text-sm w-full">
              {services.map((s) => (
                <li key={s.label} className="flex items-center gap-2 text-xl">
                  {/* <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-neutral-400 text-white" /> */}
                  {/* <Link href={s.href} className="hover:underline underline-offset-4">  Activalo cuando tengas otras paginas */} 
                    <span className="text-left">- {s.label}</span>
                  {/* </Link> */}
                </li>
              ))}
            </ul>
          </div>

          {/* Center: logo / brand */}
          <div className="flex flex-col items-center text-center">
            <Link href="/" aria-label="Parranopolis Studio — Home" className="group flex flex-col items-center">
              <div className="relative h-20 w-48 mb-4">
                <Image
                  src="/icon.png"
                  alt="Parranopolis Studio logo"
                  fill
                  className="object-contain scale-150"
                  priority
                />
              </div>
              <p className="mt-2 text-5xl text-white group-hover:text-neutral-300">
                Parranopolis <br />Studio
              </p>
            </Link>
          </div>

          {/* Right: who we serve */}
          <div className="md:text-right">
            <h3 className="mb-3 text-3xl font-semibold tracking-wide text-neutral-400">
              Who we serve
            </h3>
            <ul className="space-y-2 text-sm">
              {industries.map((i) => (
                <li key={i} className="flex items-center justify-start gap-2 md:justify-end text-xl">
                  {/* <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-white " /> */}
                  <span className="">- {i}</span>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <div className="my-10 h-px w-full bg-white/10" />

        {/* Bottom bar: NAP + contact */}
        <div className="flex flex-col items-center justify-between gap-4 text-sm md:flex-row">
          <address className="not-italic text-neutral-400">
            Denver CO • Serving SMBs across the U.S.
          </address>

          <div className="flex flex-wrap items-center gap-4">
            <Link href="mailto:hello@parranopolisstudio.com" className="underline decoration-neutral-500 underline-offset-4 hover:text-white">
              parranopolisstudio@gmail.com
            </Link>
            <span className="hidden h-4 w-px bg-white/10 md:block" />
            <Link href="tel:+17209999999" className="underline decoration-neutral-500 underline-offset-4 hover:text-white">
              +1 (720) 561-9763
            </Link>
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-neutral-500">
          <p>
            © {new Date().getFullYear()} Parranopolis Studio. All rights reserved. 
          
            Made with care to boost your business.
          
          </p>
        </div>
      </div>

      {/* JSON-LD (keep ONE Organization or LocalBusiness on the page) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }}
      />
    </footer>
  );
}

