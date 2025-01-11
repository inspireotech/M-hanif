import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-orange font-bold uppercase text-3xl font-special text-center">
        Since 2001
      </p>
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number="20+" text="Years" />
        <p className="font-bold text-6xl text-lightBrown">-</p>
        <ExperienceInfo number="50+" text="Projects" />
      </div>
      <p className="text-center">
        With over 20 years of experience in government relations, public relations, and operational management, delivering impactful results across diverse industries.
      </p>
      <ExperienceInfo number="500+" text="Team Members Supported" />
    </div>
  );
};

export default ExperienceTopLeft;
