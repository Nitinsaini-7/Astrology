import React from "react";

const WhatAstrology = () => {
  return (
    <div className="mx-4">
      <div className="flex items-center justify-center py-10 ">
        <span className=" px-1 py-4 bg-orange-400 mr-1"></span>
        <h1 className="text-3xl font-bold uppercase text-black">What Is Astrology?</h1>
        <span className=" px-1 py-4 bg-orange-400 ml-1"></span>
      </div>

      <div className="w-full bg-slate-100 px-6 py-6 my-8 ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-6xl sm:rounded-lg">
        <details className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
            <span className="text-black">Know what is Astrology ?</span>
            <span className="transition group-open:rotate-180 text-black">
              <svg
                fill="none"
                height="24"
                shape-rendering="geometricPrecision"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </span>
          </summary>
          <main className="flex-grow text-black mt-6 bg-slate-100">
        <section className="container mx-auto p-6">
          <h2 className="text-2xl font-bold mb-4">Astrology Is The Language Of The Universe</h2>
          <p className="text-lg mb-4">
            Astrology predictions are based on the position and movements of planets and celestial bodies
            in the Universe that impact our life quality. This can be studied by creating an offline or online
            horoscope of individuals. This affects not only the people but also controls the occurrence of certain
            events happening in the sublunar world.
          </p>
          <p className="text-lg mb-4">
            Some may call it pseudo-science, and others call it predictive science. The science that is Astrology
            inspires people to know the various aspects of their life and take it in the right direction. From making
            life predictions on the basis of a detailed Kundali or telling you about the near future through daily,
            weekly, and monthly horoscopes, Astrology is the medium through which you can get a glimpse of what the
            future will bring for you.
          </p>
        </section>

        <section className="bg-blue-800 text-white py-8">
          <div className="container mx-auto p-6">
            <h2 className="text-2xl font-bold mb-4">How Online Astrology Services Can Benefit You</h2>
            <p className="text-lg mb-4">
              You know how well you can take your life in the right direction with the right Astro guidance, so why
              not get it from the comfort of your home.
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>It is the most hassle-free way to connect with the best Astrologers.</li>
              <li>Online Astrology services are the most time-saving and affordable way to connect with top Astrologers and get consultations, anytime and anywhere.</li>
              <li>It makes it convenient for people to talk to an Astrologer openly as your privacy and confidentiality is strictly maintained.</li>
              <li>You can choose the best Astrologer online among nearly 100+ Astrologers that you think matches your requirements perfectly.</li>
            </ul>
          </div>
        </section>

        <section className="container mx-auto p-6">
          <h2 className="text-2xl font-bold mb-4">Online Astrology Consultation Services By Naunidh</h2>
          <p className="text-lg mb-4">
            Naunidh has established its footprints in the online Astrology services, helping people get through
            their life problems. This is done by the best online Astrologers who are experienced and renowned in
            this domain. Our Astrologers are available 24/7 to help people with their Astro advice on the best website
            for Astrology.
          </p>
          <ol className="list-decimal pl-5 mb-4">
            <li>Download the Naunidh app</li>
            <li>Sign up with your basic details</li>
            <li>Enjoy your free session of online Astrology consultation</li>
            <li>Recharge your wallet</li>
            <li>Choose the best Astrologer online with whom you want to consult</li>
            <li>Enjoy your live chat/call session with the best online Astrologers</li>
          </ol>
        </section>

        <section className="bg-blue-800 text-white py-8">
          <div className="container mx-auto p-6">
            <h2 className="text-2xl font-bold mb-4">Online Astrology Predictions Categories</h2>
            <p className="text-lg mb-4">
              You can discuss anything troubling you with a professional Astrologer. Here are the primary categories:
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li><strong>Love and Relationships:</strong> Questions related to your relationship, past, present, or future.</li>
              <li><strong>Marriage and Family:</strong> Issues related to married life, infidelity, or second marriage.</li>
              <li><strong>Career and Job:</strong> Workplace conflicts, promotions, or career decisions.</li>
              <li><strong>Money and Finance:</strong> Current financial position, future predictions, or improvements.</li>
            </ul>
          </div>
        </section>
      </main>
        </details>
      </div>
    </div>
  );
};

export default WhatAstrology;
