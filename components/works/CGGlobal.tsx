import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const CGGlobal = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        IT Technicion{" "}
        <span className="text-textGreen tracking-wide">@CG Global</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Feb 2023 - Present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>{" "}
          Excel as an IT Engineer, overseeing printers, JUKI chip mounter, AOI,
          SPI, Smart Racking System, ERP/MES, and JTU/Reflow Oven.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>{" "}
          Take charge of running the production line, executing JUKI setup and
          operating solder printer with precision.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>{" "}
          Demonstrate expertise in network and server management,
          troubleshooting, and resolving technical issues.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>{" "}
          Efficiently manage the MES/ERP system's database for streamlined
          operations and accurate data management.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>{" "}
          Spearhead the Feeder Calibration Checker project to enhance production
          efficiency.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>{" "}
          Constantly innovate in programming and automation to optimize
          manufacturing processes.
        </li>
      </ul>
    </motion.div>
  );
};

export default CGGlobal;
