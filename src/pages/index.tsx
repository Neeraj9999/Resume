import React from "react";
import SchoolIcon from "@mui/icons-material/School";
import LanguageIcon from "@mui/icons-material/Language";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CallIcon from "@mui/icons-material/Call";
import { isMobile } from "react-device-detect";

export default function Test() {
  const print = () => window.print();
  return (
    <div className="relative h-screen w-screen print:h-full overflow-x-hidden overflow-y-auto dark:bg-slate-800 dark:text-slate-200 text-slate-600">
      <div className="p-4 w-full font-semibold absolute top-0 backdrop-blur-md dark:bg-slate-800/50 bg-white/30 ">
        <h1 className="text-3xl ">Neeraj Upadhyay</h1>
        <p className="text-sm ">Software Developer</p>
      </div>
      <div className="mt-20 mb-4 p-4">
        <h2 className="text-xl font-bold">Profile</h2>
        <p>
          I am a FrontEnd Developer with robust problem solving skills and
          proven experience in Developing Web Application.
        </p>
      </div>
      <div className="h-max px-4 mb-4">
        <h2 className="text-2xl font-medium">Work Experience</h2>
        <div className="flex flex-col gap-y-2 mt-2 mb-4">
          <div className="">
            <h3 className="font-bold">
              Neosoft Technologies CMMI Level 5 | Aug 2021- Present
            </h3>
            <p>Software Engineer</p>
            <ul className="list-disc pl-5">
              <li>Developing UI Components by ReactJS</li>
              <li>Developing API usin ExpressJS</li>
            </ul>
          </div>

          <div className="">
            <h3 className="font-bold">
              Kudoshub Technologies | Jul 2020- Aug 2021
            </h3>
            <p>Frontend Developer</p>
            <ul className="list-disc pl-5">
              <li>Developing UI Components by ReactJS</li>
              <li>Responsible to create custom UI</li>
            </ul>
          </div>
        </div>
        <h2 className="font-bold text-xl">Technical Skills</h2>
        <ul className="list-disc pl-5">
          <li>Javascript, Typescript</li>
          <li>React Js, Next Js</li>
          <li>Redux, Zustand, Redux Toolkit, React Query</li>
          <li>Express Js</li>
          <li>Antd, MUI</li>
          <li>Tailwind CSS, Bootstrap</li>
          <li>HTML, CSS, cpanel</li>
          <li>Familiar with Python, Node Js</li>
        </ul>
        <h2 className="font-bold text-xl mt-4 pb-1">
          Projects <i className="text-lime-500">3+</i>
        </h2>
        <ul className="list-decimal pl-5">
          <li>
            Worked on E-commerse application
            <span className="font-semibold pl-2">
              (Admin Dashboard,Vender Portal,Billing)
            </span>
          </li>
          <li>
            Worked on realtime messaging service Web Application
            <span className="font-semibold pl-2">
              (Admin Dashboard,Client Interaction ChatHead)
            </span>
          </li>
          <li>
            Modern School Management Platform to provide school management
            service
            <span className="font-semibold pl-2">
              (Multiple Role based platform to interact with the system through
              responsive UI)
            </span>
          </li>
        </ul>
      </div>
      <div className="md:absolute md:w-60 md:right-2 md:top-[25vh] w-full mt-4 h-fit print:space-y-4 flex flex-col gap-y-4 dark:bg-slate-700 bg-slate-100 p-2 rounded-md">
        <div className="print:px-2">
          <div className="flex items-center gap-x-2 print:pb-2">
            <span className="print:hidden">
              <SchoolIcon />
            </span>
            <h2 className="text-xl font-medium">Education</h2>
          </div>
          <div className="flex flex-col gap-y-2 print:gap-y-1 pl-8 print:pl-0">
            <p>MCA 59 CGPA in DITU Dehradun</p>
            <p>BCA 59 % in KU Nanital</p>
          </div>
        </div>
        <div className="print:px-2">
          <div className="flex items-center gap-x-2 print:pb-2">
            <span className="print:hidden">
              <LanguageIcon />
            </span>
            <h2 className="text-xl font-medium">Language</h2>
          </div>
          <div className="flex flex-col gap-y-2 print:gap-y-1 pl-8 print:p-0">
            <p>English</p>
            <p>Hindi</p>
          </div>
        </div>
        <div className="print:px-2">
          <div className="flex items-center gap-x-2 print:pb-2">
            <span className="print:hidden">
              <ContactPageIcon />
            </span>
            <h2 className="text-xl font-medium">Contact</h2>
          </div>
          <div className="flex flex-col gap-y-2 print:gap-y-1 pl-8 print:pl-0">
            <p>Kaneli, 263643, Almora, India</p>
            <p>Neeraj1905dc@gmail.com</p>
            <p>+91-6396908033</p>
            {isMobile && (
              <div className="inline-flex gap-x-2 py-1 print:hidden">
                <a href="tel:+91-6396908033">
                  <CallIcon />
                </a>
                <a href="https://api.whatsapp.com/send?phone=+91-6396908033">
                  <WhatsAppIcon />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
      <button
        onClick={print}
        className="print:hidden absolute top-5 right-5 h-8 w-8 rounded-full cursor-pointer grid place-items-center text-xs hover:font-semibold dark:bg-slate-900 bg-slate-300 shadow-md dark:shadow-none"
      >
        Print
      </button>
    </div>
  );
}
