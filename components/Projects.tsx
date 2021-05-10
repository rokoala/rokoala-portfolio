import { Project } from 'common/types';
import BrowserCard from './BrowserCard';

interface Props {
  projects: Project[];
}

const Projects: React.FC<Props> = ({ projects }) => (
  <div className="flex flex-wrap items-start">
    {projects.map((project) => (
      <article
        key={project.id}
        className="flex flex-column m-5 md:max-w-xs w-full"
      >
        <BrowserCard>
          <a className="flex-none h-auto w-full" href={project.link}>
            <img
              className="w-full h-auto rounded-md"
              src={project.image_url}
              alt=""
            />
          </a>
          <div className="py-4">
            <h3 className="text-lg font-bold my-1">{project.title}</h3>
            <p className="my-1 capitalize">{project.position}</p>
            <p className="my-1">{`(${project.init_date} - ${project.end_date})`}</p>
            <p>{project.subtitle}</p>
          </div>
        </BrowserCard>
      </article>
    ))}
  </div>
);

export default Projects;
