// import { useEffect, useState } from 'react'
import Header from './Components/header/Header'
import Main from './Components/main/Main'
import useLightDarkMode from './Components/customHook/useLightDarkMode'
function App() {
	const [isDarkMode, handleChangeMode] = useLightDarkMode()

	return (
		<>
			<Header isDarkMode={isDarkMode} onHandleChangeMode={handleChangeMode} />
			<Main isDarkMode={isDarkMode} />
		</>
	)
}

export default App
