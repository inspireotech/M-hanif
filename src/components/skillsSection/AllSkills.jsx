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

const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
      {skills.map((item, index) => {
        return (
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            key={index}
            className="flex flex-col items-center text-center"
          >
            <item.icon className="text-7xl text-orange" />
            <p className="mt-4 text-sm sm:text-md break-words">{item.skill}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AllSkillsSM;
