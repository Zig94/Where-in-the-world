interface CountryDetails {
	countryName?: string
	population?: string
	countryRegion?: string
	capital?: string
	officialName?: string
	subRegion?: string
	location?: string
	currenciesName: string
	languagesList: string
}

const CountryDetailInfo: React.FC<CountryDetails> = ({
	countryName,
	population,
	countryRegion,
	capital,
	officialName,
	subRegion,
	location,
	currenciesName,
	languagesList,
}) => {
	return (
		<>
			<h2 className="details-title">{countryName}</h2>
			<div className="details-info-box">
				<div className="info-one">
					<p className="info-text">
						Official Name: <span>{officialName}</span>
					</p>
					<p className="info-text">
						Population: <span>{population}</span>
					</p>
					<p className="info-text">
						Region:<span>{countryRegion}</span>
					</p>
					<p className="info-text">
						Sub Region: <span>{subRegion}</span>
					</p>
					<p className="info-text">
						Capital: <span>{capital}</span>
					</p>
					<p className="info-text">
						Location:
						<a href={location} target="_blank" rel="noopener" className="map-link">
							Go to map
						</a>
					</p>
				</div>
				<div className="info-two">
					<p className="info-text">
						Coś tutaj damy: <span>dupa</span>
					</p>
					<p className="info-text">
						Currencies: <span>{currenciesName}</span>
					</p>
					<p className="info-text">
						Languages: <span>{languagesList}</span>
					</p>
				</div>
			</div>
		</>
	)
}

export default CountryDetailInfo
