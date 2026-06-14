import { useState } from "react";
import { motion } from "framer-motion";

function Certifications() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certificates = [
    {
      title: "Programming in Java - CodeChef",
      image: "codechef java certificate.jpg",
    },
    {
      title: "Java Programming Fundamentals - Infosys Springboard",
      image: "Java Infosys.jpg",
    },
    {
      title: "HTML, CSS and JavaScript for Web Developers",
      image: "web design.jpg",
    },
    {
      title: "Oracle Cloud Infrastructure Generative AI Professional Certificate",
      image: "oracle.jpg",
    },
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
              key={certificate.title}
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
              <div className="flex items-start justify-between gap-3">
                <span className="text-white">🏆 {certificate.title}</span>
                <button
                  type="button"
                  onClick={() => setSelectedCertificate(certificate)}
                  className="rounded-md border border-cyan-400/40 px-3 py-1 text-sm text-cyan-400 hover:bg-cyan-400/10"
                >
                  View
                </button>
              </div>
            </motion.div>
          ))}

        </div>

        {selectedCertificate && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setSelectedCertificate(null)}
          >
            <div
              className="w-full max-w-4xl rounded-xl bg-slate-900 p-4 shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-cyan-400">
                  {selectedCertificate.title}
                </h3>
                <button
                  type="button"
                  onClick={() => setSelectedCertificate(null)}
                  className="rounded-md border border-slate-700 px-3 py-1 text-sm text-slate-300 hover:border-cyan-400 hover:text-cyan-400"
                >
                  Close
                </button>
              </div>
              <img
                src={`/certificates/${encodeURIComponent(selectedCertificate.image)}`}
                alt={selectedCertificate.title}
                className="max-h-[70vh] w-full rounded-lg object-contain"
              />
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

export default Certifications;