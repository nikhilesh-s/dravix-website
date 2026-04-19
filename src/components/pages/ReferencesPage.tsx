import PageLayout from '../shared/PageLayout';

const references = [
  {
    citation: 'Babrauskas, V. (2003).',
    title: 'Ignition Handbook.',
    publisher: 'Fire Science Publishers.',
  },
  {
    citation: 'ASTM E1354.',
    title: 'Standard Test Method for Heat and Visible Smoke Release Rates for Materials and Products Using an Oxygen Consumption Calorimeter.',
    publisher: 'ASTM International.',
  },
  {
    citation: 'ASTM E119.',
    title: 'Standard Test Methods for Fire Tests of Building Construction and Materials.',
    publisher: 'ASTM International.',
  },
  {
    citation: 'Holdfast Fire Testing Ltd. (2017).',
    title: 'Fire testing of wall assemblies and implications for design and cost.',
  },
  {
    citation: 'NGC Testing Services.',
    title: 'Common fire testing mistakes and redesign risks in material selection.',
  },
  {
    citation: 'gb&d Magazine.',
    title: 'California fire codes, wildfire risk, and impacts on material selection and building design.',
  },
  {
    citation: 'Defense Systems Information Analysis Center (DSIAC).',
    title: 'Machine-learning-based screening of polymer flammability and ignition behavior.',
  },
  {
    citation: 'Metodos BV / DNV.',
    title: 'Hybrid physical–digital fire testing approaches for passive fire protection systems.',
  },
];

export default function ReferencesPage() {
  return (
    <PageLayout
      eyebrow="Sources"
      title="References"
      subtitle="Literature, standards, and sources that informed the development and validation of Dravix."
    >
      <section>
        <div className="space-y-4">
          {references.map((ref, i) => (
            <div key={i} className="flex gap-5 border-b border-gray-100 pb-5 last:border-b-0">
              <span className="text-sm text-[#E8967F] font-medium w-7 flex-shrink-0 mt-0.5">[{i + 1}]</span>
              <p className="text-sm text-gray-600 leading-relaxed">
                <span className="text-[#762123]">{ref.citation}</span>{' '}
                <span className="italic">{ref.title}</span>{' '}
                {ref.publisher && <span className="text-gray-500">{ref.publisher}</span>}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-light text-[#762123] mb-6 pb-4 border-b border-gray-100">Tools and Development Acknowledgment</h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          Development of the Dravix prototype made use of modern software and AI-assisted development tools, including Cursor, ChatGPT, and OpenAI Codex, to support coding, interface design, debugging, and documentation.
        </p>
        <div className="bg-[#F8F8F8] border border-gray-200 rounded-2xl p-6">
          <p className="text-sm text-gray-500 leading-relaxed">
            These tools were used as productivity aids. The system concept, architecture, modeling approach, validation strategy, and interpretation of results were developed by the Dravix team. All technical decisions, assumptions, and conclusions remain the responsibility of the authors.
          </p>
        </div>
      </section>
    </PageLayout>
  );
}
