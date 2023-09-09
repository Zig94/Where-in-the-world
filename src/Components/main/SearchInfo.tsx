import PopupTitle from './PopupTitle'

const SearchInfo = ({ isDarkMode }: { isDarkMode: boolean }) => {
	return (
		<div className={`popup ${isDarkMode ? 'dark-mode-box ' : ''}`}>
			<PopupTitle title="Enter a country name or select a region to start a search." />
		</div>
	)
}
export default SearchInfo
