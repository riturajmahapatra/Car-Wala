'use client';
import React from 'react';
import { CustomBtn } from '.';
import Image from 'next/image';

const Hero = () => {
	const handelScroll = () => {};
	return (
		<>
			<div className="hero">
				<div className="flex-1 pt-3 padding-x mt-28">
					<h1 className="hero__title">
						Book,Rent & Enjoy our cars effortlessly
					</h1>
					<p className="hero__subtitle">
						Streamline you car rental experience with our booking
						process.
					</p>
					<CustomBtn
						title="Explore Cars"
						customclass={`bg-primary-blue text-white rounded-lg mt-10`}
						handleClick={() => {
							handelScroll;
						}}
					/>
				</div>
				<div className="hero__image-container ">
					<div className="hero__image">
						<Image
							src="/hero.png"
							alt="bg-img"
							className="object-contain absolute right-0"
							height={800}
							width={800}
						/>
						<div className="hero__image-overlay"></div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Hero;
