import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

import sideTopDoor from '../../public/icons/side-top_1.svg'

import React, { useState } from 'react'
import { useStateShape } from '../SwitcherContext'

function RightSideBar() {
	const [activeButton, setActiveButton] = useState(1)
	const {
		stateShape,
		setStateShape,
		topSide,
		setTopSide,
		rightSide,
		setRightSide,
		leftSide,
		setLeftSide,
	} = useStateShape()
	//const { topSide, setTopSide } = useSharedTopSide()

	const buttonClick = (
		id,
		stateShape,
		sideTopDoor,
		sideRigthDoor,
		sideLeftDoor
	) => {
		setActiveButton(id)
		setStateShape(stateShape, sideTopDoor)
		setTopSide(sideTopDoor)
		setRightSide(sideRigthDoor)
		setLeftSide(sideLeftDoor)
	}

	return (
		<>
			<ButtonGroup vertical>
				<Button
					className={
						activeButton === 1 ? 'active-first' : 'default-first'
					}
					onClick={() => buttonClick(1, false, '', false, false)}
					active={activeButton === 1}
				></Button>
				<Button
					className={
						activeButton === 2 ? 'active-top' : 'default-top'
					}
					onClick={() =>
						buttonClick(2, false, sideTopDoor, false, false)
					}
					active={activeButton === 2}
				></Button>
				<Button
					className={
						activeButton === 3 ? 'active-right' : 'default-right'
					}
					onClick={() => buttonClick(3, true, '', true, false)}
					active={activeButton === 3}
				></Button>
				<Button
					className={
						activeButton === 4 ? 'active-left' : 'default-left'
					}
					onClick={() => buttonClick(4, true, '', false, true)}
					active={activeButton === 4}
				></Button>
				<Button
					className={
						activeButton === 5
							? 'active-right-left'
							: 'default-right-left'
					}
					onClick={() => buttonClick(5, true, '', true, true)}
					active={activeButton === 5}
				></Button>
				<Button
					className={
						activeButton === 6
							? 'active-left-top'
							: 'default-left-top'
					}
					onClick={() =>
						buttonClick(6, true, sideTopDoor, false, true)
					}
					active={activeButton === 6}
				></Button>
				<Button
					className={
						activeButton === 7
							? 'active-right-top'
							: 'default-right-top'
					}
					onClick={() =>
						buttonClick(7, true, sideTopDoor, true, false)
					}
					active={activeButton === 7}
				></Button>
				<Button
					className={
						activeButton === 8 ? 'active-lrt' : 'default-lrt'
					}
					onClick={() =>
						buttonClick(8, true, sideTopDoor, true, true)
					}
					active={activeButton === 8}
				></Button>
			</ButtonGroup>
		</>
	)
}

export default RightSideBar
