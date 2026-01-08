import { useState } from 'react';

type Tab = 'dravix' | 'system' | 'validation' | 'market' | 'brand' | 'roadmap' | 'team' | 'references';

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('dravix');

  const handleNavigateToTab = (tab: Tab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f4f6f7]">
      {/* Navigation */}
      <nav className="sticky top-0 bg-[#f4f6f7] border-b border-[#a9b1b7]/20 z-10">
        <div className="max-w-6xl mx-auto px-6 sm:px-12">
          <div className="flex gap-8 items-center flex-wrap">
            <img
              src="/dravix_brand_(1).svg"
              alt="Dravix"
              className="h-[100px] flex-shrink-0"
              style={{ transform: 'scale(2.5)', transformOrigin: 'left center', marginRight: '150px' }}
            />
            <NavTab active={activeTab === 'dravix'} onClick={() => setActiveTab('dravix')}>
              Dravix
            </NavTab>
            <NavTab active={activeTab === 'system'} onClick={() => setActiveTab('system')}>
              System
            </NavTab>
            <NavTab active={activeTab === 'validation'} onClick={() => setActiveTab('validation')}>
              Validation
            </NavTab>
            <NavTab active={activeTab === 'market'} onClick={() => setActiveTab('market')}>
              Impact & Market
            </NavTab>
            <NavTab active={activeTab === 'brand'} onClick={() => setActiveTab('brand')}>
              Brand
            </NavTab>
            <NavTab active={activeTab === 'roadmap'} onClick={() => setActiveTab('roadmap')}>
              Roadmap
            </NavTab>
            <NavTab active={activeTab === 'team'} onClick={() => setActiveTab('team')}>
              Team
            </NavTab>
            <NavTab active={activeTab === 'references'} onClick={() => setActiveTab('references')}>
              References
            </NavTab>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 sm:px-12 py-16 sm:py-24">

        {activeTab === 'dravix' && <DravixTab onNavigate={handleNavigateToTab} />}
        {activeTab === 'system' && <SystemTab />}
        {activeTab === 'validation' && <ValidationTab />}
        {activeTab === 'market' && <MarketTab />}
        {activeTab === 'brand' && <BrandTab />}
        {activeTab === 'roadmap' && <RoadmapTab />}
        {activeTab === 'team' && <TeamTab />}
        {activeTab === 'references' && <ReferencesTab />}

      </div>
    </div>
  );
}

interface NavTabProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

function NavTab({ active, onClick, children }: NavTabProps) {
  return (
    <button
      onClick={onClick}
      className={`py-4 text-sm whitespace-nowrap transition-colors ${
        active
          ? 'text-[#5c6770] font-medium border-b-2 border-[#e26a2c]'
          : 'text-[#a9b1b7] hover:text-[#5c6770]'
      }`}
      style={{ fontFamily: 'Antic, sans-serif' }}
    >
      {children}
    </button>
  );
}

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

function Section({ title, children }: SectionProps) {
  return (
    <section className="mb-24">
      <div className="border-l border-[#e26a2c] pl-8 mb-8">
        <h2
          className="text-sm uppercase tracking-widest text-[#a9b1b7]"
          style={{ fontFamily: 'Antic, sans-serif' }}
        >
          {title}
        </h2>
      </div>
      <div className="text-[#5c6770]">
        {children}
      </div>
    </section>
  );
}

function ImagePlaceholder({ caption, figureNumber, imageUrl, captionText }: { caption: string; figureNumber?: number; imageUrl?: string; captionText?: string }) {
  return (
    <div className="my-12">
      {figureNumber && (
        <p className="text-[#5c6770] text-sm font-medium mb-2" style={{ fontFamily: 'Antic, sans-serif' }}>
          Figure {figureNumber}. {caption}
        </p>
      )}
      <div className="bg-[#a9b1b7]/10 border border-[#a9b1b7]/20 rounded-sm aspect-video flex items-center justify-center overflow-hidden">
        {imageUrl ? (
          <img src={imageUrl} alt={caption} className="w-full h-full object-contain" />
        ) : (
          <p className="text-[#a9b1b7] text-sm text-center px-4" style={{ fontFamily: 'Antic, sans-serif' }}>
            {figureNumber && `Figure ${figureNumber}. `}{caption}
          </p>
        )}
      </div>
      <p className="text-[#a9b1b7] text-xs mt-2 italic" style={{ fontFamily: 'Antic, sans-serif' }}>
        {captionText || 'CAPTION NEEDED'}
      </p>
    </div>
  );
}

function ImagePlaceholderDouble({ caption1, caption2, figureNumber1, figureNumber2, imageUrl1, imageUrl2, captionText1, captionText2 }: {
  caption1: string;
  caption2: string;
  figureNumber1?: number;
  figureNumber2?: number;
  imageUrl1?: string;
  imageUrl2?: string;
  captionText1?: string;
  captionText2?: string;
}) {
  return (
    <div className="my-12 grid grid-cols-2 gap-4">
      <div>
        {figureNumber1 && (
          <p className="text-[#5c6770] text-sm font-medium mb-2" style={{ fontFamily: 'Antic, sans-serif' }}>
            Figure {figureNumber1}. {caption1}
          </p>
        )}
        <div className="bg-[#a9b1b7]/10 border border-[#a9b1b7]/20 rounded-sm aspect-video flex items-center justify-center overflow-hidden">
          {imageUrl1 ? (
            <img src={imageUrl1} alt={caption1} className="w-full h-full object-contain" />
          ) : (
            <p className="text-[#a9b1b7] text-sm text-center px-4" style={{ fontFamily: 'Antic, sans-serif' }}>
              {figureNumber1 && `Figure ${figureNumber1}. `}{caption1}
            </p>
          )}
        </div>
        <p className="text-[#a9b1b7] text-xs mt-2 italic" style={{ fontFamily: 'Antic, sans-serif' }}>
          {captionText1 || 'CAPTION NEEDED'}
        </p>
      </div>
      <div>
        {figureNumber2 && (
          <p className="text-[#5c6770] text-sm font-medium mb-2" style={{ fontFamily: 'Antic, sans-serif' }}>
            Figure {figureNumber2}. {caption2}
          </p>
        )}
        <div className="bg-[#a9b1b7]/10 border border-[#a9b1b7]/20 rounded-sm aspect-video flex items-center justify-center overflow-hidden">
          {imageUrl2 ? (
            <img src={imageUrl2} alt={caption2} className="w-full h-full object-contain" />
          ) : (
            <p className="text-[#a9b1b7] text-sm text-center px-4" style={{ fontFamily: 'Antic, sans-serif' }}>
              {figureNumber2 && `Figure ${figureNumber2}. `}{caption2}
            </p>
          )}
        </div>
        <p className="text-[#a9b1b7] text-xs mt-2 italic" style={{ fontFamily: 'Antic, sans-serif' }}>
          {captionText2 || 'CAPTION NEEDED'}
        </p>
      </div>
    </div>
  );
}

