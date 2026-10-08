import type { Metadata } from "next";
import { academyCourses } from "@/lib/data";

export const metadata: Metadata = { title: "Academy" };

export default function PortalAcademyPage() {
  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="font-display text-3xl text-navy">CAC Financial Academy</h1>
      <p className="mt-2 text-muted">Courses, quizzes, and certificates will unlock here for members.</p>
      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {academyCourses.map((course) => (
          <article key={course.title} className="rounded-3xl bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold text-coral">{course.level}</p>
            <h2 className="mt-2 font-semibold text-navy">{course.title}</h2>
            <p className="mt-2 text-sm text-muted">{course.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
