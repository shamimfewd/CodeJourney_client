const Banner = () => {
  return (
    <div className="mb-60 md:mb-60 lg:mb-0">
      <header className="bg-white  pl-10  dark:bg-gray-900">
        <div className="lg:flex">
          <div className="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-1/2">
            <div className="max-w-xl">
              <h1 className=" text-4xl md:text-5xl lg:text-6xl leading-normal text-gray-800 font-semibold  dark:text-white ">
                Begin Your {""}
                <span className="text-[#1E90FF] dark:text-blue-400">
                  Coding Journey
                </span>
                {""} with Us
              </h1>

              <p className="mt-4 text-xl lg:text-2xl text-gray-500 dark:text-gray-400 ">
                Welcome to our community! <br /> Embark on your coding journey
                with us,
              </p>
              {/* where you will find everything you need to master programming.
                From beginner tutorials to advanced resources, we provide the
                tools and support to help you succeed. Start building your
                future, one line of code at a time! */}
              <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row hover:transition-all">
                <button className="btn mr-4 rounded-sm btn-outline text-white border-none hover:bg-[#1E90FF] bg-[#1E90FF] ">
                  {" "}
                  Get Started
                </button>

                <button className="btn mr-4 rounded-sm text-gray-900  hover:text-white hover:bg-[#1E90FF]  border-[#1E90FF] ">
                  {" "}
                  Learn More
                </button>
              </div>
            </div>
          </div>

          <div className="w-full h-64 md:ml-10 lg:w-1/2 lg:h-auto pr-10 grid grid-cols-2 gap-6">
            <div className="shadow-2xl h-60 md:w-64 md:h-64 lg:h-80  rounded-full mt-20 relative">
              <img
                src="/dote_img.jpg"
                alt=""
                className="absolute -top-16 opacity-25 -left-6 lg:-left-12 "
              />
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/12902857/pexels-photo-12902857.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  className="rounded-3xl shadow-xl "
                />
              </div>
            </div>

            <div className="shadow-2xl w-40 h-24 lg:w-48 lg:h-24 rounded-2xl mt-10">
              <img
                src="https://images.pexels.com/photos/2102415/pexels-photo-2102415.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                className="rounded-3xl shadow-xl"
              />
            </div>
            <div className="w-40 lg:w-60 -ml-4 lg:-ml-10 -mt-10 lg:-mb-10 bg-tr">
              <div className="bg-white p-4 rounded-2xl relative shadow-2xl">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3177/3177336.png"
                  alt=""
                  className="w-10 h-10 absolute -top-6 -left-2 "
                />
                <p className="text-sm lg:text-lg text-gray-600  ">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div className="shadow-2xl w-40 md:w-64 lg:w-60  rounded-2xl md:-mt-16 -mt-8 lg:-mt-16 ">
              <img
                src="https://images.pexels.com/photos/6285288/pexels-photo-6285288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="rounded-3xl shadow-xl "
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Banner;