function DravixTab({ onNavigate }: { onNavigate: (tab: Tab) => void }) {
  return (
    <>
      <section className="mb-32">
        <h1
          className="text-6xl sm:text-7xl mb-3 text-[#5c6770]"
          style={{ fontFamily: 'Questrial, sans-serif' }}
        >
          Dravix
        </h1>
        <div className="mb-4">
          <span
            className="text-base text-[#a9b1b7] mr-3"
            style={{ fontFamily: 'Antic, sans-serif' }}
          >
            noun
          </span>
          <span
            className="text-base text-[#a9b1b7]"
            style={{ fontFamily: 'Antic, sans-serif' }}
          >
            /ˈdraːvɪks/
          </span>
        </div>
        <p className="text-xl sm:text-2xl leading-relaxed text-[#5c6770] max-w-3xl mb-8">
          An early-stage materials fire-risk screening and prioritization engine.
        </p>
        <p className="text-lg leading-loose text-[#5c6770] max-w-3xl mb-8">
          Dravix introduces predictive fire-risk insight upstream in the material development lifecycle; enabling engineers to compare, prioritize, and eliminate candidate materials before committing to costly physical fire testing.
        </p>
        <div className="flex gap-4">
          <a
            href="https://mfr-material-risk-engine.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 px-6 bg-white border border-[#5c6770] text-[#5c6770] hover:bg-[#f4f6f7] transition-colors text-center"
            style={{ fontFamily: 'Antic, sans-serif' }}
          >
            Try Demo
          </a>
          <button
            onClick={() => onNavigate('system')}
            className="flex-1 py-3 px-6 bg-white border border-[#5c6770] text-[#5c6770] hover:bg-[#f4f6f7] transition-colors"
            style={{ fontFamily: 'Antic, sans-serif' }}
          >
            Explore System
          </button>
        </div>
      </section>

      <Section title="The Problem">
        <div className="space-y-6 text-lg leading-loose">
          <p>
            Fire resistance testing is slow, expensive, and typically performed late in the material development process. Engineers are required to commit significant time and resources to physical fire testing before having clarity on which candidate materials are even worth evaluating.
          </p>
          <p>
            Because current workflows emphasize validation after design decisions are already locked in, material selection is frequently driven by incomplete information; leading to over-testing, delayed iteration, or missed opportunities for safer and more effective materials. In safety-critical industries such as construction, aerospace, automotive, and energy infrastructure, these inefficiencies compound across development cycles and budgets.
          </p>
        </div>
        <ImagePlaceholder
          caption="Fire Resistance Testing Occurs Late in the Material Development Timeline"
          figureNumber={1}
          imageUrl="https://i.imgur.com/Dc31GKW.png"
          captionText="Fire resistance testing is typically conducted late in the material development timeline, after substantial design, manufacturing, and cost decisions have already been committed."
        />
      </Section>

      <Section title="What Dravix Changes">
        <div className="space-y-6 text-lg leading-loose">
          <p>
            Dravix shifts fire-risk insight earlier in the workflow by introducing predictive screening before physical testing begins.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Screens large material search spaces using structured material properties</li>
            <li>Produces a relative fire-risk proxy rather than binary pass/fail judgments</li>
            <li>Enables prioritization and elimination of candidates early in development</li>
            <li>Reduces uncertainty without replacing standardized testing or certification</li>
          </ul>
          <p>
            This approach allows engineers to focus physical testing resources where they matter most.
          </p>
        </div>
        <ImagePlaceholder
          caption="Fire Testing Workflows Before and After Early-Stage Predictive Screening"
          figureNumber={2}
          imageUrl="https://i.imgur.com/qL2BwLW.png"
          captionText="Introducing predictive screening prior to physical fire testing shifts material prioritization earlier in the development workflow, reducing late-stage failures and enabling more efficient allocation of testing resources."
        />
      </Section>

      <Section title="The System">
        <div className="space-y-6 text-lg leading-loose">
          <p>
            Dravix operates as an interpretable decision-support system designed for early-stage material evaluation. Structured material descriptors are validated and transformed into model-ready features; these features are evaluated by a tree-based machine learning model trained on experimentally derived fire-related data.
          </p>
          <p>
            The system produces a relative fire-risk screening signal accompanied by interpretability and confidence indicators; outputs are explicitly framed to support early prioritization rather than definitive safety judgments. Dravix is engineered to integrate cleanly into existing workflows without disrupting regulatory or certification pathways.
          </p>
        </div>
        <ImagePlaceholder
          caption="Dravix V0.2 System Diagram"
          figureNumber={3}
          imageUrl="https://i.imgur.com/WKx9OrD.png"
          captionText="Dravix v0.2 processes validated material descriptors through an interpretable inference pipeline to generate a relative fire-risk screening signal with explicit uncertainty handling."
        />
      </Section>

      <Section title="Proof of Reality: Current Status">
        <div className="space-y-6 text-lg leading-loose">
          <p>
            Dravix V0 is a Phase-2 engineering prototype operating end-to-end with live model inference.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Dataset: 718 material samples across polymers, composites, and generic materials</li>
            <li>Feature space: ~95 raw and engineered material descriptors</li>
            <li>Model: tree-based machine learning architecture</li>
            <li>Deployment: real-time inference via lightweight local API</li>
          </ul>
          <p>
            Validation analysis confirms that the proxy fire-risk signal aligns with established ignition-related indicators reported in fire testing literature. The output demonstrates strong positive correlation with external heat flux and moderate negative correlation with time to ignition; uncertainty is explicitly surfaced rather than suppressed to preserve interpretability and responsible use.
          </p>
        </div>
        <ImagePlaceholderDouble
          caption1="Interpretability and Confidence Output Example"
          caption2="Live Inference Execution via Deployed API"
          figureNumber1={4}
          figureNumber2={5}
          imageUrl1="https://i.imgur.com/4AbAiPa.png"
          imageUrl2="https://i.imgur.com/5zmEt4Y.png"
          captionText1="Example of Dravix's interpretability output, displaying a relative fire-risk screening score alongside confidence indicators, comparable material references, and a plain-language explanation intended to support responsible early-stage material prioritization rather than certification."
          captionText2="Live inference request and response captured from the deployed Dravix API during evaluation, demonstrating real-time model execution and structured output generation in an operational environment."
        />
      </Section>

      <Section title="What Dravix Is Not">
        <div className="space-y-6 text-lg leading-loose">
          <p>Dravix does not:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>replace standardized fire testing</li>
            <li>certify materials or ensure regulatory compliance</li>
            <li>provide absolute fire safety guarantees</li>
          </ul>
          <p>
            Instead, it augments existing engineering workflows by reducing uncertainty earlier in the development process; supporting better decisions before physical testing begins.
          </p>
        </div>
      </Section>

      <Section title="Vision">
        <div className="space-y-6 text-lg leading-loose">
          <p>
            By introducing fire-risk screening upstream, Dravix enables faster iteration, more efficient allocation of testing resources, and improved safety decision-making without undermining established standards.
          </p>
          <p>
            In the long term, the same system architecture may be extended beyond fire resistance to support early screening for additional material properties; including thermal behavior, mechanical performance, and sustainability-related metrics. Because materials underpin nearly every engineered product, this approach has the potential to scale across domains where early insight can reduce cost, accelerate innovation, and improve safety outcomes.
          </p>
        </div>
        <ImagePlaceholder
          caption="Conceptual Expansion of Predictive Materials Screening Domains"
          figureNumber={6}
          imageUrl="https://i.imgur.com/JNrC0zw.png"
          captionText="Fire resistance serves as the initial screening domain for Dravix, with the underlying system architecture designed to support future extension to additional material properties, including thermal behavior, mechanical performance, and sustainability metrics, following domain-specific validation."
        />
      </Section>

      <Section title="Team & Story">
        <div className="space-y-6 text-lg leading-loose">
          <p>
            Dravix is built by a team of engineers and developers shaped by firsthand exposure to fire-prone environments in California. Growing up amid evacuation warnings, damaged neighborhoods, and repeated wildfire seasons prompted a shared question: why are safer materials still so difficult and expensive to evaluate early?
          </p>
          <p>
            Our mission is to make material safety evaluation faster, smarter, and more responsible; not by replacing standards, but by strengthening the decisions made before testing begins.
          </p>
        </div>
        <button
          onClick={() => onNavigate('team')}
          className="w-full py-3 px-6 bg-white border border-[#5c6770] text-[#5c6770] hover:bg-[#f4f6f7] transition-colors mt-8"
          style={{ fontFamily: 'Antic, sans-serif' }}
        >
          Meet the Team
        </button>
      </Section>

      <footer className="mt-32 pt-12 border-t border-[#a9b1b7]/20">
        <p className="text-base text-[#5c6770] mb-2" style={{ fontFamily: 'Antic, sans-serif' }}>
          Explore how Dravix works in detail, review validation results, or view the development roadmap.
        </p>
        <p className="text-sm text-[#a9b1b7] mt-4" style={{ fontFamily: 'Antic, sans-serif' }}>
          Dravix: Materials fire-risk screening
        </p>
        <p className="text-sm text-[#a9b1b7]" style={{ fontFamily: 'Antic, sans-serif' }}>
          Product and Website designed by Nikhilesh Suravarjjala and Team.
        </p>
      </footer>
    </>
  );
}

