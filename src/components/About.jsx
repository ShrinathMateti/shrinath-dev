import {
  FaJava,
  FaGraduationCap,
  FaCode,
  FaProjectDiagram,
} from "react-icons/fa";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiSpringboot,
  SiBootstrap,
  SiTailwindcss,
  SiPostgresql,
} from "react-icons/si";

import { motion } from "framer-motion";

const skills = [
  {
    name: "HTML",
    icon: <SiHtml5 />,
    color: "text-orange-500",
  },
  {
    name: "CSS",
    icon: <SiCss3 />,
    color: "text-blue-500",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
    color: "text-yellow-400",
  },
  {
    name: "React",
    icon: <SiReact />,
    color: "text-cyan-400",
  },
  {
    name: "Bootstrap",
    icon: <SiBootstrap />,
    color: "text-purple-500",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    color: "text-cyan-400",
  },
  {
    name: "Java",
    icon: <FaJava />,
    color: "text-red-500",
  },
  {
    name: "Spring Boot",
    icon: <SiSpringboot />,
    color: "text-green-500",
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql />,
    color:"text-slate-400",
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const About = () => {
  const education = [
    {
      title: "Master of Computer Applications (MCA)",
      place: "Jain University",
      year: "2022 - 2024",
    },
    {
      title: "Bachelor of Computer Science (BCS)",
      place: "DBF Dayanand College",
      year: "2019 - 2022",
    },
  ];

  return (
    <section className="text-white py-16" id="about">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-6"
        >
          About Me
        </motion.h2>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* LEFT SIDE */}
          <div className="space-y-8">
            {/* Intro */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition"
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                I’m a{" "}
                <span className="text-green-400 font-semibold">
                  Full Stack Developer
                </span>{" "}
                building modern, scalable applications using{" "}
                <span className="text-blue-400 font-semibold">
                  React & Spring Boot
                </span>
                .
              </p>
            </motion.div>

            {/* Education */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6"
            >
              <h3 className="text-lg font-semibold mb-6 text-green-400 flex items-center gap-2">
                <FaGraduationCap /> Education
              </h3>

              <div className="space-y-6">
                {education.map((edu, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    className="flex gap-4 group"
                  >
                    <div className="text-green-400 text-xl mt-1 group-hover:scale-110 transition">
                      <FaGraduationCap />
                    </div>

                    <div>
                      <h4 className="font-semibold text-white">
                        {edu.title}
                      </h4>
                      <p className="text-sm text-gray-400">{edu.place}</p>
                      <p className="text-sm text-gray-500">{edu.year}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE - SKILLS */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-5"
          >
            <h3 className="text-lg font-semibold mb-3 text-blue-400">
              Tech Stack
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="group relative rounded-xl p-[1px] bg-gradient-to-br from-white/10 to-white/5 hover:from-green-400/40 hover:to-blue-500/40 transition"
                >
                  <div className="bg-gray-700 backdrop-blur-xl rounded-xl p-4 flex flex-col items-center justify-center transition duration-300 group-hover:scale-105">
                    <div className={`text-3xl mb-2 ${skill.color}`}>
                      {skill.icon}
                    </div>

                    <p className="text-xs sm:text-sm text-gray-300 group-hover:text-white transition text-center">
                      {skill.name}
                    </p>
                  </div>

                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 blur-xl bg-gradient-to-r from-green-400/20 to-blue-500/20 transition"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* STATS */}
        <div className="mt-5 grid sm:grid-cols-3 gap-6 text-center">
          {[
            {
              value: "Fresher",
              label: "Open to Work",
              icon: <FaCode />,
            },
            {
              value: "8+",
              label: "Projects Completed",
              icon: <FaProjectDiagram />,
            },
            {
              value: "Java & Spring",
              label: "Core Expertise",
              icon: <FaJava />,
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-5 hover:scale-105 hover:border-white/20 transition"
            >
              <div className="text-3xl text-green-400 mb-3 flex justify-center">
                {item.icon}
              </div>

              <h3 className="text-lg font-semibold">{item.value}</h3>
              <p className="text-gray-400 text-sm mt-1">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;