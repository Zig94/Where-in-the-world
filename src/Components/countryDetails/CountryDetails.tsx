import CountryDetailFlag from './CountryDetailFlag'
import CountryDetailBox from './CountryDetailBox'

const CountryDetails = () => {
	return (
		<section>
			<button className="btn brt-back">Back</button>
			<div className="details-box">
				<CountryDetailFlag />
				<CountryDetailBox />
			</div>
		</section>
	)
}
export default CountryDetails
