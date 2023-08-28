// import { useState } from 'react'
import Header from './Components/header'
import Main from './Components/Main'
import useLightDarkMode from './Components/useLightDarkMode'
function App() {
	const [isDarkMode, handleChangeMode] = useLightDarkMode()

	return (
		<>
			<Header isDarkMode={isDarkMode} onHandleChangeMode={handleChangeMode} />
			<Main />
		</>
	)
}

export default App
