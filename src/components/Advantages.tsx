import H2 from './H2'

import { Unbounded } from 'next/font/google'
import AdvantagesList from './AdvantagesList'

const unbounded = Unbounded({
	subsets: ['latin'],
})

export default function Advantages() {
	return (
		<section id='advantages' className='bg-[#3327B9] rounded-[32px] px-[20px] pt-[50px] pb-[20px] md:pt-[70px] md:pb-[40px] md:px-[40px] lg:py-[70px] lg:px-[70px]'>
			<H2 text='We act in your interests' />
			<div
				className={`uppercase text-gray-100 font-extralight text-xl sm:text-2xl lg:text-[32px] ${unbounded.className}`}
			>
				but don’t forget about ourselves
			</div>
			
			<AdvantagesList/>
			
		</section>
	)
}
