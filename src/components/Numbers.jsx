import IconMessage from "../assets/icon-messages.svg";
import IconCommunities from "../assets/icon-communities.svg";

const Numbers = () => {
  return (
    <div className="h-1/2  flex sm:flex-col md:flex-row sm:items-center md:none justify-evenly mt-32 sm:mt-44 md:mt-[460px] mx-auto w-10/12 sm:w-10/12 md:w-11/12">
      <div>
        <img className="sm:w-2/12 md:w-3/12" src={IconCommunities} />
        <h2 className="font-poppins text-[#00252e] sm:mt-2 md:mt-5 sm:text-4xl md:text-7xl font-bold">
          1.4k+
        </h2>
        <h5 className=" font-opensans  text-gray-500 mt-2 sm:mt-2 text-1xl sm:text-[10px] md:text-lg text-center sm:text-center">
          Communities Formed
        </h5>
      </div>
      <div className="sm:mt-12 md:mt-0">
        <img className="sm:w-2/12 md:w-2/12" src={IconMessage} />
        <h2 className="font-poppins text-[#00252e] sm:mt-2 md:mt-5 text-7xl sm:text-4xl md:text-7xl font-bold">
          2.7m+
        </h2>
        <h5 className="font-opensans text-gray-500 mt-2 text-1xl sm:text-[10px] md:text-lg text-center sm:text-center">
          Message Sent
        </h5>
      </div>
    </div>
  );
};

export default Numbers;
