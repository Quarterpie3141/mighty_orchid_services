import { useCallback, useEffect, useRef } from "react";

interface AutoGrowingTextareaProps
	extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	value: string;
}

const AutoGrowingTextarea: React.FC<AutoGrowingTextareaProps> = ({
	value,
	...props
}) => {
	const textareaRef = useRef<HTMLTextAreaElement | null>(null);

	const adjustHeight = useCallback(() => {
		if (textareaRef.current) {
			textareaRef.current.style.height = "auto"; // Reset the height
			textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Set based on scrollHeight
		}
	}, []);

	useEffect(() => {
		// Adjust height initially
		adjustHeight();
	}, [adjustHeight]);

	return (
		<textarea
			ref={textareaRef}
			rows={1}
			value={value}
			className="border-b-2 border-mto-blue w-full resize-none"
			{...props}
		/>
	);
};

export default AutoGrowingTextarea;
