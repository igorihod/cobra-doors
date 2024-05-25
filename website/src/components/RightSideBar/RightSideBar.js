import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import sideDefault from '../../public/icons/side-default.svg'
import sideDefaultActive from '../../public/icons/side-default_active.svg'
import sideLeft from '../../public/icons/side-left.svg'
import sideLeftTop from '../../public/icons/side-left_top.svg'
import sideLeftTopActive from '../../public/icons/side-left_top_active.svg'
import sideLeftTopRigth from '../../public/icons/side-left_top_right.svg'
import sideLeftTopRigthActive from '../../public/icons/side-left_top_right_active.svg'
import sideRight from '../../public/icons/side-right.svg'
import sideRightActive from '../../public/icons/side-right_active.svg'
import sideRightLeft from '../../public/icons/side-right_left.svg'
import {
	default as sideLeftActive,
	default as sideRightLeftActive,
} from '../../public/icons/side-right_left_active.svg'
import sideRigthTop from '../../public/icons/side-right_top.svg'
import sideRigthTopActive from '../../public/icons/side-right_top_active.svg'
import sideTop from '../../public/icons/side-top.svg'
import sideTopActive from '../../public/icons/side-top_active.svg'

import React, { useState } from 'react'

function RightSideBar() {
	const [activeButton, setActiveButton] = useState(null)

	const buttonClick = (id) => {
		setActiveButton(id)
	}

	return (
		<>
			<ButtonGroup vertical>
				<Button
					onClick={() => buttonClick(1)}
					active={activeButton === 1}
				>
					<img
						src={
							activeButton === 1 ? sideDefaultActive : sideDefault
						}
						alt="icon"
					/>
				</Button>
				<Button
					onClick={() => buttonClick(2)}
					active={activeButton === 2}
				>
					<img
						src={activeButton === 2 ? sideTopActive : sideTop}
						alt="icon"
					/>
				</Button>
				<Button
					onClick={() => buttonClick(3)}
					active={activeButton === 3}
				>
					<img
						src={activeButton === 3 ? sideRightActive : sideRight}
						alt="icon"
					/>
				</Button>
				<Button
					onClick={() => buttonClick(4)}
					active={activeButton === 4}
				>
					<img
						src={activeButton === 4 ? sideLeftActive : sideLeft}
						alt="icon"
					/>
				</Button>
				<Button
					onClick={() => buttonClick(5)}
					active={activeButton === 5}
				>
					<img
						src={
							activeButton === 5
								? sideRightLeftActive
								: sideRightLeft
						}
						alt="icon"
					/>
				</Button>
				<Button
					onClick={() => buttonClick(6)}
					active={activeButton === 6}
				>
					<img
						src={
							activeButton === 6 ? sideLeftTopActive : sideLeftTop
						}
						alt="icon"
					/>
				</Button>
				<Button
					onClick={() => buttonClick(7)}
					active={activeButton === 7}
				>
					<img
						src={
							activeButton === 7
								? sideRigthTopActive
								: sideRigthTop
						}
						alt="icon"
					/>
				</Button>
				<Button
					onClick={() => buttonClick(8)}
					active={activeButton === 8}
				>
					<img
						src={
							activeButton === 8
								? sideLeftTopRigthActive
								: sideLeftTopRigth
						}
						alt="icon"
					/>
				</Button>
			</ButtonGroup>
		</>
	)
}

export default RightSideBar
