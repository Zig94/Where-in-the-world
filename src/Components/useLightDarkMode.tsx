import { useState, useEffect } from 'react'
const useLightDarkMode = (): [boolean, () => void] => {
	const [isDarkMode, setIsDarkMode] = useState<boolean>(false)
	const handleChangeMode = () => {
		setIsDarkMode(isDark => !isDark)
	}
	useEffect(
		function () {
			!isDarkMode ? document.body.classList.add('dark-mode-bg') : document.body.classList.remove('dark-mode-bg')
		},
		[isDarkMode]
	)
	return [isDarkMode, handleChangeMode]
}
export default useLightDarkMode
