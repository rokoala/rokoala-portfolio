export interface Project {
  id: string;
  link: string;
  image_url: string;
  title: string;
  subtitle: string;
  position: string;
  init_date: string;
  end_date: string;
}

export interface Repositories {
  name: string;
  url: string;
  description: string;
}

export interface GithubInfo {
  name: string;
  login: string;
  twitterUsername: string;
  email: string;
  bio: string;
  avatarUrl: string;
  repositories: Repositories[];
}
