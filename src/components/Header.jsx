import Logo from "../assets/logo.svg";

const Header = () => {
  return (
    <div className=" flex flex-row justify-between sm:items-center md:items-center mt-12 mx-auto w-10/12 sm:w-10/12 ">
      <div className="">
        <img
          className="w-52 h-auto sm:w-9/12 md:w-50 sm:h-4 md:h-auto"
          src={Logo}
          alt="Logo"
        />
      </div>
      <button className="font-opensans rounded-full border-2 border-[#ff52bf] w-28 sm:w-20 md:w-28 sm:text-[9px] md:text-sm sm:py-1 text-[#ff52bf] hover:text-[#ff8fd8] hover:border-[#ff8fd8]">
        Try it free
      </button>
    </div>
  );
};

export default Header;