function SystemTab() {
  return (
    <>
      <Section title="System Overview">
        <div className="space-y-6 text-lg leading-loose">
          <p>
            Dravix is a modular decision-support system designed to integrate into existing materials engineering workflows. The system ingests structured material property data, validates and transforms those inputs into model-ready features, and evaluates each material using a centralized fire-risk inference engine.
          </p>
          <p>
            The output is a relative fire-risk screening signal accompanied by interpretability and confidence indicators; results are intended to support early-stage material prioritization rather than certification or final safety judgment.
          </p>
        </div>
        <ImagePlaceholder
          caption="Dravix V0.2 System Diagram"
          figureNumber={7}
          imageUrl="https://i.imgur.com/WKx9OrD.png"
          captionText="High-level system flow illustrating how Dravix transforms structured material properties into an interpretable screening signal, enabling engineers to prioritize materials for testing rather than making pass–fail determinations."
        />
      </Section>

      <Section title="Current System Architecture (V0 Phase 2)">
        <div className="space-y-6 text-lg leading-loose">
          <p>
            This section describes how Dravix operates today as a deployed Phase-2 engineering prototype.
          </p>
          <p>
            Dravix V0 runs end-to-end with live inference. Material properties serve as the system input and are checked for completeness, type consistency, and scope validity before inference. Invalid or out-of-scope inputs are flagged rather than silently corrected.
          </p>
          <p>
            Validated inputs are transformed into a fixed feature representation that combines raw physical properties with engineered descriptors informed by fire testing literature. Feature vectors are evaluated by a centralized inference engine exposed through a single lightweight API endpoint.
          </p>
          <p>
            The endpoint returns structured, UI-ready outputs. The system does not perform autonomous retraining, closed-loop optimization, or real-time sensing; this design prioritizes reproducibility, transparency, and controlled behavior.
          </p>
        </div>
        <ImagePlaceholder
          caption="Deterministic Machine Learning Inference Pipeline"
          figureNumber={8}
          imageUrl="https://i.imgur.com/ZoPe7pf.png"
          captionText="Engineering-level view of the Dravix v0.2 deterministic inference pipeline, showing processing stages from input validation and feature engineering through fixed-parameter model inference, post-processing, and structured output generation. The architecture is designed to ensure reproducible behavior under identical inputs and operating conditions."
        />
      </Section>

      <Section title="Control Logic and Interpretability">
        <div className="space-y-6 text-lg leading-loose">
          <p>
            This section explains how Dravix handles uncertainty and avoids over-automation.
          </p>
          <p>
            Control logic is explicitly embedded into the system design rather than delegated to automated decision layers. Prediction confidence is evaluated using stability and variance analysis across material classes.
          </p>
          <p>
            Uncertainty influences how outputs are presented to users rather than modifying the underlying prediction; this prevents masking uncertainty or producing false confidence in borderline cases. Materials with higher variance are flagged for careful interpretation rather than re-ranked or suppressed.
          </p>
          <p>
            Interpretability mechanisms expose feature contributions to the final screening signal, allowing users to understand why materials are ranked higher or lower relative to others. This approach aligns with engineering decision-making norms and supports responsible use in safety-critical contexts.
          </p>
        </div>
        <ImagePlaceholder
          caption="Interpretability and Confidence Output Example II"
          figureNumber={9}
          imageUrl="https://i.imgur.com/X36Qs2D.png"
          captionText="Example output from the Dravix assessment interface showing a relative fire-risk screening result alongside confidence indicators, feature-based explanations, and explicit usage limitations, illustrating support for transparent early-stage decision-making."
        />
      </Section>

      <Section title="Dravix ML (Core Process)">
        <div className="space-y-6 text-lg leading-loose">
          <p>
            This section explains how the machine learning model produces a screening signal from material properties.
          </p>
          <p>
            At the core of Dravix is a tree-based machine learning model trained on experimentally derived fire-related data. Each material is represented as a vector of approximately 95 features, including raw physical measurements and engineered descriptors associated with ignition behavior and fire response.
          </p>
          <p>
            The model learns non-linear relationships between these descriptors and fire-related outcomes reported in experimental datasets. Rather than predicting absolute fire performance, the model outputs a relative fire-risk proxy intended for comparison and prioritization across candidate materials.
          </p>
          <p>
            Tree-based modeling was selected to balance predictive capacity with interpretability, enabling engineers to trace how material properties influence the screening outcome.
          </p>
          <p>
            Unlike traditional fire modeling tools that require fully characterized material properties, Dravix is designed to operate with partial, early-stage descriptors, enabling screening before comprehensive testing data exists.
          </p>
        </div>
        <ImagePlaceholder
          caption="Conceptual ensemble learning diagram for relative fire-risk screening"
          figureNumber={10}
          imageUrl="https://i.imgur.com/dJWyual.png"
          captionText="Material features are evaluated by multiple decision trees, each capturing distinct ignition-relevant interactions. The aggregated output forms a stable, comparative fire-risk proxy rather than a single deterministic prediction, supporting robust early-stage screening decisions."
        />
      </Section>

      <Section title="Validation Alignment">
        <div className="space-y-6 text-lg leading-loose">
          <p>
            This section summarizes how system outputs align with known fire behavior.
          </p>
          <p>
            System-level validation confirms that inference outputs behave consistently with established fire dynamics. The fire-risk proxy demonstrates strong positive correlation with external heat flux and moderate negative correlation with time to ignition, consistent with reported fire testing literature.
          </p>
          <p>
            Variance analysis shows tighter error distributions for composites and generic materials, with higher uncertainty observed for polymers; this uncertainty is explicitly surfaced through interpretability weighting rather than suppressed.
          </p>
          <p>
            The model is trained once at initialization and does not update during operation; this ensures stable behavior during evaluation and avoids uncontrolled model drift.
          </p>
        </div>
        <ImagePlaceholder
          caption="Validation alignment between Dravix fire-risk proxy and ignition-related indicators"
          figureNumber={11}
          imageUrl="https://i.imgur.com/T7R39X2.png"
          captionText="The relative fire-risk screening signal produced by Dravix exhibits consistent trends with established experimental indicators, such as external heat flux and time to ignition. Although the proxy is not a direct physical measurement, its behavior aligns with known fire-response dynamics, supporting its use for early-stage material prioritization rather than certification."
        />
      </Section>

      <Section title="What Exists vs What Comes Next">
        <div className="space-y-6 text-lg leading-loose">
          <p>
            This section distinguishes the current implemented system from planned extensions.
          </p>
          <p className="font-medium">Currently implemented (V0):</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>End-to-end inference pipeline</li>
            <li>Experimental dataset covering 718 materials</li>
            <li>Interpretable tree-based ML model</li>
            <li>Live, local inference with structured outputs</li>
            <li>Explicit uncertainty signaling</li>
          </ul>
          <p className="font-medium mt-6">Planned extensions:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Expanded datasets with broader material coverage</li>
            <li>Additional material classes and property domains</li>
            <li>Enhanced interpretability and reporting tools</li>
            <li>Deployment beyond local environments for pilot use</li>
            <li>Extension of the architecture to additional screening properties beyond fire resistance</li>
          </ul>
          <p>
            These extensions build directly on the existing system architecture; no fundamental redesign is required.
          </p>
        </div>
        <ImagePlaceholder
          caption="Dravix System Evolution Roadmap"
          figureNumber={12}
          imageUrl="https://i.imgur.com/JuEAwJh.png"
          captionText="Roadmap-style visualization illustrating the evolution of Dravix from a validated single-property fire-risk screening system (v0.2) into a multi-property materials screening platform. The current implementation represents a stable engineering foundation designed for extension."
        />
      </Section>

      <Section title="System Boundaries">
        <div className="space-y-6 text-lg leading-loose">
          <p>
            This section defines what the system is intentionally designed <span className="italic">not</span> to do.
          </p>
          <p>
            Dravix does not perform real-time sensing, autonomous decision-making, or adaptive control. It does not certify materials or replace standardized fire testing. By clearly defining scope and boundaries, the system remains aligned with existing engineering standards while providing earlier insight where current workflows lack visibility.
          </p>
        </div>
      </Section>
    </>
  );
}

