import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-slate-950"
    >
      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold text-cyan-400 mb-12">
          Contact Me
        </h2>

        <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">

          <div className="space-y-6 text-lg">

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-cyan-400" />
              <span>
                bharathivallapuneni107@gmail.com
              </span>
            </div>

            <div className="flex items-center gap-4">
              <FaPhone className="text-cyan-400" />
              <span>
                +91 83176 77609
              </span>
            </div>

            <div className="flex items-center gap-4">
              <FaGithub className="text-cyan-400" />
              <a
                href="https://github.com/bharathivallapuneni-coder"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400"
              >
                GitHub Profile
              </a>
            </div>

            <div className="flex items-center gap-4">
              <FaLinkedin className="text-cyan-400" />
              <a
                href="https://linkedin.com/in/bharathivallapuneni"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400"
              >
                LinkedIn Profile
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;