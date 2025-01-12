import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Streamlined Visa Processing",
    year: "2021",
    align: "right",
    image: "https://firebasestorage.googleapis.com/v0/b/inspireotech-logo.appspot.com/o/streamline-visa-processing.jpg?alt=media&token=cf41271b-ab41-4b6b-819d-30ab63714e85", // Example of documents and processing
    link: "#",
  },
  {
    name: "Etisalat Fleet Management",
    year: "2019",
    align: "left",
    image: "https://firebasestorage.googleapis.com/v0/b/inspireotech-logo.appspot.com/o/Etisalat-2-.jpeg?alt=media&token=4b79485c-30ee-4f0e-8b12-d65273fc3185", // Fleet of vehicles
    link: "#",
  },
  {
    name: "City One Tourism Coordination",
    year: "2014",
    align: "right",
    image: "https://firebasestorage.googleapis.com/v0/b/inspireotech-logo.appspot.com/o/cityonetourism_cover.jpeg?alt=media&token=c713e2bf-bec1-4d6e-a4e9-5a5996cbc9b6", // Scenic touristic location
    link: "#",
  },
  {
    name: "Desert Driving Training Program",
    year: "2010",
    align: "left",
    image: "https://firebasestorage.googleapis.com/v0/b/inspireotech-logo.appspot.com/o/Best_Cars_for_Desert_Driving_12022021.jpg?alt=media&token=87635c17-9752-4970-9fb4-31b62521c320", // Desert driving
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
