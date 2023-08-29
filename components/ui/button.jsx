export default function Button({ children, type, className }) {

	function getButtonStyle(type) {
		switch (type) {
			case "primary":
				return "bg-hlinoteka-gray hover:bg-hlinoteka-active text-hlinoteka-active hover:text-hlinoteka-dark"
			case "secondary":
				return "bg-hlinoteka-gray hover:bg-hlinoteka-active text-white hover:text-hlinoteka-dark"
			case "tertiary":
				return "bg-hlinoteka-dark hover:bg-hlinoteka-active text-hlinoteka-active hover:text-hlinoteka-dark"
			default:
				return "bg-hlinoteka-gray hover:bg-hlinoteka-active text-hlinoteka-active hover:text-hlinoteka-dark"
		}
	}

	return (
		<button
			className={`px-6 py-2 ${getButtonStyle(type)} ${className} text-xs font-bold uppercase rounded-3xl transition-colors duration-300 ease-in-out`}
		>
			{children}
		</button>
	)
}