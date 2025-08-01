// import { Montserrat_Alternates } from "next/font/google";
import Image from "next/image";

export default function Home() {
  return (
     <div >
      <main>
        <nav className="flex justify-around items-center absolute w-full pt-2">
          <span><Image src={'/images/logo2.webp'} width={50} height={50} alt="logo" /></span>
          <ul className="flex gap-2 underline">
            <li>About</li>
            <li>What We Do</li>
            <li>Contact Us</li>
          </ul>
        </nav>

      <header className="bg-[url(/images/test.png)] bg-no-repeat bg-center bg-size-[150%] h-screen  flex
      lg:bg-size-[100%]
      ">
        <div className="w-[80%] m-auto flex flex-col justify-center gap-35
          sm:w-[70%] sm:gap-20 
          lg:w-[70%] lg:ml-50
        ">
          <h1 className="text-5xl sm:text-6xl lg:text-8xl
          "><span className="font-medium">Powerful Software Solutions for Growing</span> <span className="text-[var(--accent)] accent font-bold">Businesses</span></h1>
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
      </header>
      <article>
        {/* antes de seguir debes arreglar el nav para que cresca deacuerdo al tamaño de la pantalla. agregar efecto parallax */}
      </article>
      </main>
     </div>
  );
}
