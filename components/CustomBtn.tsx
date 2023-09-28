'use client';
import { CustomBtnProps } from '@/types';
import React from 'react';

const CustomBtn = ({
	customclass,
	title,
	handleClick,
	btnType,
}: CustomBtnProps) => {
	return (
		<>
			<button
				disabled={false}
				type={btnType || 'button'}
				className={`custom-btn ${customclass}`}
				onClick={handleClick}
			>
				<span className="flex-1">{title}</span>
			</button>
		</>
	);
};

export default CustomBtn;
