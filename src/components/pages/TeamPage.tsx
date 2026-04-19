import PageLayout from '../shared/PageLayout';
import Section from '../shared/Section';

const team = [
  {
    name: 'Nikhilesh Suravarjjala',
    role: 'Technical Lead & Primary Developer',
    desc: 'Designed and implemented the system architecture, built the end-to-end inference pipeline, and led development of the machine learning and decision workflows. His work integrates materials science, data-driven modeling, and system design into a functioning materials intelligence platform.',
  },
  {
    name: 'Jaanya Gupta',
    role: 'Design, Communication & Market Strategy',
    desc: 'Led visual design, presentation, and market research. Focused on translating technical systems into clear narratives, refining product positioning, and ensuring the platform is understandable to external stakeholders.',
  },
  {
    name: 'Arnav Saini',
    role: 'Data & Analysis',
    desc: 'Supported dataset development, data preparation, and exploratory analysis. Contributions included data organization and early-stage analysis that informed model development and validation.',
  },
];

export default function TeamPage() {
  return (
    <PageLayout
      eyebrow="People"
      title="Team"
      subtitle="Engineers and developers shaped by firsthand exposure to fire-prone environments in California."
    >
      <Section title="Mission">
        <p className="text-gray-600 leading-relaxed">
          Our mission is to make fire-resistance evaluation faster, more structured, and more responsible — by introducing predictive screening earlier in material development. We focus on reducing unnecessary testing while preserving the role of certified validation and established standards.
        </p>
      </Section>

      <Section title="Values">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { value: 'Accuracy', desc: 'Decisions must be grounded in real data and physical behavior.' },
            { value: 'Transparency', desc: 'Outputs should be interpretable and clearly communicated.' },
            { value: 'Responsibility', desc: 'In safety-critical systems, restraint matters as much as innovation.' },
          ].map((item, i) => (
            <div key={i} className="bg-[#F8F8F8] border border-gray-200 rounded-2xl p-5">
              <div className="text-sm font-medium text-[#762123] mb-2">{item.value}</div>
              <div className="text-sm text-gray-500 leading-relaxed">{item.desc}</div>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-500 mt-4">Dravix is designed to support engineers — not replace them.</p>
      </Section>

      <section>
        <h2 className="text-2xl font-light text-[#762123] mb-8 pb-4 border-b border-gray-100">Team Roles</h2>
        <div className="space-y-6">
          {team.map((member, i) => (
            <div key={i} className="border border-gray-200 rounded-2xl p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#762123]/8 border border-[#762123]/15 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-light text-[#762123]">{member.name.charAt(0)}</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#762123]">{member.name}</h3>
                  <p className="text-sm text-[#E8967F]">{member.role}</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm">{member.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Section title="Team Approach">
        <p className="text-gray-600 leading-relaxed mb-4">
          Dravix was built with an execution-first mindset:
        </p>
        <ul className="space-y-2 mb-4">
          {[
            'Build → validate → refine',
            'Prioritize real functionality over concept',
            'Focus on usable systems, not theoretical ideas',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-[#762123] mt-0.5 flex-shrink-0">→</span>
              <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-gray-600 leading-relaxed">
          This approach enabled the transition from concept to a working engineering platform.
        </p>
      </Section>

      <Section title="Looking Forward">
        <p className="text-gray-600 leading-relaxed mb-4">
          As Dravix evolves, the team remains focused on validation over hype, usability over feature expansion, and alignment with real engineering workflows.
        </p>
        <div className="bg-[#762123]/5 border border-[#762123]/20 rounded-2xl px-5 py-4">
          <p className="text-sm text-gray-700 leading-relaxed italic">
            Build systems that improve decisions, validate them in practice, and scale responsibly.
          </p>
        </div>
      </Section>
    </PageLayout>
  );
}
