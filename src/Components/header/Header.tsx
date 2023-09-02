interface HeaderProps {
	isDarkMode: boolean
	onHandleChangeMode: () => void
}

const Header: React.FC<HeaderProps> = ({ onHandleChangeMode, isDarkMode }) => {
	return (
		<header className={`header ${!isDarkMode ? 'light-mode' : 'dark-mode'}`}>
			<div className="wrapper header-box">
				<h1 className="title">Where in the world?</h1>
				<button className="btn btn-mode" onClick={onHandleChangeMode}>
					{isDarkMode ? <i className="fa-regular fa-moon"></i> : <i className="fa-regular fa-sun"></i>}
					{isDarkMode ? 'Dark' : 'Light'} Mode
				</button>
			</div>
		</header>
	)
}
export default Header
