// import { useEffect, useState } from 'react'
import Header from './Components/header/Header'
import Main from './Components/main/Main'
import useLightDarkMode from './Components/customHook/useLightDarkMode'
import Footer from './Components/footer/Footer'
function App() {
	const [isDarkMode, handleChangeMode] = useLightDarkMode()

	return (
		<>
			<Header isDarkMode={isDarkMode} onHandleChangeMode={handleChangeMode} />
			<Main isDarkMode={isDarkMode} />
			<Footer isDarkMode={isDarkMode} />
		</>
	)
}

export default App