function ValidationTab() {
  return (
    <>
      <Section title="Validation Overview">
        <div className="space-y-6 text-lg leading-loose">
          <p>
            This page presents empirical observations from applying Dravix V0 to a real experimental materials dataset. Validation examines output behavior, trend alignment with established fire indicators, and stability across material classes; it does not assess predictive accuracy, certification equivalence, or safety guarantees.
          </p>
          <p>
            The objective is to determine whether the screening signal behaves consistently with known fire dynamics and whether uncertainty is represented appropriately for early-stage material prioritization.
          </p>
        </div>
      </Section>

      <Section title="Evaluation Dataset">
        <div className="space-y-6 text-lg leading-loose">
          <p>
            Validation was conducted using a static dataset of 718 material samples spanning polymers, composites, and generic materials derived through keyword-based mapping.
          </p>
          <p>
            Each sample is represented by approximately 95 features, combining raw physical properties with engineered fire-relevant descriptors. Dataset values are experimentally derived or literature-reported and remain fixed throughout evaluation.
          </p>
          <p>
            All results presented reflect inference behavior on this dataset alone.
          </p>
        </div>
      </Section>

      <Section title="Observed Output Behavior">
        <div className="space-y-6 text-lg leading-loose">
          <p>
            Across the evaluation set, Dravix produces a continuous relative fire-risk screening signal suitable for ranking and comparison. Materials with similar fire-relevant characteristics cluster closely, while materials with distinct ignition-related properties separate consistently in score space.
          </p>
          <p>
            Repeated inference on identical inputs yields stable rankings. Minor perturbations in non-dominant features result in limited score variation, whereas changes in ignition-relevant descriptors produce more pronounced shifts in relative position.
          </p>
          <p>
            This behavior is consistent with expectations for an early-stage screening signal.
          </p>
        </div>
      </Section>

      <Section title="Alignment with Fire Indicators">
        <div className="space-y-6 text-lg leading-loose">
          <p>
            The screening proxy increases with increasing external heat flux and decreases with increasing time to ignition. Materials exposed to higher heat flux tend to receive higher screening scores, while materials exhibiting longer ignition times trend lower.
          </p>
          <p>
            These directional relationships align with established fire testing observations. The proxy does not replicate physical measurements; it reflects relative trends consistent with known ignition behavior.
          </p>
        </div>
        <ImagePlaceholder
          caption="Validation trends between Dravix fire-risk proxy and ignition-related indicators"
          figureNumber={13}
          imageUrl="https://i.imgur.com/WvZmhmX.png"
          captionText="Validation trends demonstrate that the Dravix fire-risk screening signal behaves consistently with established ignition-related indicators, including increasing external heat flux and decreasing time to ignition, supporting its use for comparative early-stage material screening."
        />
      </Section>

      <Section title="Material Class Behavior and Variance">
        <div className="space-y-6 text-lg leading-loose">
          <p>
            Screening behavior varies by material class. Composite and generic materials show tighter score distributions, indicating more consistent relative behavior within these groups. Polymer samples exhibit higher variance, reflecting greater compositional and fire-response diversity.
          </p>
          <p>
            This variance is preserved and exposed rather than suppressed. Materials associated with higher uncertainty remain visible and are flagged for careful interpretation, supporting responsible prioritization across heterogeneous material spaces.
          </p>
        </div>
        <ImagePlaceholder
          caption="Distribution of Dravix screening scores by material class"
          figureNumber={14}
          imageUrl="https://i.imgur.com/Wr9soGh.png"
          captionText="Distribution of raw Dravix screening scores generated by the deployed v0 inference pipeline for a fixed dataset of 718 materials spanning polymers, composites, and generic materials. Scores are unitless relative fire-risk proxies produced directly by the model without rescaling or post-processing. Distributional differences reflect class-level variability in inferred ignition-relevant behavior and are intended for comparative screening rather than absolute performance assessment."
        />
      </Section>

      <Section title="Example Relative Screening Output">
        <div className="space-y-6 text-lg leading-loose">
          <p>
            To illustrate practical use, Dravix can be applied to compare candidate materials within the same class. Relative screening outputs enable engineers to prioritize which materials warrant earlier physical testing based on comparative fire-risk signals.
          </p>
          <p>
            The ranking reflects relative positioning only; it does not indicate absolute safety or regulatory compliance.
          </p>
        </div>
        <ImagePlaceholder
          caption="Relative screening score ranking within a single material class"
          figureNumber={15}
          imageUrl="https://i.imgur.com/q5JPEi7.png"
          captionText="Ranked comparison of relative fire-risk screening scores for a subset of materials within a single material class under identical evaluation conditions. Rankings represent comparative screening signals intended to support early-stage prioritization decisions rather than absolute fire performance, safety, or certification judgments."
        />
      </Section>

      <Section title="Stability and Reproducibility">
        <div className="space-y-6 text-lg leading-loose">
          <p>
            Evaluation confirms deterministic behavior under identical inputs. The model is assessed in a fixed state and does not update during operation; repeated inference on the same material descriptors yields identical screening outputs.
          </p>
          <p>
            Observed stability indicates that validation results reflect system behavior rather than stochastic variation or model drift.
          </p>
        </div>
        <ImagePlaceholder
          caption="Deterministic inference reproducibility under identical inputs"
          figureNumber={16}
          imageUrl="https://i.imgur.com/eFieGjo.png"
          captionText="Repeated inference runs using identical material inputs produce identical Dravix fire-risk screening outputs, confirming deterministic system behavior under fixed model parameters and a static evaluation state."
        />
      </Section>

      <Section title="Limits of Interpretation">
        <div className="space-y-6 text-lg leading-loose">
          <p>
            Validation supports relative trend alignment and screening behavior only. Results do not establish absolute fire performance, regulatory compliance, or material safety certification.
          </p>
          <p>
            Physical fire testing remains necessary for definitive evaluation; Dravix informs which materials merit that testing earlier in the workflow.
          </p>
        </div>
      </Section>

      <Section title="Validation Summary">
        <div className="space-y-2 text-lg leading-loose">
          <ul className="list-disc pl-6">
            <li>Screening outputs demonstrate stable, interpretable ranking behavior</li>
            <li>Directional alignment with known fire indicators is observed</li>
            <li>Material classes exhibit distinct variance characteristics</li>
            <li>Uncertainty is explicitly surfaced rather than hidden</li>
            <li>Results support early-stage prioritization rather than certification</li>
          </ul>
        </div>
      </Section>
    </>
  );
}

