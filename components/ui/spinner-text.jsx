"use client"

import ReactCurvedText from "react-curved-text"

export default function SpinnerText({ className }) {
	return (
		<div className={`${className}`}>
			<div className="spinner">
				<ReactCurvedText
					width={300}
					height={300}
					cx={150}
					cy={150}
					rx={125}
					ry={125}
					startOffset={0}
					text="HLINOTÉKA • PRAGUE CERAMIC STUDIO • HLINOTÉKA • PRAGUE CERAMIC STUDIO • "
					textProps={{ style: { fill: "#6400FF" } }}
				/>
			</div>
		</div>
	)
}