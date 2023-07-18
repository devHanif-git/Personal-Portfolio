import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const CGGlobalIntern = () => {
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
        Mar 2022 - Aug 2022
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>{" "}
          Proactive Store Assistant, proficient in material handling, issuance,
          and management.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>{" "}
          Implemented automation through the Auto Generate GRN Form project,
          leveraging Google Sheets, Google Docs, and JavaScript.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>{" "}
          Streamlined workflow in the Electronic Materials department, reducing
          manual tasks and improving productivity.
        </li>
      </ul>
    </motion.div>
  );
};

export default CGGlobalIntern;
