import SingleSkill from "./SingleSkill";
import { FaHandshake } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { FaBusinessTime } from "react-icons/fa";
import { FaRegAddressCard } from "react-icons/fa";
import { MdOutlineLanguage } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { BsFillClipboardCheckFill } from "react-icons/bs";
import { AiOutlineCustomerService } from "react-icons/ai";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const skills = [
  {
    skill: "Government Relations",
    icon: FaRegAddressCard,
  },
  {
    skill: "Public Relations",
    icon: FaHandshake,
  },
  {
    skill: "Operational Efficiency",
    icon: FaBusinessTime,
  },
  {
    skill: "Leadership & Team Management",
    icon: RiTeamFill,
  },
  {
    skill: "Multilingual Communication",
    icon: MdOutlineLanguage,
  },
  {
    skill: "Regulatory Compliance",
    icon: FaUniversity,
  },
  {
    skill: "Problem Solving",
    icon: BsFillClipboardCheckFill,
  },
  {
    skill: "Customer Relations",
    icon: AiOutlineCustomerService,
  },
];

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              key={index}
            >
              <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={<item.icon />}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;

