/* eslint-disable react/no-unescaped-entities */
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import HomeLayout from 'layout/Home';
import {
  AboutMe,
  Section,
  GithubProjects,
  Projects,
  Header,
  SimpleCard,
} from 'components';
import { getGithubInfo, getProjects } from 'query';
import { Project, GithubInfo } from 'common/types';

const IndexPage: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  githubInfo,
  projects,
}) => (
  <HomeLayout>
    <Header />
    <SimpleCard className="my-5 md:p-8 p-4">
      <h1 className="md:text-3xl text-xl text-center">
        Hello! It's me <b className="md:text-4xl text-2xl">Rodrigo Koga</b>{' '}
        だよ!
      </h1>
    </SimpleCard>
    <AboutMe
      avatarUrl={githubInfo.avatarUrl}
      description="I'm a Full Stack Web Developer"
    />
    <div className="container mx-auto px-6">
      <Section title="GitHub Projects">
        <GithubProjects repositories={githubInfo.repositories} />
      </Section>
      <Section title="Projects Contribution">
        <Projects projects={projects} />
      </Section>
    </div>
  </HomeLayout>
);

export const getStaticProps: GetStaticProps<{
  githubInfo: GithubInfo;
  projects: Project[];
}> = async () => {
  const githubInfo = await getGithubInfo();
  const projects = await getProjects();

  return {
    props: {
      githubInfo,
      projects,
    },
    revalidate: 120,
  };
};

export default IndexPage;
