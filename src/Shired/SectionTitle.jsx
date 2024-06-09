const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center mb-10">
      <p className="text-[#FF6347]">---{subHeading}---</p>
      <h2 className="text-4xl font-bold text-gray-800">{heading}</h2>
    </div>
  );
};

export default SectionTitle;
