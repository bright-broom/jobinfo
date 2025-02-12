"use client";

import { SectionHeader } from "./SectionHeader";

const SkillCategory = ({ title, skills }) => (
  <div>
    <h3 className="mb-2 text-lg font-semibold text-indigo-700 md:text-xl">
      {title}
    </h3>
    <ul className="space-y-1 text-base text-gray-700 list-disc list-inside md:text-lg">
      {skills.map((skill) => (
        <li key={`skill-${title}-${skill}`}>{skill}</li>
      ))}
    </ul>
  </div>
);

export const SkillsSection = ({ skills }) => (
  <section className="mb-8">
    <SectionHeader>スキル</SectionHeader>
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <SkillCategory title="Windows関連スキル" skills={skills.windows} />
      <SkillCategory title="Azure関連スキル" skills={skills.azure} />
    </div>
  </section>
);