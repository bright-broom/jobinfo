"use client";

import { SectionHeader } from "./SectionHeader";

export const CompanyInfo = ({ company }) => (
  <section className="mb-8">
    <SectionHeader>{company.name}</SectionHeader>
    <ul className="space-y-2 text-base text-gray-700 list-disc list-inside md:text-lg">
      <li>
        <span className="font-medium">期間:</span> {company.period}
      </li>
      <li>
        <span className="font-medium">事業内容:</span> {company.business}
      </li>
      <li>
        <span className="font-medium">資本金:</span> {company.capital}
      </li>
      <li>
        <span className="font-medium">売上高:</span> {company.revenue}
      </li>
      <li>
        <span className="font-medium">従業員数:</span> {company.employees}
      </li>
      <li>
        <span className="font-medium">本社所在地:</span> {company.address}
      </li>
      <li>
        <span className="font-medium">会社概要:</span>{" "}
        <a
          href={company.profileUrl}
          className="text-blue-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="会社概要ページを開く（新しいウィンドウ）"
        >
          {company.profileUrl}
        </a>
      </li>
    </ul>
  </section>
);