"use client"

import ReactCurvedText from "react-curved-text"

export default function SpinnerText({ className }) {
	return (
		<div className={`${className}`}>
			<div className="spinner">
				<ReactCurvedText
					width={320}
					height={320}
					cx={160}
					cy={160}
					rx={158}
					ry={158}
					startOffset={0}
					text="PRAGUE CERAMIC STUDIO • HLINOTÉKA • PRAGUE CERAMIC STUDIO • HLINOTÉKA • "
					textProps={{ style: { fill: "#6400FF" } }}
				/>
			</div>
		</div>
	)
}