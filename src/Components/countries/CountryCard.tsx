import Country from '../types/CountryTypes'

interface CountryCard {
	country: Country
	isDarkMode: boolean
	onHandleDetails: (name: string) => void
}

const CountryCard: React.FC<CountryCard> = ({ country, isDarkMode, onHandleDetails }) => {
	const { capital, flags, name, population, region } = country

	return (
		<li className={`country-card ${isDarkMode ? 'dark-mode' : ''}`} onClick={() => onHandleDetails(name.common)}>
			<img src={flags.png} alt={`Flag of ${name.common} `} className="country-img" />
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
