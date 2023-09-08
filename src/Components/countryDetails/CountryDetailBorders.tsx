import { useEffect, useState } from 'react'

interface Borders {
	isDarkMode: boolean
	bordersList: string
	onHandleDetails: (name: string) => void
}

interface Border {
	name: {
		common?: string
	}
	capital?: string
	cca3: string
}

const CountryDetailBorders: React.FC<Borders> = ({ isDarkMode, bordersList, onHandleDetails }) => {
	const [bordersData, setBordersData] = useState<Border[]>([])

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
					console.log((err as Error).message)
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
							key={border.cca3}
							onClick={() => onHandleDetails(border.cca3 || '')}>
							{border.name?.common}
						</button>
					))}
				</div>
			) : (
				<p className="no-borders">This country does not share borders with any other country.</p>
			)}
		</div>
	)
}
export default CountryDetailBorders
