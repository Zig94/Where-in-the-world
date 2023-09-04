import CountryDetailFlag from './CountryDetailFlag'
import CountryDetailBox from './CountryDetailBox'
import CountryDetailBorders from './CountryDetailBorders'
import CountryDetailInfo from './CountryDetailInfo'

interface CountryDetails {
	isDarkMode: boolean
}

const CountryDetails: React.FC<CountryDetails> = ({ isDarkMode }) => {
	return (
		<section className="details-section">
			<button className={`btn btn-detail btn-back ${isDarkMode ? 'dark-mode' : ''}`}>
				<i className="fa-solid fa-arrow-left"></i>Back
			</button>
			<div className={`details-box ${isDarkMode ? 'dark-mode-box' : ''}`}>
				<CountryDetailFlag />
				<CountryDetailBox>
					<CountryDetailInfo />
					<CountryDetailBorders isDarkMode={isDarkMode} />
				</CountryDetailBox>
			</div>
		</section>
	)
}
export default CountryDetails
