import { ReactNode } from 'react'

interface ContactLink {
	link: string
	target: string
	children: ReactNode
}

const ContactLink: React.FC<ContactLink> = ({ link, children, target }) => {
	return (
		<a href={link} target={target} rel="noopener" className="adress-link">
			{children} <i className="fa-solid fa-chevron-right direction"></i>
		</a>
	)
}
export default ContactLink
