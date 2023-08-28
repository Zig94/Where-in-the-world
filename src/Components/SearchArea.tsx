import { ReactNode } from 'react'

const SearchArea = ({ children }: { children: ReactNode }): JSX.Element => {
	return <div className="search-area">{children}</div>
}
export default SearchArea
