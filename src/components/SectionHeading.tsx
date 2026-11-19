export default function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
      <p className="text-sm font-semibold tracking-wide text-ember-dark">{eyebrow}</p>
      <h2 className="mt-2 font-serif text-3xl font-bold text-forest sm:text-4xl">{title}</h2>
      <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-ember/70" />
    </div>
  );
}
