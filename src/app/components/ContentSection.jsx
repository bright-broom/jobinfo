"use client";

import { SectionHeader } from "./SectionHeader";

export const BulletList = ({ items }) => (
  <ul className="space-y-2 text-base text-gray-700 list-disc list-inside md:text-lg">
    {items.map((item) => (
      <li key={`item-${item.substring(0, 20)}`}>{item}</li>
    ))}
  </ul>
);

export const ContentSection = ({ title, content, type = "text" }) => (
  <section className="mb-8">
    <SectionHeader>{title}</SectionHeader>
    {type === "list" ? (
      <BulletList items={content} />
    ) : (
      <p className="text-base leading-relaxed text-gray-700 md:text-lg">
        {content}
      </p>
    )}
  </section>
);