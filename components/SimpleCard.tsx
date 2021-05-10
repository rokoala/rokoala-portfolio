const SimpleCard: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
}) => (
  <>
    <div
      className={`bg-gray-50 bg-opacity-80 rounded-xl filter drop-shadow dark:bg-gray-700 dark:text-white ${className}`}
    >
      {children}
    </div>
  </>
);

export default SimpleCard;
