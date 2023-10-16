'use client';
import React from 'react';
import { SearchManufacturer } from '.';
import { useState } from 'react';
import Image from 'next/image';
const SearchBtn = ({ otherClasses }: { otherClasses: string }) => (
	<button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
		<Image
			src={`/magnifying-glass.svg`}
			alt="magnifying-glass"
			height={40}
			width={40}
			className="object-contain"
		/>
	</button>
);

const SearchBar = () => {
	const [manufacturer, setmanufacturer] = useState('');
	const [model, setmodel] = useState(' ');
	const handleSearch = () => {};

	return (
		<form className="searchbar" onSubmit={handleSearch}>
			<div className="searchbar__item">
				<SearchManufacturer
					manufacturer={''}
					setManuFacturer={setmanufacturer}
				/>
			</div>
			<div className="searchbar__item">
				<Image
					src={`/model-icon.png`}
					alt="model"
					width={25}
					height={25}
					className="absolute w-[20px] h-[20px] ml-4"
				/>
				<input
					type="text"
					name="model"
					value={model}
					onChange={(e) => setmodel(e.target.value)}
					placeholder="Tiguan"
					className="searchbar__input"
				/>
				<SearchBtn otherClasses="sm:hidden" />
			</div>
			<SearchBtn otherClasses="max-sm:hidden" />
		</form>
	);
};

export default SearchBar;
