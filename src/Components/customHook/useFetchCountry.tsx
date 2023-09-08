import { useEffect, useState } from 'react'

const useFetchCountry = (search: string, key: string, defaultRegion: string) => {
	const [countries, setCountries] = useState<[]>([])
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState('')

	useEffect(
		function () {
			const controller = new AbortController()

			async function countriesFetch() {
				if (search.length < 1) {
					setCountries([])
					setError('')
					return
				}
				if (search === defaultRegion) {
					setCountries([])
					return
				}
				setIsLoading(true)
				setError('')

				try {
					const res = await fetch(
						`https://restcountries.com/v3.1/${key}/${search}?fields=name,capital,flags,region,population,cca3`,
						{ signal: controller.signal }
					)
					if (!res.ok) throw new Error('Country not found...')

					const data = await res.json()
					setCountries(data)
					console.log(data)
				} catch (err) {
					if ((err as Error).name !== 'AbortError') setError((err as Error).message)
				} finally {
					setIsLoading(false)
				}
			}

			countriesFetch()

			return function () {
				controller.abort()
			}
		},
		[search, key, defaultRegion]
	)
	return { countries, isLoading, error, setIsLoading, setError }
}
export default useFetchCountry
