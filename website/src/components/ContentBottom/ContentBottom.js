import React, { useState } from 'react'
import './ContentBottom.scss'
import PopUp1 from '../PopUp1'
import PopUp2 from '../PopUp2'
import PopUp3 from '../PopUp3'
import PopUp5 from '../PopUp5'
import { useStateContext } from '../Context/Context'

function ContentBottom({ onSelect }) {
	const [selectedOption, setSelectedOption] = useState(null)
	const [activeComponent, setActiveComponent] = useState(1)
	const { showsubMenu } = useStateContext()

	const [showPopUp1, setShowPopUp1] = useState(false)
	const [showPopUp2, setShowPopUp2] = useState(false)
	const [showPopUp3, setShowPopUp3] = useState(false)
	const [showPopUp5, setShowPopUp5] = useState(false)

	const [currentComponentId, setCurrentComponentId] = useState(1)

	const { contentItems, selectedMenuItem } = useStateContext()
	const { handleNextClick, handlePrevClick } = useStateContext()

	const selectedContent = contentItems[selectedMenuItem]

	const handleOptionClick = (option) => {
		setSelectedOption(option)
		console.log('work', option)
		onSelect(option) // Notify parent component about the selected option
	}

	const componentsData = [
		{ id: 1, component: <PopUp1 onDoorModelClick={handleOptionClick} /> },
		{ id: 2, component: <PopUp2 onColorClick={handleOptionClick} /> },
		{ id: 3, component: <PopUp3 onGlassClick={handleOptionClick} /> },
		{ id: 4, component: <PopUp5 /> },
	]

	const currentComponent = componentsData.find(
		(data) => data.id === currentComponentId
	)

	const next = () => {
		console.log('work')
		if (activeComponent < 5) {
			setActiveComponent(activeComponent + 1)
		}
	}
	const back = () => {
		if (activeComponent > 1) {
			setActiveComponent(activeComponent - 1)
		}
	}

	const Content = () => {
		return <div>{selectedContent.component}</div>
		// if (showsubMenu === 1) {
		// 	return (
		// 		<div>
		// 			<PopUp1
		// 				setShowPopUp1={setShowPopUp1}
		// 				onDoorModelClick={handleOptionClick}
		// 			/>
		// 		</div>
		// 	)
		// } else if (showsubMenu === 2) {
		// 	return (
		// 		<div>
		// 			<PopUp2
		// 				setShowPopUp2={setShowPopUp2}
		// 				onColorClick={handleOptionClick}
		// 			/>
		// 		</div>
		// 	)
		// } else if (showsubMenu === 3) {
		// 	return (
		// 		<div>
		// 			<PopUp3
		// 				setShowPopUp3={setShowPopUp3}
		// 				onGlassClick={handleOptionClick}
		// 			/>
		// 		</div>
		// 	)
		// } else if (showsubMenu === 5) {
		// 	return <div>{<PopUp5 setShowPopUp5={setShowPopUp5} />}</div>
		// } else {
		// 	return null
		// }

		// return (
		// 	<div className={`${showSubMenu ? 'flex' : 'flex'}`}>
		// 		{currentComponent.component}
		// 	</div>
		// )
	}

	return (
		<div className="content-bottom">
			<div className="buttons">
				<button onClick={handlePrevClick} className="btn btn-back w-50">
					BACK
				</button>
				<button onClick={handleNextClick} className="btn btn-next w-50">
					NEXT
				</button>
				{/* <button onClick={back} className="btn btn-back w-50">
					BACK
				</button>
				<button onClick={next} className="btn btn-next w-50">
					NEXT
				</button> */}
			</div>
			<div className="content-production">
				<Content />
			</div>
		</div>
	)
}

export default ContentBottom