function MarketTab() {
  return (
    <>
      <Section title="Impact & Market Overview">
        <div className="space-y-6 text-lg leading-loose">
          <p>
            Fire resistance testing is a critical requirement across safety-critical industries; however, current workflows concentrate cost, risk, and uncertainty late in the development process. Full-scale fire tests are expensive, time-intensive, and capacity-constrained, while smaller-scale tests still require repeated physical iteration to converge on viable material candidates.
          </p>
          <p>
            Dravix addresses this structural inefficiency by introducing predictive screening upstream. By enabling earlier prioritization of candidate materials, the system reduces unnecessary physical testing, shortens development cycles, and supports safer decision-making before significant resources are committed.
          </p>
        </div>
        <ImagePlaceholder
          caption="Fire Testing Cost, Time, Risk Funnel"
          figureNumber={17}
          imageUrl="https://i.imgur.com/kQwPLtp.png"
          captionText="Illustration of increasing cost, time, and risk concentration across traditional fire testing workflows, highlighting how physical testing expenses and delays escalate in later development stages and how early-stage screening reduces unnecessary iteration."
        />
      </Section>

      <Section title="Who Uses Dravix (Early Adopters)">
        <div className="space-y-6 text-lg leading-loose">
          <p>
            Dravix is designed for organizations that routinely evaluate large material search spaces under fire-safety constraints and face high costs when late-stage testing fails.
          </p>
          <p>
            Materials manufacturers developing fire-resistant building products, insulation systems, coatings, and composites represent a primary early-adopter group. In jurisdictions such as California, strict fire codes and state-level listing requirements significantly increase the cost of failed or repeated testing, making early screening especially valuable.
          </p>
          <p>
            Aerospace and defense research organizations operate under stringent flammability requirements while continuously pursuing lighter and higher-performance materials. These teams already rely on modeling and simulation to guide materials development; predictive fire-risk screening enables faster down-selection before experimental testing.
          </p>
          <p>
            Automotive and electric-vehicle manufacturers face growing fire-safety challenges related to battery systems, interior materials, and lightweight polymers. Rapid iteration is essential in competitive EV markets, and avoiding even a single failed material test can prevent costly redesign cycles.
          </p>
          <p>
            Academic and government research laboratories represent another important user group. These organizations often explore novel material formulations with limited testing budgets; predictive screening allows researchers to narrow experimental scope and allocate physical testing resources more efficiently.
          </p>
          <p>
            Engineering and design firms working on innovative building systems or infrastructure projects can use Dravix during early design phases to inform material choices and reduce downstream redesign risk, while still relying on certified testing for final approval.
          </p>
          <p>
            These users already make material decisions under uncertainty; Dravix fits naturally into workflows where early elimination of poor candidates reduces downstream risk without changing certification requirements.
          </p>
        </div>
      </Section>

      <Section title="Where Dravix Fits in the Workflow">
        <div className="space-y-6 text-lg leading-loose">
          <p>
            Dravix operates upstream of physical fire testing. The system is used during material exploration and early design phases, prior to booking laboratory tests or constructing full-scale prototypes.
          </p>
          <p>
            Rather than replacing accredited fire testing or certification processes, Dravix complements them by helping teams decide which material candidates are most promising to test first. This positioning lowers adoption risk and aligns with existing regulatory and engineering workflows.
          </p>
        </div>
        <ImagePlaceholder
          caption="Dravix Placement Within the Materials Development Workflow"
          figureNumber={18}
          imageUrl="https://i.imgur.com/Df0E06v.png"
          captionText="Dravix operates upstream of physical fire testing as an early-stage screening step within the materials development workflow, informing material prioritization without replacing accredited testing or certification processes."
        />
      </Section>

      <Section title="Economic Value and Pricing Logic">
        <div className="space-y-6 text-lg leading-loose">
          <p>
            The economic value of Dravix is driven by avoided testing costs, reduced iteration cycles, and improved development efficiency.
          </p>
          <p>
            A single full-scale fire resistance test, such as ASTM E119 for building assemblies, can cost on the order of $15,000–$20,000 and require weeks or months of scheduling and preparation. Even smaller-scale tests such as cone calorimetry or flammability screening involve repeated trials that accumulate significant cost over a development program.
          </p>
          <p>
            By enabling teams to avoid failed tests or unnecessary iterations, Dravix can offset its annual subscription cost through a single avoided test. For this reason, Dravix is positioned as an internal engineering platform licensed on an annual subscription basis, with pricing structured conservatively in the range of $5,000–$15,000 per year depending on team size and usage scope.
          </p>
          <p>
            This pricing aligns with common industry benchmarks for specialized engineering software and represents a small fraction of typical R&D or testing budgets. The subscription model reflects Dravix's role as a decision-support and screening tool rather than a certification platform.
          </p>
        </div>
        <ImagePlaceholder
          caption="Cost Comparison Between Physical Fire Testing and Dravix Subscription"
          figureNumber={19}
          imageUrl="https://i.imgur.com/gOERHRi.png"
          captionText="Comparison between typical physical fire testing costs and annual Dravix subscription pricing, illustrating how avoiding a single failed or unnecessary test can offset a full year of platform usage."
        />
      </Section>

      <Section title="Existing Tools and Differentiation">
        <div className="space-y-6 text-lg leading-loose">
          <p>
            Current tools that support fire-related material decisions fall into three main categories: materials databases, physics-based fire modeling software, and experimental testing services.
          </p>
          <p>
            Materials databases document known fire ratings and properties for existing materials but cannot predict the behavior of novel formulations or new composites. Physics-based fire modeling tools simulate fire scenarios but require detailed material properties that are often unavailable early in development.
          </p>
          <p>
            Experimental testing remains the definitive standard but is costly and slow, particularly when used iteratively during early design stages.
          </p>
          <p>
            Dravix differs by providing a predictive, data-driven screening signal for materials that have not yet been physically tested. The system enables early comparison and prioritization using structured material descriptors, reducing reliance on trial-and-error experimentation while preserving the role of physical testing for final validation.
          </p>
          <p>
            This approach reflects emerging research demonstrating the feasibility of machine-learning-based screening for flammability and ignition behavior, which has so far remained largely confined to academic settings.
          </p>
        </div>
      </Section>

      <Section title="Expansion and Long-Term Impact">
        <div className="space-y-6 text-lg leading-loose">
          <p>
            Fire resistance serves as a focused and high-impact entry point for predictive materials screening. However, the underlying system architecture is not limited to a single property domain.
          </p>
          <p>
            As datasets expand and additional material properties are incorporated, the same screening framework may be extended to evaluate thermal behavior, mechanical performance, or sustainability-related metrics. Because materials underpin nearly every engineered product, this extensibility supports long-term impact across multiple industries without compromising safety or trust.
          </p>
        </div>
        <ImagePlaceholder
          caption="Screening Architecture Expansion Map"
          figureNumber={20}
          imageUrl="https://i.imgur.com/JNrC0zw.png"
          captionText="Conceptual expansion map illustrating fire resistance as the initial screening domain with logical extensions to thermal behavior, mechanical performance, and sustainability metrics, built upon the same validated system architecture."
        />
      </Section>

      <Section title="Impact & Market Summary">
        <div className="space-y-2 text-lg leading-loose">
          <ul className="list-disc pl-6">
            <li>Fire testing workflows concentrate cost and risk late in development</li>
            <li>Dravix enables earlier prioritization and reduces unnecessary physical testing</li>
            <li>Early adopters include materials manufacturers, aerospace, automotive, and research labs</li>
            <li>Subscription pricing is justified by avoided test costs and improved development efficiency</li>
            <li>The platform supports responsible expansion beyond fire resistance</li>
          </ul>
        </div>
      </Section>
    </>
  );
}

