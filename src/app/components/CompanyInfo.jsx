"use client";

import { SectionHeader } from "./SectionHeader";

const InfoItem = ({ label, value, className = "" }) => (
  <li className={`flex flex-col sm:flex-row sm:items-center p-3 rounded-lg hover:bg-gray-50 transition-colors ${className}`}>
    <span className="font-medium text-indigo-700 min-w-[120px] mb-1 sm:mb-0">
      {label}:
    </span>
    <span className="text-gray-700">{value}</span>
  </li>
);

export const CompanyInfo = ({ company }) => (
  <section 
    className="mb-8" 
    aria-labelledby="company-info-header"
  >
    <SectionHeader id="company-info-header">{company.name}</SectionHeader>
    <div className="p-4 bg-white rounded-lg shadow-sm">
      <ul 
        className="space-y-2 text-base divide-y divide-gray-100 md:text-lg"
        aria-label="会社情報"
      >
        <InfoItem label="期間" value={company.period} />
        <InfoItem label="事業内容" value={company.business} />
        <InfoItem 
          label="資本金" 
          value={company.capital}
          className="sm:items-baseline" 
        />
        <InfoItem 
          label="売上高" 
          value={company.revenue}
          className="sm:items-baseline" 
        />
        <InfoItem label="従業員数" value={company.employees} />
        <InfoItem label="本社所在地" value={company.address} />
        <li className="flex flex-col p-3 transition-colors rounded-lg sm:flex-row sm:items-center hover:bg-gray-50">
          <span className="font-medium text-indigo-700 min-w-[120px] mb-1 sm:mb-0">
            会社概要:
          </span>
          <a
            href={company.profileUrl}
            className="text-blue-600 transition-colors rounded hover:text-blue-800 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="会社概要ページを開く（新しいウィンドウで開きます）"
          >
            <span className="inline-flex items-center">
              詳細を見る
              <svg 
                className="w-4 h-4 ml-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                />
              </svg>
            </span>
          </a>
        </li>
      </ul>
    </div>
  </section>
);