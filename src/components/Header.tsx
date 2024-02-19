const navItems = [
	'Investments',
	'Real Estate Catalogue',
	'Housing selection',
	'Team',
]

export default function Header() {
	return (
		<header className='flex flex-col h-[185px] w-[175px] mt-[30px]'>
			<nav className='h-[185px]'>
				<ul className='flex flex-col justify-between h-[185px]'>
					{navItems.map(item => {
						return (
							<li key={item} className='text-gray-100 text-[16px]'>
								{item}
							</li>
						)
					})}
				</ul>
			</nav>
		</header>
	)
}
