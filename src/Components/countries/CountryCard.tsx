import Country from '../types/CountryTypes'

const CountryCard = ({ country, isDarkMode }: { country: Country; isDarkMode: boolean }) => {
	const { capital, flags, name, population, region } = country

	return (
		<li className={`country-card ${isDarkMode && 'dark-mode'}`}>
			<img src={flags.png} alt="x" className="country-img" />
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
