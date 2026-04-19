import PageLayout from '../shared/PageLayout';
import Section from '../shared/Section';
import FigureImage from '../shared/FigureImage';

export default function ImpactPage() {
  return (
    <PageLayout
      eyebrow="Market & Value"
      title="Impact & Market"
      subtitle="Fire resistance testing is essential across safety-critical industries — but today, it happens too late."
    >
      <Section title="Overview">
        <p className="text-gray-600 leading-relaxed">
          By the time materials reach fire testing, teams have already invested significant time, cost, and engineering effort. When materials fail, development cycles restart — leading to expensive redesign loops and slowed innovation.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Dravix addresses this structural inefficiency by introducing <strong className="font-medium text-gray-700">early-stage fire-risk screening</strong>, enabling teams to evaluate and prioritize materials before committing to costly physical testing.
        </p>
      </Section>

      <Section title="The Problem">
        <p className="text-gray-600 leading-relaxed mb-6">
          Fire resistance evaluation today is constrained by three core limitations:
        </p>
        <div className="space-y-4 mb-6">
          {[
            {
              num: '1',
              title: 'Testing Happens Too Late',
              desc: 'Fire testing is typically performed near the end of development, after materials are already selected and built into prototypes.',
            },
            {
              num: '2',
              title: 'High Cost and Limited Throughput',
              desc: 'Small-scale tests run up to ~$1,000 per run. Cone calorimetry adds per-sample cost. Room-corner tests reach several thousand dollars. ASTM E119 runs $10,000–$20,000+ per test. These tests also require scheduling, setup, and specialized facilities — often taking weeks.',
            },
            {
              num: '3',
              title: 'No Standardized Early Screening Method',
              desc: 'Engineers rely on fragmented descriptors (LOI, heat of combustion, ignition temp, etc.) that do not translate into a unified decision signal.',
            },
          ].map((item, i) => (
            <div key={i} className="border border-gray-200 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-7 h-7 rounded-full bg-[#762123]/10 border border-[#762123]/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-medium text-[#762123]">{item.num}</span>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-gray-600 leading-relaxed">
          As a result, teams test fewer candidates, iterate more slowly, and miss better-performing materials.
        </p>
        <FigureImage
          src="/images/kQwPLtp.png"
          caption="Cost, time, and risk concentration in traditional fire testing workflows, highlighting late-stage inefficiencies."
          figureNumber={17}
          title="Fire Testing Cost, Time, Risk Funnel"
        />
      </Section>

      <Section title="What Dravix Changes">
        <p className="text-gray-600 leading-relaxed mb-4">
          Dravix introduces a new step in the workflow: early-stage, descriptor-driven screening using the <strong className="font-medium text-gray-700">CFRS (Composite Fire-Risk Score)</strong>.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-[#F8F8F8] border border-gray-200 rounded-2xl p-5">
            <div className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-2">Without Dravix</div>
            <p className="text-sm text-gray-500 italic">"Will this material pass testing?"</p>
          </div>
          <div className="bg-[#762123]/5 border border-[#762123]/20 rounded-2xl p-5">
            <div className="text-xs font-medium text-[#762123] uppercase tracking-wide mb-2">With Dravix</div>
            <p className="text-sm text-gray-700 font-medium">"Which materials should we test first?"</p>
          </div>
        </div>
        <p className="text-gray-600 leading-relaxed mb-4">This allows teams to:</p>
        <ul className="space-y-2 mb-4">
          {[
            'Prioritize high-potential candidates',
            'Eliminate weak options early',
            'Reduce unnecessary testing cycles',
            'Accelerate development timelines',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-[#762123] mt-0.5 flex-shrink-0">→</span>
              <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-sm text-gray-500">Dravix does not replace testing — it ensures testing resources are used where they matter most.</p>
        <p className="text-gray-600 leading-relaxed mt-4">
          This reduces the number of failed material iterations and compresses development timelines.
        </p>
      </Section>

      <Section title="Where Dravix Fits">
        <p className="text-gray-600 leading-relaxed mb-4">
          Dravix operates <strong className="font-medium text-gray-700">upstream of physical fire testing</strong>. It is used during material exploration, early design, and formulation iteration — before lab scheduling, prototype construction, or certification workflows.
        </p>
        <p className="text-gray-600 leading-relaxed">
          This positioning makes adoption low-risk and compatible with existing engineering pipelines.
        </p>
        <FigureImage
          src="/images/Df0E06v.png"
          caption="Dravix positioned upstream in the material development workflow as an early-stage screening layer before physical testing."
          figureNumber={18}
          title="Dravix Placement Within the Materials Development Workflow"
        />
      </Section>

      <Section title="Target Users (Early Adopters)">
        <p className="text-gray-600 leading-relaxed mb-6">
          Dravix is designed for organizations that repeatedly evaluate materials under fire-safety constraints.
        </p>
        <div className="space-y-4">
          {[
            {
              title: 'Materials Manufacturers',
              desc: 'Developing insulation, coatings, composites, and fire-resistant building materials.',
            },
            {
              title: 'Aerospace & Defense',
              desc: 'Evaluating lightweight materials under strict flammability requirements.',
            },
            {
              title: 'Automotive & EV',
              desc: 'Addressing fire risk in battery systems, interiors, and polymers.',
            },
            {
              title: 'Research Labs & Universities',
              desc: 'Exploring novel materials with limited testing budgets.',
            },
            {
              title: 'Engineering & Design Firms',
              desc: 'Making early-stage material decisions in infrastructure and construction projects.',
            },
          ].map((item, i) => (
            <div key={i} className="border border-gray-200 rounded-2xl p-6">
              <h3 className="text-sm font-medium text-[#762123] mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Economic Value">
        <p className="text-gray-600 leading-relaxed mb-6">
          Dravix delivers value by reducing unnecessary testing and iteration.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {[
            { label: 'Full-scale fire test (ASTM E119)', value: '$10k–$20k+', note: 'per test' },
            { label: 'Dravix annual subscription', value: '$5k–$15k', note: 'per year' },
            { label: 'Breakeven', value: '1 test', note: 'avoided test offsets full year' },
          ].map((stat, i) => (
            <div key={i} className="bg-[#F8F8F8] border border-gray-200 rounded-2xl p-5">
              <div className="text-xs text-gray-400 mb-2 leading-relaxed">{stat.label}</div>
              <div className="text-2xl font-light text-[#762123] mb-1">{stat.value}</div>
              <div className="text-xs text-gray-500">{stat.note}</div>
            </div>
          ))}
        </div>
        <p className="text-gray-600 leading-relaxed mb-4">
          Avoiding even a single failed test offsets the cost of the platform for an entire year. Beyond cost savings, Dravix reduces development time, redesign cycles, and engineering overhead.
        </p>
        <FigureImage
          src="/images/gOERHRi.png"
          caption="Comparison of fire testing costs versus Dravix, showing breakeven at a single avoided test."
          figureNumber={19}
          title="Cost Comparison Between Physical Testing and Dravix"
        />
      </Section>

      <Section title="Market Opportunity">
        <p className="text-gray-600 leading-relaxed mb-6">
          Dravix targets organizations with active materials R&D pipelines, in markets driven by high-consequence failure, expensive testing requirements, and pressure to iterate faster.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {[
            { label: 'Organizations globally', value: '~19,000', note: 'materials R&D' },
            { label: 'Total Addressable Market', value: '~$190M', note: 'TAM' },
            { label: 'Initial capture target', value: '~$4M', note: '4% of SAM (~$102M)' },
          ].map((stat, i) => (
            <div key={i} className="bg-[#F8F8F8] border border-gray-200 rounded-2xl p-5 text-center">
              <div className="text-xs text-gray-400 mb-2">{stat.label}</div>
              <div className="text-2xl font-light text-[#762123] mb-1">{stat.value}</div>
              <div className="text-xs text-gray-500">{stat.note}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Competitive Landscape">
        <p className="text-gray-600 leading-relaxed mb-6">
          Existing tools fall into three categories, each with a distinct gap:
        </p>
        <div className="space-y-3 mb-6">
          {[
            { tool: 'Materials databases (e.g., MatWeb)', gap: 'Provide descriptors — do not generate decisions.' },
            { tool: 'Physics-based simulation (e.g., ANSYS)', gap: 'High fidelity, but require detailed inputs not available early in development. Not scalable for exploration.' },
            { tool: 'Experimental testing', gap: 'Accurate but expensive, slow, and not scalable for early-stage candidate evaluation.' },
          ].map((item, i) => (
            <div key={i} className="flex gap-4 border border-gray-200 rounded-xl px-5 py-4">
              <div className="text-sm font-medium text-[#762123] w-56 flex-shrink-0">{item.tool}</div>
              <div className="text-sm text-gray-500 leading-relaxed">{item.gap}</div>
            </div>
          ))}
        </div>
        <div className="bg-[#762123]/5 border border-[#762123]/20 rounded-2xl p-6">
          <div className="text-xs font-medium text-[#762123] uppercase tracking-wide mb-3">Dravix Differentiation</div>
          <p className="text-sm text-gray-600 leading-relaxed">
            Dravix introduces a missing layer: descriptor-driven screening that converts fragmented material data into a unified decision signal. It enables rapid comparison of untested materials, ranking and prioritization, and integration with existing workflows — earlier, faster, and with lower input requirements than existing tools.
          </p>
        </div>
      </Section>

      <Section title="Long-Term Impact">
        <p className="text-gray-600 leading-relaxed mb-4">
          Fire resistance is the entry point. The underlying system architecture can expand to thermal performance, mechanical properties, and sustainability metrics.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          Because materials underpin every engineered system, early-stage screening has the potential to impact:
        </p>
        <ul className="space-y-2 mb-6">
          {[
            'Construction safety',
            'Transportation systems',
            'Energy infrastructure',
            'Advanced manufacturing',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8967F] mt-2 flex-shrink-0" />
              <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-gray-600 leading-relaxed">
          By shifting decision-making earlier, Dravix enables faster, safer, and more efficient material development at scale.
        </p>
        <FigureImage
          src="/images/JNrC0zw.png"
          caption="Expansion of screening architecture from fire resistance to broader material property domains."
          figureNumber={20}
          title="Screening Architecture Expansion Map"
        />
      </Section>

      <section>
        <h2 className="text-2xl font-light text-[#762123] mb-6 pb-4 border-b border-gray-100">Impact & Market Summary</h2>
        <div className="grid grid-cols-1 gap-3">
          {[
            'Fire testing workflows concentrate cost and risk late in development',
            'Dravix enables early-stage prioritization using CFRS screening',
            'Organizations reduce unnecessary testing and iteration cycles',
            'One avoided test offsets platform cost',
            'The system scales across industries and expands beyond fire resistance',
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
