import { Hammer, Code, Book } from "lucide-react";
import { PicturesSection } from "./PicturesSection";

export const AboutSection = () => {
  return (
    <section id="about" className="scroll-mt-28 py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">a little bit about me:</h3>

            <p className="text-muted-foreground">
              hello, my name is amoli patel! i'm motivated, ambitious, and
              always looking to learn/try new things.
            </p>
            <p>
              as an aspiring software engineer, i enjoy building web
              applications and creating seamless user experiences.
            </p>
            <p className="text-muted-foreground">
              in my downtime, i enjoy trying new crafty hobbies, cheffin it up in the
              kitchen, spending time outside, or browsing on pinterest and
              depop.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 
             transition-all duration-300 transform hover:scale-105">
                Get in touch
              </a>

              <a
                href="/amoli-patel-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 
             transition-all duration-300 transform hover:scale-105"
              >
                View resume
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg pb-2">languages</h4>
                  <div class="text-left space-y-3">
                    <p class="bg-primary/10 rounded-sm p-2 mr-2 inline-block">
                      {" "}
                      Java{" "}
                    </p>
                    <p class="bg-primary/10 rounded-sm p-2 mr-2 inline-block">
                      {" "}
                      Python{" "}
                    </p>
                    <p class="bg-primary/10 rounded-sm p-2 mr-2 inline-block">
                      {" "}
                      TypeScript{" "}
                    </p>
                    <p class="bg-primary/10 rounded-sm p-2 mr-2 inline-block">
                      {" "}
                      JavaScript{" "}
                    </p>
                    <p class="bg-primary/10 rounded-sm p-2 mr-2 inline-block">
                      {" "}
                      HTML{" "}
                    </p>
                    <p class="bg-primary/10 rounded-sm p-2 mr-2 inline-block">
                      {" "}
                      CSS{" "}
                    </p>
                    <p class="bg-primary/10 rounded-sm p-2 mr-2 inline-block">
                      {" "}
                      Racket BSL{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Book className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg pb-2">frameworks and libraries</h4>
                  <div class="text-left space-y-3">
                    <p class="bg-primary/10 rounded-sm p-2 mr-2 inline-block">
                      {" "}
                      React{" "}
                    </p>
                    <p class="bg-primary/10 rounded-sm p-2 mr-2 inline-block">
                      {" "}
                      Next.js{" "}
                    </p>
                    <p class="bg-primary/10 rounded-sm p-2 mr-2 inline-block">
                      {" "}
                      Tailwind CSS{" "}
                    </p>
                    <p class="bg-primary/10 rounded-sm p-2 mr-2 inline-block">
                      {" "}
                      Node.js{" "}
                    </p>
                    <p class="bg-primary/10 rounded-sm p-2 mr-2 inline-block">
                      {" "}
                      Bun{" "}
                    </p>
                    <p class="bg-primary/10 rounded-sm p-2 mr-2 inline-block">
                      {" "}
                      tRPC{" "}
                    </p>
                    <p class="bg-primary/10 rounded-sm p-2 mr-2 inline-block">
                      {" "}
                      Prisma{" "}
                    </p>
                    <p class="bg-primary/10 rounded-sm p-2 mr-2 inline-block">
                      {" "}
                      JUnit{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Hammer className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <div className="text-left">
                  <h4 className="font-semibold text-lg pb-2">frameworks and libraries</h4>
                  <div class="text-left space-y-3">
                    <p class="bg-primary/10 rounded-sm p-2 mr-2 inline-block">
                      {" "}
                      Github{" "}
                    </p>
                    <p class="bg-primary/10 rounded-sm p-2 mr-2 inline-block">
                      {" "}
                      Docker{" "}
                    </p>
                    <p class="bg-primary/10 rounded-sm p-2 mr-2 inline-block">
                      {" "}
                      PostgreSQL{" "}
                    </p>
                    <p class="bg-primary/10 rounded-sm p-2 mr-2 inline-block">
                      {" "}
                      Vercel{" "}
                    </p>
                    <p class="bg-primary/10 rounded-sm p-2 mr-2 inline-block">
                      {" "}
                      VSCode{" "}
                    </p>
                    <p class="bg-primary/10 rounded-sm p-2 mr-2 inline-block">
                      {" "}
                      InteliJ{" "}
                    </p>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
