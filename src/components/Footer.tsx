import Link from 'next/link'
import Logo from './Logo'

const navItems = [
	{ name: 'Steps', src: '#steps' },
	{ name: 'Advantages', src: '#advantages' },
	{ name: 'Housing selection', src: '#growthPoint' },
	{ name: 'Recommendations', src: '#recommendations' },
]

export default function Footer() {
	return (
		<footer className="flex bg-[url('/footer-bg.png')] bg-no-repeat bg-cover items-center py-[30px] sm:py-[50px] lg:py-[70px] px-[30px] lg:pl-[100px] w-full">
			<div className='hidden lg:flex'>
				<Logo />
			</div>
			<nav className='max-w-[580px] w-full lg:ml-[200px] m-auto'>
				<ul className='flex flex-col items-center sm:flex-row justify-between max-w-[580px]'>
					{navItems.map(item => {
						return (
							<Link key={item.name} href={item.src}>
								<li className='text-gray-100 text-[16px] my-[10px] sm:my-[0px]'>
									{item.name}
								</li>
							</Link>
						)
					})}
				</ul>
			</nav>
		</footer>
	)
}
