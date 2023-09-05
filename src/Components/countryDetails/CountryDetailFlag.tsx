interface FlagDetails {
	flagUrl?: string
	flagAlt?: string
	isDarkMode: boolean
}

const CountryDetailFlag: React.FC<FlagDetails> = ({ flagUrl, flagAlt, isDarkMode }) => {
	return <img src={flagUrl} alt={flagAlt} className={`details-img ${isDarkMode ? 'dark-mode' : ''}`} />
}
export default CountryDetailFlag
