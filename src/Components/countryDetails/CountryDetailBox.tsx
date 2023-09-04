import { ReactNode } from 'react'

const CountryDetailBox = ({ children }: { children: ReactNode }) => {
	return (
		<div className="details-country-box">
			<h2 className="details-title">Belgium</h2>
			{children}
		</div>
	)
}
export default CountryDetailBox
