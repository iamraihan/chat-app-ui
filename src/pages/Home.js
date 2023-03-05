import React from "react";
import service from "../assets/images/Service.png";
import person from "../assets/images/person.png";
import like from "../assets/images/Vector.svg";
import camera from "../assets/images/camera.png";
import sent from "../assets/images/sent.svg";
import battery from "../assets/images/battery.png";

const Home = () => {
  return (
    <div className="container bg-[#E5E5E5]">
      <div className="chat-container bg-[#1B202D] shadow-3xl rounded-50px">
        <div className="chat-inner-container">
          <div className="mb-8 flex justify-between items-center">
            <div>
              <img src={service} alt="" />
            </div>
            <p className="text-white font-semibold">19:02</p>
            <div>
              <img src={battery} alt="" />
            </div>
          </div>
          <div className="flex gap-4 items-center mb-14">
            <div className="">
              <img src={person} alt="" />
            </div>
            <h3 className="text-xl leading-[30px] font-semibold text-white">
              Danny Hopkins
            </h3>
          </div>
          <p className="text-white text-center text-xs leading-5 mb-4">
            1 FEB 12:00
          </p>
          <div className="pl-4 pr-7 bg-[#373E4E] rounded-[20px] py-2 max-w-[341px] mb-3">
            <p className="chat-item">
              I commented on Figma, I want to add some fancy icons. Do you have
              any icon set?
            </p>
          </div>
          <div className="pl-4 pr-7 bg-[#7A8194] rounded-[20px] py-2 max-w-[298px] text-right mb-3 ml-auto">
            <p className="chat-item">
              I am in a process of designing some. When do you need them?
            </p>
          </div>
          <div className="pl-4 pr-7 bg-[#373E4E] rounded-[20px] py-2 max-w-[140px] mb-3">
            <p className="chat-item">Next month?</p>
          </div>
          <p className="text-white text-center text-xs leading-5 mb-4">08:12</p>
          <div className="pl-4 pr-7 bg-[#7A8194] rounded-[20px] py-2 max-w-[298px] text-right mb-3 ml-auto">
            <p className="chat-item">
              I am almost finish. Please give me your email, I will ZIP them and
              send you as son as im finish.
            </p>
          </div>
          <div className="  text-right mb-3 ml-auto">
            <p className="chat-item inline-block pl-4 pr-5 bg-[#7A8194] rounded-[20px] py-2">
              ?
            </p>
          </div>
          <p className="text-white text-center text-xs leading-5 mb-5">08:12</p>
          <div className="pl-4 pr-7 bg-[#373E4E] rounded-[20px] py-2 max-w-[341px] mb-3">
            <p className="chat-item">maciej.kowalski@email.com</p>
          </div>
          <div className="  text-right mb-3 ml-auto">
            <p className="chat-item inline-block pl-4 pr-5 bg-[#7A8194] rounded-[20px] py-2">
              <img src={like} alt="" />
            </p>
          </div>
          <div className="mt-28 bg-[#3D4354] p-[10px] rounded-3xl">
            <div className="flex justify-between items-center">
              <div>
                <img src={camera} alt="" />{" "}
              </div>
              <div>
                <img src={sent} alt="" />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
