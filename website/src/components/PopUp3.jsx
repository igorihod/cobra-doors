import React, { useEffect, useState } from 'react'
import { GlassMapping } from '../constants/Constants'
import Carousel from 'react-bootstrap/Carousel'

const PopUp3 = (props) => {
	const [selectedImage, setSelectedImage] = useState(null)
	// const [showSelectedImage, setShowSelectedImage] = useState(false);

	useEffect(() => {
		document.body.style.overflow = 'hidden'
		return () => {
			document.body.style.overflow = 'auto'
		}
	}, [])

	const handleImageClick = (image) => {
		setSelectedImage(image.id)
		props.onGlassClick({
			windowShape: image.id,
		})
		// setShowSelectedImage(true);
	}

	const renderImages = () => {
		const images = GlassMapping

		return (
			<div>
				<Carousel
					className="d-md-none"
					data-bs-theme="dark"
					indicators={false}
					interval={100000}
					controls={false}
				>
					{images.map((image, index) => (
						<Carousel.Item key={index}>
							<div className="carousel-img-container flex justify-between gap-[15px]">
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

	return (
		<>
			<div className="fixed flex flex-col h-full width-mobile">
				<div className="bg-[#CC313D] w-[415px] h-[360px]  text-[25px] flex items-center justify-center text-white font-bold text-center d-none d-md-flex">
					GLASS
				</div>
				<div className="bg-[#D9D9D9] flex-grow w-[415px]  width-mobile max-h-[854px] overflow-y-auto p-4">
					<div className="flex flex-col image-container">
						{renderImages()}
					</div>
				</div>
			</div>
			<div onClick={() => props.closePopUp()}></div>
			{/* Commented out as per your initial code
            {selectedImage && showSelectedImage && (
                <div className="fixed top-[25%] left-[63%] transform[-translate(-50%, -50%)] max-w-[calc(100% - 60px)] max-h-[calc(100% - 60px)] flex items-center justify-center bg-black bg-opacity-80">
                    <img src={selectedImage} alt="Selected Image" className="max-w-full max-h-full" />
                </div>
            )} 
            */}
		</>
	)
}

export default PopUp3
