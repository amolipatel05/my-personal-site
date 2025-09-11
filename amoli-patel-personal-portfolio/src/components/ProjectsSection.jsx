import { ExternalLink, Github } from "lucide-react";

export const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="scroll-mt-28 relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="grid grid-cols-1 gap-6 mx-auto justify-items-center bg-background py-8 dark:bg-background-dark mdlg:grid-cols-2 xl:grid-cols-3 w-fit">
        <div className="shadow-2xl bg-primary/10 h-140 w-80 rounded-lg ">
          <h1 className="pt-4 font-semibold text-xl "> Good Dog Licensing</h1>
          <div className="p-4">
            <img
              src="/images/gdl.png"
              alt="Good Dog Licensing"
              className="overflow-hidden rounded-xl pb-2 card-hover"
            ></img>
            <div className="bg-primary/10 rounded-xl p-2 align">
              <p className="text-center">
                React, Next.js, TypeScript, tRPC, Prisma, TailwindCSS
              </p>
            </div>
            <p className="p-2 ">
              A full-stack web application automates the music licensing process
              for Northeastern’s Green Line Records, improving the current
              manual process for musicians and media makers to create accounts,
              submit content, and be matched seamlessly.
            </p>

            <div className="flex justify-center p-4 gap-4">
              {/* Open Github for Good Dog Licensing */}
              <a
                href="https://github.com/sandboxnu/good-dog-licensing"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <div className="shadow-xl bg-gray-400 p-2 rounded-xl hover:scale-110 transition-transform duration-300 flex justify-center">
                  <Github className="h-6 w-6 text-black" />
                  <p className="">Visit Github</p>
                </div>
              </a>
              {/* Open website for Good Dog Licensing */}
              <a
                href="https://good-dog-licensing.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <div className="shadow-xl bg-gray-400 p-2 rounded-xl hover:scale-110 transition-transform duration-300 flex justify-center">
                  <ExternalLink className="h-6 w-6 text-black" />
                  <p className="">Visit Site</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="bg-primary/10 h-96 w-60 rounded-lg"></div>
        <div className="bg-gray-200 h-96 w-60 rounded-lg dark:bg-gray-700"></div>
        <div className="bg-gray-200 h-96 w-60 rounded-lg dark:bg-gray-700"></div>
        <div className="bg-gray-200 h-96 w-60 rounded-lg dark:bg-gray-700"></div>
      </div>
    </section>
  );
};
