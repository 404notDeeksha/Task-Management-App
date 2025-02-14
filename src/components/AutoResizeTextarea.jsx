import { useEffect, useRef } from "react";

const AutoResizeTextarea = ({ value, onChange, ...props }) => {
  const textareaRef = useRef(null);

  useEffect(() => {
    const textarea = textareaRef.current;

    if (textarea) {
      textarea.style.height = "auto"; // Reset height to auto before measuring
      textarea.style.height = `${textarea.scrollHeight}px`; // Set height to scrollHeight
    }
    console.log("Height", textarea.style.height);
  }, [value]);

  return (
    <textarea
      {...props}
      ref={textareaRef}
      value={value}
      onChange={onChange}
      className="w-full focus:outline-none focus:ring-0 resize-none whitespace-pre-wrap break-words overflow-hidden"
    />
  );
};

export default AutoResizeTextarea;
