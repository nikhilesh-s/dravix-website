import { ExternalLink, ArrowRight } from 'lucide-react';
import chemistryIcon from '../../assets/chemistry-svgrepo-com.svg';
import FigureImage from '../shared/FigureImage';
import FigureVideo from '../shared/FigureVideo';

type Page = 'dravix' | 'demo' | 'system' | 'validation' | 'impact' | 'brand' | 'roadmap' | 'team' | 'references';

interface DravixPageProps {
  onNavigate: (page: Page) => void;
}

export default function DravixPage({ onNavigate }: DravixPageProps) {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 sm:pt-28 sm:pb-32">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-6 sm:gap-8 mb-10">
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-br from-[#E8967F]/30 to-[#762123]/15 rounded-2xl blur-2xl scale-125" />
              <div className="relative w-20 h-20 sm:w-28 sm:h-28 bg-[#F8F8F8] border border-gray-200 rounded-2xl flex items-center justify-center shadow-lg">
                <img src={chemistryIcon} alt="Dravix" className="w-12 h-12 sm:w-16 sm:h-16" />
              </div>
            </div>
            <div className="text-left">
              <p className="text-xs font-medium tracking-widest text-[#E8967F] uppercase mb-2">noun &nbsp;/ˈdraːvɪks/</p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-[#762123] leading-none tracking-tight">
                Dravix
              </h1>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-800 leading-tight mb-6 max-w-3xl">
            Decide what to test<br className="hidden sm:block" /> before you test it.
          </h2>

          <p className="text-base sm:text-lg text-gray-500 leading-relaxed mb-10 max-w-2xl">
            Dravix helps engineers decide which materials to test first by predicting fire risk before physical testing begins.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://dravix-engine.materiamse.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#762123] text-white rounded-full hover:bg-[#9E2A2A] transition-colors text-sm font-medium"
            >
              Try Demo
              <ExternalLink className="w-4 h-4" />
            </a>
            <button
              onClick={() => onNavigate('system')}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-gray-200 text-[#762123] rounded-full hover:bg-gray-50 transition-colors text-sm"
            >
              Explore System
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Dark strip */}
      <section className="bg-[#762123]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <p className="text-xl sm:text-2xl lg:text-3xl font-light text-white leading-relaxed">
            Dravix introduces predictive fire-risk insight upstream in the material development lifecycle; enabling engineers to compare, prioritize, and eliminate candidate materials before committing to costly physical fire testing.
          </p>
        </div>
      </section>

      {/* Tag strip */}
      <section className="bg-[#F8F8F8] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <p className="text-xs font-medium tracking-widest text-[#762123] uppercase mb-4">AI Augmented ML-Driven Materials Screening</p>
          <p className="text-base text-gray-600 leading-relaxed mb-8 max-w-2xl">
            An AI-powered materials screening platform that predicts relative fire risk from early-stage descriptors — enabling engineers to rank, compare, and prioritize materials before committing to costly fire testing.
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              'Screen materials early using minimal inputs',
              'Rank and compare candidates with a unified fire-risk signal',
              'Reduce testing cost and iteration cycles before lab validation',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-600">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E8967F] flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* See Dravix in Action — Figures 4 & 5 moved here */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <section className="mb-20">
          <h2 className="text-2xl font-light text-[#762123] mb-6 pb-4 border-b border-gray-100">See Dravix in Action</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Dravix is a live materials intelligence platform, not just a concept. These interface views show how engineers move from material input to interpretable screening results before physical testing begins.
          </p>
          <FigureVideo
            youtubeUrl="https://youtu.be/puwQy4EfoV0?si=ZsJ4LAEUtGvPgrcz"
            caption="Analyze workspace showing material input, fire-risk screening output, and decision-ready metrics within the Dravix interface."
            figureNumber={4}
          />
          <FigureVideo
            youtubeUrl="https://youtu.be/Ay2s5Px47Xg?si=lCR5dQocX1FQ4Uw-"
            caption="Driver view highlighting feature-level contributions that explain why a material receives its fire-risk screening score."
            figureNumber={5}
          />
          <p className="text-gray-500 leading-relaxed text-sm mt-2">
            These outputs convert fragmented material data into a usable decision signal for early-stage prioritization.
          </p>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl font-light text-[#762123] mb-6 pb-4 border-b border-gray-100">The Problem</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Fire resistance testing is slow, expensive, and typically occurs late in the material development process. Engineers are required to commit significant time and resources to physical fire testing before having clarity on which candidate materials are even worth evaluating.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Because testing occurs after design decisions are already made, teams often commit to suboptimal materials — leading to unnecessary testing, delayed iteration, and missed opportunities for safer solutions. In safety-critical industries such as construction, aerospace, automotive, and energy infrastructure, these inefficiencies compound across development cycles and budgets.
          </p>
          <FigureImage
            src="/images/Dc31GKW.png"
            caption="Fire resistance testing occurs late in the material development process, after key design and cost decisions have already been made."
            figureNumber={1}
            title="Fire Resistance Testing Occurs Late in the Material Development Timeline"
          />
        </section>

        <section className="mb-20">
          <h2 className="text-2xl font-light text-[#762123] mb-6 pb-4 border-b border-gray-100">What Dravix Changes</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Dravix shifts fire-risk insight earlier in the workflow by introducing predictive screening before physical testing begins.
          </p>
          <ul className="space-y-3 mb-8">
            {[
              'Screens large material search spaces using structured material descriptors',
              'Produces a relative fire-risk proxy rather than binary pass/fail judgments',
              'Enables prioritization and elimination of candidates early in development',
              'Reduces uncertainty without replacing standardized testing or certification',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E8967F] mt-2.5 flex-shrink-0" />
                <span className="text-gray-600 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-600 leading-relaxed mb-6">This approach allows engineers to focus physical testing resources where they matter most.</p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Instead of asking "Will this material pass testing?", Dravix answers: <strong className="font-medium text-gray-700">"Which materials should we test first?"</strong>
          </p>

          {/* Decision moment visual */}
          <div className="bg-[#F8F8F8] border border-gray-200 rounded-2xl p-6 mb-8 font-mono text-sm">
            <div className="space-y-3">
              {[
                { label: 'Material A', risk: '82', verdict: 'Not prioritized', color: 'text-[#9E2A2A]' },
                { label: 'Material B', risk: '34', verdict: 'Test first', color: 'text-[#2A6233]' },
                { label: 'Material C', risk: '61', verdict: 'Secondary candidate', color: 'text-[#62622A]' },
              ].map((row, i) => (
                <div key={i} className="flex items-center gap-4 flex-wrap">
                  <span className="text-gray-500 w-24 flex-shrink-0">{row.label}</span>
                  <span className="text-gray-400">→</span>
                  <span className="text-gray-600">Risk: <span className="font-semibold text-gray-700">{row.risk}</span></span>
                  <span className="text-gray-400">→</span>
                  <span className={`font-medium ${row.color}`}>{row.verdict}</span>
                </div>
              ))}
            </div>
          </div>

          <FigureImage
            src="/images/qL2BwLW.png"
            caption="Introducing early-stage predictive screening shifts material prioritization upstream, reducing late-stage failures and improving testing efficiency."
            figureNumber={2}
            title="Fire Testing Workflows Before and After Early-Stage Predictive Screening"
          />
        </section>

        <section className="mb-20">
          <h2 className="text-2xl font-light text-[#762123] mb-6 pb-4 border-b border-gray-100">The System</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Dravix operates as a <strong className="font-medium text-gray-700">decision-support system built around a deterministic inference pipeline and a governed materials dataset</strong>. Material descriptors are validated, transformed into model-ready features, and evaluated by a centralized machine learning inference engine.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            The system produces a <strong className="font-medium text-gray-700">relative fire-risk screening signal</strong>, along with interpretability drivers, confidence indicators, and downstream analysis outputs. This output is designed to support prioritization decisions — not to replace physical testing or certification.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Unlike traditional tools, Dravix is designed to operate with <strong className="font-medium text-gray-700">early-stage or incomplete material data</strong>, enabling screening before full characterization or testing. Outputs are explicitly framed to support prioritization decisions, not certification or final safety judgments.
          </p>
          <FigureImage
            src="/images/2XbwHtZ.jpeg"
            caption="Dravix v0.3.2 system architecture showing deterministic inference, feature engineering, governed dataset layer, and AI-assisted decision workflows."
            figureNumber={3}
            title="Dravix v0.3.2 System Architecture"
          />
        </section>

        <section className="mb-20">
          <h2 className="text-2xl font-light text-[#762123] mb-6 pb-4 border-b border-gray-100">Proof of Reality: Current Status</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Dravix is now a <strong className="font-medium text-gray-700">Phase 3 engineering system with deployed infrastructure and real-time analysis workflows.</strong> This is a functioning system with real-time analysis, not a conceptual model.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {[
              { label: 'Dataset', value: '~1780 materials with thermophysical and fire-relevant descriptors' },
              { label: 'Feature space', value: 'Structured descriptors including ignition, combustion, and thermal behavior' },
              { label: 'Model', value: 'Deterministic RandomForest-based inference engine' },
              { label: 'Deployment', value: 'Live backend API + frontend interface' },
              { label: 'Capabilities', value: 'Prediction, ranking, simulation, optimization, dataset search, AI advisor', wide: true },
            ].map((item, i) => (
              <div key={i} className={`bg-[#F8F8F8] border border-gray-200 rounded-2xl p-5${(item as { wide?: boolean }).wide ? ' sm:col-span-2' : ''}`}>
                <div className="text-xs font-medium text-[#E8967F] uppercase tracking-wide mb-2">{item.label}</div>
                <div className="text-sm text-gray-600 leading-relaxed">{item.value}</div>
              </div>
            ))}
          </div>
          <p className="text-gray-600 leading-relaxed">
            The system operates as a <strong className="font-medium text-gray-700">stable, reproducible inference platform</strong>, where identical inputs produce identical outputs. Outputs include not just scores, but drivers, sensitivity behavior, and decision context.
          </p>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl font-light text-[#762123] mb-6 pb-4 border-b border-gray-100">What Dravix Is Not</h2>
          <div className="bg-[#F8F8F8] border border-gray-200 rounded-2xl p-6 mb-6">
            <p className="text-sm font-medium text-[#762123]/70 uppercase tracking-wide mb-4">Dravix does not:</p>
            <ul className="space-y-2">
              {[
                'Replace standardized fire testing',
                'Certify materials or ensure regulatory compliance',
                'Provide absolute fire safety guarantees',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-500">
                  <span className="text-[#E8967F] font-medium">—</span>
                  <span className="text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Instead, it augments existing engineering workflows by reducing uncertainty earlier in the development process; supporting better decisions before physical testing begins.
          </p>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl font-light text-[#762123] mb-6 pb-4 border-b border-gray-100">Vision</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            By introducing fire-risk screening upstream, Dravix enables faster iteration, more efficient allocation of testing resources, and improved safety decision-making without undermining established standards.
          </p>
          <p className="text-gray-600 leading-relaxed">
            In the long term, the same system architecture may be extended beyond fire resistance to support early screening for additional material properties; including thermal behavior, mechanical performance, and sustainability-related metrics.
          </p>
          <FigureImage
            src="/images/JNrC0zw.png"
            caption="Fire resistance as the initial screening domain, with architecture designed for expansion into broader materials intelligence applications."
            figureNumber={6}
            title="Conceptual Expansion of Predictive Materials Screening Domains"
          />
        </section>

        <section className="mb-20">
          <h2 className="text-2xl font-light text-[#762123] mb-6 pb-4 border-b border-gray-100">Team & Story</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Dravix is built by a team of engineers shaped by firsthand exposure to fire-prone environments in California. Growing up amid evacuation warnings, damaged neighborhoods, and repeated wildfire seasons prompted a shared question: <strong className="font-medium text-gray-700">why are safer materials still so difficult and expensive to evaluate early?</strong>
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to make material safety evaluation faster, smarter, and more responsible; not by replacing standards, but by strengthening the decisions made before testing begins.
          </p>
          <div className="mt-8">
            <button
              onClick={() => onNavigate('team')}
              className="inline-flex items-center gap-2 px-6 py-2.5 border border-gray-200 text-[#762123] text-sm rounded-full hover:bg-gray-50 transition-colors"
            >
              Meet the Team
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>

        {/* Final CTA */}
        <section className="mb-8">
          <div className="border-t border-gray-100 pt-20">
            <h2 className="text-3xl sm:text-4xl font-light text-[#762123] mb-4 leading-tight">See How It Works</h2>
            <p className="text-gray-500 leading-relaxed mb-8 max-w-xl">
              Explore the full system, validation results, and live demonstrations.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://dravix-engine.materiamse.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 bg-[#762123] text-white text-sm rounded-full hover:bg-[#9E2A2A] transition-colors font-medium"
              >
                Try Demo
                <ExternalLink className="w-4 h-4" />
              </a>
              <button
                onClick={() => onNavigate('system')}
                className="px-7 py-3 border border-gray-200 text-[#762123] text-sm rounded-full hover:bg-gray-50 transition-colors"
              >
                View System
              </button>
              <button
                onClick={() => onNavigate('validation')}
                className="px-7 py-3 border border-gray-200 text-[#762123] text-sm rounded-full hover:bg-gray-50 transition-colors"
              >
                Validation
              </button>
              <button
                onClick={() => onNavigate('roadmap')}
                className="px-7 py-3 border border-gray-200 text-[#762123] text-sm rounded-full hover:bg-gray-50 transition-colors"
              >
                Roadmap
              </button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
