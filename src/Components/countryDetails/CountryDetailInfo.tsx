interface CountryDetails {
	countryName: string
	population: number
	countryRegion: string
}

const CountryDetailInfo: React.FC<CountryDetails> = () => {
	return (
		<div className="details-info-box">
			<div className="info-one">
				<p className="info-text">
					Native Name: <span>ghf</span>
				</p>
				<p className="info-text">
					Population: <span>kjgh</span>
				</p>
				<p className="info-text">
					Region:<span>kgj</span>
				</p>
				<p className="info-text">
					Sub Region: <span>Western Europe</span>
				</p>
				<p className="info-text">
					Capital: <span>dupa</span>
				</p>
			</div>
			<div className="info-two">
				<p className="info-text">
					Top Level Demain: <span>.be</span>
				</p>
				<p className="info-text">
					Currencies: <span>Euro</span>
				</p>
				<p className="info-text">
					Languages: <span>Dutch, French, German</span>
				</p>
			</div>
		</div>
	)
}

export default CountryDetailInfo
