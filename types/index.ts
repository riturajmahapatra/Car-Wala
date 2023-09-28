import { MouseEventHandler } from 'react';

export interface CustomBtnProps {
	title: string;
	customclass?: string;
	handleClick?: MouseEventHandler<HTMLButtonElement>;
	btnType?: 'button' | 'submit' /* ? dedicates optional or not */;
}

export interface SearchManufacturerProps {
	manufacturer?: string;
	setmanufacturer?: (manufacturer: string) => void;
}
