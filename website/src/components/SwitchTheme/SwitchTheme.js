import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'

function SwitchTheme() {
	const [isChecked, setIsChecked] = useState(false)

	const handleSwitchChange = () => {
		setIsChecked(!isChecked)
	}

	return (
		<Form className="switch-form">
			<Form.Check
				className={
					isChecked ? 'switch-checked-btn switch-btn' : 'switch-btn'
				}
				type="switch"
				id="custom-switch"
				checked={isChecked}
				onChange={handleSwitchChange}
				label={isChecked ? 'Indoor' : 'Outdoor'}
			/>
		</Form>
	)
}

export default SwitchTheme
