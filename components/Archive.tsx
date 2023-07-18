import { useState } from "react";
import { ArchiveCard } from "./ArchiveCard";
import { motion } from "framer-motion";

export const Archive = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="max-w-contentContainer mx-auto px-4 py-24">
      <div className="w-full flex  flex-col items-center">
        <h2 className="text-3xl font-titleFont font-semibold">
          Other Noteworthy Projects
        </h2>
        <p className="text-sm font-titleFont text-textGreen">
          View the archive
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        <ArchiveCard
          title="Google Apps Script - Auto Fill GRN"
          des="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
            molestiae magnam facere doloremque, delectus nostrum?"
          listItem={["Google App Script", "JavaScript", "Docs/Sheets"]}
          link="www.bit.ly/CGGRN2022"
        />

        <ArchiveCard
          title="Google Apps Script - Auto Fill GRN"
          des="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
            molestiae magnam facere doloremque, delectus nostrum?"
          listItem={["Google App Script", "JavaScript", "Docs/Sheets"]}
          link="www.bit.ly/CGGRN2022"
        />

        <ArchiveCard
          title="Google Apps Script - Auto Fill GRN"
          des="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
            molestiae magnam facere doloremque, delectus nostrum?"
          listItem={["Google App Script", "JavaScript", "Docs/Sheets"]}
          link="www.bit.ly/CGGRN2022"
        />

        {showMore && (
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <ArchiveCard
                title="Google Apps Script - Auto Fill GRN"
                des="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
            molestiae magnam facere doloremque, delectus nostrum?"
                listItem={["Google App Script", "JavaScript", "Docs/Sheets"]}
                link="www.bit.ly/CGGRN2022"
              />
            </motion.div>
          </div>
        )}
      </div>
      <div className="mt-12 flex items-center justify-center">
        {showMore ? (
          <button
            onClick={() => setShowMore(false)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300 "
          >
            Show Less
          </button>
        ) : (
          <button
            onClick={() => setShowMore(true)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300 "
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
};
