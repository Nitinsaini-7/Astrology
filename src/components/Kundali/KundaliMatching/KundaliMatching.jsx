import React from "react";
import KundaliMatchingForm from "./KundaliMatchingForm";

const KundliMatching = () => {
  return (
    <div className="mt-20 md:mx-10 mx-5">
      <div className="text-center">
        <h2 className="text-2xl font-semibold uppercase">
          Kundli Matching | Kundali Match for Marriage | Horoscope Matching
        </h2>
        <p className="py-2">
          Have you finalized the person you wish to get married to and want to
          do the Kundali matching?
        </p>
        <p>
          Do you want to check if the person with whom you are vibing well is
          compatible enough, as per astrology, to get married?
        </p>
        <p className="py-2">
          Before proceeding to marriage, which is a turning point for any
          individual, Kundali Milan is performed to ensure a good compatibility
          in the future between the couple. A compatibility score of 18 and
          above is usually considered auspicious for a successful marriage.
          However, gun milan should not be the only criteria to judge the
          forecast of marriage as planetary positions and their effect on
          compatibility are also significant factors. It is suggested the
          prospective couple gets the Kundali matching by name and date of birth
          details assessed further by expert astrologers to study if the aspects
          essential for great compatibility are matched well. So, let us find a
          general outline of the Kundli Milan for marriage and check the
          compatibility between couples.
        </p>
      </div>

      <div className="text-center my-10">
        <h2 className="text-2xl font-semibold uppercase">
          Enter Details to Get Free Online Kundali Matching Report For Marriage
        </h2>
        <p className="py-2">
          Anytime Astro is a premium online horoscope-matching site that can
          help you check Kundali Milan by name and date of birth. Here, the team
          of expert astrologers analyze the compatibility of both the partners
          and present accurate results based upon the Ashtakoots or eight
          categories considered to check the var vadhu gun milan.
        </p>
        <p>
          So, what keeps you waiting, check your marriage compatibility by
          entering below the details of both partners, such as name, birth date,
          birth time, and birthplace for horoscope matching by date of birth.
        </p>
      </div>
      <KundaliMatchingForm></KundaliMatchingForm>

      <div className="text-center mt-10">
        <h2 className="text-2xl font-semibold uppercase">Kundali Matching Analysis</h2>
        <p className="py-2">Got the Patrika Matching analysis, but not sure about what it means. Rest assured, connect with expert astrologers instantly over call or chat to ensure minute details about your compatibility and also receive recommendations to fix any issues that might hinder in marital life.</p>
        <p>Connect with astrologers now!</p>
      </div>

      <div className="my-10">
        <h2 className="text-2xl font-semibold text-center uppercase">Online Kundali Matching Process (How it works?)</h2>

        <div className="">
          <p className="py-2">The process for Kundli Milan for marriage works as follows -</p>
          <p className="mb-2">
            <span className="font-bold">Step 1: </span> Enter the details of
            both partners, such as their name, birthdate, birthplace, and birth
            time. Make sure you enter the correct details for an accurate Janam
            Kundli matching.
          </p>

          <p className="mb-2">
            <span className="font-bold">Step 2: </span> The system will generate
            a horoscope matching for marriage based on the details provided.
          </p>
          <p className="mb-2">
            <span className="font-bold">Step 3: </span> Gun Milan by name and
            other birth-related details are analyzed for both potential partners
            by the software. The compatibility score is generated based on eight
            factors, namely Varna, Vashya, Tara, Yoni, Graha Maitri, Gana,
            Bhakoot, and Nadi.
          </p>

          <p className="mb-2">
            <span className="font-bold">Step 4: </span> Based on the scores of
            each guna, the compatibility gets calculated. The higher the score,
            the higher the compatibility, and vice versa. However, other factors
            are also considered while analyzing, which can be done by expert
            astrologers.
          </p>
          <p className="mb-2">
            <span className="font-bold">Step 5: </span> The system then produces
            a detailed analysis concerning each factor and offers precautions or
            recommendations if required.
          </p>

          <p className="mb-2">
            <span className="font-bold">Step 6: </span> It is recommended to
            consult expert astrologers for further clarifications and insights.
          </p>
        </div>
      </div>
      <div className=" mb-10">
        <div className="w-full bg-slate-200 grid md:grid-cols-2 grid-cols-1 gap-10 place-items-center">
          <div className="text-center p-2">
            <h2 className="text-2xl">
              ARE YOU GETTING MARRIED TO THE RIGHT PERSON?
            </h2>
            <p className="py-4 text-xl">
              Get answers to all your questions right here.
            </p>
            <button className="p-2 bg-yellow-500 text-white rounded-full border-2 border-yellow-500 hover:bg-transparent hover:text-yellow-500 duration-300">
              Ask An Astrologer Now
            </button>
          </div>
          <div>
            <img src="/kundali-matching.png" alt="" className="md:w-60 w-full" />
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-center text-2xl font-semibold uppercase">Finding the Right Partner Through Kundli Matching</h2>
        <p className="py-2">
          The Hindu culture has always favored Kundali matching by date of birth
          to check the compatibility among the prospective partners. Let us
          explore the reasons why Kundli matching helps to find an ideal partner
          for having a successful and lasting marriage -
        </p>

        <div>
          <li className="mb-2">
            The temperament, health, financials, intellect, and family of
            partners can be evaluated by horoscope matching by name and other
            birth details.
          </li>

          <li className="mb-2">
            {" "}
            In the Kundali Milan by date of birth, the eight vital aspects are
            evaluated by considering behavior, personality, and spirituality.
          </li>
          <li className="mb-2">
            {" "}
            A higher gun milan means stronger compatibility and vice between the
            partners. The Kundali matching by name and other birth details
            provides an analysis of more than just the compatibility score, such
            as the potential strengths and weaknesses.
          </li>
          <li className="mb-2">
            {" "}
            Based on the results, one can consult astrologers to seek
            personalized guidance, yet clarifying concerns.
          </li>
        </div>
      </div>
    </div>
  );
};

export default KundliMatching;
