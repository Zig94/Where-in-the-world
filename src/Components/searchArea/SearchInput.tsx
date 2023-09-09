import { useRef } from 'react'

interface Search {
	isDarkMode: boolean
	searchCountry: string
	onHandleSearchInput: (value: string) => void
}

const SearchInput: React.FC<Search> = ({ isDarkMode, searchCountry, onHandleSearchInput }) => {
	const inputRef = useRef<HTMLInputElement | null>(null)

	const inputSelectedText = () => {
		const input = inputRef.current
		if (input && input.dataset.clicked) {
			input.setSelectionRange(0, input.value.length)
		} else if (input) {
			input.select()
			input.dataset.clicked = 'true'
		}
	}

	return (
		<div className="input-box">
			<label htmlFor="searchInput">
				<i className={`fa-solid fa-magnifying-glass ${isDarkMode && 'dark-mode'}`}></i>
			</label>
			<input
				className={`search-input ${isDarkMode && 'dark-mode'}`}
				id="searchInput"
				ref={inputRef}
				type="text"
				autoComplete="off"
				placeholder="Search for a country..."
				value={searchCountry}
				onChange={e => onHandleSearchInput(e.target.value)}
				onClick={inputSelectedText}
			/>
		</div>
	)
}
export default SearchInput
