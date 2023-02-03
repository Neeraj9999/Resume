export default function WorkDetails() {
  return (
    <div className="flex-1 h-max p-0 md:px-4">
      <h2 className="text-2xl font-medium">Work Experience11</h2>
      <div className="flex flex-col gap-y-2 mt-2 mb-4">
        <div className="">
          <h3 className="font-bold">
            Neosoft Technologies CMMI Level 5 | Aug 2021- Present
          </h3>
          <p>Software Engineer</p>
          <ul className="list-disc pl-5">
            <li>Developing UI Components by ReactJS</li>
            <li>Developing API using ExpressJS</li>
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
      <h2 className="font-bold text-xl mt-4">Projects+</h2>
      <ul className="list-disc pl-5">
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
          I have worked on full fledge web application with small team to large
          team
        </li>
      </ul>
    </div>
  );
}
