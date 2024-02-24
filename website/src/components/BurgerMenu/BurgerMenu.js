import '../../App.css'

import React, { useState } from 'react'
import { useStateContext } from '../Context/Context'
import './BurgerMenu.scss'

function BurgerMenu({ onSelect }) {
	const [selectedOption, setSelectedOption] = useState(null)

	const { contentItems, selectedMenuItem, handleMenuClick } =
		useStateContext()

	const { showsubMenu, setSubShowMenu } = useStateContext()
	const [showPopUp1, setShowPopUp1] = useState(false)
	const [showPopUp2, setShowPopUp2] = useState(false)
	const [showPopUp3, setShowPopUp3] = useState(false)
	const [showPopUp5, setShowPopUp5] = useState(false)

	const openSideBar = (id) => {
		if (showsubMenu === id) {
			setSubShowMenu(id)
		} else {
			setSubShowMenu(id)
		}
	}

	const closePopUp = () => {
		setSubShowMenu(0)
	}

	const handleOptionClick = (option) => {
		setSelectedOption(option)
		onSelect(option) // Notify parent component about the selected option
	}

	const handleClick = (index) => {
		handleMenuClick(index)
	}

	return (
		<div className="BurgerMenu">
			<div className="flex flex-col gap-1">
				<div className="flex-none">
					{contentItems.map((item, index) => (
						<div>
							<button
								key={index}
								className={
									(selectedMenuItem === index
										? 'selected'
										: '',
									'burger-button')
								}
								onClick={() => handleClick(index)}
							>
								{item.title}
							</button>
						</div>
					))}

					{/* <div onClick={() => openSideBar(1)}>
						<Button
							props={{
								title: 'MODEL',
								// imageSrc: modelIcon,
							}}
						/>
					</div>

					<div onClick={() => openSideBar(2)}>
						<Button
							props={{
								title: 'COLOR',
								// imageSrc: colorIcon,
							}}
						/>
					</div>

					<div onClick={() => openSideBar(3)}>
						<Button
							props={{
								title: 'GLASS',
								// imageSrc: glassIcon,
							}}
						/>
					</div>

					<div onClick={() => openSideBar(5)}>
						<Button
							props={{
								title: 'SUBMIT',
								// imageSrc: submitIcon,
							}}
						/>
					</div> */}
				</div>

				{/* <div className="flex col-start-2 col-end-4">
					<div
						className={`${showsubMenu ? 'flex' : 'hidden'} h-full`}
					>
						<Content />
					</div>
				</div> */}
			</div>
		</div>
	)
}

export default BurgerMenu
