import PageLayout from '../shared/PageLayout';
import Section from '../shared/Section';
import FigureImage from '../shared/FigureImage';

export default function ValidationPage() {
  return (
    <PageLayout
      eyebrow="Empirical Analysis"
      title="Validation"
      subtitle="Empirical observations from applying Dravix to a structured experimental materials dataset."
    >
      <Section title="Validation Overview">
        <p className="text-gray-600 leading-relaxed">
          This page presents empirical observations from applying Dravix to a structured experimental materials dataset. Validation focuses on output behavior, alignment with known fire-related indicators, and stability across material classes.
        </p>
        <p className="text-gray-600 leading-relaxed">
          It does <strong className="font-medium text-gray-700">not</strong> assess certification equivalence or absolute fire performance. The objective is to determine whether the screening signal behaves consistently with known fire dynamics and whether uncertainty is represented appropriately for early-stage material prioritization.
        </p>
        <p className="text-gray-600 leading-relaxed">
          The goal is not to prove exact prediction accuracy, but to verify that screening behavior aligns with real fire dynamics.
        </p>
      </Section>

      <Section title="Evaluation Dataset">
        <p className="text-gray-600 leading-relaxed">
          Validation was conducted using a fixed dataset of <strong className="font-medium text-gray-700">718 material samples</strong> spanning polymers, composites, and generic materials. Each material is represented by approximately <strong className="font-medium text-gray-700">95 structured descriptors</strong>, including thermophysical properties, ignition indicators, and combustion-relevant features.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
          {[
            { value: '718', label: 'Material Samples' },
            { value: '~95', label: 'Features per Sample' },
            { value: '3', label: 'Material Classes' },
          ].map((stat, i) => (
            <div key={i} className="bg-[#F8F8F8] border border-gray-200 rounded-2xl p-6 text-center">
              <div className="text-3xl font-light text-[#762123] mb-2">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
        <p className="text-gray-600 leading-relaxed">
          Dataset values are derived from experimental measurements and literature sources and remain fixed throughout evaluation to ensure reproducibility.
        </p>
        <div className="mt-4 bg-[#F8F8F8] border border-gray-200 rounded-xl px-5 py-4">
          <p className="text-sm text-gray-500 leading-relaxed">
            <strong className="text-gray-600">Note:</strong> This validation dataset is a controlled subset used for evaluation. The full Dravix runtime system operates on a broader dataset (~1780 materials) used for screening, search, and analysis workflows.
          </p>
        </div>
      </Section>

      <Section title="Observed Output Behavior">
        <p className="text-gray-600 leading-relaxed mb-4">
          Across the evaluation set, Dravix produces a <strong className="font-medium text-gray-700">continuous relative fire-risk screening signal</strong> suitable for ranking and comparison. Key observations:
        </p>
        <ul className="space-y-2 mb-4">
          {[
            'Materials with similar fire-relevant characteristics cluster closely',
            'Distinct materials separate consistently in score space',
            'Rankings remain stable under repeated evaluation',
            'Small changes in non-dominant features produce limited impact',
            'Changes in ignition-relevant descriptors produce meaningful shifts',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8967F] mt-2 flex-shrink-0" />
              <span className="text-gray-600 leading-relaxed text-sm">{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-sm text-gray-500">This behavior is consistent with expectations for an early-stage screening system.</p>
      </Section>

      <Section title="Alignment with Fire Indicators">
        <p className="text-gray-600 leading-relaxed mb-4">
          The screening signal demonstrates consistent directional alignment with known fire-related behavior:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-[#F8F8F8] border border-gray-200 rounded-2xl p-5">
            <div className="text-xs font-medium text-[#762123] uppercase tracking-wide mb-2">External Heat Flux</div>
            <p className="text-sm text-gray-600">Fire-risk proxy <strong className="text-gray-700">increases</strong> with external heat flux</p>
          </div>
          <div className="bg-[#F8F8F8] border border-gray-200 rounded-2xl p-5">
            <div className="text-xs font-medium text-[#762123] uppercase tracking-wide mb-2">Time to Ignition</div>
            <p className="text-sm text-gray-600">Fire-risk proxy <strong className="text-gray-700">decreases</strong> with time to ignition</p>
          </div>
        </div>
        <p className="text-gray-600 leading-relaxed">
          These relationships match established fire testing observations. The system does not attempt to reproduce physical test outputs; instead, it reflects <strong className="font-medium text-gray-700">relative trends consistent with ignition behavior</strong>, supporting its use for early-stage material prioritization.
        </p>
        <FigureImage
          src="/images/WvZmhmX.png"
          caption="Observed alignment between Dravix screening outputs and ignition-related indicators, demonstrating consistent directional trends."
          figureNumber={13}
          title="Validation trends between Dravix fire-risk proxy and ignition-related indicators"
        />
      </Section>

      <Section title="Material Class Behavior and Variance">
        <p className="text-gray-600 leading-relaxed mb-4">
          Screening behavior varies across material classes:
        </p>
        <ul className="space-y-2 mb-4">
          {[
            { label: 'Composites and generic materials', desc: 'show tighter score distributions' },
            { label: 'Polymers', desc: 'exhibit higher variance' },
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 border border-gray-200 rounded-xl px-5 py-4">
              <span className="text-[#762123] text-sm flex-shrink-0 font-medium">{item.label}:</span>
              <span className="text-gray-600 text-sm leading-relaxed">{item.desc}</span>
            </li>
          ))}
        </ul>
        <p className="text-gray-600 leading-relaxed">
          This reflects known differences in material complexity and fire-response behavior. Importantly, variance is <strong className="font-medium text-gray-700">preserved and surfaced</strong>, not suppressed. Materials with higher uncertainty are explicitly flagged, supporting responsible interpretation in heterogeneous material spaces.
        </p>
        <FigureImage
          src="/images/Wr9soGh.png"
          caption="Distribution of screening scores across material classes, showing variance differences between polymers, composites, and generic materials."
          figureNumber={14}
          title="Distribution of Dravix screening scores by material class"
        />
      </Section>

      <Section title="Example Relative Screening Output">
        <p className="text-gray-600 leading-relaxed mb-4">
          Dravix enables direct comparison of candidate materials within the same class. Outputs provide:
        </p>
        <ul className="space-y-2 mb-4">
          {['Relative ranking', 'Comparative positioning', 'Prioritization signals'].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-[#762123] mt-0.5 flex-shrink-0">→</span>
              <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-sm text-gray-500">These rankings are intended to guide <strong className="text-gray-600">testing order</strong>, not determine safety or compliance.</p>
        <FigureImage
          src="/images/q5JPEi7.png"
          caption="Example ranking of candidate materials within a single class, illustrating relative screening and prioritization behavior."
          figureNumber={15}
          title="Relative screening score ranking within a single material class"
        />
      </Section>

      <Section title="Stability and Reproducibility">
        <p className="text-gray-600 leading-relaxed">
          Dravix operates as a <strong className="font-medium text-gray-700">deterministic inference system</strong>. Identical inputs produce identical outputs. The model is fixed at runtime and no retraining occurs during operation. Repeated inference confirms stable and reproducible screening behavior.
        </p>
        <p className="text-gray-600 leading-relaxed">
          This ensures that observed results reflect system behavior rather than stochastic variation or model drift.
        </p>
        <FigureImage
          src="/images/eFieGjo.png"
          caption="Reproducibility of screening outputs under identical inputs, confirming deterministic system behavior."
          figureNumber={16}
          title="Deterministic inference reproducibility under identical inputs"
        />
      </Section>

      <Section title="Limits of Interpretation">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-[#F8F8F8] border border-gray-200 rounded-2xl p-5">
            <div className="text-xs font-medium text-[#762123] uppercase tracking-wide mb-3">Validation supports</div>
            <ul className="space-y-1.5">
              {['Trend alignment', 'Ranking behavior', 'Screening reliability'].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-[#762123]">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-5">
            <div className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-3">Validation does not establish</div>
            <ul className="space-y-1.5">
              {['Absolute fire performance', 'Regulatory compliance', 'Certification equivalence'].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-gray-500">
                  <span className="text-gray-300">✗</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="text-gray-600 leading-relaxed">
          Physical fire testing remains necessary for definitive evaluation.
        </p>
        <div className="mt-4 bg-[#F8F8F8] border border-gray-200 rounded-xl px-5 py-4">
          <p className="text-sm font-medium text-[#762123]">Dravix informs which materials should be tested — not whether they pass.</p>
        </div>
      </Section>

      <section>
        <h2 className="text-2xl font-light text-[#762123] mb-6 pb-4 border-b border-gray-100">Validation Summary</h2>
        <div className="grid grid-cols-1 gap-3">
          {[
            'Screening outputs demonstrate stable, interpretable ranking behavior',
            'Directional alignment with known fire indicators is observed',
            'Material classes exhibit distinct variance characteristics',
            'Uncertainty is explicitly surfaced rather than hidden',
            'Results support early-stage prioritization rather than certification',
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
