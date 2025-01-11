const ExperienceInfo = ({ number, text }) => {
  return (
    <div className="flex flex-col justify-center items-center text-center bg-yellow-100 p-4 min-h-[100px] w-full">
      <p className="font-bold text-6xl text-cyan">{number}</p>
      <p className="font-bold text-xl text-lightGrey uppercase -mt-4 break-words max-w-[300px] w-full">
        {text}
      </p>
    </div>
  );
};

export default ExperienceInfo;
