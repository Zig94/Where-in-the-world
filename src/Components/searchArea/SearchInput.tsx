interface Search {
	isDarkMode: boolean
	searchCountry: string
	onHandleSearchInput: (value: string) => void
}

const SearchInput: React.FC<Search> = ({ isDarkMode, searchCountry, onHandleSearchInput }) => {
	return (
		<div className="input-box">
			<label htmlFor="searchInput">
				<i className={`fa-solid fa-magnifying-glass ${isDarkMode && 'dark-mode'}`}></i>
			</label>
			<input
				className={`search-input ${isDarkMode && 'dark-mode'}`}
				id="searchInput"
				type="text"
				placeholder="Search for a country..."
				value={searchCountry}
				onChange={e => onHandleSearchInput(e.target.value)}
			/>
		</div>
	)
}
export default SearchInput
