import { useState } from 'react'
import CountryCard from './CountryCard'
import CountyList from './CountyList'
import SearchArea from './SearchArea'
import SearchInput from './SearchInput'
import SearchSelect from './SearchSelect'
import Country from './CountryTypes'
import useFetchCountry from './useFetchCountry'

const Main = ({ isDarkMode }: { isDarkMode: boolean }): JSX.Element => {
	const [isRegionBtnActive, setIsRegionBtnActive] = useState(false)
	const [selectedRegion, setSelectedRegion] = useState<string>('Filter by Region')
	const [searchCountry, setSearchCountry] = useState<string>('')

	const handleActiveButton = () => {
		setIsRegionBtnActive(is => !is)
	}

	const handleSelectedRegion = (region: string) => {
		if (selectedRegion === region) return
		setSelectedRegion(region)
		handleActiveButton()
	}
	const hadleSearchInput = (value: string) => {
		setSearchCountry(value)
	}

	const fetching = searchCountry !== '' ? searchCountry : selectedRegion
	const key = searchCountry !== '' ? 'name' : 'region'

	const { countries, isLoading } = useFetchCountry(fetching, key)
	return (
		<main className="main wrapper">
			<SearchArea>
				<SearchInput isDarkMode={isDarkMode} searchCountry={searchCountry} onHandleSearchInput={hadleSearchInput} />
				<SearchSelect
					isDarkMode={isDarkMode}
					onHandleSelectedRegion={handleSelectedRegion}
					onHandleActiveButton={handleActiveButton}
					isRegionBtnActive={isRegionBtnActive}
					selectedRegion={selectedRegion}
				/>
			</SearchArea>
			{!isLoading ? (
				<CountyList className="countries-list">
					{countries.map((country: Country) => (
						<CountryCard country={country} isDarkMode={isDarkMode} key={country.capital} />
					))}
				</CountyList>
			) : (
				<CountyList className="loader-box">
					<li className={`loader ${!isDarkMode && 'dark-mode-loader'}`}></li>
				</CountyList>
			)}
		</main>
	)
}

export default Main