function BrandTab() {
  return (
    <>
      <Section title="What Dravix Represents">
        <div className="space-y-6 text-lg leading-loose">
          <p>
            Dravix is built on the belief that engineers working in fire safety and materials testing should be able to make responsible, informed decisions without being slowed by inefficient or unnecessary processes. Fire resistance is a safety-critical challenge with real consequences, and the systems used to evaluate it must prioritize clarity, reliability, and efficiency.
          </p>
          <p>
            Rather than replacing existing standards or certification workflows, Dravix is designed to support better decisions earlier, working alongside established testing practices to reduce wasted effort and improve outcomes.
          </p>
        </div>
      </Section>

      <Section title="Name and Meaning">
        <div className="space-y-6 text-lg leading-loose">
          <p>
            The name Dravix combines <span className="italic">dravya</span>, a Sanskrit term meaning substance or material, with the suffix <span className="italic">-ix</span>, commonly associated with technology and innovation. The name reflects the platform's focus on understanding materials at a fundamental level while applying modern computational tools to improve how they are evaluated.
          </p>
        </div>
        <ImagePlaceholder
          caption="Dravix name origin"
          figureNumber={21}
          imageUrl="https://i.imgur.com/DV4lDmR.png"
        />
      </Section>

      <Section title="Brand Personality">
        <div className="space-y-6 text-lg leading-loose">
          <p>
            Dravix is intentionally technical, clean, and modern. Our users operate in safety-critical environments where trust and precision matter, so the brand avoids unnecessary complexity or abstraction.
          </p>
          <p>
            At the same time, the platform is designed to feel supportive rather than rigid. Materials engineers already work with dense data and complex constraints; Dravix emphasizes clarity and focus to make evaluation workflows feel more structured and less overwhelming.
          </p>
        </div>
      </Section>

      <Section title="Visual Identity">
        <div className="space-y-6 text-lg leading-loose">
          <p>
            The visual identity of Dravix reflects its role in fire safety and responsible engineering:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Minimal layouts keep attention on data and results</li>
            <li>Soft flame tones and earthy colors reference fire resistance without creating urgency or stress</li>
            <li>Clean typography and spacing reinforce credibility and precision</li>
          </ul>
          <p>
            The logo combines these ideas by pairing a flame symbol, representing fire risk and safety, with internal lines and nodes that suggest a neural network. This reflects the platform's AI-driven foundation while grounding it in real-world engineering concerns.
          </p>
        </div>
      </Section>

      <Section title="User Experience and Voice">
        <div className="space-y-6 text-lg leading-loose">
          <p>
            Dravix is designed so users can move from question to insight with minimal friction. Navigation is straightforward, interactions are intentional, and only essential information is surfaced at each step.
          </p>
          <p>
            The platform's voice is factual and consistent. Explanations focus on what the system is showing, why it matters, and how results should be interpreted. Language is kept concise to support efficient decision-making and avoid overstatement or ambiguity.
          </p>
        </div>
      </Section>

      <Section title="Commitment to Responsibility">
        <div className="space-y-6 text-lg leading-loose">
          <p>
            Dravix is built for use in safety-critical contexts, and responsibility guides both the product and the brand. Outputs emphasize relative screening and uncertainty awareness, not absolute judgments or certification claims.
          </p>
          <p>
            The platform evolves based on user feedback from real workflows, ensuring that improvements remain grounded in practical needs rather than speculative features. As the system expands to additional material properties over time, the same standards of validation, transparency, and restraint remain central.
          </p>
        </div>
      </Section>
    </>
  );
}

