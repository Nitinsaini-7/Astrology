import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-zinc-900">
      <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-8 sm:px-6 lg:space-y-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="grid md:place-items-start place-items-center">
            <div className="text-yellow-500">
              <img src="/N (2).png" alt="" className="w-20 rounded-full" />
              <p className="text-2xl font-bold">Astroway</p>
            </div>

            <p className="mt-4 max-w-xs text-white md:text-left text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse non
              cupiditate quae nam molestias.
            </p>

            <ul className="mt-8 flex gap-4">
              <Link>
                <li className="bg-white w-10 h-10 p-2 flex items-center justify-center rounded-full">
                  <img src="/facebook.png" alt="" className="w-8" />
                </li>
              </Link>

              <Link>
                <li className="bg-white w-10 h-10 p-2 flex items-center justify-center rounded-full">
                  <img src="/x.png" alt="" className="w-8" />
                </li>
              </Link>
              <Link>
                <li className="bg-white w-10 h-10 p-2 flex items-center justify-center rounded-full">
                  <img src="/instagram.png" alt="" className="w-8" />
                </li>
              </Link>
              <Link>
                <li className="bg-white w-10 h-10 p-2 flex items-center justify-center rounded-full">
                  <img src="/youtube.png" alt="" className="w-8" />
                </li>
              </Link>
              <Link>
                <li className="bg-white w-10 h-10 p-2 flex items-center justify-center rounded-full">
                  <img src="/linkedin.png" alt="" className="w-8" />
                </li>
              </Link>
            </ul>

            <div className="mt-8">
              <p className="text-white">Download Our Apps</p>
              <ul className="mt-2 flex gap-4">
                <Link>
                  <li className="">
                    <img
                      src="/playstore.webp"
                      alt=""
                      className="w-32 border-white border rounded-md"
                    />
                  </li>
                </Link>

                <Link>
                  <li className="">
                    <img
                      src="/appstore.webp"
                      alt=""
                      className="w-32 border-white border rounded-md"
                    />
                  </li>
                </Link>
              </ul>
            </div>
          </div>

          <div className="grid text-center grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
            <div>
              <p className="font-medium text-white">Get Advice On</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 transition hover:opacity-65"
                  >
                    {" "}
                    1on1 Coaching{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className="text-gray-400 transition hover:opacity-65"
                  >
                    {" "}
                    Company Review{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className="text-gray-400 transition hover:opacity-65"
                  >
                    {" "}
                    Accounts Review{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className="text-gray-400 transition hover:opacity-65"
                  >
                    {" "}
                    HR Consulting{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className="text-gray-400 transition hover:opacity-65"
                  >
                    {" "}
                    SEO Optimisation{" "}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-white">Panchang</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link
                    to='/about'
                    className="text-gray-400 transition hover:opacity-65"
                    onClick={() => {
                      window.scroll(0, 0);
                    }}
                  >
                    {" "}
                    About{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className="text-gray-400 transition hover:opacity-65"
                  >
                    {" "}
                    Meet the Team{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className="text-gray-400 transition hover:opacity-65"
                  >
                    {" "}
                    Accounts Review{" "}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-white">Horoscope</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link
                    to='/contact'
                    className="text-gray-400 transition hover:opacity-65"
                  >
                    {" "}
                    Contact{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className="text-gray-400 transition hover:opacity-65"
                  >
                    {" "}
                    FAQs{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className="text-gray-400 transition hover:opacity-65"
                  >
                    {" "}
                    Live Chat{" "}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-white">Useful Links</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 transition hover:opacity-65"
                  >
                    {" "}
                    Accessibility{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className="text-gray-400 transition hover:opacity-65"
                  >
                    {" "}
                    Returns Policy{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className="text-gray-400 transition hover:opacity-65"
                  >
                    {" "}
                    Refund Policy{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className="text-gray-400 transition hover:opacity-65"
                  >
                    {" "}
                    Hiring Statistics{" "}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-white">Astrology</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link
                    to="/kundali-matching"
                    className="text-gray-400 transition hover:opacity-65"
                    onClick={() => {
                      window.scroll(0, 0);
                    }}
                  >
                    {" "}
                    Kundali Matching{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    to="/janam-kundali"
                    className="text-gray-400 transition hover:opacity-65"
                    onClick={() => {
                      window.scroll(0, 0);
                    }}
                  >
                    {" "}
                    Free Janam Kundali{" "}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-white">Astrologer Section</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link
                    to="/signin"
                    className="text-gray-400 transition hover:opacity-65"
                  >
                    {" "}
                    Astrologer Logint{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    to="/signup"
                    className="text-gray-400 transition hover:opacity-65"
                  >
                    {" "}
                    Astrologer Registration{" "}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-white">Policy</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 transition hover:opacity-65"
                  >
                    {" "}
                    Privacy Policy{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className="text-gray-400 transition hover:opacity-65"
                  >
                    {" "}
                    Terms Of Use{" "}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <p className="text-xs text-white text-center">
          &copy; 2022. Company Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
