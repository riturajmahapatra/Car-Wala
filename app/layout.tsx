import { Footer, Nav } from '@/components';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Car Wala',
	description: 'Cars ? Car Wala',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="relative">
				<Nav />
				{children}
				<Footer />
			</body>
		</html>
	);
}
