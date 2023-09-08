import { useState, useEffect } from 'react'
import CountryCard from '../countries/CountryCard'
import CountyList from '../countries/CountyList'
import SearchArea from '../searchArea/SearchArea'
import SearchInput from '../searchArea/SearchInput'
import SearchSelect from '../searchArea/SearchSelect'
import Country from '../types/CountryTypes'
import useFetchCountry from '../customHook/useFetchCountry'
import Loader from './Loader'
import ErrorMessage from './ErrorMessage'
import CountryDetails from '../countryDetails/CountryDetails'

const defautRegion = 'Search by region'

interface Main {
	isDarkMode: boolean
	onHandleShowFooter: (arg: boolean) => void
}

const Main: React.FC<Main> = ({ isDarkMode, onHandleShowFooter }) => {
	const [isRegionBtnActive, setIsRegionBtnActive] = useState(false)
	const [selectedRegion, setSelectedRegion] = useState<string>(defautRegion)
	const [searchCountry, setSearchCountry] = useState<string>('')
	const [showDetails, setShowDetails] = useState(false)
	const [selectedCountry, setSelectedCountry] = useState('')
	const [countryDetails, setCountryDetails] = useState({})

	const fetching = searchCountry !== '' ? searchCountry : selectedRegion
	const key = searchCountry !== '' ? 'name' : 'region'

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
		setSelectedRegion(defautRegion)
		setIsRegionBtnActive(false)
	}

	const handleShowCountryDetails = () => {
		setShowDetails(show => !show)
		setSelectedCountry('')
		onHandleShowFooter(true)
	}

	const handleCountryDetails = (name: string) => {
		setSelectedCountry(() => name)
		onHandleShowFooter(false)
		if (window.innerWidth < 768) {
			window.scrollTo({ top: 100, behavior: 'smooth' })
		}
	}

	const { countries, isLoading, error, setIsLoading, setError } = useFetchCountry(fetching, key, defautRegion)

	useEffect(
		function () {
			const controller = new AbortController()

			async function countriesDetailsFetch() {
				if (selectedCountry === '') return
				setIsLoading(true)
				setError('')

				try {
					const res = await fetch(
						`https://restcountries.com/v3.1/capital/${selectedCountry}?fields=name,capital,flags,region,population,subregion,maps,languages,currencies,borders`,
						{
							signal: controller.signal,
						}
					)
					if (!res.ok) throw new Error('Country not found...')

					const detailsData = await res.json()
					setCountryDetails(detailsData.at(0))
					setShowDetails(true)
				} catch (err) {
					if ((err as Error).name !== 'AbortError') setError((err as Error).message)
				} finally {
					setIsLoading(false)
				}
			}

			countriesDetailsFetch()

			return function () {
				controller.abort()
			}
		},
		[selectedCountry, setCountryDetails, setError, setIsLoading]
	)

	return (
		<main className="main wrapper">
			{!showDetails ? (
				<>
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
									<CountryCard
										country={country}
										isDarkMode={isDarkMode}
										key={country.name.common}
										onHandleDetails={handleCountryDetails}
									/>
								))}
							</CountyList>
						)}
						{error && searchCountry != '' && <ErrorMessage error={error} isDarkMode={isDarkMode} />}
					</section>
				</>
			) : (
				<CountryDetails
					isDarkMode={isDarkMode}
					onHandleShowDetails={handleShowCountryDetails}
					countryDetails={countryDetails}
					onHandleDetails={handleCountryDetails}
				/>
			)}
		</main>
	)
}

export default Main
