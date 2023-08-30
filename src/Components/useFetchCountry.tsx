import { useEffect, useState } from 'react'

const useFetchCountry = (search: { search: string }, key: { key: string }) => {
	const [countries, setCountries] = useState<[]>([])

	useEffect(
		function () {
			const controller = new AbortController()

			async function countriesFetch() {
				if (search.length < 3) {
					setCountries([])
					return
				}
				if (search === 'Filter by Region') {
					setCountries([])
					return
				}
				try {
					const res = await fetch(
						`https://restcountries.com/v3.1/${key}/${search}?fields=name,capital,flags,region,population`,
						{ signal: controller.signal }
					)
					if (!res.ok) throw new Error('Country not found.')

					const data = await res.json()
					setCountries(data)
				} catch (err) {
					if ((err as Error).name !== 'AbortError') console.log((err as Error).message)
				}
			}

			countriesFetch()

			return function () {
				controller.abort()
			}
		},
		[search, key]
	)
	return { countries }
}
export default useFetchCountry
