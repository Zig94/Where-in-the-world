import PopupText from './PopupText'
import PopupTitle from './PopupTitle'

interface Popup {
	isDarkMode: boolean
}

const Popup: React.FC<Popup> = ({ isDarkMode }) => {
	return (
		<div className={`popup ${isDarkMode ? 'dark-mode-box ' : ''}`}>
			<PopupTitle title="Welcome to our app!" />
			<PopupText
				text="Our app allows you to easily and quickly search for any country in the world and provides access to basic
				information about it."
			/>
			<PopupTitle title="How does it work?" />
			<PopupText
				text="You have two simple options: you can search for a specific country or delve deeper into the region you are
				interested in."
			/>
			<PopupText
				text="Select the country you are interested in, and we will provide you with basic information such as location,
				capital, official language and currency. It's a great way to quickly find basic information about a country."
			/>
			<PopupTitle title="We never stop developing!" />
			<PopupText
				text="We want to make our app even more useful and inspiring. Furthermore, we are constantly working on adding new
				features and updates to make your travel planning even better."
			/>
			<PopupText
				text="Let's make your travels full of adventures and unforgettable moments. Let's discover a fascinating world
				together!"
			/>
		</div>
	)
}

export default Popup
