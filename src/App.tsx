import { useState } from 'react'
import Header from './Components/header/Header'
import Main from './Components/main/Main'
import useLightDarkMode from './Components/customHook/useLightDarkMode'
import Footer from './Components/footer/Footer'

function App() {
	const [isDarkMode, handleChangeMode] = useLightDarkMode()
	const [showFooter, setShowFooter] = useState(true)

	const handleShowFooter = (arg: boolean) => {
		setShowFooter(arg)
	}

	return (
		<>
			<Header isDarkMode={isDarkMode} onHandleChangeMode={handleChangeMode} />
			<Main isDarkMode={isDarkMode} onHandleShowFooter={handleShowFooter} />
			{showFooter && <Footer isDarkMode={isDarkMode} />}
		</>
	)
}

export default App
