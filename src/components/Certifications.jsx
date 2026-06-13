import { motion } from "framer-motion";

function Certifications() {
  const certificates = [
    "Programming in Java - NPTEL, CodeChef",
    "Java Programming Fundamentals - Infosys Springboard",
    "HTML, CSS and JavaScript for Web Developers",
    "Oracle Cloud Infrastructure Generative AI Professional Certificate",
  ];

  return (
    <section
      id="certifications"
      className="py-24 px-6 bg-slate-900"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-cyan-400 mb-12">
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="
                bg-slate-800
                border border-slate-700
                p-5
                rounded-xl
                hover:border-cyan-400
                transition
              "
            >
              🏆 {certificate}
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Certifications;