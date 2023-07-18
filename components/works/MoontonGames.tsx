import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const MoontonGames = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Event Organizer
        <span className="text-textGreen tracking-wide">@Moonton Games</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Jun 2019 - Jun 2023
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>{" "}
          Organized and executed MLBB mini-tournaments, coordinating 5 vs 5
          competitions across multiple districts.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>{" "}
          Successfully promoted events on social media and marketing channels,
          attracting participants and boosting local business visibility.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>{" "}
          Demonstrated strong communication, excellent time management, and
          adaptability skills in a dynamic environment.
        </li>
      </ul>
    </motion.div>
  );
};

export default MoontonGames;
