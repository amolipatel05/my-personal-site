import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="scroll-mt-28 relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-width-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Amoli
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Patel
            </span>
          </h1>

          <div className="flex justify-center pt-4">
            <img
              src="/images/headshot.png"
              alt="Amoli Patel"
              className="w-100 h-70 object-cover card-hover rounded-4xl shadow-lg shadow-black/50 opacity-5 animate-fade-in-delay-3"
            ></img>
          </div>

          {/* <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-4">
            can add text here
          </p> */}
          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      {/* Bouncing scroll message */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div> */}
    </section>
  );
};
