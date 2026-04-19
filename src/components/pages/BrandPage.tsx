import PageLayout from '../shared/PageLayout';
import Section from '../shared/Section';
import FigureImage from '../shared/FigureImage';

export default function BrandPage() {
  return (
    <PageLayout
      eyebrow="Identity"
      title="Brand"
      subtitle="Built on the belief that engineering decisions in safety-critical systems should be supported by clear, reliable tools."
    >
      <Section title="Overview">
        <p className="text-gray-600 leading-relaxed">
          Fire resistance is not just a technical requirement — it is directly tied to human safety, infrastructure integrity, and economic impact. The systems used to evaluate it must prioritize clarity, consistency, and trust.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Dravix exists to improve how those decisions are made.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Dravix is built for environments where incorrect decisions carry real consequences.
        </p>
      </Section>

      <Section title="What Dravix Represents">
        <p className="text-gray-600 leading-relaxed">
          Dravix is an early-stage materials intelligence system designed to support better decisions before costly testing begins. Engineers working in fire safety and materials development often operate under uncertainty, relying on fragmented data and late-stage testing to guide critical decisions. This leads to inefficient workflows, repeated iteration, and missed opportunities for safer materials.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">Dravix introduces structure to this process. By converting material descriptors into a unified screening signal, the platform enables engineers to:</p>
        <ul className="space-y-2 mb-4">
          {[
            'Compare candidate materials earlier',
            'Prioritize what to test first',
            'Reduce unnecessary iteration',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-[#762123] mt-0.5 flex-shrink-0">→</span>
              <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-gray-600 leading-relaxed">
          Dravix does not replace existing standards or certification workflows. It strengthens them by improving the decisions made before testing begins.
        </p>
      </Section>

      <Section title="Name and Meaning">
        <p className="text-gray-600 leading-relaxed mb-4">
          The name <strong className="font-medium text-gray-700">Dravix</strong> is derived from:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-[#F8F8F8] border border-gray-200 rounded-2xl p-5">
            <div className="text-xs font-medium text-[#762123] uppercase tracking-wide mb-2">dravya</div>
            <p className="text-sm text-gray-600">A Sanskrit term meaning <em>substance</em> or <em>material</em></p>
          </div>
          <div className="bg-[#F8F8F8] border border-gray-200 rounded-2xl p-5">
            <div className="text-xs font-medium text-[#762123] uppercase tracking-wide mb-2">-ix</div>
            <p className="text-sm text-gray-600">A modern suffix associated with technology and systems</p>
          </div>
        </div>
        <div className="bg-[#762123]/5 border border-[#762123]/20 rounded-2xl p-5 mb-6">
          <p className="text-sm text-gray-700 leading-relaxed italic">
            The name reflects the platform's purpose: understanding materials at a fundamental level, and applying modern computation to improve how they are evaluated.
          </p>
        </div>
        <FigureImage
          src="/images/DV4lDmR.png"
          caption="Name origin combining 'dravya' (substance/material) with a modern technology suffix, reflecting the platform's foundation in materials and computation."
          figureNumber={21}
          title="Dravix name origin"
        />
      </Section>

      <Section title="Brand Personality">
        <p className="text-gray-600 leading-relaxed mb-6">
          Dravix is intentionally designed for technical environments where clarity and trust matter.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { trait: 'Technical', desc: 'Precise, rigorous, and grounded in engineering practice.' },
            { trait: 'Clean', desc: 'Minimal interfaces that reduce noise and surface what matters.' },
            { trait: 'Supportive', desc: 'Built to guide engineers through complex decisions, not overwhelm them.' },
          ].map((item, i) => (
            <div key={i} className="bg-[#F8F8F8] border border-gray-200 rounded-2xl p-5">
              <div className="text-sm font-medium text-[#762123] mb-2">{item.trait}</div>
              <div className="text-sm text-gray-500 leading-relaxed">{item.desc}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Visual Identity">
        <p className="text-gray-600 leading-relaxed mb-4">
          The visual identity reflects the intersection of fire safety and structured decision-making.
        </p>
        <ul className="space-y-3 mb-8">
          {[
            'Minimal layouts emphasize data and results',
            'Controlled color palette references fire without creating urgency',
            'Clean typography reinforces precision and credibility',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8967F] mt-2.5 flex-shrink-0" />
              <span className="text-gray-600 leading-relaxed text-sm">{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-gray-600 leading-relaxed mb-8">
          The logo combines a flame symbol representing fire risk and safety with internal lines and nodes representing structured computation and intelligence — a system that is both <strong className="font-medium text-gray-700">grounded in physical reality and powered by modern analysis</strong>.
        </p>

        <div>
          <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-4">Color Palette</p>
          <div className="flex flex-wrap gap-4">
            {[
              { color: '#762123', name: 'Primary Burgundy', hex: '#762123' },
              { color: '#9E2A2A', name: 'Deep Red', hex: '#9E2A2A' },
              { color: '#E8967F', name: 'Accent Coral', hex: '#E8967F' },
              { color: '#F8F8F8', name: 'Surface Light', hex: '#F8F8F8', border: true },
              { color: '#FFFFFF', name: 'Pure White', hex: '#FFFFFF', border: true },
            ].map((swatch) => (
              <div key={swatch.color} className="flex flex-col items-center gap-2">
                <div
                  className={`w-14 h-14 rounded-xl shadow-sm ${swatch.border ? 'border border-gray-200' : ''}`}
                  style={{ backgroundColor: swatch.color }}
                />
                <div className="text-center">
                  <div className="text-xs font-mono text-gray-500">{swatch.hex}</div>
                  <div className="text-xs text-gray-400">{swatch.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section title="User Experience and Voice">
        <p className="text-gray-600 leading-relaxed mb-4">
          Dravix is designed to minimize friction between question and insight.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-[#F8F8F8] border border-gray-200 rounded-2xl p-5">
            <div className="text-xs font-medium text-[#762123] uppercase tracking-wide mb-3">Interface</div>
            <ul className="space-y-1.5">
              {['Navigation is direct and structured', 'Interactions are intentional', 'Outputs focus on what matters for decisions'].map((item, i) => (
                <li key={i} className="text-sm text-gray-500 leading-relaxed">{item}</li>
              ))}
            </ul>
          </div>
          <div className="bg-[#F8F8F8] border border-gray-200 rounded-2xl p-5">
            <div className="text-xs font-medium text-[#762123] uppercase tracking-wide mb-3">Voice</div>
            <ul className="space-y-1.5">
              {['Factual', 'Concise', 'Consistent'].map((item, i) => (
                <li key={i} className="text-sm text-gray-500 leading-relaxed">{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <p className="text-sm text-gray-500 leading-relaxed">
          Explanations focus on what the system shows, why it matters, and how results should be interpreted.
        </p>
      </Section>

      <Section title="Commitment to Responsibility">
        <p className="text-gray-600 leading-relaxed mb-6">
          Dravix is built for safety-critical contexts.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-[#F8F8F8] border border-gray-200 rounded-2xl p-5">
            <div className="text-xs font-medium text-[#762123] uppercase tracking-wide mb-3">Outputs emphasize</div>
            <ul className="space-y-1.5">
              {['Relative screening', 'Uncertainty awareness', 'Decision support — not final judgment'].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-[#762123]">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-5">
            <div className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-3">The system does not</div>
            <ul className="space-y-1.5">
              {['Certify materials', 'Replace physical testing', 'Make autonomous decisions'].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-gray-500">
                  <span className="text-gray-300">✗</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="text-gray-600 leading-relaxed mb-4">
          Instead, it supports engineers in making <strong className="font-medium text-gray-700">better-informed decisions earlier</strong>. As Dravix evolves, development remains grounded in real-world workflows, validated behavior, and responsible system boundaries.
        </p>
        <div className="bg-[#762123]/5 border border-[#762123]/20 rounded-2xl px-5 py-4">
          <p className="text-sm font-medium text-[#762123]">Innovation is only valuable if it improves decisions without overstating certainty.</p>
        </div>
      </Section>
    </PageLayout>
  );
}
