import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">Who is Mohammed Hanif?</h2>
      <p>
      With over two decades of professional experience in the UAE, I specialize in government relations, public relations, and operational management across diverse industries, including hospitality, tourism, fleet services, and education. My career journey has been marked by a steadfast commitment to excellence, whether managing staff visas and residency permits, handling trade licenses and renewals, or guiding businesses through ever-evolving regulations.

Fluent in Arabic, English, Hindi, Urdu, and Baloushi, I have cultivated a deep understanding of multicultural workplaces and established strong connections with government authorities, ensuring seamless operations and compliance for my employers. I pride myself on my ability to handle complex challenges, deliver results under pressure, and build lasting relationships that drive success.
      </p>
      <br />
      <p>Key Strengths:</p>
      <p>Expertise in UAE labor laws, visa processes, and government regulations <br />
Excellent communication and interpersonal skills <br />
Proven leadership in managing teams and operations <br />
Multilingual fluency for effective collaboration</p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
