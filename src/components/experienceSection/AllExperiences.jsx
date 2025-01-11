import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Government Relations Manager",
    company: "The Address Hotel and Resort",
    date: "March 2021 - July 2021",
    responsibilities: [
      "Managed staff visa and residency processes, including immigration and medical.",
      "Coordinated with Civil Defence, Municipality, and other government entities for trade license issuance and renewals.",
      "Prepared HR-related service requests and documentation for submission to Fujairah Amiri Court.",
      "Handled petty cash management, including fee payments and maintaining financial records."
    ],
  },
  {
    job: "Public Relations Officer",
    company: "Massar Solution",
    date: "September 2014 - November 2019",
    responsibilities: [
      "Oversaw vehicle registration processes, including insurance, traffic fines, and registration renewals.",
      "Managed trade licenses, permits, and payments with the Economic Department and Chamber of Commerce.",
      "Handled visa and residency processing, including Emirates ID and medical procedures.",
      "Maintained official documents, stamps, and company letterheads for compliance."
    ],
  },
  {
    job: "Tourist Guide",
    company: "City One Tourism",
    date: "2010 - 2014",
    responsibilities: [
      "Organized and managed tourist trips, coordinating with suppliers and vendors.",
      "Supervised fleet and drivers to ensure timely services for visitors.",
      "Ensured all facilities were provided to visitors to enhance their experiences."
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between gap-6 flex-wrap">
      {experiences.map((experience, index) => {
        return (
          <>
            <div className="max-w-[300px] w-full">
              <SingleExperience key={index} experience={experience} />
            </div>
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};



export default AllExperiences;