function RoadmapTab() {
  return (
    <>
      <Section title="Roadmap Overview">
        <div className="space-y-6 text-lg leading-loose">
          <p>
            Dravix is currently a Phase-2 engineering prototype with validated end-to-end inference and observed alignment with known fire-related behavior. The roadmap focuses on responsible progression from prototype to real-world use; prioritizing validation, controlled adoption, and incremental expansion over rapid scale.
          </p>
          <p>
            Each phase builds on verified system behavior and real user feedback rather than speculative feature growth.
          </p>
        </div>
      </Section>

      <Section title="Current State — Phase-2: Engineering Prototype Baseline">
        <div className="space-y-6 text-lg leading-loose">
          <p>
            Dravix V0 operates end-to-end with live inference and a fixed evaluation dataset. The system produces relative fire-risk screening signals accompanied by interpretability and uncertainty indicators, and has been validated for stability and alignment with known fire dynamics.
          </p>
          <p>
            This phase establishes technical feasibility, behavioral consistency, and responsible system boundaries. No autonomous retraining, real-time sensing, or certification logic is implemented at this stage.
          </p>
        </div>
      </Section>

      <Section title="Next Steps — Phase-3: Pilot Validation and Refinement">
        <div className="space-y-6 text-lg leading-loose">
          <p>
            The next phase focuses on expanding confidence through limited, controlled use.
          </p>
          <p>
            Key objectives include expanding the evaluation dataset, incorporating additional material samples across existing classes, and refining interpretability and reporting outputs based on user feedback. Pilot usage would occur within research environments such as academic laboratories, internal R&D teams, or controlled industry partnerships.
          </p>
          <p>
            This phase emphasizes observation and refinement rather than scale; feedback is used to improve clarity, usability, and confidence in screening outputs without altering core system behavior.
          </p>
        </div>
        <ImagePlaceholder
          caption="Phase-3 Pilot Validation Timeline"
          figureNumber={22}
          imageUrl="https://i.imgur.com/eY8aKKY.png"
          captionText="Phase 3 emphasizes controlled pilot validation through limited deployment, targeted dataset expansion, and iterative refinement informed by real-world feedback, prioritizing confidence building and system clarity prior to broader workflow integration."
        />
      </Section>

      <Section title="Deployment and Adoption — Phase-4: Workflow Integration">
        <div className="space-y-6 text-lg leading-loose">
          <p>
            Following successful pilot validation, Dravix advances toward broader deployment as an internal decision-support tool.
          </p>
          <p>
            In this phase, the system is integrated into existing material development workflows as an upstream screening step prior to physical fire testing. Deployment remains controlled and non-autonomous; Dravix informs prioritization decisions while physical testing and certification processes remain unchanged.
          </p>
          <p>
            This phase focuses on reliability, usability, and alignment with real engineering practices rather than expanding predictive scope.
          </p>
        </div>
        <ImagePlaceholder
          caption="Validation-to-Workflow Integration Pathway"
          figureNumber={23}
          imageUrl="https://i.imgur.com/l3lmzfv.png"
          captionText="Progression from system validation through controlled pilot use to integration as an upstream screening step within material development workflows, while preserving existing physical fire testing and certification pathways."
        />
      </Section>

      <Section title="Responsible Expansion — Phase-5: Multi-Property Screening">
        <div className="space-y-6 text-lg leading-loose">
          <p>
            Once the fire-resistance screening capability is established and trusted, the underlying system architecture may be extended to additional material property domains.
          </p>
          <p>
            Potential expansion areas include thermal behavior, mechanical performance, or sustainability-related metrics. Each new domain would follow the same progression: dataset development, behavioral validation, controlled pilot use, and responsible deployment.
          </p>
          <p>
            Expansion is property-by-property rather than feature-driven; new screening capabilities are added only after validation criteria comparable to those used for fire resistance are met.
          </p>
        </div>
        <ImagePlaceholder
          caption="Multi-Property Screening Expansion Framework"
          figureNumber={24}
          imageUrl="https://i.imgur.com/n3MIUQp.png"
          captionText="Incremental expansion framework illustrating how additional material property screening domains are introduced only after validation criteria comparable to those established for fire resistance are satisfied."
        />
      </Section>

      <Section title="Constraints and Dependencies">
        <div className="space-y-6 text-lg leading-loose">
          <p>
            Progress along the roadmap depends on several external and technical factors.
          </p>
          <p>
            High-quality experimental data remains a primary dependency; expanding screening capability requires access to reliable, representative material datasets. Domain expertise is essential to ensure that validation metrics and interpretation remain grounded in physical behavior. Collaboration with researchers, testing laboratories, and industry practitioners supports responsible growth and avoids misuse.
          </p>
          <p>
            These constraints are acknowledged explicitly to maintain system credibility and trust.
          </p>
        </div>
      </Section>

      <Section title="Roadmap Summary">
        <div className="space-y-2 text-lg leading-loose">
          <ul className="list-disc pl-6">
            <li>Phase-2 establishes a validated engineering prototype</li>
            <li>Phase-3 focuses on pilot validation and refinement</li>
            <li>Phase-4 integrates Dravix into real development workflows</li>
            <li>Phase-5 expands screening to additional material properties</li>
            <li>Validation and responsibility guide every stage of growth</li>
          </ul>
        </div>
      </Section>
    </>
  );
}

