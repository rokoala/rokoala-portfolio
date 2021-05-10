const BrowserCard: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
}) => {
  return (
    <div className="rounded-lg filter drop-shadow-xl">
      <div className="flex bg-mac-gray-light rounded-t-lg space-x-1 p-2 dark:bg-mac-gray-dark">
        <div className="bg-mac-red-light rounded-full w-3 h-3 dark:bg-mac-red-dark" />
        <div className="bg-mac-yellow-light rounded-full w-3 h-3 dark:bg-mac-yellow-dark" />
        <div className="bg-mac-green-light rounded-full w-3 h-3 dark:bg-mac-green-dark" />
      </div>
      <div className="p-5 rounded-b-lg bg-white h-full w-full">{children}</div>
    </div>
  );
};

export default BrowserCard;
