import Heading from "../components/heading";
import BasicDetails from "../components/basicDetails";
import WorkDetails from "../components/workDetails";

export default function Index() {
  const print = () => window.print();
  return (
    <div className="relative print:h-full print:w-full w-screen h-screen flex flex-col dark:bg-slate-800 dark:text-slate-200 text-slate-600 p-4 overflow-hidden">
      <Heading />
      <div className="overflow-auto h-full w-full flex flex-col gap-4 md:gap-0 md:flex-row-reverse dark:bg-slate-800">
        <WorkDetails />
        <BasicDetails />
      </div>
      <button
        onClick={print}
        className="print:hidden absolute top-5 right-5 h-8 w-8 rounded-full cursor-pointer grid place-items-center text-xs hover:font-semibold dark:bg-slate-900 bg-slate-300 shadow-md dark:shadow-none"
      >
        Print
      </button>
      <div className="absolute -bottom-60 right-10 print:hidden opacity-10">
        <b
          className="text-[60vh] dark:text-white text-slate-400 lowercase"
          // style={{
          //   writingMode: "vertical-rl",
          //   textOrientation: "upright",
          // }}
        >
          n
        </b>
      </div>
    </div>
  );
}
