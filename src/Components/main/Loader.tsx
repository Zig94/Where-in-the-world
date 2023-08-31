const Loader = ({ isDarkMode }: { isDarkMode: boolean }) => {
	return (
		<div className="loader-box">
			<div className={`loader ${isDarkMode && 'dark-mode-loader'}`}></div>
		</div>
	)
}
export default Loader
