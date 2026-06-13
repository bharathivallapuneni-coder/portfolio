import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h2 className="text-cyan-400 text-xl mb-4">
          Hello, I'm
        </h2>

        <h1 className="text-6xl font-bold">
          Vallapuneni Bharathi
        </h1>

        <p className="mt-6 text-xl text-slate-300">
          Computer Science Student | Web Developer
        </p>

        <p className="max-w-2xl mt-6 mx-auto text-slate-400">
          Passionate about software development,
          web technologies, and solving real-world
          problems through technology.
        </p>

        <div className="flex justify-center gap-6 mt-8">
          <a href="https://github.com/bharathivallapuneni-coder" target="_blank" rel="noreferrer">
            <FaGithub size={30} />
          </a>

          <a href="https://linkedin.com/in/bharathivallapuneni" target="_blank" rel="noreferrer">
            <FaLinkedin size={30} />
          </a>
        </div>

        <a
          href="/resume.pdf"
          className="inline-block mt-8 bg-cyan-500 hover:bg-cyan-600 transition px-6 py-3 rounded-lg"
        >
          Download Resume
        </a>
      </motion.div>
    </section>
  );
}

export default Hero;