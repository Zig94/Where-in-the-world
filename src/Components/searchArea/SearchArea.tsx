import { ReactNode } from 'react'

const SearchArea = ({ children }: { children: ReactNode }): JSX.Element => {
	return <section className="search-area">{children}</section>
}
export default SearchArea
