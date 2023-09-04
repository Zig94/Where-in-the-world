interface Borders {
	isDarkMode: boolean
}

const CountryDetailBorders: React.FC<Borders> = ({ isDarkMode }) => {
	return (
		<div className="borders-box">
			<p className="border-text">Border Countries:</p>
			<div className="border-btns">
				<button className={`btn btn-detail btn-border ${isDarkMode ? 'dark-mode' : ''}`}>France</button>
				<button className={`btn btn-detail btn-border ${isDarkMode ? 'dark-mode' : ''}`}>Germany</button>
				<button className={`btn btn-detail btn-border ${isDarkMode ? 'dark-mode' : ''}`}>Netherlands</button>
			</div>
		</div>
	)
}
export default CountryDetailBorders
