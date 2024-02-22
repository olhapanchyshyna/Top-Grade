const navItems = [
	'Investments',
	'Real Estate Catalogue',
	'Housing selection',
	'Team',
]

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import Image from 'next/image'

export default function Header() {
	return (
		<header className='flex-col h-[40px] lg:h-[185px] w-[50px] lg:w-[175px] lg:mt-[30px] absolute right-0 lg:relative'>
			<nav className='h-[85px] lg:h-[185px] mr-[10px]'>
				<ul className='hidden lg:flex flex-col justify-between h-[185px]'>
					{navItems.map(item => {
						return (
							<li key={item} className='text-gray-100 text-[16px]'>
								{item}
							</li>
						)
					})}
				</ul>
				<ul className='flex lg:hidden'>
					<DropdownMenu>
						<DropdownMenuTrigger className='w-[100px]'>
							<Image
								src='/menu-icon.svg'
								alt='white line'
								width={30}
								height={24}
							/>
						</DropdownMenuTrigger>
						<DropdownMenuContent className='mr-[10px]'>
							{navItems.map(item => {
								return <DropdownMenuItem key={item}>{item}</DropdownMenuItem>
							})}
						</DropdownMenuContent>
					</DropdownMenu>
				</ul>
			</nav>
		</header>
	)
}
