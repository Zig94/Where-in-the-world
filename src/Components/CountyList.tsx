import { ReactNode } from 'react'

const CountyList = ({ children }: { children: ReactNode }) => {
	return (
		<section className="countries-section">
			<ul className="countries-list">{children}</ul>
		</section>
	)
}
export default CountyList
