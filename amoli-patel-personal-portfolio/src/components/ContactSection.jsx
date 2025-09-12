import { Phone, Mail, Linkedin, Github } from "lucide-react";

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="scroll-mt-28 relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="bg-primary/10 rounded-2xl p-4 shadow-lg shadow-black/30 w-0-full md:w-[600px] lg:w-[700px]">
        
        <div className="flex justify-center">
          <div className="flex flex-col gap-4 text-lg">
            <h1 className="text-center primary-text font-semibold text-4xl p-4 pb-6">Contact Me</h1>
            {/* Phone Number */}
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 primary-text shrink-0" />
              <span className="primary-text">+1 (732) 841 5477</span>
            </div>
            {/* Email */}
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 primary-text shrink-0" />
              <span className="primary-text"><a href="mailto:amolipatel0506@gmail.com" target="_blank">amolipatel0506@gmail.com</a></span>
            </div>
            {/* LinkedIn */}
            <div className="flex items-center gap-3">
              <Linkedin className="w-5 h-5 primary-text shrink-0" />
              <span className="primary-text"><a href="https://www.linkedin.com/in/amoli-patel/" target="_blank">Connect with me!</a></span>
            </div>
            {/* GitHub */}
            <div className="flex items-center gap-3">
              <Github className="w-5 h-5 primary-text shrink-0" />
              <span className="primary-text"><a href="https://github.com/amolipatel05" target="_blank">View my Github!</a></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
