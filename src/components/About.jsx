import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-slate-950"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-cyan-400 mb-8">
          About Me
        </h2>

        <p className="text-lg text-slate-300 leading-8">
          I am a Computer Science student at
          Vasireddy Venkatadri Institute of Technology (VVIT),
          passionate about software development and solving
          real-world problems through technology.
          I enjoy building web applications, learning modern
          technologies, and continuously improving my skills
          in programming, web development, and problem-solving.
        </p>
      </motion.div>
    </section>
  );
}

export default About;