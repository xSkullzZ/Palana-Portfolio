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
  SiCplusplus,
  SiGo,
} from "react-icons/si";
import { FaMicrosoft } from "react-icons/fa";
import { GiMusicSpell } from "react-icons/gi";
import { TbBrandCSharp } from "react-icons/tb";
import { MdStorage } from "react-icons/md";

const BAR_SEGMENTS = 5;

export const skillsData = {
  software: [
    {
      title: "Productivity & Collaboration",
      skills: [
        { name: "Google Suite", icon: SiGoogle, level: 5 },
        { name: "Microsoft Office", icon: FaMicrosoft, level: 5 },
        { name: "Jira", icon: SiJira, level: 5 },
        { name: "Confluence", icon: SiConfluence, level: 4 },
      ],
    },
    {
      title: "Design & Prototyping",
      skills: [
        { name: "Adobe CC Suite", icon: SiAdobe, level: 5 },
        { name: "Figma", icon: SiFigma, level: 5 },
        { name: "Webflow", icon: SiWebflow, level: 5 },
        { name: "Sketch", icon: SiSketch, level: 3 },
      ],
    },
    {
      title: "Audio & Other",
      skills: [
        { name: "Reaper", icon: GiMusicSpell, level: 5 },
        { name: "Miro", icon: SiMiro, level: 5 },
        { name: "ComfyUI (Gen AI)", icon: SiOpenai, level: 4 },
        { name: "LLM Prompting", icon: SiOpenai, level: 4 },
      ],
    },
  ],

  programming: [
    { name: "HTML", icon: SiHtml5, level: 5 },
    { name: "CSS", icon: SiCss3, level: 5 },
    { name: "VueJS", icon: SiVuedotjs, level: 3 },
    { name: "React", icon: SiReact, level: 3 },
    { name: "Javascript", icon: SiJavascript, level: 2 },
    { name: "Node.JS", icon: SiNodedotjs, level: 2 },
    { name: "Python", icon: SiPython, level: 2 },
    { name: "SQL", icon: SiMysql, level: 2 },
    { name: "C#", icon: TbBrandCSharp, level: 2 },
    { name: "C++", icon: SiCplusplus, level: 1 },
    { name: "Golang", icon: SiGo, level: 1 },
    { name: "Neo4J", icon: MdStorage, level: 1 },
  ],

  competencies: [
    {
      title: "User Research & Analysis",
      items: [
        "Task Creation and Management",
        "Requirements and User Stories",
        "Prioritization Methods (RICE, Kano)",
        "Sprint and Release Planning",
      ]
    },
    {
      title: "Product Strategy & Vision",
      items: [
        "Roadmap Development",
        "Market Analysis",
        "Competitor Analysis",
        "Objective Definition",
      ]
    },
    {
      title: "Backlog & Prioritization Management",
      items: [
        "Task Creation and Management",
        "Requirements and User Stories",
        "Prioritization Methods (RICE, Kano)",
        "Sprint and Release Planning",
      ]
    },
    {
      title: "Methodologies & Leadership",
      items: [
        "Agile, Scrum, Kanban",
        "Management and moderation of organizational meetings (Daily Scrum, Review, Retros)",
        "Cross-functional collaboration and communication",
      ]
    },
    {
      title: "User Experience & Research",
      items: [
        "Conducting Qualitative/Quantitative Research",
        "User Flow Development",
        "Wireframe & Interactive Prototype Design",
        "Visual Design and Interaction",
      ]
    }
  ],

  languages: [
    {
      name: "Italian",
      level: 6,
      proficiency: "Native Speaker",
    },
    {
      name: "English",
      level: 5,
      proficiency: "Fluent, Skills certificated by Oxford College",
    },
    {
      name: "Spanish",
      level: 3,
      proficiency: "Fluent Listening. Working Proficiency Writing, Limited Proficiency Speaking",
    },
    {
      name: "German",
      level: 2,
      proficiency: "Limited Working Proficiency Listening and Writing, Beginner Speaking",
    },
  ],
};

/* ---------------------------
   COMPONENTS
---------------------------- */

const SkillBar = ({ level }) => (
  <div className="flex justify-start items-center gap-1">
    {[...Array(BAR_SEGMENTS)].map((_, i) => (
      <motion.div
        key={i}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.5, delay: i * 0.05 }}
        viewport={{ once: true }}
        className={`w-5 h-2 origin-left ${
          i < level
            ? "bg-gradient-to-br from-amber-400 to-amber-500"
            : "bg-gradient-to-br from-zinc-300 to-neutral-500"
        }`}
      />
    ))}
  </div>
);

