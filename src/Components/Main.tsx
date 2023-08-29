import { useState, useEffect } from 'react'
import CountryCard from './CountryCard'
import CountyList from './CountyList'
import SearchArea from './SearchArea'
import SearchInput from './SearchInput'
import SearchSelect from './SearchSelect'

const Main = ({ isDarkMode }: { isDarkMode: boolean }): JSX.Element => {
	const [countries, setCountries] = useState<[]>([])
	const [isRegionBtnActive, setIsRegionBtnActive] = useState(false)
	const [selectedRegion, setSelectedRegion] = useState<string>('Filter by Region')

	const handleActiveButton = () => {
		setIsRegionBtnActive(is => !is)
	}

	const handleSelectedRegion = (region: string) => {
		if (selectedRegion === region) return
		setSelectedRegion(region)
		handleActiveButton()
	}

	useEffect(
		function () {
			async function countriesFetch() {
				if (selectedRegion === 'Filter by Region') return
				const res = await fetch(
					`https://restcountries.com/v3.1/region/${selectedRegion}?fields=name,capital,flags,region,population`
				)
				const data = await res.json()
				setCountries(data)
			}
			countriesFetch()
		},
		[selectedRegion]
	)
	// console.log(data)

	return (
		<main className="main wrapper">
			<SearchArea>
				<SearchInput isDarkMode={isDarkMode} />
				<SearchSelect
					isDarkMode={isDarkMode}
					onHandleSelectedRegion={handleSelectedRegion}
					onHandleActiveButton={handleActiveButton}
					isRegionBtnActive={isRegionBtnActive}
					selectedRegion={selectedRegion}
				/>
			</SearchArea>
			<CountyList>
				{countries.map(country => (
					<CountryCard country={country} key={country?.capital} isDarkMode={isDarkMode} />
				))}
			</CountyList>
		</main>
	)
}

export default Main
