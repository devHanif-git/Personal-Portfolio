import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const DWharf = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        F&B Assistant
        <span className="text-textGreen tracking-wide">@D'Whaft Hotel</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Dec 2018 - May 2019
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>{" "}
          Provided excellent customer service in the hotel's restaurant and bar,
          fulfilling roles as a cashier, drink maker, and order taker.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>{" "}
          Ensured seamless room service and breakfast experiences for hotel
          guests, while planning banquets, weddings, and meetings.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>{" "}
          Exhibited strong communication skills, exceptional time management,
          and adaptability in a fast-paced environment.
        </li>
      </ul>
    </motion.div>
  );
};

export default DWharf;
