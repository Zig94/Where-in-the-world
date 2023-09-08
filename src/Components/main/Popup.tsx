const Popup = ({ isDarkMode }: { isDarkMode: boolean }) => {
	return (
		<div className={`popup ${isDarkMode ? 'dark-mode-box ' : ''}`}>
			<p className="popup-title">Welcome to our app!</p>
			<p className="popus-text">
				Our app allows you to easily and quickly search for any country in the world and provides access to basic
				information about it.
			</p>
			<p className="popup-title">How does it work?</p>
			<p className="popus-text">
				You have two simple options: you can search for a specific country or delve deeper into the region you are
				interested in.
			</p>
			<p className="popus-text">
				Select the country you are interested in, and we will provide you with basic information such as location,
				capital, official language and currency. It's a great way to quickly find basic information about a country.
			</p>
			<p className="popup-title">We never stop developing!</p>
			<p className="popus-text">
				We want to make our app even more useful and inspiring. Furthermore, we are constantly working on adding new
				features and updates to make your travel planning even better.
			</p>
			<p className="popus-text">
				Let's make your travels full of adventures and unforgettable moments. Let's discover a fascinating world
				together!
			</p>
		</div>
	)
}

export default Popup
