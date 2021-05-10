import BrowserCard from './BrowserCard';
import SocialIcons from './SocialIcons';

interface AboutMeProps {
  avatarUrl: string;
  description: string;
}

const AboutMe: React.FC<AboutMeProps> = ({ avatarUrl, description }) => {
  return (
    <BrowserCard>
      <picture className="flex flex-col items-center rounded-2xl">
        <img
          className="w-48 h-48 m-5 rounded-full"
          src={avatarUrl}
          alt="profile-pic"
        />
        <blockquote className="my-4 text-black text-lg">
          {description}
        </blockquote>
      </picture>
      <SocialIcons />
    </BrowserCard>
  );
};

export default AboutMe;
