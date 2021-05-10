import { FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialIcons: React.FC = () => {
  return (
    <div className="flex justify-center space-x-4 my-2">
      <a href="https://github.com/rokoala">
        <FaGithub className="text-4xl" />
      </a>
      <a href="https://www.linkedin.com/in/rodrigo-koga-a4910585/">
        <FaLinkedin className="text-4xl" />
      </a>
    </div>
  );
};

export default SocialIcons;
