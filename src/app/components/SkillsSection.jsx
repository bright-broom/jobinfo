"use client";

import { SectionHeader } from "./SectionHeader";

const SkillCategory = ({ title, skills }) => (
  <div className="p-4 transition-shadow bg-white rounded-lg shadow-sm hover:shadow-md">
    <h3 className="mb-3 text-lg font-semibold text-indigo-700 md:text-xl" id={`skills-${title}`}>
      {title}
    </h3>
    <ul 
      className="space-y-2 text-base text-gray-700 list-none md:text-lg"
      aria-labelledby={`skills-${title}`}
    >
      {skills.map((skill) => (
        <li 
          key={`skill-${title}-${skill}`}
          className="flex items-center p-2 transition-colors rounded hover:bg-indigo-50"
        >
          <span className="inline-block w-2 h-2 mr-3 bg-indigo-400 rounded-full" />
          <span>{skill}</span>
        </li>
      ))}
    </ul>
  </div>
);

export const SkillsSection = ({ skills }) => (
  <section 
    className="mb-8" 
    aria-labelledby="skills-section-header"
  >
    <SectionHeader id="skills-section-header">スキル</SectionHeader>
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      <SkillCategory title="Windows関連スキル" skills={skills.windows} />
      <SkillCategory title="Azure関連スキル" skills={skills.azure} />
    </div>
  </section>
);