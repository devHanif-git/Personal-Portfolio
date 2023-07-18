import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const CGGlobal1 = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Store Assistant
        <span className="text-textGreen tracking-wide">@CG Global</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Sep 2022 - Feb 2023
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>{" "}
          Proactive Store Assistant, optimizing the Smart Racking System through
          stress testing, issue resolution, and comprehensive reporting.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>{" "}
          Pioneered projects CG MES and CG Inventory, revolutionizing operations
          and driving efficiency.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>{" "}
          Developed CG MES, streamlining work processes and integrating with the
          Smart Racking System through APIs.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>{" "}
          Created CG Inventory for precise inventory management with QR codes
          and the Bartender SDK.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>{" "}
          Utilized .NET, VB.NET, JavaScript for project development.
        </li>
      </ul>
    </motion.div>
  );
};

export default CGGlobal1;
