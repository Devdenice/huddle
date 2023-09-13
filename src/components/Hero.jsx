import Screen from "../assets/screen-mockups.svg";

const Hero = () => {
  return (
    <div className="h-[120vh] flex flex-col  items-center mx-auto sm:w-10/12 md:w-10/12 ">
      <h1 className=" font-poppins sm:text-xl md:text-4xl sm:text-center font-bold text-[#00252e] mt-40 sm:mt-20 md:mt-44">
        Build the Community Your Fans Will Love
      </h1>
      <p className="font-opensans text-[#00252e] w-2/4 sm:w-11/12 md:w-7/12 px-20 sm:px-0 md:px-20 text-center text-base sm:text-xs md:text-base mt-8 sm:mt-4">
        Huddle re-imagines the way build communities. You have a voice, but also
        your audience. Create connection with your users as you engage in
        genuine discussion.
      </p>
      <button className="font-opensan bg-[#ff52bf] rounded-full text-white  sm:py-2 md:py-4 px-16 sm:px-8 md:px-20  mt-8 sm:mt-10 hover:bg-[#ff8fd8] shadow-2xl">
        <p className=" sm:text-xs md:text-base sm:font-medium">
          Get Started For Free
        </p>
      </button>
      <img
        className="mt-24 sm:mt-20 md:mt-24 w-2/3 sm:w-11/12 md:w-3/4"
        src={Screen}
        alt="Image"
      />
    </div>
  );
};

export default Hero;
