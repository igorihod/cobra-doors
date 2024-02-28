import { createContext, useContext, useState } from 'react'
import PopUp1 from '../PopUp1'
import PopUp2 from '../PopUp2'
import PopUp3 from '../PopUp3'
import PopUp5 from '../PopUp5'

const StateContext = createContext()

export const useStateContext = () => {
	return useContext(StateContext)
}

export const StateProvider = ({ children, onSelect }) => {
	// const [showsubMenu, setSubShowMenu] = useState(0)
	// return (
	// 	<StateContext.Provider value={{ showsubMenu, setSubShowMenu }}>
	// 		{children}
	// 	</StateContext.Provider>
	// )
	// const [isChecked, setIsChecked] = useState(false)

	// const handleSwitchChange = () => {
	// 	setIsChecked((isChecked) => !isChecked)
	// }

	const [selectedOption, setSelectedOption] = useState(null)
	const handleOptionClick = (option) => {
		setSelectedOption(option)
		console.log('work', option)
		onSelect(option) // Notify parent component about the selected option
	}

	const [selectedMenuItem, setSelectedMenuItem] = useState(0)
	const contentItems = [
		{
			title: 'MODEL',
			component: <PopUp1 onDoorModelClick={handleOptionClick} />,
		},
		{
			title: 'COLOR',
			component: <PopUp2 onColorClick={handleOptionClick} />,
		},
		{
			title: 'GLASS',
			component: <PopUp3 onGlassClick={handleOptionClick} />,
		},
		{ title: 'SUBMIT', component: <PopUp5 /> },
	]

	const handleNextClick = () => {
		if (selectedMenuItem < contentItems.length - 1) {
			setSelectedMenuItem(selectedMenuItem + 1)
		}
	}

	const handlePrevClick = () => {
		if (selectedMenuItem > 0) {
			setSelectedMenuItem(selectedMenuItem - 1)
		}
	}

	const handleMenuClick = (index) => {
		setSelectedMenuItem(index)
	}

	return (
		<StateContext.Provider
			value={{
				// isChecked,
				selectedMenuItem,
				contentItems,
				handleNextClick,
				handlePrevClick,
				handleMenuClick,
				// handleSwitchChange,
			}}
		>
			{children}
		</StateContext.Provider>
	)
}
