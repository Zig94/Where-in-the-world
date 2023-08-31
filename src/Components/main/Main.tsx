import { useState } from 'react'
import CountryCard from '../countries/CountryCard'
import CountyList from '../countries/CountyList'
import SearchArea from '../searchArea/SearchArea'
import SearchInput from '../searchArea/SearchInput'
import SearchSelect from '../searchArea/SearchSelect'
import Country from '../types/CountryTypes'
import useFetchCountry from '../customHook/useFetchCountry'
import Loader from './Loader'
import ErrorMessage from './ErrorMessage'

const Main = ({ isDarkMode }: { isDarkMode: boolean }): JSX.Element => {
	const [isRegionBtnActive, setIsRegionBtnActive] = useState(false)
	const [selectedRegion, setSelectedRegion] = useState<string>('Search by Region')
	const [searchCountry, setSearchCountry] = useState<string>('')

	const handleActiveButton = () => {
		setIsRegionBtnActive(is => !is)
	}

	const handleSelectedRegion = (region: string) => {
		if (selectedRegion === region) return
		setSelectedRegion(region)
		setSearchCountry('')
		handleActiveButton()
	}
	const hadleSearchInput = (value: string) => {
		setSearchCountry(value)
		setSelectedRegion('Search by Region')
	}

	const fetching = searchCountry !== '' ? searchCountry : selectedRegion
	const key = searchCountry !== '' ? 'name' : 'region'

	const { countries, isLoading, error } = useFetchCountry(fetching, key)
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
			<section className="countries-section">
				{isLoading && <Loader isDarkMode={isDarkMode} />}
				{!isLoading && !error && (
					<CountyList>
						{countries.map((country: Country) => (
							<CountryCard country={country} isDarkMode={isDarkMode} key={country.capital} />
						))}
					</CountyList>
				)}
				{error && <ErrorMessage error={error} isDarkMode={isDarkMode} />}
			</section>
		</main>
	)
}

export default Main
