const ErrorMessage = ({ error, isDarkMode }: { error: string; isDarkMode: boolean }) => {
	return (
		<div className="error">
			<p className={`error-text ${isDarkMode && 'dark-mode-error'}`}>{error}</p>
			<p className="error-face">😏</p>
		</div>
	)
}
export default ErrorMessage
