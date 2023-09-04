import CountryDetailFlag from './CountryDetailFlag'
import CountryDetailBox from './CountryDetailBox'
import CountryDetailBorders from './CountryDetailBorders'
import CountryDetailInfo from './CountryDetailInfo'

interface CountryDetails {
	name: {
		common: string
		official: string
	}
	capital: string
	flags: {
		png: string
	}
	population: string
	region: string
	subregion: string
	maps: {
		googleMaps: string
	}
}

interface CountryDetails {
	isDarkMode: boolean
	onHandleShowDetails: () => void
	countryDetails: CountryDetails
}

const CountryDetails: React.FC<CountryDetails> = ({ isDarkMode, onHandleShowDetails, countryDetails }) => {
	const { capital, flags, name, population, region, subregion, maps } = countryDetails

	return (
		<section className="details-section">
			<button className={`btn btn-detail btn-back ${isDarkMode ? 'dark-mode' : ''}`} onClick={onHandleShowDetails}>
				<i className="fa-solid fa-arrow-left"></i>Back
			</button>
			<div className={`details-box ${isDarkMode ? 'dark-mode-box' : ''}`}>
				<CountryDetailFlag flagUrl={flags?.png} flagAlt={name?.common} />
				<CountryDetailBox>
					<CountryDetailInfo
						capital={capital[0]}
						population={population.toLocaleString()}
						countryRegion={region}
						countryName={name.common}
						officialName={name.official}
						subRegion={subregion}
						location={maps.googleMaps}
					/>
					<CountryDetailBorders isDarkMode={isDarkMode} />
				</CountryDetailBox>
			</div>
		</section>
	)
}
export default CountryDetails
