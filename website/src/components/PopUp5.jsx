import { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { sideDoors } from '../constants/Constants'
const PopUp5 = (props) => {
	const [selectSideDoors, setselectSideDoors] = useState(null)

	useEffect(() => {
		document.body.style.overflow = 'hidden'
		return () => {
			document.body.style.overflow = 'auto'
		}
	}, [])

	const handleImageClick = (image) => {
		setselectSideDoors(image.id)
		props.onGlassClick({
			windowShape: image.id,
		})
		// setShowSelectedImage(true);
	}

	const renderImages = () => {
		const images = sideDoors

		return (
			<div>
				<Carousel
					className="d-xl-none"
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

				<div className="flex flex-wrap  gap-x-3 gap-y-10 grid-start-2 grid-end-3 grid-span-2 d-none d-md-flex justify-start">
					{images.map((image, index) => (
						<img
							key={index}
							src={image.src}
							alt={`Image ${index + 1}`}
							className="h-[300px] object-cover cursor-pointer"
							onClick={() => handleImageClick(image)}
						/>
					))}
				</div>
			</div>
		)
	}

	return (
		<>
			<div className="fixed flex flex-col h-full width-mobile open-menu">
				<div className="bg-[#CC313D] w-[100%] h-[360px]  text-[25px] flex items-center justify-center text-white font-bold text-center d-none d-xl-flex">
					SHAPE
				</div>
				<div className="bg-[#D9D9D9] flex-grow w-[415px]  width-mobile max-h-[854px] overflow-y-auto p-4 w-100">
					<div className="flex flex-col image-container">
						{renderImages()}
					</div>
				</div>
			</div>
			<div onClick={() => props.closePopUp()}></div>
		</>
	)
}

export default PopUp5
