import '../App.scss'

import React, { useState } from 'react'

import { useStateShape } from '../components/SwitcherContext'
import colorIcon from '../public/icons/icon-color.svg'
import glassIcon from '../public/icons/icon-glass.svg'
import modelIcon from '../public/icons/icon-model.svg'
import shapeIcon from '../public/icons/icon-shape.svg'
import submitIcon from '../public/icons/icon-submit.svg'

import Button from './Button'
import PopUp1 from './PopUp1'
import PopUp2 from './PopUp2'
import PopUp3 from './PopUp3'
import PopUp5 from './PopUp5'
import PopUp6 from './PopUp6'

const Sidebar = ({ onSelect }) => {
	const [selectedOption, setSelectedOption] = useState(null)

	const [showsubMenu, setSubShowMenu] = useState(1)
	const [showPopUp1, setShowPopUp1] = useState(false)
	const [showPopUp2, setShowPopUp2] = useState(false)
	const [showPopUp3, setShowPopUp3] = useState(false)
	const [showPopUp5, setShowPopUp5] = useState(false)
	const [showPopUp6, setShowPopUp6] = useState(false)

	const { stateShape } = useStateShape()

	console.log('stateShape', stateShape)
	const openSideBar = (id) => {
		// if (showsubMenu === id) {
		// 	setSubShowMenu(0)
		// } else {
		setSubShowMenu(id)
		// }
	}

	const closePopUp = () => {
		setSubShowMenu(0)
	}

	const handleOptionClick = (option) => {
		setSelectedOption(option)
		onSelect(option) // Notify parent component about the selected option
	}

	const Content = () => {
		if (showsubMenu === 1) {
			return (
				<div>
					<PopUp1
						setShowPopUp1={setShowPopUp1}
						closePopUp={closePopUp}
						onDoorModelClick={handleOptionClick}
					/>
				</div>
			)
		} else if (showsubMenu === 2) {
			return (
				<div>
					<PopUp2
						setShowPopUp2={setShowPopUp2}
						closePopUp={closePopUp}
						onColorClick={handleOptionClick}
					/>
				</div>
			)
		} else if (showsubMenu === 3) {
			return (
				<div>
					<PopUp3
						setShowPopUp3={setShowPopUp3}
						closePopUp={closePopUp}
						onGlassClick={handleOptionClick}
					/>
				</div>
			)
		} else if (showsubMenu === 5) {
			return (
				<div className={`${stateShape ? 'd-block' : 'd-none'}`}>
					<PopUp5
						setShowPopUp5={setShowPopUp5}
						closePopUp={closePopUp}
						onSideDoorClick={handleOptionClick}
					/>
				</div>
			)
		} else if (showsubMenu === 6) {
			return (
				<div>
					{
						<PopUp6
							setShowPopUp6={setShowPopUp6}
							closePopUp={closePopUp}
						/>
					}
				</div>
			)
		} else {
			return null
		}
	}

	return (
		<div className="Sidebar">
			<div className="flex flex-row gap-1">
				<div className="flex-none">
					<div onClick={() => openSideBar(1)}>
						<Button
							props={{
								title: 'MODEL',
								imageSrc: modelIcon,
							}}
						/>
					</div>

					<div onClick={() => openSideBar(2)}>
						<Button
							props={{
								title: 'COLOR',
								imageSrc: colorIcon,
							}}
						/>
					</div>

					<div onClick={() => openSideBar(3)}>
						<Button
							props={{
								title: 'GLASS',
								imageSrc: glassIcon,
							}}
						/>
					</div>

					<div
						className={`${stateShape ? 'd-block' : 'd-none'}`}
						onClick={() => openSideBar(5)}
					>
						<Button
							props={{
								title: 'SHAPE',
								imageSrc: shapeIcon,
							}}
						/>
					</div>
					<div onClick={() => openSideBar(6)}>
						<Button
							props={{
								title: 'SUBMIT',
								imageSrc: submitIcon,
							}}
						/>
					</div>
				</div>

				<div className="flex col-start-2 col-end-4">
					<div
						className={`${showsubMenu ? 'flex' : 'hidden'} h-full`}
					>
						<Content />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Sidebar
