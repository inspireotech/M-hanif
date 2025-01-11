import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Streamlined Visa Processing",
    year: "2021",
    align: "right",
    image: "https://www.vecteezy.com/photo/24637201-american-visa-closeup", // Example of documents and processing
    link: "#",
  },
  {
    name: "Etisalat Fleet Management",
    year: "2019",
    align: "left",
    image: "", // Fleet of vehicles
    link: "#",
  },
  {
    name: "City One Tourism Coordination",
    year: "2014",
    align: "right",
    image: "", // Scenic touristic location
    link: "#",
  },
  {
    name: "Desert Driving Training Program",
    year: "2010",
    align: "left",
    image: "", // Desert driving
    link: "#",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
