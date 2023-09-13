import HuddleLogo from "../../src/assets/logo-white.svg";
import PhoneIcon from "../assets/icon-phone.svg";
import EmailIcon from "../assets/icon-email.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareTwitter,
  faSquareInstagram,
  faSquareFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { useState, useEffect } from "react";

const Footer = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 320px)"); // Adjust the breakpoint if needed
    setIsSmallScreen(mediaQuery.matches);

    const handleResize = (e) => {
      setIsSmallScreen(e.matches);
    };

    mediaQuery.addListener(handleResize);

    return () => {
      mediaQuery.removeListener(handleResize);
    };
  }, []);

  return (
    <div className="min-h-screen w-full relative bg-[#00252e] pb-28">
      <div className=" bg-white flex justify-end ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 60 1420 260">
          <path
            fill="#00252e"
            fillOpacity="1"
            d="M0,96L60,112C120,128,240,160,360,176C480,192,600,192,720,165.3C840,139,960,85,1080,69.3C1200,53,1320,75,1380,85.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="flex sm:flex-col md:flex-row mx-auto sm:w-9/12 md:w-10/12 text-white">
        {isSmallScreen ? (
          <>
            <div className="w-6/12 sm:w-full ml-44 sm:ml-0 ">
              <div>
                <h1 className="text-3xl sm:text-xl font-semibold pb-5">
                  NEWSLETTER
                </h1>

                <p className="text-sm sm:text-xs font-normal sm:font-baser pb-5 w-[330px] sm:w-[240px]">
                  To receieve tips on how to grow your community, sign up to out
                  weekly newsletter. We&apos;ll never send you spam or pass on
                  your email address.
                </p>
              </div>

              <div className="sm:mt-2 md:mt-5">
                <input
                  type="email"
                  className="bg-white sm:py-1 md:py-2 pr-28 sm:pr-12 sm:mb-4 pl-2 rounded-lg text-black text-start"
                />

                <button className="bg-[#ff52bf] md:py2 sm:py-1.5 px-8 sm:text-sm sm:flex sm:ml-28 rounded-lg ml-7 hover:bg-[#ff8fd8] ">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="w-4/12 sm:w-full  sm:mt-20">
              <img className="sm:w-7/12" src={HuddleLogo} alt="" />
              <p className="text-sm sm:text-xs font-base sm:font-base mt-5">
                Eaque quaerat laborum, consequatur amet provident veniam rerum
                est pariatur, eos et sunt quibusdam error , illum minus unde.
              </p>
              <div className="flex mt-5 items-center ">
                <div className="pr-5">
                  <img src={PhoneIcon} alt="" />
                </div>
                <p className="text-sm sm:text-xs sm:font-thin">
                  Phone: +1-543-123-4567
                </p>
              </div>

              <div className="flex mt-2 items-center ">
                <div className="pr-5">
                  <img src={EmailIcon} alt="" />
                </div>
                <p className="text-sm sm:text-xs sm:font-thin">
                  huddle@example.com
                </p>
              </div>

              <div className="flex mt-10 justify-between w-32 sm:w-24">
                <div className="">
                  <FontAwesomeIcon
                    className="hover:text-sky-400 cursor-pointer"
                    icon={faSquareFacebook}
                    size="xl"
                  />
                </div>

                <div className="">
                  <FontAwesomeIcon
                    className="hover:text-sky-400 cursor-pointer"
                    icon={faSquareTwitter}
                    size="xl"
                  />
                </div>

                <div className="">
                  <FontAwesomeIcon
                    className="hover:text-sky-400 cursor-pointer"
                    icon={faSquareInstagram}
                    size="xl"
                  />
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="w-4/12 sm:w-full  ">
              <img className="sm:w-7/12 md:w-5/12" src={HuddleLogo} alt="" />
              <p className="sm:text-xs md:text-sm font-base sm:font-base mt-5 md:w-7/12">
                Eaque quaerat laborum, consequatur amet provident veniam rerum
                est pariatur, eos et sunt quibusdam error , illum minus unde.
              </p>
              <div className="flex mt-5 items-center ">
                <div className="pr-5">
                  <img src={PhoneIcon} alt="" />
                </div>
                <p className="sm:text-xs md:text-sm sm:font-thin md:font-normal">
                  Phone: +1-543-123-4567
                </p>
              </div>

              <div className="flex mt-2 items-center ">
                <div className="pr-5">
                  <img src={EmailIcon} alt="" />
                </div>
                <p className="sm:text-xs md:text-sm sm:font-thin md:font-normal">
                  huddle@example.com
                </p>
              </div>

              <div className="flex mt-10 justify-between w-32 sm:w-24">
                <div className="">
                  <FontAwesomeIcon
                    className="hover:text-sky-400 cursor-pointer"
                    icon={faSquareFacebook}
                    size="xl"
                  />
                </div>

                <div className="">
                  <FontAwesomeIcon
                    className="hover:text-sky-400 cursor-pointer"
                    icon={faSquareTwitter}
                    size="xl"
                  />
                </div>

                <div className="">
                  <FontAwesomeIcon
                    className="hover:text-sky-400 cursor-pointer"
                    icon={faSquareInstagram}
                    size="xl"
                  />
                </div>
              </div>
            </div>
            <div className="w-6/12 sm:w-full ml-44 sm:ml-0 ">
              <div>
                <h1 className="sm:text-xl md:text-2xl font-semibold pb-5">
                  NEWSLETTER
                </h1>

                <p className="sm:text-xs md:text-sm font-normal sm:font-baser pb-5 w-[330px] sm:w-[240px] md:w-[330px]">
                  To receieve tips on how to grow your community, sign up to out
                  weekly newsletter. We&apos;ll never send you spam or pass on
                  your email address.
                </p>
              </div>

              <div className="mt-5">
                <input
                  type="email"
                  className="bg-white py-2 md:pr-28 sm:pr-12 sm:mb-4  rounded-md text-black text-start"
                />

                <button className="bg-[#ff52bf] py-2 px-5 sm:px-2 sm:flex md:inline-block sm:ml-20 rounded-md md:ml-7 hover:bg-[#ff8fd8] ">
                  Subscribe
                </button>
              </div>
            </div>
          </>
        )}
        {/* <div className="w-4/12 sm:w-full bg-red-500 ">
          <img className="sm:w-7/12" src={HuddleLogo} alt="" />
          <p className="text-sm sm:text-xs font-base sm:font-base mt-5">
            Eaque quaerat laborum, consequatur amet provident veniam rerum est
            pariatur, eos et sunt quibusdam error , illum minus unde.
          </p>
          <div className="flex mt-5 items-center ">
            <div className="pr-5">
              <img src={PhoneIcon} alt="" />
            </div>
            <p className="text-sm sm:text-xs sm:font-thin">
              Phone: +1-543-123-4567
            </p>
          </div>

          <div className="flex mt-2 items-center ">
            <div className="pr-5">
              <img src={EmailIcon} alt="" />
            </div>
            <p className="text-sm sm:text-xs sm:font-thin">
              huddle@example.com
            </p>
          </div>

          <div className="flex mt-10 justify-between w-32 sm:w-24">
            <div className="">
              <FontAwesomeIcon
                className="hover:text-sky-400 cursor-pointer"
                icon={faSquareFacebook}
                size="xl"
              />
            </div>

            <div className="">
              <FontAwesomeIcon
                className="hover:text-sky-400 cursor-pointer"
                icon={faSquareTwitter}
                size="xl"
              />
            </div>

            <div className="">
              <FontAwesomeIcon
                className="hover:text-sky-400 cursor-pointer"
                icon={faSquareInstagram}
                size="xl"
              />
            </div>
          </div>
        </div> */}

        {/* <div className="w-6/12 sm:w-full ml-44 sm:ml-0 bg-blue-400">
          <div>
            <h1 className="text-3xl sm:text-xl font-semibold pb-5">
              NEWSLETTER
            </h1>

            <p className="text-sm sm:text-xs font-normal sm:font-baser pb-5 w-[330px] sm:w-[240px]">
              To receieve tips on how to grow your community, sign up to out
              weekly newsletter. We&apos;ll never send you spam or pass on your
              email address.
            </p>
          </div>

          <div className="mt-5">
            <input
              type="email"
              className="bg-white py-2 pr-28 sm:pr-12 sm:mb-4 pl-2 rounded-lg text-black text-start"
            />

            <button className="bg-[#ff52bf] py-2 px-11 sm:flex sm:ml-20 rounded-lg ml-7 hover:bg-[#ff8fd8] ">
              Subscribe
            </button>
          </div>
        </div> */}
      </div>
    </div>
    // <footer className="container w-full bg-red-400">
    //   <div
    //     className="h-[700px] w-auto bg-no-repeat bg-cover bg-center  text-white my-auto flex justify-center items-center"
    //     style={{ backgroundImage: `url(${BgFooter})` }}
    //   >
    //     <div className="flex justify-between mx-auto w-11/12 ">
    //       <div className="w-3/12 ">
    //         <img src={HuddleLogo} alt="" />
    //         <p className="text-lg font-semibold mt-5">
    //           Eaque quaerat laborum, consequatur amet provident veniam rerum est
    //           pariatur, eos et sunt quibusdam error saepe beatae, illum minus
    //           unde.
    //         </p>
    //         <div className="flex mt-5 items-center ">
    //           <div className="pr-5">
    //             <img src={PhoneIcon} alt="" />
    //           </div>
    //           <p className="text-lg">Phone: +1-543-123-4567</p>
    //         </div>
    //         <div className="flex mt-2 items-center ">
    //           <div className="pr-5">
    //             <img src={EmailIcon} alt="" />
    //           </div>
    //           <p className="text-lg">huddle@example.com</p>
    //         </div>
    //         <div className="flex mt-10 justify-between w-32">
    //           <div>
    //             <FontAwesomeIcon icon={faSquareFacebook} size="2xl" />
    //           </div>
    //           <div>
    //             <FontAwesomeIcon icon={faSquareTwitter} size="2xl" />
    //           </div>
    //           <div>
    //             <FontAwesomeIcon icon={faSquareInstagram} size="2xl" />
    //           </div>
    //         </div>
    //       </div>
    //       <div className="w-6/12 ">
    //         <div>
    //           <h1 className="text-2xl font-semibold pb-5">NEWSLETTER</h1>
    //           <p className="text-lg font-semibold pb-5 w-[440px]">
    //             To receieve tips on how to grow your community, sign up to out
    //             weekly newsletter. We&apos;ll never send you spam or pass on
    //             your email address.
    //           </p>
    //         </div>
    //         <div className="">
    //           <input className="bg-white py-4 px-20 rounded-lg" type="text" />
    //           <button className="bg-[#ff52bf] py-4 px-14 rounded-lg ml-12 ">
    //             Subscribe
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </footer>
  );
};

export default Footer;
