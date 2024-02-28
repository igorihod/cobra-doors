import React, { createContext, useContext, useState } from 'react'

export const StateSwitcher = createContext()

export const useStateSwitcher = () => {
	return useContext(StateSwitcher)
}

export const SwitcherContext = ({ children }) => {
	const [isChecked, setIsChecked] = useState(false)

	const handleSwitchChange = () => {
		setIsChecked((isChecked) => !isChecked)
	}

	return (
		<StateSwitcher.Provider value={{ isChecked, handleSwitchChange }}>
			{children}
		</StateSwitcher.Provider>
	)
}
