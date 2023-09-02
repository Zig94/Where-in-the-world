import Country from '../types/CountryTypes'

interface CountryCard {
	country: Country
	isDarkMode: boolean
	onHandleShowDetails: () => void
}

const CountryCard: React.FC<CountryCard> = ({ country, isDarkMode, onHandleShowDetails }) => {
	const { capital, flags, name, population, region } = country

	return (
		<li className={`country-card ${isDarkMode ? 'dark-mode' : ''}`} onClick={onHandleShowDetails}>
			<img src={flags.png} alt={`flag of ${name.common} `} className="country-img" />
			<div className="card-box">
				<h2>{name.common}</h2>
				<p className="card-info">
					Populaion: <span>{population}</span>
				</p>
				<p className="card-info">
					Region: <span>{region}</span>
				</p>
				<p className="card-info">
					Capital: <span>{capital}</span>
				</p>
			</div>
		</li>
	)
}
export default CountryCard
