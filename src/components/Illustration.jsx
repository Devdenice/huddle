import GrowTogether from "../assets/illustration-grow-together.svg";
import FlowingConversation from "../assets/illustration-flowing-conversation.svg";
import YourUser from "../assets/illustration-your-users.svg";
import { useState, useEffect } from "react";

const Illustration = () => {
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
    <div className="mx-auto w-10/12 mt-52 sm:mt-32 md:mt-52 ">
      <div
        className={`flex ${
          isSmallScreen ? "flex-col" : ""
        } justify-center items-center sm:mb-44 md:mb-72`}
      >
        {isSmallScreen ? (
          <>
            <img className="w-5/12 sm:w-10/12" src={GrowTogether} alt="" />
            <div>
              <h1 className="text-4xl sm:text-xl sm:text-center sm:mt-16 font-bold text-[#00252e]">
                Grow Together
              </h1>
              <div className="w-3/4 sm:w-full  sm:text-center mx-auto ">
                <p className="pt-7 font-opensans text-base sm:text-xs text-[#00252e] ">
                  Generate meaningful discussions with your audience and build a
                  strong loyal community. Think of the insightful conversation
                  you miss out on with a feedback form.
                </p>
              </div>
            </div>
          </>
        ) : (
          <>
            <div>
              <h1 className="text-4xl font-bold text-[#00252e]">
                Grow Together
              </h1>
              <div className="w-3/4 ">
                <p className="pt-7 text-base text-[#00252e] pr-2.5">
                  Generate meaningful discussions with your audience and build a
                  strong loyal community. Think of the insightful conversation
                  you miss out on with a feedback form.
                </p>
              </div>
            </div>
            <img className="w-5/12" src={GrowTogether} alt="" />
          </>
        )}
      </div>
      {/* <div className="flex sm:flex-col justify-center items-center mb-80">
        <div>
          <h1 className="text-4xl font-bold text-[#00252e]">Grow Together</h1>
          <div className="w-3/4 ">
            <p className="pt-7 text-base text-[#00252e] pr-2.5">
              Generate meaningful discussions with your audience and build a
              strong loyal community. Think of the insightful conversation you
              miss out on with a feedback form.
            </p>
          </div>
        </div>
        <img className="w-5/12" src={GrowTogether} alt="" />
      </div> */}

      <div
        className={`flex ${
          isSmallScreen ? "flex-col" : ""
        } justify-center items-center sm:mb-44 md:mb-72`}
      >
        {isSmallScreen ? (
          <>
            <img
              className="w-5/12 sm:w-10/12"
              src={FlowingConversation}
              alt=""
            />
            <div>
              <h1 className="text-4xl sm:text-xl sm:text-center sm:mt-16 font-bold text-[#00252e]">
                Flowing Conversation
              </h1>
              <div className="w-3/4 sm:w-full sm:text-center mx-auto">
                <p className="pt-7 font-opensans text-base sm:text-xs text-[#00252e]">
                  You wouldn&apos;t paginate a conversation in real life, so why
                  do it online? Our threads have just-in-time loading for more
                  natural flow.
                </p>
              </div>
            </div>
          </>
        ) : (
          <>
            <img className="w-5/12" src={FlowingConversation} alt="" />
            <div>
              <h1 className="text-4xl w-3/4 float-right font-bold text-[#00252e]">
                Flowing Conversation
              </h1>
              <div className=" flex w-3/4 float-right">
                <p className="pt-7 text-base text-[#00252e] pr-2.5">
                  You wouldn&apos;t paginate a conversation in real life, so why
                  do it online? Our threads have just-in-time loading for more
                  natural flow.
                </p>
              </div>
            </div>
          </>
        )}
      </div>

      {/* <div className="flex justify-center items-center relative mb-80">
        <img className="w-5/12" src={FlowingConversation} alt="" />
        <div>
          <h1 className="text-4xl w-3/4 float-right font-bold text-[#00252e]">
            Flowing Conversation
          </h1>
          <div className=" flex w-3/4 float-right">
            <p className="pt-7 text-base text-[#00252e] pr-2.5">
              You wouldn&apos;t paginate a conversation in real life, so why do
              it online? Our threads have just-in-time loading for more natural
              flow.
            </p>
          </div>
        </div>
      </div> */}

      <div
        className={`flex ${
          isSmallScreen ? "flex-col" : ""
        } justify-center items-center sm:mb-44 `}
      >
        {isSmallScreen ? (
          <>
            <img className="w-5/12 sm:w-10/12" src={YourUser} alt="" />
            <div>
              <h1 className="text-4xl sm:text-xl sm:text-center sm:mt-16 font-bold text-[#00252e]">
                Your Users
              </h1>
              <div className="w-3/4 sm:w-full sm:text-center mx-auto">
                <p className="pt-7 font-opensans text-base sm:text-xs text-[#00252e]">
                  It takes no time at all to integrate Huddle with your
                  app&apos;s authentication solution. This means, once signed in
                  to your app, your users can start chattiong immediately.
                </p>
              </div>
            </div>
          </>
        ) : (
          <>
            <div>
              <h1 className="text-4xl font-bold text-[#00252e]">Your Users</h1>
              <div className="w-3/4 ">
                <p className="pt-7 text-base text-[#00252e] pr-2.5">
                  It takes no time at all to integrate Huddle with your
                  app&apos;s authentication solution. This means, once signed in
                  to your app, your users can start chattiong immediately.
                </p>
              </div>
            </div>
            <img className="w-5/12" src={YourUser} alt="" />
          </>
        )}
      </div>

      {/* <div className="flex justify-center items-center ">
        <div>
          <h1 className="text-4xl font-bold text-[#00252e]">Your Users</h1>
          <div className="w-3/4 ">
            <p className="pt-7 text-base text-[#00252e] pr-2.5">
              It takes no time at all to integrate Huddle with your app&apos;s
              authentication solution. This means, once signed in to your app,
              your users can start chattiong immediately.
            </p>
          </div>
        </div>
        <img className="w-5/12" src={YourUser} alt="" />
      </div> */}
    </div>
  );
};

export default Illustration;
