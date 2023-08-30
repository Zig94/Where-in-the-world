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
	// const [isLoading, setIsLoading] = useState(false)

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

	const { countries } = useFetchCountry(fetching, key)
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
			<CountyList>
				{countries.map((country: Country) => (
					<CountryCard country={country} isDarkMode={isDarkMode} key={country.capital} />
				))}
			</CountyList>
		</main>
	)
}

export default Main
