import type { Metadata } from "next";
import { CtaBand } from "@/components/site/cta-band";
import { PageHero } from "@/components/site/page-hero";
import { academyCourses } from "@/lib/data";

export const metadata: Metadata = { title: "Financial academy" };

export default function AcademyPage() {
  return (
    <>
      <PageHero
        kicker="CAC Financial Academy"
        title="Financial literacy for the childcare community"
        body="Short, practical lessons on saving, debt, childcare businesses, and creditworthiness — the difference between a generic SACCO and one built for this sector."
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-4 md:grid-cols-2">
          {academyCourses.map((course) => (
            <article key={course.title} className="flex flex-col rounded-[1.75rem] bg-white p-6 ring-1 ring-navy/8">
              <div className="flex items-center justify-between text-xs font-semibold">
                <span className="text-coral">{course.level}</span>
                <span className="text-muted">{course.duration}</span>
              </div>
              <h2 className="mt-3 text-xl font-semibold text-navy">{course.title}</h2>
              <p className="mt-2 flex-1 text-sm leading-6 text-muted">{course.body}</p>
              <p className="mt-5 text-sm font-medium text-teal">Coming with member login · preview content</p>
            </article>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
