import { ExternalLink, Github } from "lucide-react";

export const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="scroll-mt-28 relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="grid grid-cols-1 gap-6 mx-auto justify-items-center items-stretch bg-background py-8 dark:bg-background-dark mdlg:grid-cols-2 xl:grid-cols-3 w-fit">
        {/* Good Dog Licensing project card */}
        <div className="flex flex-col shadow-2xl bg-primary/10 h-full w-80 rounded-lg ">
          <h1 className="pt-4 font-semibold text-xl "> Good Dog Licensing </h1>
          <div className="p-4 flex-1">
            <img
              src="/images/gdl.png"
              alt="Good Dog Licensing"
              className="overflow-hidden h-35 w-full rounded-xl mb-2 card-hover"
            ></img>
            <div className="bg-primary/10 rounded-xl p-4 align">
              <p className="text-center">
                React, Next.js, TypeScript, tRPC, Prisma, Tailwind CSS
              </p>
            </div>
            <p className="p-2 ">
              Good Dog Licensing is a full-stack web application that automates
              the music licensing process for Northeastern’s Green Line Records,
              improving the current manual process for musicians and media
              makers to create accounts, submit content, and be matched
              seamlessly.
            </p>
          </div>
          <div className="mt-auto flex justify-center p-4 gap-4">
            <a
              href="https://github.com/sandboxnu/good-dog-licensing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 shadow-xl primary-text px-3 py-2 rounded-xl card-hover"
            >
              <Github className="h-6 w-6 primary-text" />
              <span>Visit Github</span>
            </a>

            <a
              href="https://good-dog-licensing.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 shadow-xl primary-text px-3 py-2 rounded-xl card-hover"
            >
              <ExternalLink className="h-6 w-6 primary-text" />
              <span>Visit Site</span>
            </a>
          </div>
        </div>

        {/* Personal Portfolio project card */}
        <div className="flex flex-col shadow-2xl bg-primary/10 h-full w-80 rounded-lg ">
          <h1 className="pt-4 font-semibold text-xl "> Personal Portfolio</h1>
          <div className="p-4 flex-1">
            <img
              src="/images/personal_portfolio.png"
              alt="Personal Portfolio"
              className="overflow-hidden rounded-xl h-35 w-full mb-2 card-hover"
            ></img>
            <div className="bg-primary/10 rounded-xl p-4 align">
              <p className="text-center">
                React, JavaScript, Tailwind CSS, Next.js, Vite, Vercel
              </p>
            </div>
            <p className="p-2 ">
              Welcome to my personal website! This portfolio showcases my
              projects, skills, and experiences as a software developer. I am
              excited to continue improving my website over time!
            </p>
          </div>
          <div className="mt-auto flex justify-center p-4 gap-4">
            <a
              href="https://github.com/amolipatel05/my-personal-site"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 shadow-xl primary-text px-3 py-2 rounded-xl card-hover"
            >
              <Github className="h-6 w-6 primary-text" />
              <span>Visit Github</span>
            </a>

            <a
              href="https://amolipatel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 shadow-xl primary-text px-3 py-2 rounded-xl card-hover"
            >
              <ExternalLink className="h-6 w-6 primary-text" />
              <span>Visit Site</span>
            </a>
          </div>
        </div>

        <div className="bg-gray-200 h-96 w-60 rounded-lg dark:bg-gray-700"></div>
        <div className="bg-gray-200 h-96 w-60 rounded-lg dark:bg-gray-700"></div>
        <div className="bg-gray-200 h-96 w-60 rounded-lg dark:bg-gray-700"></div>
      </div>
    </section>
  );
};
