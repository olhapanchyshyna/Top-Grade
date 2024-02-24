import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const navItems = [
	{ name: 'Steps', src: '#steps' },
	{ name: 'Advantages', src: '#advantages' },
	{ name: 'Housing selection', src: '#growthPoint' },
	{ name: 'Recommendations', src: '#recommendations' },
]

export default function Header() {
	return (
		<header className='flex-col h-[40px] lg:h-[185px] w-[50px] lg:w-[175px] lg:mt-[30px] absolute right-0 lg:relative'>
			<nav className='h-[85px] lg:h-[185px] mr-[10px]'>
				<ul className='hidden lg:flex flex-col justify-between h-[185px]'>
					{navItems.map(item => {
						return (
							<Link key={item.name} href={item.src}>
								<li className='text-gray-100 text-[16px]'>{item.name}</li>
							</Link>
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
								return (
									<DropdownMenuItem key={item.name}>
										<Link href={item.src}>{item.name}</Link>
									</DropdownMenuItem>
								)
							})}
						</DropdownMenuContent>
					</DropdownMenu>
				</ul>
			</nav>
		</header>
	)
}
