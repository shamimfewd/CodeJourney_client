const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center mb-10">
      <div className="subtitleBox subTitleBox2">
        <span className="lineBefore"></span>
        <h3 className="text-[#1E90FF] text-2xl uppercase titleBefore titleAfter titleAfter1 titleBefore1">
          {subHeading}
        </h3>
        <span className="lineAfter"></span>
      </div>
      <h2 className="lg:text-4xl text-3xl md-text-4xl mt-2 font-bold text-gray-800">
        {heading}
      </h2>
    </div>
  );
};

export default SectionTitle;
