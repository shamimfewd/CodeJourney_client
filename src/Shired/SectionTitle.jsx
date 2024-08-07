const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center mb-10">
      <p className="text-[#1E90FF]">{subHeading}</p>
      <h2 className="lg:text-4xl text-3xl md-text-4xl font-bold text-gray-800">
        {heading}
      </h2>
    </div>
  );
};

export default SectionTitle;
