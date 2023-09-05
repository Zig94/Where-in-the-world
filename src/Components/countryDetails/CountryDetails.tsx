import CountryDetailFlag from './CountryDetailFlag'
import CountryDetailBox from './CountryDetailBox'
import CountryDetailBorders from './CountryDetailBorders'
import CountryDetailInfo from './CountryDetailInfo'

interface Details {
	name?: {
		common?: string
		official?: string
	}
	capital?: [string]
	flags?: {
		png?: string
	}
	population?: string
	region?: string
	subregion?: string
	maps?: {
		googleMaps?: string
	}
	languages: object
	currencies?: object
	currenciesType: string
	borders: string[]
}

interface CountryDetails {
	isDarkMode: boolean
	onHandleShowDetails: () => void
	countryDetails: Details
	languagesList: string
	bordersList: string
	onHandleDetails: (name: string) => void
}

const CountryDetails: React.FC<CountryDetails> = ({
	isDarkMode,
	onHandleShowDetails,
	countryDetails,
	onHandleDetails,
}) => {
	const { capital, flags, name, population, region, subregion, maps, currencies, languages, borders } = countryDetails

	const currenciesType = currencies ? Object.keys(currencies)[0] : ''
	const currenciesName: string = currencies[currenciesType]?.name

	const languagesList = Object.values(languages).join(' , ')
	const bordersList = borders.join(',')

	return (
		<section className="details-section">
			<button className={`btn btn-detail btn-back ${isDarkMode ? 'dark-mode' : ''}`} onClick={onHandleShowDetails}>
				<i className="fa-solid fa-arrow-left"></i>Back
			</button>
			<div className={`details-box ${isDarkMode ? 'dark-mode-box' : ''}`}>
				<CountryDetailFlag flagUrl={flags?.png} flagAlt={name?.common} isDarkMode={isDarkMode} />
				<CountryDetailBox>
					<CountryDetailInfo
						capital={capital ? capital[0] : ''}
						population={population?.toLocaleString()}
						countryRegion={region}
						countryName={name?.common}
						officialName={name?.official}
						subRegion={subregion}
						location={maps?.googleMaps}
						currenciesName={currenciesName}
						languagesList={languagesList}
					/>
					<CountryDetailBorders isDarkMode={isDarkMode} bordersList={bordersList} onHandleDetails={onHandleDetails} />
				</CountryDetailBox>
			</div>
		</section>
	)
}
export default CountryDetails
