import { useEffect, useState } from 'react'
import CompanyAdress from './CompanyAdress'
import CompanyContact from './CompanyContact'
import CompanySocials from './CompanySocials'

interface Footer {
	isDarkMode: boolean
}

const Footer: React.FC<Footer> = ({ isDarkMode }) => {
	const [curYear, setCurYear] = useState('')

	useEffect(function () {
		const currentYear = new Date().getFullYear()
		setCurYear(currentYear.toString())
	}, [])

	return (
		<footer className={`footer ${isDarkMode ? 'dark-mode' : ''}`}>
			<div className="wrapper">
				<div className="footer-box-one">
					<CompanyAdress isDarkMode={isDarkMode} />
					<CompanySocials />
					<CompanyContact isDarkMode={isDarkMode} />
				</div>
				<div className="footer-box-two">
					<p className={`footer-text ${isDarkMode ? 'dark-mode-foot' : ''}`}>
						&copy;
						<span> {curYear} </span>
						World Media. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
