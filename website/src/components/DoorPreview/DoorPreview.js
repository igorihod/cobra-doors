import React, { useEffect, useRef, useState } from 'react'
import '../../App.scss'
import {
	ColorMapping,
	DoorMapping,
	GlassMapping,
	sideDoors,
} from '../../constants/Constants'
import RightSideBar from '../RightSideBar/RightSideBar'
import SwitchTheme from '../SwitchTheme/SwitchTheme'
import { useStateShape, useStateSwitcher } from '../SwitcherContext'

const DoorPreview = ({ selectedOptions }) => {
	const [doorConfig, setDoorConfig] = useState({
		doorShape: null,
		color: null,
		windowShape: null,
		sideDoors: null,
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

	function findSideDoors() {
		return sideDoors.find((sideDoor) => {
			return sideDoor.id === doorConfig.sideDoors
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
	const { topSide, rightSide, leftSide } = useStateShape()
	// console.log('topSide', topSide)

	const stickyRef = useRef(null)
	const containerRef = useRef(null)

	useEffect(() => {
		const handleScroll = () => {
			const container = containerRef.current
			const sticky = stickyRef.current

			if (!container || !sticky) return

			const containerRect = container.getBoundingClientRect()
			const stickyRect = sticky.getBoundingClientRect()
			const maxWidth = window.matchMedia('(max-width: 1200px)').matches

			if (maxWidth) {
				// if (containerRect.top < 0) {
				// 	//sticky.style.position = 'fixed'
				// 	sticky.style.top = '0'
				// } else {
				sticky.style.position = 'sticky'
				sticky.style.top = '0'
				// }
			} else {
				sticky.style.position = 'relative'
				sticky.style.top = 'auto'
			}
		}

		document.addEventListener('scroll', handleScroll)
		window.addEventListener('resize', handleScroll)

		// Initial check
		handleScroll()

		return () => {
			document.removeEventListener('scroll', handleScroll)
			window.removeEventListener('resize', handleScroll)
		}
	}, [])

	return (
		<div
			className="DoorContainer flex h-full scrollable-container"
			ref={containerRef}
		>
			<div
				className="DoorConfig d-flex flex-column sticky-block"
				ref={stickyRef}
			>
				<div className="DoorPreview">
					{/* Render door preview based on doorConfig */}
					{/* You can display an image or a visual representation of the door */}
				</div>
				<div className={topSide ? 'SideTopDoor' : 'd-none'}>
					<img src={topSide} />
				</div>
				<div
					className={
						leftSide && findSideDoors()
							? 'DoorDetails m-l-30'
							: 'DoorDetails m-l-40'
					}
				>
					<div
						className={
							topSide
								? 'DoorImgContainer GlassImg  m-t-mob-none'
								: 'DoorImgContainer GlassImg  m-t'
						}
						id="glassImg"
					>
						<img
							src={findGlassSrc() ? findGlassSrc().src : ''}
							className={leftSide ? 'DoorImg m-l' : 'DoorImg'}
						/>
					</div>

					<div
						className={
							topSide
								? 'DoorImgContainer doors right-20 d-flex m-t-mob-none'
								: 'DoorImgContainer doors right-20 d-flex m-t '
						}
						id="doorImage"
					>
						{/* SIDERLEFTDOOR */}
						<img
							className={
								leftSide && findSideDoors()
									? 'sideLeft ml-[25%]'
									: 'sideLeft ml-[38%]'
							}
							id="sideLeftDoor"
							src={
								findSideDoors() && leftSide
									? findSideDoors().src
									: ''
							}
							onLoad={() => {
								const doorImg =
									document.getElementById('sideLeftDoor')
								const colorImg =
									document.getElementById('colorImage')
							}}
						/>
						{/* SIDECENTERDOOR */}
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
							onLoad={() => {
								const doorImg =
									document.getElementById('doorImage')
								const colorImg =
									document.getElementById('colorImage')
							}}
						/>
						{/* SIDERIGHTDOOR */}
						<img
							className="sideRight"
							id="sideRightDoor"
							src={
								findSideDoors() && rightSide
									? findSideDoors().src
									: ''
							}
							onLoad={() => {
								const doorImg =
									document.getElementById('sideRightDoor')
								const colorImg =
									document.getElementById('colorImage')
							}}
						/>
					</div>

					<div
						className={
							leftSide
								? 'DoorImgContainer d-flex colorimg mt-[-27.083vw]  ml-[17.9%] right-20'
								: 'DoorImgContainer d-flex colorimg color-centerimg right-20'
						}
					>
						{/* COLORSIDELEFT */}
						<img
							src={
								findSideDoors() && leftSide
									? findColorSrc()?.src
									: ''
							}
							className="ColorSideRight  bottom-[115px]  blend-multiply"
							id="colorImage"
							style={{
								backgroundImage: `url(${
									findSideDoors() && leftSide
										? findColorSrc()?.src
										: ''
								})`,
								backgroundBlendMode: 'multiply',
								maskImage: `url(${
									findSideDoors() && leftSide
										? findSideDoors()?.src
										: ''
								})`,
								maskSize: '100% 100%',
								maskRepeat: 'no-repeat',
							}}
						/>

						{/* COLOCENTERDOOR */}

						<img
							src={findColorSrc() ? findColorSrc().src : ''}
							className="DoorImg ColoCenter bottom-[115px]  blend-multiply"
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

						{/* COLORSIDERIGHT */}

						<img
							src={
								findSideDoors() && rightSide
									? findColorSrc()?.src
									: ''
							}
							className="ColorSideLeft bottom-[115px]  blend-multiply"
							id="colorImage"
							style={{
								backgroundImage: `url(${
									findSideDoors() && rightSide
										? findColorSrc()?.src
										: ''
								})`,
								backgroundBlendMode: 'multiply',
								maskImage: `url(${
									findSideDoors() && rightSide
										? findSideDoors()?.src
										: ''
								})`,
								maskSize: '100% 100%',
								maskRepeat: 'no-repeat',
							}}
						/>
					</div>
				</div>
			</div>
			<div className="side-right d-flex flex-column">
				<SwitchTheme />
				<RightSideBar />
			</div>
		</div>
	)
}

export default DoorPreview
