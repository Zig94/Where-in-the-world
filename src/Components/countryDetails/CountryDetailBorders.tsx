import { useEffect, useState } from 'react'

interface Borders {
	isDarkMode: boolean
	bordersList: string
	capital: []
	onHandleDetails: (name: string) => void
}

const CountryDetailBorders: React.FC<Borders> = ({ isDarkMode, bordersList, onHandleDetails }) => {
	const [bordersData, setBordersData] = useState<object[]>([])

	useEffect(
		function () {
			async function fetchBordersData() {
				if (!bordersList) return

				try {
					const res = await fetch(`https://restcountries.com/v3.1/alpha?codes=${bordersList}`)

					if (!res.ok) throw new Error('Borders not found...')

					const countryData = await res.json()
					setBordersData(countryData)
				} catch (err) {
					console.log(err.message)
				}
			}
			fetchBordersData()
		},
		[bordersList]
	)

	return (
		<div className="borders-box">
			<p className="border-text">Border Countries:</p>
			{bordersData.length > 0 ? (
				<div className="border-btns">
					{bordersData.map(border => (
						<button
							className={`btn btn-detail btn-border ${isDarkMode ? 'dark-mode' : ''}`}
							key={border.capital}
							onClick={() => onHandleDetails(border.capital)}>
							{border.name?.common}
						</button>
					))}
				</div>
			) : (
				<p>The country has no borders with another country</p>
			)}
		</div>
	)
}
export default CountryDetailBorders
