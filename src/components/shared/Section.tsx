interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export default function Section({ title, children }: SectionProps) {
  return (
    <section>
      <h2 className="text-2xl font-light text-[#762123] mb-6 pb-4 border-b border-gray-100">{title}</h2>
      <div className="space-y-4">
        {children}
      </div>
    </section>
  );
}
