interface PageLayoutProps {
  children: React.ReactNode;
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export default function PageLayout({ children, eyebrow, title, subtitle }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <header className="mb-16">
          {eyebrow && (
            <p className="text-xs font-medium tracking-widest text-[#E8967F] uppercase mb-4">{eyebrow}</p>
          )}
          <h1 className="text-4xl sm:text-5xl font-light text-[#762123] mb-6 leading-tight">{title}</h1>
          {subtitle && (
            <p className="text-lg text-gray-500 leading-relaxed max-w-2xl">{subtitle}</p>
          )}
        </header>
        <div className="space-y-16">
          {children}
        </div>
      </div>
    </div>
  );
}
