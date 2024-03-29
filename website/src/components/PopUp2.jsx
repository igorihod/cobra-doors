import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { ColorMapping } from '../constants/Constants'

const PopUp2 = (props) => {
	const [selectedImage, setSelectedImage] = useState(null)

	useEffect(() => {
		document.body.style.overflow = 'hidden'
		return () => {
			document.body.style.overflow = 'auto'
		}
	}, [])

	// const images = [
	//     { name: 'CQ-001C', src: '/colors/CQ-001C.jpg' },
	//     { name: 'CQ-005-C', src: '/colors/CQ-005-C.jpg' },
	//     { name: 'CQ-05k-K', src: '/colors/CQ-05k-K.jpg' },
	//     { name: 'CQ-5P3-G', src: '/colors/CQ-5P3-G.jpg' },
	//     { name: 'CQ-5P6-G', src: '/colors/CQ-5P6-G.jpg' },
	//     { name: 'CQ-08K', src: '/colors/CQ-08K.jpg' },
	//     { name: 'CQ-37K-K', src: '/colors/CQ-37K-K.jpg' },
	//     { name: 'CQ-095-C', src: '/colors/CQ-095-C.jpg' },
	//     { name: 'CQ-103-C', src: '/colors/CQ-103-C.jpg' },
	//     { name: 'CQ-111-C', src: '/colors/CQ-111-C.jpg' },
	//     { name: 'CQ-112-C', src: '/colors/CQ-112-C.jpg' },
	//     { name: 'CQ-113-C', src: '/colors/CQ-113-C.jpg' },
	//     { name: 'CQ-265-G', src: '/colors/CQ-265-G.jpg' },
	//     { name: 'CQ-506-G', src: '/colors/CQ-506-G.jpg' },
	//     { name: 'CQ-509-G', src: '/colors/CQ-509-G.jpg' },
	//     { name: 'CQ-510-G', src: '/colors/CQ-510-G.jpg' },
	//     { name: 'CQ-523-G', src: '/colors/CQ-523-G.jpg' },
	//     { name: 'CQ-536-G', src: '/colors/CQ-536-G.jpg' },
	//     { name: 'CQ-240-G', src: '/colors/CQ-240-G.jpg' },
	//     { name: 'CQ-242-G', src: '/colors/CQ-242-G.jpg' },
	//     { name: 'CQ-559-G', src: '/colors/CQ-559-G.jpg' },
	//     { name: 'CQ-562-G', src: '/colors/CQ-562-G.jpg' },
	//     { name: 'CQ-268-G', src: '/colors/CQ-268-G.jpg' },
	// ];

	const images = ColorMapping

	const handleImageClick = (image) => {
		sessionStorage.setItem('ActiveColors', image.id)
		setSelectedImage(image.id)
		props.onColorClick({
			color: image.id,
		})
		// setShowSelectedImage(true);
	}

	const handleChildElementClick = (e) => {
		e.stopPropagation()
	}

	const handleImageMouseEnter = (imageName) => {
		setSelectedImage(imageName)
	}

	const handleImageMouseLeave = () => {
		setSelectedImage(null)
	}

	return (
		<>
			<div className="fixed flex flex-col h-full width-mobile open-menu">
				<div className="bg-[#CC313D] w-[100%] h-[71px]  text-[25px] flex items-center justify-center text-white font-bold text-center d-none d-xl-flex">
					COLOR
				</div>
				<div
					className="bg-[#D9D9D9] p-3  overflow-y-auto w-100"
					style={{ overflowY: 'auto', marginBottom: '10px' }}
					onClick={handleChildElementClick}
				>
					<Carousel
						className="d-xl-none"
						data-bs-theme="dark"
						indicators={false}
						interval={10000000}
						controls={false}
					>
						{images.map((image, index) => (
							<Carousel.Item key={index}>
								<div className="carousel-img-color-container flex-wrap  flex justify-between gap-[14px]">
									{images
										.slice(index, index + 6)
										.map((image, subIndex) => (
											<div
												className="flex flex-col items-center justify-center cursor-pointer  max-w-[30%]"
												onMouseEnter={() =>
													handleImageMouseEnter(
														image.name
													)
												}
												onMouseLeave={
													handleImageMouseLeave
												}
											>
												<img
													key={subIndex}
													src={image.src}
													alt={`Image ${
														index + subIndex + 1
													}`}
													className="w-[130px] h-[100px] object-cover cursor-pointer"
													onClick={() =>
														handleImageClick(image)
													}
												/>
												{selectedImage === image.id && (
													<p className="text-sm text-center mt-2">
														{image.id}
													</p>
												)}
											</div>
										))}
								</div>
							</Carousel.Item>
						))}
					</Carousel>

					<div className="grid grid-cols-3 gap-3 d-none d-md-grid">
						{images.map((image, index) => (
							<div
								key={index}
								className="flex flex-col items-center cursor-pointer"
								onMouseEnter={() =>
									handleImageMouseEnter(image.name)
								}
								onMouseLeave={handleImageMouseLeave}
							>
								<img
									src={image.previewSrc}
									alt={image.id}
									className={
										selectedImage == image.id
											? 'w-[93px] h-[90px] object-cover shadow-md active'
											: 'w-[93px] h-[90px] object-cover shadow-md'
									}
									onClick={() => handleImageClick(image)}
								/>
								{selectedImage === image.id && (
									<p className="text-sm text-center mt-2">
										{image.id}
									</p>
								)}
							</div>
						))}
					</div>
				</div>
			</div>
			<div onClick={() => props.closePopUp()}></div>
		</>
	)
}
export default PopUp2
