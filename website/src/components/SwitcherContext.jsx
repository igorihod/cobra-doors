import React, { createContext, useContext, useState } from 'react'

export const StateSwitcher = createContext()
export const StateShape = createContext()
export const TopSide = createContext()

export const useStateSwitcher = () => {
	return useContext(StateSwitcher)
}

export const useStateShape = () => {
	return useContext(StateShape)
}

// export const useSharedTopSide = () => {
// 	return useContext(TopSide)
// }

export const SwitcherContext = ({ children }) => {
	const [isChecked, setIsChecked] = useState(false)

	const [stateShape, setStateShape] = useState(false)

	const [topSide, setTopSide] = useState(null)

	const [rightSide, setRightSide] = useState(null)

	const [leftSide, setLeftSide] = useState(null)

	const handleSwitchChange = () => {
		setIsChecked((isChecked) => !isChecked)
	}

	const gneralStateSide = {
		stateShape,
		setStateShape,
		topSide,
		setTopSide,
		rightSide,
		setRightSide,
		leftSide,
		setLeftSide,
	}
	// const handleStateShape = () => {
	// 	setStateShape((stateShape) => !stateShape)
	// }

	return (
		<StateSwitcher.Provider value={{ isChecked, handleSwitchChange }}>
			<StateShape.Provider value={gneralStateSide}>
				{/* <TopSide.Provider value={{ topSide, setTopSide }}> */}
				{children}
				{/* </TopSide.Provider> */}
			</StateShape.Provider>
		</StateSwitcher.Provider>
	)
}
