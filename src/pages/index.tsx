import Heading from "../components/heading";
import BasicDetails from "../components/basicDetails";
import WorkDetails from "../components/workDetails";

export default function Index() {
    
  return (
    <div className="w-screen h-screen flex flex-col dark:bg-slate-800 dark:text-slate-200 text-slate-600 p-4 overflow-hidden">
      <Heading />
      <div className="overflow-auto h-full w-full flex flex-col gap-4 md:gap-0 md:flex-row-reverse dark:bg-slate-800">
        <WorkDetails />
        <BasicDetails />
      </div>
    </div>
  );
}
