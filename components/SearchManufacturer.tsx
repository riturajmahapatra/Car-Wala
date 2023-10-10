'use client';
import Image from 'next/image';
import { Fragment, useState } from 'react';
import { Combobox, Transition } from '@headlessui/react';
import { SearchManufacturerProps } from '@/types';

const SearchManufacturer = ({
	manufacturer,
	setManuFacturer,
}: SearchManufacturerProps) => {
	const [query, setquery] = useState('');
	return (
		<div className="search-manufacturer">
			<Combobox>
				<div className="relative w-full">
					<Combobox.Button className={`absolute top-[14px]`}>
						<Image
							src={'/car-logo.svg'}
							alt="alt"
							height={20}
							width={20}
							className="ml-4"
						/>
					</Combobox.Button>
					<Combobox.Input
						className={`search-manufacturer__input`}
						placeholder="Volkswagon"
						displayValue={(manufacturer: string) => manufacturer}
						onChange={(e) => setquery(e.target.value)}
					/>

					<Transition
						as={Fragment}
						leave="transition ease-in duration-100"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
						afterLeave={() => setquery(' ')}
					>
						<Combobox.Options></Combobox.Options>
					</Transition>
				</div>
			</Combobox>
		</div>
	);
};

export default SearchManufacturer;
