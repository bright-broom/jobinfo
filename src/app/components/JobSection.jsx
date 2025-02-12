"use client";

import { SectionHeader } from "./SectionHeader";

const hashText = (text) => {
  let hash = 0;
  for (let i = 0; i < text.length; i++) {
    const char = text.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return `responsibility-${Math.abs(hash)}`;
};

export const JobSummary = ({ summary }) => (
  <section className="mb-8">
    <SectionHeader>職務概要</SectionHeader>
    <p className="text-base leading-relaxed text-gray-700 md:text-lg">
      {summary}
    </p>
  </section>
);

export const JobResponsibilities = ({ responsibilities }) => (
  <section className="mb-8">
    <SectionHeader>業務内容</SectionHeader>
    {responsibilities.map((responsibility) => (
      <p
        key={hashText(responsibility)}
        className="mb-4 text-base leading-relaxed text-gray-700 md:text-lg last:mb-0"
      >
        {responsibility}
      </p>
    ))}
  </section>
);