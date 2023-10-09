import Spinner from "./spinner"

export default function Button({ children, type, className, onClick, loading }) {

	function getButtonStyle(type) {
		switch (type) {
			case "primary":
				return "px-6 py-2 bg-hlinoteka-gray hover:bg-hlinoteka-active text-hlinoteka-active hover:text-hlinoteka-dark"
			case "secondary":
				return "px-6 py-2 bg-hlinoteka-gray hover:bg-hlinoteka-active text-hlinoteka-light hover:text-hlinoteka-dark"
			case "tertiary":
				return "px-6 py-2 bg-hlinoteka-dark hover:bg-hlinoteka-active text-hlinoteka-active hover:text-hlinoteka-dark"
			case "disabled":
				return "px-6 py-2 bg-hlinoteka-gray text-hlinoteka-light cursor-not-allowed"
			case "icon":
				return "p-[8px] bg-hlinoteka-gray hover:bg-hlinoteka-active text-hlinoteka-active hover:text-hlinoteka-dark"
			case "icon-dark":
				return "p-[8px] bg-hlinoteka-dark hover:bg-hlinoteka-light text-hlinoteka-light hover:text-hlinoteka-dark border border-hlinoteka-light"
			case "icon-mobile":
				return "px-[16px] py-[4px] bg-hlinoteka-dark text-hlinoteka-special border border-hlinoteka-special"
			default:
				return "px-6 py-2 bg-hlinoteka-gray hover:bg-hlinoteka-active text-hlinoteka-active hover:text-hlinoteka-dark"
		}
	}

	return (
		<button
			className={`${getButtonStyle(type)} ${className} font-bold uppercase rounded-3xl transition-colors duration-300 ease-in-out`}
			onClick={onClick}
			disabled={type === "disabled" ? true : false}
		>
			{loading ? (
				<Spinner size="small" />
			) : (
				children
			)}
		</button>
	)
}