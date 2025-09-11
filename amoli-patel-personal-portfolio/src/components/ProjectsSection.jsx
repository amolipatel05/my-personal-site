export const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="scroll-mt-28 relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="grid grid-cols-1 gap-6 mx-auto justify-items-center bg-background py-8 dark:bg-background-dark mdlg:grid-cols-2 xl:grid-cols-3 w-fit">
        <div className="bg-gray-200 h-48 w-96 rounded-lg dark:bg-gray-300"></div>
        <div className="bg-gray-200 h-48 w-96 rounded-lg dark:bg-gray-300"></div>
        <div className="bg-gray-200 h-48 w-96 rounded-lg dark:bg-gray-300"></div>
        <div className="bg-gray-200 h-48 w-96 rounded-lg dark:bg-gray-300"></div>
        <div className="bg-gray-200 h-48 w-96 rounded-lg dark:bg-gray-300"></div>
      </div>
    </section>
  );
};
