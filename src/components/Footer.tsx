import Logo from './Logo'

const navItems = [
	'Investments',
	'Real Estate Catalogue',
	'Housing selection',
	'Team',
]

export default function Footer() {
	return (
		<footer className="flex bg-[url('/footer-bg.png')] bg-no-repeat bg-cover items-center py-[30px] sm:py-[50px] lg:py-[70px] px-[30px] lg:pl-[100px] w-full">
			<div className='hidden lg:flex'>
				<Logo />
			</div>
			<nav className='max-w-[536px] w-full lg:ml-[200px] m-auto'>
				<ul className='flex flex-col items-center sm:flex-row justify-between max-w-[536px]'>
					{navItems.map(item => {
						return (
							<li key={item} className='text-gray-100 text-[16px] my-[10px] sm:my-[0px]'>
								{item}
							</li>
						)
					})}
				</ul>
			</nav>
		</footer>
	)
}
