import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "RuralConnect",
      description:
        "A web platform that enables farmers to share and rent agricultural machinery, improving accessibility and reducing equipment costs.",
      tech: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
    },
    {
      title: "Expense Tracker",
      description:
        "A personal finance management application that helps users track expenses, savings, and analyze spending patterns.",
      tech: ["React.js", "Node.js", "MongoDB"],
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-cyan-400 mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="
                bg-slate-800
                border border-slate-700
                rounded-2xl
                p-6
                hover:border-cyan-400
                hover:-translate-y-2
                transition-all duration-300
              "
            >
              <h3 className="text-2xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-slate-300 leading-7">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-6">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="
                      bg-cyan-500/20
                      text-cyan-300
                      px-3 py-1
                      rounded-full
                      text-sm
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Projects;