"use client";

import { CompanyInfo } from "./components/CompanyInfo";
import { JobSummary, JobResponsibilities } from "./components/JobSection";
import { SkillsSection } from "./components/SkillsSection";
import { ContentSection } from "./components/ContentSection";
import { careerData } from "./data/career-data";

export default function CareerPage() {
  const {
    company,
    jobSummary,
    responsibilities,
    achievements,
    skills,
    qualifications,
    selfPromotion,
  } = careerData;

  return (
    <div className="min-h-screen p-4 font-sans bg-gradient-to-br from-blue-100 to-indigo-200 md:p-8">
      <div className="max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl">
        <header className="p-4 text-white bg-indigo-600 md:p-6">
          <h1 className="text-2xl font-bold md:text-3xl">職務経歴書</h1>
        </header>

        <main className="p-4 md:p-6">
          <CompanyInfo company={company} />
          <JobSummary summary={jobSummary} />
          <JobResponsibilities responsibilities={responsibilities} />
          <ContentSection title="成果" content={achievements} type="list" />
          <SkillsSection skills={skills} />
          <ContentSection title="資格・語学" content={qualifications} type="list" />
          <ContentSection title="自己PR" content={selfPromotion} />
        </main>
      </div>
    </div>
  );
}