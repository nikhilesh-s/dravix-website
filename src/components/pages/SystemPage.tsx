import PageLayout from '../shared/PageLayout';
import Section from '../shared/Section';
import FigureImage from '../shared/FigureImage';

export default function SystemPage() {
  return (
    <PageLayout
      eyebrow="Architecture"
      title="System"
      subtitle="A modular decision-support system designed to integrate into existing materials engineering workflows."
    >
      <Section title="System Overview">
        <p className="text-gray-600 leading-relaxed">
          Dravix is a modular decision-support system designed to integrate into existing materials engineering workflows. The system ingests structured material property data, validates and transforms those inputs into model-ready features, and evaluates each material using a centralized inference engine.
        </p>
        <p className="text-gray-600 leading-relaxed">
          The output is not just a score, but a <strong className="font-medium text-gray-700">structured decision signal</strong> — including relative fire-risk ranking, interpretability drivers, confidence indicators, and downstream analysis pathways — enabling engineers to determine what to test first.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Dravix is designed to answer a single question: <strong className="font-medium text-gray-700">what should be tested first?</strong>
        </p>
      </Section>

      <Section title="Current System Architecture (v0.3.2 — Phase 3 System)">
        <p className="text-gray-600 leading-relaxed">
          Dravix v0.3.2 operates as a deployed, end-to-end materials intelligence system. Material inputs are validated, normalized, and processed through a deterministic inference pipeline supported by a governed dataset layer. The system extends beyond single prediction to support ranking, simulation, optimization, dataset exploration, and AI-assisted interpretation within a unified workflow.
        </p>
        <p className="text-gray-600 leading-relaxed">The platform is designed for <strong className="font-medium text-gray-700">reproducibility, transparency, and controlled behavior</strong>:</p>
        <ul className="space-y-2 mt-2">
          {[
            'Inputs are validated, not auto-corrected',
            'The model is fixed at runtime',
            'Identical inputs produce identical outputs',
            'No autonomous retraining or adaptive decision logic is performed',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8967F] mt-2 flex-shrink-0" />
              <span className="text-gray-600 leading-relaxed text-sm">{item}</span>
            </li>
          ))}
        </ul>
        <FigureImage
          src="/images/2XbwHtZ.jpeg"
          caption="Dravix v0.3.2 system architecture showing deterministic inference, feature engineering, governed dataset layer, and AI-assisted interpretation workflows that produce decision-ready outputs for material prioritization."
          figureNumber={7}
          title="Dravix v0.3.2 System Architecture"
        />
      </Section>

      <Section title="Deterministic Inference Pipeline">
        <p className="text-gray-600 leading-relaxed">
          Material descriptors are transformed into a fixed feature representation combining thermophysical properties, ignition indicators, and engineered fire-relevant descriptors. These features are evaluated by a centralized inference engine exposed through a lightweight API.
        </p>
        <p className="text-gray-600 leading-relaxed mt-4">The pipeline follows a structured flow:</p>
        <div className="mt-4 mb-6">
          {[
            'Material Input',
            'Validation',
            'Feature Engineering',
            'Model Inference',
            'Confidence Estimation',
            'Interpretability Generation',
            'Structured Output',
          ].map((step, i, arr) => (
            <div key={i} className="flex flex-col items-start">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#762123]/10 border border-[#762123]/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-medium text-[#762123]">{i + 1}</span>
                </div>
                <span className="text-sm text-gray-600">{step}</span>
              </div>
              {i < arr.length - 1 && (
                <div className="ml-3 w-px h-4 bg-gray-200" />
              )}
            </div>
          ))}
        </div>
        <p className="text-gray-600 leading-relaxed">
          This deterministic design ensures that Dravix behaves as a <strong className="font-medium text-gray-700">stable engineering system rather than an adaptive black-box model</strong>, preserving reproducibility in safety-adjacent workflows.
        </p>
        <FigureImage
          src="/images/ZoPe7pf.png"
          caption="Deterministic inference pipeline transforming validated material inputs into structured, reproducible screening outputs."
          figureNumber={8}
          title="Deterministic Machine Learning Inference Pipeline"
        />
      </Section>

      <Section title="Control Logic and Interpretability">
        <p className="text-gray-600 leading-relaxed">
          Control logic is explicitly embedded into the system design rather than delegated to automated decision layers. Prediction confidence is evaluated using stability and variance analysis across material classes. Uncertainty influences how outputs are presented to users rather than modifying the underlying prediction.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Control logic regulates <strong className="font-medium text-gray-700">how results are interpreted, not how predictions are generated</strong>. Materials with higher variance are flagged for careful interpretation rather than re-ranked or suppressed.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Interpretability mechanisms expose feature contributions to the final screening signal, allowing users to understand why materials rank higher or lower relative to others. This aligns with real engineering workflows where decisions must be <strong className="font-medium text-gray-700">understood, not just computed</strong>.
        </p>
      </Section>

      <Section title="Dravix ML (Core Process)">
        <p className="text-gray-600 leading-relaxed">
          At the core of Dravix is a deterministic inference engine powered by a tree-based machine learning model trained on fire-relevant material data. Each material is represented as a vector of structured descriptors, including thermophysical properties, ignition-related indicators, and combustion-relevant features.
        </p>
        <p className="text-gray-600 leading-relaxed">
          The model learns non-linear relationships between these descriptors and fire-related behavior trends. Rather than predicting absolute fire performance, the system outputs a <strong className="font-medium text-gray-700">relative fire-risk proxy</strong> designed for comparison and prioritization across candidate materials.
        </p>
        <p className="text-gray-600 leading-relaxed">
          The model is one component of a larger system that includes dataset grounding, interpretability, simulation workflows, ranking and comparison tools, and AI-assisted interpretation. Tree-based modeling was selected to balance predictive capacity with interpretability, enabling engineers to trace how material properties influence screening outcomes.
        </p>
        <FigureImage
          src="/images/dJWyual.png"
          caption="Material features are evaluated by multiple decision trees; aggregated output forms a stable comparative fire-risk proxy."
          figureNumber={10}
          title="Conceptual Ensemble Learning Diagram for Relative Fire-Risk Screening"
        />
      </Section>

      <Section title="System Capabilities (What Exists Today)">
        <p className="text-gray-600 leading-relaxed mb-6">
          Dravix v0.3.2 supports a full decision workflow:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            'Single-material prediction from dataset or custom inputs',
            'Multi-material ranking and candidate prioritization',
            'Material comparison across use cases',
            'Sensitivity simulation and response analysis',
            'Optimization and design exploration',
            'Coating-adjusted analysis',
            'Dataset search and material exploration',
            'AI-assisted advisor for interpretation and guidance',
            'Persistent analysis history and reproducibility',
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-2.5 bg-[#F8F8F8] border border-gray-200 rounded-xl px-4 py-3">
              <span className="text-[#762123] text-sm mt-0.5 flex-shrink-0">✓</span>
              <span className="text-sm text-gray-600 leading-relaxed">{item}</span>
            </div>
          ))}
        </div>
        <p className="text-gray-500 text-sm leading-relaxed mt-6">
          The system functions as an <strong className="font-medium text-gray-600">integrated materials intelligence platform</strong>, not just a prediction tool.
        </p>
      </Section>

      <Section title="What Comes Next">
        <p className="text-gray-600 leading-relaxed mb-4">
          Future development builds directly on the existing system architecture:
        </p>
        <ul className="space-y-2 mb-6">
          {[
            'Expanded datasets with broader material coverage',
            'Improved uncertainty and out-of-domain handling',
            'Enhanced interpretability and reporting workflows',
            'Deployment into real engineering environments',
            'Extension to additional material property domains beyond fire resistance',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-gray-500">
              <span className="text-[#E8967F] mt-0.5 flex-shrink-0">→</span>
              {item}
            </li>
          ))}
        </ul>
        <p className="text-gray-600 leading-relaxed">
          No fundamental redesign is required; the current system is a stable foundation for expansion.
        </p>
        <FigureImage
          src="/images/JuEAwJh.png"
          caption="System evolution from fire-risk screening to multi-property materials intelligence built on the same core architecture."
          figureNumber={12}
          title="Dravix System Evolution Roadmap"
        />
      </Section>

      <Section title="System Boundaries">
        <div className="bg-[#F8F8F8] border border-gray-200 rounded-2xl p-6">
          <p className="text-gray-600 leading-relaxed mb-4">
            Dravix does not perform real-time sensing, autonomous decision-making, or adaptive control. It does not certify materials or replace standardized fire testing.
          </p>
          <p className="text-gray-600 leading-relaxed">
            By clearly defining scope and boundaries, the system remains aligned with existing engineering standards while providing earlier insight where current workflows lack visibility.
          </p>
          <p className="text-sm font-medium text-[#762123] mt-6 border-t border-gray-200 pt-4">
            Dravix informs early-stage decisions; it does not make final ones.
          </p>
        </div>
      </Section>
    </PageLayout>
  );
}
