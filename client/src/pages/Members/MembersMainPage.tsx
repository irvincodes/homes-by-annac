import React from "react";
import MembersNavBar from "./MembersNavBar";
import mainvideo from "../../assets/mainvideo.mp4";

export default function MembersMainPage() {
  return (
    <>
      <div className=" relative w-full h-[56.25vw] z-0">
        <div className=" flex justify-center mt-2">
          <img
            src="https://i.imgur.com/aaGFn2u.jpg"
            className="w-1/2 h-2/5 object-cover brightness-90 mb-16  border-4 border- z-10"
          ></img>
        </div>
        <div className="absolute inset-x-0 top-32 z-0 px-0">
          <div className="w-5/6 border-2  left-0 right-0 mx-auto bg-rose-100 py-60"></div>
        </div>
        {/* <div className="partbg w-full h-96 bg-zinc-400 z-1"></div> */}
        {/* <div className="fixed top-0 left-0 z-0 w-full h-full">
          <div className="bg-red-500 opacity-75 w-full h-full"></div>
        </div> */}
        <div className=" mt-6">
          <div className="mb-4 font-bold flex justify-center">
            <h2 className=" text-2xl">Welcome To My Page!</h2>
          </div>
          <div className=" flex justify-center">
            <p className=" w-2/3">
              I began my real estate journey in 2017. ​​ Over the years, I have
              worked with many clients on their real estate needs. Some cases
              were about helping clients right-sizing their homes at different
              points of their lives, while others were about helping them move
              on due to major life transitions. <br />
              <br />
              To me, real estate work is really about making a difference in
              people's lives. In the years ahead, besides continuing my work
              with clients on their real estate needs, I would also like to pay
              it forward by coaching and mentoring fellow realtors, especially
              women who want to build a career in real estate. While this career
              offers lucrative income and flexible work hours, it also presents
              many challenges - financial insecurity as we do not have basic
              pay, time management as we juggle work, children and family all at
              one time. Only those who have walked the same journey will
              understand. <br />
              <br />
              <span className=" italic">
                "It is my vision to see women achieving their dreams, and live
                their lives with purpose and passion through a successful real
                estate career."
              </span>
            </p>
          </div>
        </div>
        <div className="z-0 px-0 mt-6">
          <div className="w-full  bg-pink-100 left-0 right-0 mx-auto bg- py-4"></div>
        </div>
        <div>
          <div className=" flex justify-center">
            <h3 className=" mt-8 font-bold text-lg">Featured Videos</h3>
          </div>
          <div className="z-0 px-0 mt-2 mb-6">
            <div className="w-1/4   bg-pink-100 left-0 right-0 mx-auto bg- py-1"></div>
          </div>
          <div className="grid grid-cols-3 gap-20">
            <div>
              <video
                className="object-cover brightness-90 mb-16  border-8 z-10"
                autoPlay
                muted
                loop
                src="https://i.imgur.com/NA835MZ.mp4"
              ></video>
            </div>
            <div>
              <video
                className="object-cover brightness-90 mb-16  border-8 z-10"
                autoPlay
                muted
                loop
                src="https://i.imgur.com/dTaVlif.mp4"
              ></video>
            </div>
            <div>
              <video
                className=" object-cover brightness-90 mb-16  border-8 z-10"
                autoPlay
                muted
                loop
                src="https://i.imgur.com/Gt3XIkn.mp4"
              ></video>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
