
function ReactionButton({ children, className = "", ...props }) {

  const baseClasses = "flex flex-row p-[0.5rem] rounded-full text-[#666] items-center hover:cursor-pointer transition-all duration-300";
  const finalClasses = `${baseClasses} ${className}`.trim();

  return (
    <button className={finalClasses} {...props}>
      {children}
    </button>
  );
}

export default ReactionButton;