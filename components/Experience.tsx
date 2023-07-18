import SectionTitle from "./SectionTitle";
import CGGlobal from "./works/CGGlobal";
import * as React from "react";
import { useState } from "react";
import MoontonGames from "./works/MoontonGames";
import DWharf from "./works/DWharf";
import CGGlobal1 from "./works/CGGlobal1";
import CGGlobalIntern from "./works/CGGlobalIntern";

const Experience = () => {
  const [workCGGlobal, setWorkCGGlobal] = useState(true);
  const [workCGGlobal1, setWorkCGGlobal1] = useState(false);
  const [workCGGlobalIntern, setWorkCGGlobalIntern] = useState(false);
  const [workMoontonGames, setWorkMoontonGames] = useState(false);
  const [workDWharf, setWorkDWharf] = useState(false);

  const handleCGGlobal = () => {
    setWorkCGGlobal(true);
    setWorkCGGlobal1(false);
    setWorkCGGlobalIntern(false);
    setWorkMoontonGames(false);
    setWorkDWharf(false);
  };

  const handleCGGlobal1 = () => {
    setWorkCGGlobal(false);
    setWorkCGGlobal1(true);
    setWorkCGGlobalIntern(false);
    setWorkMoontonGames(false);
    setWorkDWharf(false);
  };
  const handleCGGlobalIntern = () => {
    setWorkCGGlobal(false);
    setWorkCGGlobal1(false);
    setWorkCGGlobalIntern(true);
    setWorkMoontonGames(false);
    setWorkDWharf(false);
  };

  const handleMoontonGames = () => {
    setWorkCGGlobal(false);
    setWorkCGGlobal1(false);
    setWorkCGGlobalIntern(false);
    setWorkMoontonGames(true);
    setWorkDWharf(false);
  };

  const handleDWharf = () => {
    setWorkCGGlobal(false);
    setWorkCGGlobal1(false);
    setWorkCGGlobalIntern(false);
    setWorkMoontonGames(false);
    setWorkDWharf(true);
  };
  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="Where I have Worked" titleNo="02" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-35 flex flex-col">
          <li
            onClick={handleCGGlobal}
            className={`${
              workCGGlobal
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm 
            cursor-pointer duration-300 px-8 font-medium`}
          >
            CG Global
          </li>
          <li
            onClick={handleCGGlobal1}
            className={`${
              workCGGlobal1
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm 
            cursor-pointer duration-300 px-8 font-medium`}
          >
            CG Global
          </li>
          <li
            onClick={handleCGGlobalIntern}
            className={`${
              workCGGlobalIntern
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm 
            cursor-pointer duration-300 px-8 font-medium`}
          >
            CG Global (Internship)
          </li>
          <li
            onClick={handleMoontonGames}
            className={`${
              workMoontonGames
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm 
            cursor-pointer duration-300 px-8 font-medium`}
          >
            Moonton Games (Part-time)
          </li>
          <li
            onClick={handleDWharf}
            className={`${
              workDWharf
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm 
            cursor-pointer duration-300 px-8 font-medium`}
          >
            D'Wharf Hotel & Serviced Residence
          </li>
        </ul>
        {workCGGlobal && <CGGlobal />}
        {workCGGlobal1 && <CGGlobal1 />}
        {workCGGlobalIntern && <CGGlobalIntern />}
        {workMoontonGames && <MoontonGames />}
        {workDWharf && <DWharf />}
      </div>
    </section>
  );
};

export default Experience;
