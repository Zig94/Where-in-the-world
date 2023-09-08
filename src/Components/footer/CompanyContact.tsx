import ContactLink from './ContactLink'

const CompanyContact = ({ isDarkMode }: { isDarkMode: boolean }) => {
	return (
		<div className="contact">
			<p className="social-title">Let's Discuss What's Next</p>
			<p className={`footer-text ${isDarkMode ? 'dark-mode-foot' : ''}`}>Have a project or a question?</p>
			<p className={`footer-text ${isDarkMode ? 'dark-mode-foot' : ''}`}>We'd love to hear from you.</p>
			<ContactLink link="mailto: test123@worldmedia.com" children="contact us" target="_self" />
		</div>
	)
}
export default CompanyContact
