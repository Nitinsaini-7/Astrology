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
                  <a
                    href="#"
                    className="text-gray-400 transition hover:opacity-65"
                  >
                    {" "}
                    1on1 Coaching{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-400 transition hover:opacity-65"
                  >
                    {" "}
                    Company Review{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-400 transition hover:opacity-65"
                  >
                    {" "}
                    Accounts Review{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-400 transition hover:opacity-65"
                  >
                    {" "}
                    HR Consulting{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-400 transition hover:opacity-65"
                  >
                    {" "}
                    SEO Optimisation{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-white">Panchang</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 transition hover:opacity-65"
                  >
                    {" "}
                    About{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-400 transition hover:opacity-65"
                  >
                    {" "}
                    Meet the Team{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-400 transition hover:opacity-65"
                  >
                    {" "}
                    Accounts Review{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-white">Horoscope</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 transition hover:opacity-65"
                  >
                    {" "}
                    Contact{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-400 transition hover:opacity-65"
                  >
                    {" "}
                    FAQs{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-400 transition hover:opacity-65"
                  >
                    {" "}
                    Live Chat{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-white">Useful Links</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 transition hover:opacity-65"
                  >
                    {" "}
                    Accessibility{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-400 transition hover:opacity-65"
                  >
                    {" "}
                    Returns Policy{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-400 transition hover:opacity-65"
                  >
                    {" "}
                    Refund Policy{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-400 transition hover:opacity-65"
                  >
                    {" "}
                    Hiring Statistics{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-white">Astrology</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 transition hover:opacity-65"
                  >
                    {" "}
                    Kundali Matching{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-400 transition hover:opacity-65"
                  >
                    {" "}
                    Free Janam Kundali{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-white">Astrologer Section</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 transition hover:opacity-65"
                  >
                    {" "}
                    Astrologer Logint{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-400 transition hover:opacity-65"
                  >
                    {" "}
                    Astrologer Registration{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-white">Policy</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 transition hover:opacity-65"
                  >
                    {" "}
                    Privacy Policy{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-400 transition hover:opacity-65"
                  >
                    {" "}
                    Terms Of Use{" "}
                  </a>
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
