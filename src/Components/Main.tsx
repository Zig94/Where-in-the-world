import SearchArea from './SearchArea'
import SearchInput from './SearchInput'
import SearchSelect from './SearchSelect'

const Main = ({ isDarkMode }: { isDarkMode: boolean }): JSX.Element => {
	return (
		<main className="main wrapper">
			<SearchArea>
				<SearchInput isDarkMode={isDarkMode} />
				<SearchSelect />
			</SearchArea>
		</main>
	)
}

export default Main
