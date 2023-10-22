import React, { useState } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'
import '../../App.css'
import burger from '../../public/icons/burger.png'
import Close from '../../public/icons/close.svg'
import logo from '../../public/logo/logo.jpg'
import BurgeMenu from '../BurgerMenu/BurgerMenu'
import './Header.scss'

function Header() {
	const [show, setShow] = useState(false)

	const handleClose = () => setShow(false)
	const handleShow = () => setShow(true)

	const [doorConfig, setDoorConfig] = useState({
		doorShape: null,
		color: null,
		windowShape: null,
	})

	const updateDoorConfig = (selectedOptions) => {
		const updatedConfig = { ...doorConfig, ...selectedOptions }
		setDoorConfig(updatedConfig)
		console.log('work')
	}

	return (
		<header className="mb-20px bg-white pt-3 pb-3 pl-2 pr-2 w-full flex justify-between">
			<div className="Logo self-center">
				<img src={logo} alt="Logo" />
			</div>
			<div className="BurgeMenu self-center d-none">
				<a
					variant="primary"
					className="w-[50px] block "
					onClick={handleShow}
				>
					<img src={burger} />
				</a>

				<Offcanvas show={show} onHide={handleClose} placement="end">
					<Offcanvas.Header>
						<Offcanvas.Title></Offcanvas.Title>
						<button onClick={handleClose}>
							<img src={Close} />
						</button>
					</Offcanvas.Header>
					<Offcanvas.Body className="p-0">
						<BurgeMenu></BurgeMenu>
					</Offcanvas.Body>
				</Offcanvas>
			</div>
		</header>
	)
}

export default Header
