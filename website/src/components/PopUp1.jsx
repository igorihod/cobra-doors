import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { DoorMapping } from '../constants/Constants'
import './ContentBottom/ContentBottom.scss'

const PopUp1 = (props) => {
	const [selectedButton, setSelectedButton] = useState(
		sessionStorage.getItem('currentSelectedButton') || 'fiberglass'
	)
	const [selectedImage, setSelectedImage] = useState(null)
	console.log(selectedButton)

	useEffect(() => {
		document.body.style.overflow = 'hidden'
		return () => {
			document.body.style.overflow = 'auto'
		}
	}, [])

	const handleImageClick = (image) => {
		setSelectedImage(image.id)

		props.onDoorModelClick({
			doorShape: image.id,
		})

		handleDoorModelClick(selectedButton)
		const currentSelectedButton = selectedButton
		sessionStorage.setItem('currentSelectedButton', currentSelectedButton)
	}

	const renderImages = () => {
		const images = DoorMapping.filter(
			(door) => door.category === selectedButton
		)
		return (
			<div className="mobile">
				<Carousel
					className="d-md-none"
					data-bs-theme="dark"
					indicators={false}
					interval={100000}
					controls={false}
				>
					{images.map((image, index) => (
						<Carousel.Item key={index}>
							<div className="carousel-img-container  flex justify-between gap-[15px]">
								{images
									.slice(index, index + 3)
									.map((image, subIndex) => (
										<img
											key={subIndex}
											src={image.src}
											alt={`Image ${
												index + subIndex + 1
											}`}
											className="w-[130px]  h-auto object-cover cursor-pointer"
											onClick={() =>
												handleImageClick(image)
											}
										/>
									))}
							</div>
						</Carousel.Item>
					))}
				</Carousel>
				<div className="flex flex-wrap ml-[22px] mt-8 gap-x-16 gap-y-10 grid-start-2 grid-end-3 grid-span-2 d-none d-md-flex">
					{images.map((image, index) => (
						<img
							key={index}
							src={image.src}
							alt={`Image ${index + 1}`}
							className="w-[130px] h-[300px] object-cover cursor-pointer"
							onClick={() => handleImageClick(image)}
						/>
					))}
				</div>
			</div>
		)
	}

	const handleDoorModelClick = (doorModel) => {
		setSelectedButton(doorModel)

		console.log('selectedButton', doorModel)
	}

	return (
		<>
			<div className="fixed flex flex-col width-mobile h-full ">
				<div className="bg-[#CC313D] w-[415px] h-[70px] text-[25px] flex items-center justify-center text-white font-bold text-center d-none d-md-flex">
					MODEL
				</div>
				<div className="bg-[#D9D9D9] flex-grow w-[415px] overflow-y-auto p-4 width-mobile">
					<div className="flex justify-center mb-4 d-none d-md-flex">
						<button
							className={`py-2 px-4 text-[20px]  rounded-full text-white font-bold ${
								selectedButton === 'fiberglass'
									? 'bg-[#CC313D]'
									: 'bg-[#606060]'
							} mx-2 w-[150px]`}
							onClick={() => handleDoorModelClick('fiberglass')}
						>
							Fiberglass
						</button>
						<button
							className={`py-2 px-4 text-[20px] ml-[50px]  rounded-full text-white font-bold ${
								selectedButton === 'steel'
									? 'bg-[#CC313D]'
									: 'bg-[#606060]'
							} mx-2 w-[150px]`}
							onClick={() => handleDoorModelClick('steel')}
						>
							Steel
						</button>
					</div>
					<div className="flex flex-column d-none d-md-block image-container">
						{renderImages()}
					</div>
					<div className="carousel-mob">{renderImages()}</div>
				</div>
			</div>
			<div onClick={() => props.closePopUp()}></div>
		</>
	)
}

export default PopUp1
