import PageLayout from '../shared/PageLayout';
import Section from '../shared/Section';
import FigureImage from '../shared/FigureImage';

const phases = [
  {
    phase: 'Phase 3',
    status: 'current' as const,
    title: 'Production-Stable System',
    desc: 'Dravix v0.3.2 operates as a deployed, end-to-end materials intelligence platform. The system features a deterministic inference pipeline, a governed dataset (~1780 materials), real-time analysis workflows, and ranking, simulation, optimization, and AI-assisted interpretation capabilities. This phase establishes system stability, reproducibility, and full decision workflow capability. The system is no longer a prototype — it is a functioning engineering platform.',
  },
  {
    phase: 'Phase 4',
    status: 'next' as const,
    title: 'Pilot Validation and Workflow Integration',
    desc: 'Focus: real-world usage in controlled environments. Includes pilot deployment with research labs and R&D teams, integration into early-stage material selection workflows, refinement based on real user behavior, and improved reporting and interpretability. Dravix is positioned as an upstream decision-support layer, used before physical testing.',
    figure: {
      src: '/images/eY8aKKY.png',
      caption: 'Transition from production-stable system to controlled pilot validation and workflow integration.',
      figureNumber: 22,
      title: 'Phase-3 to Phase-4 transition',
    },
  },
  {
    phase: 'Phase 5',
    status: 'planned' as const,
    title: 'Scaled Deployment',
    desc: 'Broader adoption across engineering teams, integration into enterprise workflows, and standardized use as a screening layer before testing. Dravix remains non-autonomous, decision-support focused, and aligned with existing certification systems.',
    figure: {
      src: '/images/l3lmzfv.png',
      caption: 'Progression from validation to integration within real engineering workflows while preserving existing testing systems.',
      figureNumber: 23,
      title: 'Validation-to-Workflow Integration Pathway',
    },
  },
  {
    phase: 'Phase 6',
    status: 'planned' as const,
    title: 'Multi-Property Materials Intelligence',
    desc: 'Expansion beyond fire resistance into thermal performance, mechanical properties, and sustainability metrics. Each domain follows the same progression: dataset development, validation, pilot usage, and controlled deployment.',
    figure: {
      src: '/images/n3MIUQp.png',
      caption: 'Framework for expanding screening capabilities to additional material properties following validation-first principles.',
      figureNumber: 24,
      title: 'Multi-property expansion framework',
    },
  },
];

const statusStyle = {
  current: 'bg-[#762123] text-white',
  next: 'bg-[#E8967F]/20 text-[#762123]',
  planned: 'bg-gray-100 text-gray-500',
};

const statusLabel = {
  current: 'Current',
  next: 'Next',
  planned: 'Planned',
};

export default function RoadmapPage() {
  return (
    <PageLayout
      eyebrow="Development"
      title="Roadmap"
      subtitle="Structured progression from prototype to real-world deployment — prioritizing validation, controlled adoption, and workflow integration over rapid scale."
    >
      <Section title="Overview">
        <p className="text-gray-600 leading-relaxed">
          The roadmap prioritizes validation, controlled adoption, and workflow integration over rapid or unverified scale. Each phase builds on <strong className="font-medium text-gray-700">proven system behavior</strong>, not speculative feature growth.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Each phase prioritizes validation and real-world use over rapid feature expansion.
        </p>
      </Section>

      <section className="space-y-6">
        {phases.map((phase) => (
          <div key={phase.phase} className="border border-gray-200 rounded-2xl p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyle[phase.status]}`}>
                {statusLabel[phase.status]}
              </span>
              <span className="text-sm text-gray-400">{phase.phase}</span>
            </div>
            <h3 className="text-xl font-light text-[#762123] mb-4">{phase.title}</h3>
            <p className="text-gray-600 leading-relaxed text-sm">{phase.desc}</p>
            {phase.figure && (
              <FigureImage
                src={phase.figure.src}
                caption={phase.figure.caption}
                figureNumber={phase.figure.figureNumber}
                title={phase.figure.title}
              />
            )}
          </div>
        ))}
      </section>

      <Section title="Constraints and Dependencies">
        <p className="text-gray-600 leading-relaxed mb-4">Growth is dependent on:</p>
        <ul className="space-y-2 mb-4">
          {[
            'Access to high-quality experimental data',
            'Domain expertise in fire and materials science',
            'Collaboration with research labs and industry',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8967F] mt-2 flex-shrink-0" />
              <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-sm text-gray-500">These constraints are acknowledged to ensure system credibility, responsible scaling, and real-world relevance.</p>
      </Section>

      <section>
        <h2 className="text-2xl font-light text-[#762123] mb-6 pb-4 border-b border-gray-100">Roadmap Summary</h2>
        <div className="grid grid-cols-1 gap-3">
          {[
            'Phase 3 establishes a production-stable system',
            'Phase 4 focuses on pilot validation and workflow integration',
            'Phase 5 expands deployment across engineering teams',
            'Phase 6 enables multi-property screening',
            'Validation and responsibility guide every stage',
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 bg-[#F8F8F8] border border-gray-200 rounded-xl px-5 py-4">
              <span className="w-6 h-6 rounded-full bg-[#762123]/10 flex items-center justify-center flex-shrink-0 text-xs font-medium text-[#762123]">{i + 1}</span>
              <p className="text-gray-600 text-sm leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
