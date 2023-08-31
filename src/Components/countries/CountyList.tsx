import { ReactNode } from 'react'

const CountyList = ({ children }: { children: ReactNode }) => {
	return <ul className="countries-list">{children}</ul>
}
export default CountyList
