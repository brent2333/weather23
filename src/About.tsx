import { Fragment } from "react";
const About = () => {
  return (
    <div className="shadow-md rounded m-4 p-8 bg-gray-300">
        <div className="max-w-lg my-0 mx-auto">
        <h1 className="text-lg font-bold w-full">About Me</h1>
        <p className="">Hello 😀. As you may have seen, my name is Brent Lawson. I have been developing for the Web since 2010. In my first gig working for others, I was the lone developer for an SEO company in Atlanta. In that role, I administered Apache servers, wrote PHP (Wordpress and otherwise) and all the usual front end HTML/CSS/JS stuff as well as created conversion recommendations and implemented them. After a while, I began to focus more on being a front-end dev with an eye on the latest developments in the JavaScript community and WCAG and excellent UX.</p>
        <p className="max-w-md">These days I am into full-stack JS approaches, using NextJS & ExpressJS. I have alos taken a strong interest in creating Design Systems with React/Storybook/Figma. My favorite experience and preference for creating a web front-end is React although I have built some stuff with Angular and Vue.</p>
        </div>
    </div>
  );
};

export default About;
