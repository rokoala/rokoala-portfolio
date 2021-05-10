import SimpleCard from './SimpleCard';

interface SectionLayoutProps {
  title: string;
}

/**
 * SectionLayout
 * Creates a section for portfolio page
 */
const SectionLayout: React.FC<SectionLayoutProps> = ({ title, children }) => (
  <section className="md:my-28 my-20">
    <SimpleCard className="my-5 py-7 px-5 max-w-md">
      <h1 className="text-3xl font-semibold">{title}</h1>
    </SimpleCard>
    {children}
  </section>
);

export default SectionLayout;
