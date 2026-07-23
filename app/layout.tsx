import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
	title: 'Starter Kit',
	description: 'Starter Kit',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html>
			<body>{children}</body>
		</html>
	);
}