const SoftwareSkillRow = ({ skill }) => {
  const Icon = skill.icon;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full py-1 flex justify-start items-center gap-2"
    >
      <div className="w-5 h-5 relative overflow-hidden flex items-center justify-center flex-shrink-0">
        <Icon className="text-lg text-gray-400" />
      </div>
      <div className="flex-1 text-white text-base font-medium font-['Outfit']">
        {skill.name}
      </div>
      <SkillBar level={skill.level} />
    </motion.div>
  );
};

const SoftwareCard = ({ title, skills }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="flex-1 p-3 bg-white/5 rounded-lg flex flex-col justify-start items-start gap-2 min-w-[300px]"
  >
    <div className="w-full text-white text-xl font-bold font-['Syne']">
      {title}
    </div>
    <div className="w-full space-y-1">
      {skills.map((skill) => (
        <SoftwareSkillRow key={skill.name} skill={skill} />
      ))}
    </div>
  </motion.div>
);

const ProgrammingSkillCard = ({ skill }) => {
  const Icon = skill.icon;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="h-20 p-3 bg-black/0 rounded-lg flex flex-col justify-center items-start gap-3 min-w-[140px]"
    >
      <div className="w-full flex justify-start items-start gap-3">
        <div className="w-5 h-5 relative overflow-hidden flex items-center justify-center flex-shrink-0">
          <Icon className="text-lg text-white" />
        </div>
        <div className="text-white text-base font-medium font-['Outfit']">
          {skill.name}
        </div>
      </div>
      <SkillBar level={skill.level} />
    </motion.div>
  );
};

const CompetencyCard = ({ title, items }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="flex-1 p-3 bg-black/0 rounded flex flex-col justify-start items-start gap-1 min-w-[200px]"
  >
    <div className="w-full text-white text-sm font-bold font-['Syne']">
      {title}
    </div>
    {items.map((item, idx) => (
      <div key={idx} className="w-full text-white text-sm font-light font-['Outfit']">
        {item}
      </div>
    ))}
  </motion.div>
);

const LanguageRow = ({ language }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="w-full py-1 flex justify-start items-center gap-2"
  >
    <div className="w-8 h-8 bg-gray-700 rounded-sm flex-shrink-0" />
    <div className="w-28 text-white text-base font-medium font-['Outfit']">
      {language.name}
    </div>
    <div className="flex-1 text-white text-xs font-light font-['Outfit']">
      {language.proficiency}
    </div>
    <div className="flex justify-start items-center gap-1 flex-shrink-0">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className={`w-9 h-4 ${
            i < language.level
              ? "bg-gradient-to-br from-amber-400 to-amber-500"
              : "bg-gradient-to-br from-zinc-300 to-neutral-500"
          }`}
        />
      ))}
    </div>
  </motion.div>
);

/* ---------------------------
   MAIN
---------------------------- */

export default function Skills() {
  return (
    <section className="w-full min-h-screen p-10 bg-gradient-to-br from-gray-900 to-gray-950 flex flex-col justify-start items-start gap-6 overflow-auto">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full"
      >
        <div className="text-white text-4xl font-extrabold font-['Outfit']">
          MY SKILLS
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="w-full"
      >
        <div className="text-white text-3xl font-bold font-['Syne']">
          Software & Tools
        </div>
      </motion.div>

      {/* SOFTWARE SECTION */}
      <div className="w-full py-2 flex justify-start items-start gap-5 flex-wrap">
        {skillsData.software.map((card) => (
          <SoftwareCard key={card.title} title={card.title} skills={card.skills} />
        ))}
      </div>

      {/* PROGRAMMING SECTION */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full flex flex-col justify-start items-start gap-3 mt-4"
      >
        <div className="text-white text-xl font-bold font-['Syne']">
          Programming Languages
        </div>
        <div className="w-full flex justify-start items-start gap-3 flex-wrap">
          {skillsData.programming.map((skill) => (
            <ProgrammingSkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </motion.div>

      {/* COMPETENCIES SECTION */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full flex flex-col justify-start items-start gap-3 mt-4"
      >
        <div className="text-white text-xl font-bold font-['Syne']">
          Core Competencies
        </div>
        <div className="w-full flex justify-start items-start gap-2 flex-wrap">
          {skillsData.competencies.map((comp) => (
            <CompetencyCard key={comp.title} title={comp.title} items={comp.items} />
          ))}
        </div>
      </motion.div>

      {/* LANGUAGES SECTION */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full flex flex-col justify-start items-start gap-3 mt-4"
      >
        <div className="text-white text-xl font-bold font-['Syne']">
          Languages
        </div>
        <div className="w-full flex flex-col justify-start items-start gap-2">
          {skillsData.languages.map((language) => (
            <LanguageRow key={language.name} language={language} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
