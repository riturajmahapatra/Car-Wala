import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CustomBtn } from '.';

const Nav = () => {
	return (
		<>
			<header className="w-full  absolute z-10">
				<nav className="max-w-screen m-auto flex justify-between items-center max-sm:py-10 px-6 py-4">
					<Link
						href={'/'}
						className="flex  justify-center items-center"
					>
						<Image
							src={'/logo.png'}
							alt="Car Wale Logo"
							width={150}
							height={150}
							className=""
						/>
					</Link>
					<CustomBtn
						title="Sign In"
						customclass="bg-zinc-100 rounded-full"
					/>
				</nav>
			</header>
		</>
	);
};

export default Nav;
