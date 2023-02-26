import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<>
			<Head>
				<title>Official Best Things</title>
				<meta name='description' content='The definitive ranking of things' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/images/favicon.ico' />
			</Head>
			<div>
				<h1>Official Best Things</h1>
				<p>The creme always rises to the top</p>
			</div>
			<div>
				<button type='button'>Option 1</button>
				<button type='button'>Option 2</button>
			</div>
		</>
	);
}
