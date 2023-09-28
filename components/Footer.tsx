import React from 'react';

const Footer = () => {
	return (
		<div>
			<footer className=" mt-20 bg-gray-100 dark:bg-gray-700">
				<div className="x-auto w-full">
					<div className="grid grid-cols-2 gap-8 px-4 py-6 md:grid-cols-4 lg:py-8">
						<div>
							<h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
								Company
							</h2>
							<ul className="font-medium cursor-pointer text-gray-500 dark:text-gray-400">
								<li className="mb-4">
									<a href="/" className=" hover:underline">
										About
									</a>
								</li>
								<li className="mb-4">
									<a href="/" className="hover:underline">
										Brand Center
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
								Help center
							</h2>
							<ul className="font-medium text-gray-500 dark:text-gray-400">
								<li className="mb-4">
									<a href="#" className="hover:underline">
										Twitter
									</a>
								</li>
								<li className="mb-4">
									<a href="#" className="hover:underline">
										Facebook
									</a>
								</li>
								<li className="mb-4">
									<a
										href="/"
										className="hover:underline cursor-pointer"
									>
										Contact Us
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
								Legal
							</h2>
							<ul className="font-medium cursor-pointer text-gray-500 dark:text-gray-400">
								<li className="mb-4">
									<a href="/" className="hover:underline">
										Privacy Policy
									</a>
								</li>
								<li className="mb-4">
									<a href="/" className="hover:underline">
										Licensing
									</a>
								</li>
								<li className="mb-4">
									<a href="/" className="hover:underline">
										Terms &amp; Conditions
									</a>
								</li>
							</ul>
						</div>
						<div className="">
							<h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
								Meet the Developer
							</h2>
							<ul className="font-small text-gray-500 dark:text-gray-400">
								<li className="mb-2">
									<a
										href="https://github.com/riturajmahapatra"
										target="_blank"
										rel="noreferrer"
										className="hover:underline"
									>
										Rituraj S Mahapatra
									</a>
								</li>
							</ul>
						</div>
					</div>
					{/* report issue */}
					{/* <div className=" fixed bottom-20 right-20 max-lg:bottom-10 max-lg:right-5">
						<a href="/" className="">
							<a
								href="#_"
								className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-slate-500 rounded-md group"
							>
								<span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-slate-700 rounded group-hover:-mr-4 group-hover:-mt-4">
									<span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
								</span>
								<span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-slate-600 rounded-md group-hover:mb-12 group-hover:translate-x-0"></span>
								<span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
									Report an issue ?
								</span>
							</a>
						</a>
					</div> */}
					<div className="bg-gray-200 px-4 py-6 dark:bg-gray-800 md:flex md:items-center md:justify-between">
						<span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
							© 2023 <a href="/">Car Wala</a>. All Rights
							Reserved.
						</span>
						{/* socials */}
						{/* <div className="mt-4 flex space-x-5 sm:justify-center md:mt-0">
							<a
								href="https://www.facebook.com/"
								target="_blank"
								rel="noreferrer"
								className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
							>
								<img
									src="/socials/facebook.svg"
									alt="socials"
									className="h-5  w-5"
								/>
							</a>
							<a
								href="https://www.instagram.com/"
								target="_blank"
								rel="noreferrer"
								className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
							>
								<img
									src="/socials/instagram.svg"
									alt="socials"
									className="h-5  w-5"
								/>
							</a>
							<a
								href="https://twitter.com/"
								target="_blank"
								rel="noreferrer"
								className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
							>
								<img
									src="/socials/twitter.svg"
									alt="socials"
									className="h-5  w-5"
								/>
							</a>
							<a
								href="https://www.youtube.com/"
								target="_blank"
								rel="noreferrer"
								className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
							>
								<img
									src="/socials/youtube.svg"
									alt="socials"
									className="h-5 w-5"
								/>
							</a>
						</div> */}
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
