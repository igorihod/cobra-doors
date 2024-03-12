import React, { useState } from 'react'
import '../../App.scss'
import {
	ColorMapping,
	DoorMapping,
	GlassMapping,
} from '../../constants/Constants'
import SwitchTheme from '../SwitchTheme/SwitchTheme'
import { useStateSwitcher } from '../SwitcherContext'

const DoorPreview = ({ selectedOptions }) => {
	const [doorConfig, setDoorConfig] = useState({
		doorShape: null,
		color: null,
		windowShape: null,
	})
	const doorImg = document.getElementById('doorImage')
	const glassImg = document.getElementById('glassImg')

	const updateDoorConfig = () => {
		const updatedConfig = { ...doorConfig, ...selectedOptions }
		setDoorConfig(updatedConfig)
	}

	function findGlassSrc() {
		return GlassMapping.find((glass) => {
			if (glass.id === doorConfig.windowShape) {
				console.log('GLASS')
				glassImg.classList.remove('d-none')
				glassImg.classList.add('d-block')
				//doorImg.classList.add('d-none')
				return glass.id === doorConfig.windowShape
			}
		})
	}
	function findDoorSrc() {
		return DoorMapping.find((door) => {
			if (door.id === doorConfig.doorShape) {
				console.log('GLASS')
				//doorImg.classList.remove('d-none')
				//glassImg.classList.add('d-none')
				return door.id === doorConfig.doorShape
			}
		})
	}

	function findColorSrc() {
		return ColorMapping.find((color) => {
			return color.id === doorConfig.color
		})
	}

	function defaultDoorSrc() {
		return DoorMapping.find((img) => {
			return img.id === sessionStorage.getItem('ActiveDoors') || 'fb1'
		})
	}

	React.useEffect(() => {
		updateDoorConfig()
	}, [selectedOptions])

	const { isChecked } = useStateSwitcher()

	return (
		<div className="flex h-full ">
			<div className="DoorConfig">
				<div className="DoorPreview">
					{/* Render door preview based on doorConfig */}
					{/* You can display an image or a visual representation of the door */}
				</div>
				<div className="DoorDetails">
					{/* <h2>Door Details</h2>
                    <p>Shape: {doorConfig.doorShape || 'N/A'}</p>
                    <p>Color: {doorConfig.color || 'N/A'}</p>
                    <p>Window Shape: {doorConfig.windowShape || 'N/A'}</p> */}

					<div
						className="DoorImgContainer GlassImg right-20 "
						id="glassImg"
					>
						<img
							src={findGlassSrc() ? findGlassSrc().src : ''}
							className="DoorImg  "
						/>
					</div>

					<div
						className="DoorImgContainer doors right-20"
						id="doorImage"
					>
						<img
							src={
								findDoorSrc()
									? findDoorSrc().src
									: defaultDoorSrc()?.src
							}
							className={
								isChecked ? 'DoorImg mirrored' : 'DoorImg'
							}
							id="doorImage"
							// style={{ maxWidth: '200px', maxHeight: '400px' }}
							onLoad={() => {
								const doorImg =
									document.getElementById('doorImage')
								const colorImg =
									document.getElementById('colorImage')
								// if (doorImg && colorImg) {
								// 	colorImg.style.width = `${doorImg.width}px`
								// 	colorImg.style.height = `${doorImg.height}px`
								// }
							}}
						/>
					</div>

					<div className="DoorImgContainer colorimg right-20">
						<img
							src={findColorSrc() ? findColorSrc().src : ''}
							className="DoorImg bottom-[115px]  blend-multiply"
							id="colorImage"
							style={{
								backgroundImage: `url(${
									findColorSrc() ? findColorSrc().src : ''
								})`,
								backgroundBlendMode: 'multiply',
								maskImage: `url(${
									findDoorSrc()
										? findDoorSrc().src
										: defaultDoorSrc()?.src
								})`,
								maskSize: '100% 100%',
								maskRepeat: 'no-repeat',
							}}
						/>
					</div>
				</div>
			</div>
			<SwitchTheme />
		</div>
	)
}

export default DoorPreview
