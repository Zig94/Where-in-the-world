interface FlagDetails {
	flagUrl: string
	flagAlt: string
}

const CountryDetailFlag: React.FC<FlagDetails> = ({ flagUrl, flagAlt }) => {
	return <img src={flagUrl} alt={flagAlt} className="details-img" />
}
export default CountryDetailFlag
