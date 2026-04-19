import { ExternalLink } from 'lucide-react';
import FigureVideo from '../shared/FigureVideo';

const demos = [
  {
    number: 1,
    title: 'Analyze Workspace',
    youtubeUrl: 'https://youtu.be/puwQy4EfoV0?si=ZsJ4LAEUtGvPgrcz',
    description: 'Analyze a material using either dataset lookup or custom descriptor input.',
    outputs: ['Fire-risk screening score', 'Confidence indicators', 'Comparable materials'],
  },
  {
    number: 2,
    title: 'Driver View',
    youtubeUrl: 'https://youtu.be/Ay2s5Px47Xg?si=lCR5dQocX1FQ4Uw-',
    description: 'Visualizes what drives the decision — making Dravix explainable.',
    outputs: ['Feature contributions', 'Relative influence', 'Directionality'],
  },
  {
    number: 3,
    title: 'Coating Analysis',
    youtubeUrl: 'https://youtu.be/mZWRyx4VSCk?si=-CrQzfbZNWizjQ9M',
    description: 'Evaluate how coatings affect material fire-risk performance.',
    outputs: ['Base material vs coated system', 'Adjusted screening outputs', 'Tradeoff visibility'],
  },
  {
    number: 4,
    title: 'Sensitivity Simulation',
    youtubeUrl: 'https://youtu.be/T6WAHLCtvCo?si=fesWAz0oT61D9F20',
    description: 'Test how changing material properties impacts fire-risk behavior.',
    outputs: ['Parameter perturbation', 'Response tracking', 'Design insight'],
  },
  {
    number: 5,
    title: 'Response Curve',
    youtubeUrl: 'https://youtu.be/F9Up46k3WX4?si=MQG6B6qVUKby8UQk',
    description: 'Real-time visualization of how material behavior changes across a property range.',
    outputs: ['Continuous response', 'Nonlinear effects', 'Stability zones'],
  },
  {
    number: 6,
    title: 'Optimization',
    youtubeUrl: 'https://youtu.be/BbF9GeUaer8?si=uv-QvvPloWBdFqdq',
    description: 'Identify directions for improving material fire-risk performance.',
    outputs: ['Target-driven optimization', 'Suggested adjustments', 'Engineering guidance'],
  },
  {
    number: 7,
    title: 'Dataset Search',
    youtubeUrl: 'https://youtu.be/gD-D__SsTVQ?si=FhUHzZPhH_Z7UxTl',
    description: 'Explore the governed materials dataset to identify candidate sets.',
    outputs: ['Filter materials', 'Search by properties', 'Identify candidate sets'],
  },
  {
    number: 8,
    title: 'Compare Materials',
    youtubeUrl: 'https://youtu.be/TV4Hc02U92E?si=ejy4qvgVJaZGpb15',
    description: 'Side-by-side analysis of materials for specific use cases.',
    outputs: ['Side-by-side analysis', 'Tradeoff evaluation', 'Decision support'],
  },
  {
    number: 9,
    title: 'Rank Materials',
    youtubeUrl: 'https://youtu.be/C50YuuVYzJM?si=v6YCQgzifLc9UlYr',
    description: 'Rank candidate materials by relative fire-risk screening score.',
    outputs: ['Relative screening scores', 'Prioritized testing order', 'Candidate elimination'],
  },
  {
    number: 10,
    title: 'AI Advisor',
    youtubeUrl: 'https://youtu.be/GUk1h5vDYzU?si=q3Um9d6SE-MfaXYJ',
    description: 'AI-assisted interpretation layer that explains results and suggests next steps.',
    outputs: ['Explains results', 'Suggests next steps', 'Provides engineering reasoning'],
  },
  {
    number: 11,
    title: 'Analysis History',
    youtubeUrl: 'https://youtu.be/hMszqOTfc0I?si=yc3j0cO2FciHcv-1',
    description: 'Track past analyses for reproducibility and workflow continuity.',
    outputs: ['Stored analysis IDs', 'Reproducibility', 'Workflow continuity'],
  },
];

const summaryCapabilities = [
  'Understand material behavior',
  'Test design tradeoffs',
  'Compare candidates',
  'Prioritize testing',
];

export default function DemoPage() {
  return (
    <div className="bg-white">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-28 sm:pb-20">
        <p className="text-xs font-medium tracking-widest text-[#E8967F] uppercase mb-4">Interactive Demonstrations</p>
        <h1 className="text-4xl sm:text-5xl font-light text-[#762123] mb-6 leading-tight">Demo</h1>
        <p className="text-lg text-gray-500 leading-relaxed max-w-2xl mb-6">
          Dravix is a fully interactive materials intelligence platform. The system enables engineers to move from <strong className="font-medium text-gray-600">material input → analysis → decision → iteration</strong> in a single workflow.
        </p>
        <p className="text-gray-500 leading-relaxed max-w-2xl mb-4">
          This is the full decision workflow — from input to prioritization.
        </p>
        <p className="text-gray-500 leading-relaxed max-w-2xl">
          The following demonstrations show each core capability of the system.
        </p>
      </section>

      <div className="border-t border-gray-100">
        {demos.map((demo, idx) => (
          <div
            key={demo.number}
            className={`${idx % 2 === 0 ? 'bg-white' : 'bg-[#FAFAFA]'} border-b border-gray-100`}
          >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
              <div className="flex items-start gap-4 mb-6">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#762123]/8 border border-[#762123]/15 flex items-center justify-center text-xs font-medium text-[#762123]">
                  {demo.number}
                </span>
                <div>
                  <h2 className="text-2xl font-light text-[#762123] leading-tight">{demo.title}</h2>
                  <p className="text-gray-500 mt-2 leading-relaxed">{demo.description}</p>
                </div>
              </div>
              <FigureVideo
                youtubeUrl={demo.youtubeUrl}
                figureNumber={demo.number}
              />
              <ul className="flex flex-wrap gap-2 mt-4">
                {demo.outputs.map((output, i) => (
                  <li key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#F8F8F8] border border-gray-200 rounded-full text-xs text-gray-500">
                    <span className="w-1 h-1 rounded-full bg-[#E8967F] flex-shrink-0" />
                    {output}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="bg-[#F8F8F8] border border-gray-200 rounded-3xl p-8 sm:p-12">
          <p className="text-xs font-medium tracking-widest text-[#E8967F] uppercase mb-4">Summary</p>
          <h2 className="text-2xl sm:text-3xl font-light text-[#762123] mb-4 leading-tight">
            Dravix is not just a prediction engine.
          </h2>
          <p className="text-gray-500 leading-relaxed mb-8 max-w-xl">
            It is a <strong className="font-medium text-gray-600">decision intelligence system</strong> that enables engineers to make better material choices before committing to physical validation.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
            {summaryCapabilities.map((cap, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-2xl p-4 text-center">
                <div className="w-2 h-2 rounded-full bg-[#E8967F] mx-auto mb-3" />
                <span className="text-sm text-gray-600 leading-snug">{cap}</span>
              </div>
            ))}
          </div>
          <a
            href="https://dravix-engine.materiamse.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#762123] text-white rounded-full hover:bg-[#9E2A2A] transition-colors text-sm font-medium"
          >
            Try the Live System
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
