import { useLayoutEffect } from 'react';

const Switch: React.FC = () => {
  useLayoutEffect(() => {
    const isDark = localStorage.getItem('@darkmode');
    if (isDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toogleDarkMode = () => {
    const isDark = localStorage.getItem('@darkmode');
    if (isDark) {
      localStorage.removeItem('@darkmode');
      document.documentElement.classList.remove('dark');
    } else {
      localStorage.setItem('@darkmode', 'true' as string);
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <button
      type="button"
      onClick={() => {
        toogleDarkMode();
      }}
      className="focus:outline-none w-12 h-6 bg-white dark:bg-gray-500 rounded-full"
    >
      <div className="w-6 h-6 dark:bg-black ml-auto dark:ml-0 bg-gray-500 border-gray-50 rounded-full" />
    </button>
  );
};

export default Switch;
