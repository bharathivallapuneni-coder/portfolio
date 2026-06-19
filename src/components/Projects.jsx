import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "FoodConnect",
      image: "FoodConnect prototype.png",
      description:
        "FoodConnect is a web-based platform designed to reduce food wastage by connecting food donors with orphanages, old-age homes, and other organizations in need. Donors such as hostel owners and event organizers can share details about surplus food, including quantity, type, location, and contact information. Caretakers can view available donations and coordinate pickups, ensuring that excess food reaches those in need efficiently. The platform promotes food redistribution, minimizes waste, and contributes to community welfare through technology.",
      tech: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
      github: "https://github.com/bharathivallapuneni-coder/foodConnect",
      liveDemo: "https://your-demo-link.com/foodconnect",
    },
    {
      title: "Expense Tracker",
      image: "Expense tracker Prototype.png",
      description:
        "Expense Tracker is a personal finance management web application designed to help users monitor and control their daily expenses. The platform allows users to record income and expenditures across different categories, making it easier to track spending habits and manage budgets effectively. It provides detailed expense analysis through daily, monthly, and yearly reports, helping users understand financial patterns and make informed decisions. By offering organized expense tracking and insightful summaries, the application supports better financial planning and savings management.",
      tech: ["React.js", "Node.js", "MongoDB"],
      github: "https://github.com/bharathivallapuneni-coder/expense--tracker",
      liveDemo: "https://your-demo-link.com/expense-tracker",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-cyan-400 mb-12">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
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
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>

              <img
                src={`/projects/${encodeURIComponent(project.image)}`}
                alt={project.title}
                className="mb-5 h-48 w-full rounded-xl object-cover border border-slate-700"
              />

              <p className="text-slate-300 leading-7">{project.description}</p>

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

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn project-btn-primary"
                  >
                    Live Demo
                  </a>
                )}

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`project-btn ${
                    project.liveDemo
                      ? "project-btn-secondary"
                      : "project-btn-primary"
                  }`}
                >
                  <FaGithub className="text-base" />
                  <span>View Code</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;