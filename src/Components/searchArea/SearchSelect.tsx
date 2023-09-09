interface Region {
	isDarkMode: boolean
	selectedRegion: string
	onHandleSelectedRegion: (region: string) => void
	onHandleActiveButton: () => void
	isRegionBtnActive: boolean
}

const SearchSelect: React.FC<Region> = ({
	isDarkMode,
	selectedRegion,
	onHandleSelectedRegion,
	onHandleActiveButton,
	isRegionBtnActive,
}) => {
	const regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania']

	return (
		<div className={`drop ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
			<button className="btn btn-drop" onClick={onHandleActiveButton}>
				<span className="no-click">{selectedRegion}</span>
				<i className={`fa-solid no-click ${!isRegionBtnActive ? 'fa-chevron-down' : 'fa-chevron-up'} `}></i>
			</button>
			{isRegionBtnActive && (
				<ul className={`region-list ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
					{regions.map(region => (
						<li
							key={region.toLowerCase()}
							id={region.toLowerCase()}
							className="list-item"
							onClick={() => onHandleSelectedRegion(region)}>
							{region}
						</li>
					))}
				</ul>
			)}
		</div>
	)
}
export default SearchSelect

{
	/* <li id="africa" className="list-item">
						Africa
					</li>
					<li id="america" className="list-item">
						America
					</li>
					<li id="asia" className="list-item">
						Asia
					</li>
					<li id="europe" className="list-item">
						Europe
					</li>
					<li id="oceania" className="list-item">
						Oceania
					</li> */
}
