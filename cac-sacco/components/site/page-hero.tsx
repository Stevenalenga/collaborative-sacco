export function PageHero({
  kicker,
  title,
  body,
}: {
  kicker?: string;
  title: string;
  body: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="grain pointer-events-none absolute inset-0 opacity-40" />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        {kicker ? (
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-soft/80">{kicker}</p>
        ) : null}
        <h1 className="font-display mt-3 max-w-3xl text-4xl leading-tight sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">{body}</p>
      </div>
    </section>
  );
}
