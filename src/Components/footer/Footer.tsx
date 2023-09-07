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
		<footer className={`footer ${isDarkMode ? 'dark-mode-box' : ''}`}>
			<div className="footer-box-one">
				<CompanyAdress />
				<CompanySocials />
				<CompanyContact />
			</div>
			<div className="footer-box-two">
				<p>
					&copy;
					<span>{curYear}</span>
					World Media. All rights reserved.
				</p>
			</div>
		</footer>
	)
}

export default Footer
