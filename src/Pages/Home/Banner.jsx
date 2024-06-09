import banerImg from "../../assets/banner2.jpg";

const Banner = () => {
  return (
    <div className="">
      <header className="bg-white  pl-10  dark:bg-gray-900">
        <div className="lg:flex">
          <div className="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-1/2">
            <div className="max-w-xl">
              <h1 className="text-6xl leading-normal text-gray-800 font-semibold  dark:text-white ">
                Begin Your {""}
                <span className="text-[#FF6347] dark:text-blue-400">
                  Coding Journey
                </span>
                {""} with Us
              </h1>

              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 lg:text-base">
                Welcome to our community! Embark on your coding journey with us,
                where you will find everything you need to master programming.
                From beginner tutorials to advanced resources, we provide the
                tools and support to help you succeed. Start building your
                future, one line of code at a time!
              </p>

              <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                <button className="btn mr-4 btn-outline text-white border-none bg-[#1E90FF] ">
                  {" "}
                  Get Started
                </button>

                <button className="btn btn-outline text-white border-none bg-[#FF6347] ">
                  {" "}
                  Learn More
                </button>
              </div>
            </div>
          </div>

          <div className="w-full h-64 lg:w-1/2 lg:h-auto pr-10">
            <div
              className="w-full h-full bg-cover object-cover"
              style={{
                backgroundImage: `url(${banerImg})`,
              }}
            >
              <div className="w-full h-full bg-black opacity-25"></div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Banner;
