import { useState, useEffect } from 'react'
import CountryCard from './CountryCard'
import CountyList from './CountyList'
import SearchArea from './SearchArea'
import SearchInput from './SearchInput'
import SearchSelect from './SearchSelect'
import Country from './CountryTypes'

const Main = ({ isDarkMode }: { isDarkMode: boolean }): JSX.Element => {
	const [countries, setCountries] = useState<[]>([])
	const [isRegionBtnActive, setIsRegionBtnActive] = useState(false)
	const [selectedRegion, setSelectedRegion] = useState<string>('Filter by Region')
	const [searchCountry, setSearchCountry] = useState<string>('')
	const [isLoading, setIsLoading] = useState(false)

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
		if (searchCountry.length < 3) {
			setCountries([])
		}
	}

	useEffect(
		function () {
			const controller = new AbortController()

			async function countriesFetchByRegion() {
				if (selectedRegion === 'Filter by Region') return

				try {
					const res = await fetch(
						`https://restcountries.com/v3.1/region/${selectedRegion}?fields=name,capital,flags,region,population`
					)
					if (!res.ok) throw new Error('Country not found.')

					const data = await res.json()
					setCountries(data)
				} catch (err) {
					if (err.name !== 'AbortError') console.log(err.message)
				}
			}
			countriesFetchByRegion()

			return function () {
				controller.abort()
			}
		},
		[selectedRegion]
	)
	useEffect(
		function () {
			const controller = new AbortController()

			async function countriesFetchByName() {
				if (searchCountry === '') return

				try {
					const res = await fetch(
						`https://restcountries.com/v3.1/name/${searchCountry}?fields=name,capital,flags,region,population`,
						{ signal: controller.signal }
					)

					if (!res.ok) throw new Error('Country not found.')

					const data = await res.json()

					setCountries(data)
				} catch (err: unknown) {
					if (err.name !== 'AbortError') console.log(err.message)
				}
			}
			if (searchCountry.length < 3) {
				setCountries([])
				return
			}
			countriesFetchByName()

			return function () {
				controller.abort()
			}
		},
		[searchCountry]
	)
	// console.log(data)

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
