import CountryDetailFlag from './CountryDetailFlag'
import CountryDetailBox from './CountryDetailBox'
import CountryDetailBorders from './CountryDetailBorders'
import CountryDetailInfo from './CountryDetailInfo'

const CountryDetails = () => {
	return (
		<section className="details-section">
			<button className="btn btn-back">Back</button>
			<div className="details-box">
				<CountryDetailFlag />
				<CountryDetailBox>
					<CountryDetailInfo />
					<CountryDetailBorders />
				</CountryDetailBox>
			</div>
		</section>
	)
}
export default CountryDetails
