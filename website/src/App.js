import React, { useState } from 'react'
import './App.scss'
import ContentBottom from './components/ContentBottom/ContentBottom'
import { StateProvider } from './components/Context/Context'
import DoorPreview from './components/DoorPreview/DoorPreview'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar'
import { useStateSwitcher } from './components/SwitcherContext'

function App() {
	// const [selectedOption, setSelectedOption] = useState(null);

	// const handleOptionSelect = (option) => {
	//   setSelectedOption(option);
	// };
	const { isChecked } = useStateSwitcher()

	console.log('stateSwitcher', isChecked)
	const [doorConfig, setDoorConfig] = useState({
		doorShape: null,
		color: null,
		windowShape: null,
	})

	const updateDoorConfig = (selectedOptions) => {
		const updatedConfig = { ...doorConfig, ...selectedOptions }
		setDoorConfig(updatedConfig)
	}

	return (
		<StateProvider onSelect={updateDoorConfig}>
			<div className="App">
				<Header />
				{/* <div className="flex"> */}
				<div className={`${isChecked ? 'Content-Indoor' : 'Content'}`}>
					<div className="h-full grid grid-cols-9 content-container">
						<div className="col-span-4 sidebar-container d-md-block	">
							<Sidebar onSelect={updateDoorConfig} />
						</div>

						<div className="flex-none col-span-5 sticky left-0">
							<DoorPreview selectedOptions={doorConfig} />
						</div>
						<div className="ContetnBottom d-xl-none">
							<ContentBottom />
						</div>
					</div>
				</div>
				{/* </div> */}
			</div>
		</StateProvider>
	)
}

export default App
