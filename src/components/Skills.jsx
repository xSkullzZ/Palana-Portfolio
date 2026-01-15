// src/components/Skills.jsx
import { motion } from "framer-motion";
import {
  SiGoogle,
  SiJira,
  SiConfluence,
  SiAdobe,
  SiFigma,
  SiWebflow,
  SiSketch,
  SiMiro,
  SiOpenai,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiVuedotjs,
  SiNodedotjs,
  SiPython,
  SiMysql,
  SiCplusplus
} from "react-icons/si";
import { FaMicrosoft } from "react-icons/fa";
import { GiMusicSpell } from "react-icons/gi";
import { TbBrandCSharp } from "react-icons/tb";

/* ---------------------------
   DATA
---------------------------- */

const BAR_SEGMENTS = 6;

const skillsData = {
  software: [
    {
      title: "Productivity & Collaboration",
      skills: [
        { name: "Google Suite", icon: SiGoogle, level: 5, color: "#4285F4" },
        { name: "Microsoft Office", icon: FaMicrosoft, level: 5, color: "#EA3E23" },
        { name: "Jira", icon: SiJira, level: 5, color: "#0052CC" },
        { name: "Confluence", icon: SiConfluence, level: 5, color: "#2684FF" }
      ]
    },
    {
      title: "Design & Prototyping",
      skills: [
        { name: "Adobe CC Suite", icon: SiAdobe, level: 5, color: "#FF0000" },
        { name: "Figma", icon: SiFigma, level: 5, color: "#A259FF" },
        { name: "Webflow", icon: SiWebflow, level: 5, color: "#4353FF" },
        { name: "Sketch", icon: SiSketch, level: 4, color: "#F7B500" }
      ]
    },
    {
      title: "Audio & Other",
      skills: [
        { name: "Reaper", icon: GiMusicSpell, level: 5, color: "#F97316" },
        { name: "Miro", icon: SiMiro, level: 5, color: "#FFD02F" },
        { name: "ComfyUI / Gen AI", icon: SiOpenai, level: 4, color: "#10A37F" },
        { name: "LLM Prompting", icon: SiOpenai, level: 5, color: "#10A37F" }
      ]
    }
  ],

  programming: [
    { name: "HTML", icon: SiHtml5, level: 5, color: "#E34C26" },
    { name: "CSS", icon: SiCss3, level: 5, color: "#264DE4" },
    { name: "VueJS", icon: SiVuedotjs, level: 3, color: "#42B883" },
    { name: "React", icon: SiReact, level: 4, color: "#61DAFB" },
    { name: "JavaScript", icon: SiJavascript, level: 4, color: "#F7DF1E" },
    { name: "Node.js", icon: SiNodedotjs, level: 4, color: "#68A063" },
    { name: "Python", icon: SiPython, level: 4, color: "#3776AB" },
    { name: "SQL", icon: SiMysql, level: 4, color: "#00758F" },
    { name: "C#", icon: TbBrandCSharp, level: 4, color: "#512BD4" },
    { name: "C++", icon: SiCplusplus, level: 3, color: "#00599C" }
  ]
};

/* ---------------------------
   COMPONENTS
---------------------------- */

const DiagonalBar = ({ level }) => (
  <div className="flex gap-[6px]">
    {[...Array(BAR_SEGMENTS)].map((_, i) => (
      <motion.div
        key={i}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: i < level ? 1 : 0.25 }}
        transition={{ duration: 0.5, delay: i * 0.08 }}
        className={`w-4 h-6 origin-bottom skew-x-[-20deg] rounded-sm ${
          i < level ? "bg-orange-400" : "bg-gray-500/40"
        }`}
      />
    ))}
  </div>
);

const SkillRow = ({ skill }) => {
  const Icon = skill.icon;

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="flex items-center justify-between gap-3"
    >
      <div className="flex items-center gap-3 min-w-0">
        <Icon
          className="text-lg"
          style={{ color: skill.color }}
        />
        <span className="text-sm text-white truncate">
          {skill.name}
        </span>
      </div>
      <DiagonalBar level={skill.level} />
    </motion.div>
  );
};

const SkillCard = ({ title, skills }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="bg-gray-800/40 backdrop-blur-md border border-gray-700/50 rounded-xl p-5"
  >
    <h3 className="text-white font-semibold mb-4">
      {title}
    </h3>
    <div className="space-y-3">
      {skills.map(skill => (
        <SkillRow key={skill.name} skill={skill} />
      ))}
    </div>
  </motion.div>
);

/* ---------------------------
   MAIN
---------------------------- */

export default function Skills() {
  return (
    <section className="min-h-screen px-6 py-16 bg-gradient-to-br from-gray-900 via-slate-900 to-black">
      <div className="max-w-[1400px] mx-auto space-y-14">

        <h1 className="text-5xl font-black text-white">
          MY SKILLS
        </h1>

        {/* SOFTWARE */}
        <div>
          <h2 className="text-2xl text-white mb-6">
            Software & Tools
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {skillsData.software.map(card => (
              <SkillCard
                key={card.title}
                title={card.title}
                skills={card.skills}
              />
            ))}
          </div>
        </div>

        {/* PROGRAMMING */}
        <div>
          <h2 className="text-2xl text-white mb-6">
            Programming Languages
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {skillsData.programming.map(skill => {
              const Icon = skill.icon;

              return (
                <motion.div
                  key={skill.name}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-800/40 border border-gray-700/50 rounded-xl p-4 text-center"
                >
                  <Icon
                    className="text-3xl mx-auto mb-2"
                    style={{ color: skill.color }}
                  />
                  <span className="text-sm text-white block mb-2">
                    {skill.name}
                  </span>
                  <DiagonalBar level={skill.level} />
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
