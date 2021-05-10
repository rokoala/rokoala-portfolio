import BrowserCard from './BrowserCard';

interface GithubRepository {
  name: string;
  url: string;
  description: string;
}

interface GithubProjectsProps {
  repositories: GithubRepository[];
}

const GithubProjects: React.FC<GithubProjectsProps> = ({ repositories }) => (
  <div className="flex flex-wrap items-start">
    {repositories.map((repo) => (
      <article key={repo.name} className="flex m-5 md:flex-1 w-full">
        <BrowserCard>
          <header className="mb-4 text-lg">
            <a className="text-blue-800 font-bold" href={repo.url}>
              {repo.name}
            </a>
          </header>
          <p>{repo.description}</p>
        </BrowserCard>
      </article>
    ))}
  </div>
);

export default GithubProjects;
