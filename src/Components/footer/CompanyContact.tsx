import ContactLink from './ContactLink'

export const CompanyContact = () => {
	return (
		<div className="contact">
			<p className="contant-title">Let's Discuss What's Next</p>
			<p className="footer-text">Have a project or a question?</p>
			<p className="footer-text">We'd love to hear from you.</p>
			<ContactLink link="#" children="contact us" target="_self" />
		</div>
	)
}
export default CompanyContact