function TeamTab() {
  return (
    <>
      <Section title="Our Mission and Values">
        <div className="space-y-6 text-lg leading-loose">
          <p>
            Our mission is to make fire-resistance evaluation faster, smarter, and more responsible by introducing predictive screening earlier in material development. We focus on reducing unnecessary physical testing while preserving the role of certified validation and existing standards.
          </p>
          <p>
            We value accuracy, transparency, and clearly defined system boundaries. Dravix is designed to support engineers, not replace them; in safety-critical contexts, trust is built by restraint as much as innovation.
          </p>
        </div>
      </Section>

      <Section title="Team Roles and Contributions">
        <div className="space-y-6 text-lg leading-loose">
          <p>
            <span className="font-medium text-[#5c6770]">Nikhilesh Suravarjjala</span> serves as the technical lead and primary developer of Dravix. He designed and implemented the system architecture, built the end-to-end inference pipeline, integrated the machine learning model, and led validation and interpretation of results. His work connects material science, data-driven modeling, and responsible system design into a functioning decision-support platform.
          </p>
          <p>
            <span className="font-medium text-[#5c6770]">Jaanya</span> contributed to visual design, presentation, and market research. She supported the project by shaping diagrams, refining communication, and researching market context and user relevance; helping translate technical work into a clear narrative for external audiences.
          </p>
          <p>
            <span className="font-medium text-[#5c6770]">Arnav</span> supported data preparation and exploratory analysis. His contributions included assisting with data scraping, dataset organization, and early-stage analysis that informed model experimentation and validation.
          </p>
          <p>
            Together, the team combined hands-on technical execution with supporting research and communication to bring Dravix from concept to a working engineering prototype.
          </p>
        </div>
      </Section>

      <Section title="Looking Forward">
        <div className="space-y-6 text-lg leading-loose">
          <p>
            As Dravix evolves, the team intends to maintain the same execution-first approach that defined its early development. Future growth will prioritize validation, usability, and alignment with real engineering workflows rather than expanding scope prematurely.
          </p>
          <p>
            Dravix reflects how we approach engineering problems: take responsibility for what is built, validate before scaling, and design systems that improve decisions without overstating their authority.
          </p>
        </div>
      </Section>
    </>
  );
}

function ReferencesTab() {
  return (
    <>
      <Section title="References">
        <div className="space-y-4 text-lg leading-loose">
          <p>
            Babrauskas, V. (2003). <em>Ignition Handbook</em>. Fire Science Publishers.
          </p>
          <p>
            ASTM E1354. <em>Standard Test Method for Heat and Visible Smoke Release Rates for Materials and Products Using an Oxygen Consumption Calorimeter</em>. ASTM International.
          </p>
          <p>
            ASTM E119. <em>Standard Test Methods for Fire Tests of Building Construction and Materials</em>. ASTM International.
          </p>
          <p>
            Holdfast Fire Testing Ltd. (2017). <em>Fire testing of wall assemblies and implications for design and cost</em>.
          </p>
          <p>
            NGC Testing Services. <em>Common fire testing mistakes and redesign risks in material selection</em>.
          </p>
          <p>
            gb&d Magazine. <em>California fire codes, wildfire risk, and impacts on material selection and building design</em>.
          </p>
          <p>
            Defense Systems Information Analysis Center (DSIAC). <em>Machine-learning-based screening of polymer flammability and ignition behavior</em>.
          </p>
          <p>
            Metodos BV / DNV. <em>Hybrid physical–digital fire testing approaches for passive fire protection systems</em>.
          </p>
        </div>
      </Section>

      <Section title="Tools and Development Acknowledgment">
        <div className="space-y-6 text-lg leading-loose">
          <p>
            Development of the Dravix prototype made use of modern software and AI-assisted development tools, including Cursor, ChatGPT, and OpenAI Codex, to support coding, interface design, debugging, and documentation.
          </p>
          <p>
            These tools were used as productivity aids. The system concept, architecture, modeling approach, validation strategy, and interpretation of results were developed by the Dravix team. All technical decisions, assumptions, and conclusions remain the responsibility of the authors.
          </p>
        </div>
      </Section>
    </>
  );
}

export default App;
