import { ReactNode } from 'react'

const CountyList = ({ children, className }: { children: ReactNode; className: 'string' }) => {
	return (
		<section className="countries-section">
			<ul className={className}>{children}</ul>
		</section>
	)
}
export default CountyList
