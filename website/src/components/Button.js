import React, { useState } from 'react'

const Button = ({ props }) => {
	return (
		<div className="SidebarButton">
			<div className="flex flex-row items-center text-white inline-block cursor-pointer">
				<img
					src={props.imageSrc}
					alt="icon"
					className="ml-[-10px] items-start mobile-none"
				/>
				<p className="text-[25px] ml-[21px] burger-menu-kink">
					{props.title}
				</p>
			</div>
		</div>
	)
}

export default Button
