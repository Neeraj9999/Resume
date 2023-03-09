import SchoolIcon from "@mui/icons-material/School";
import LanguageIcon from "@mui/icons-material/Language";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CallIcon from "@mui/icons-material/Call";
import { isMobile } from "react-device-detect";

export default function BasicDetails() {
  return (
    <div className="w-full h-fit print:divide-x-2 space-x-4 md:w-60 flex flex-col print:flex-row gap-y-4 dark:bg-slate-700 bg-slate-100 p-2 rounded-md">
      <div className="print:px-2">
        <div className="flex items-center gap-x-2 print:pb-2">
          <ContactPageIcon />
          <h2 className="text-xl font-medium">Contact</h2>
        </div>
        <div className="flex flex-col gap-y-2 print:gap-y-1 pl-8">
          <p>Kaneli, 263643, Almora, India</p>
          <p>Neeraj1905dc@gmail.com</p>
          <p>+91-6396908033</p>
          {isMobile && (
            <div className="inline-flex gap-x-2 py-1">
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
      <div className="print:px-2">
        <div className="flex items-center gap-x-2 print:pb-2">
          <SchoolIcon />
          <h2 className="text-xl font-medium">Education</h2>
        </div>
        <div className="flex flex-col gap-y-2 print:gap-y-1 pl-8">
          <p>MCA 59 CGPA in DITU Dehradun</p>
          <p>BCA 59 % in KU Nanital</p>
        </div>
      </div>
      <div className="print:px-2">
        <div className="flex items-center gap-x-2 print:pb-2">
          <LanguageIcon />
          <h2 className="text-xl font-medium">Language</h2>
        </div>
        <div className="flex flex-col gap-y-2 print:gap-y-1 pl-8">
          <p>English</p>
          <p>Hindi</p>
        </div>
      </div>
    </div>
  );
}
