import Image from 'next/image'
import H2 from './H2'
import Text from './Text'

export default function HelpGrowBudget() {
	return (
		<section className='bg-[#111827] flex justify-between py-[50px] px-[20px] md:py-[80px] md:px-[40px] lg:py-[132px] lg:px-[98px]'>
			<div className='bg-[#FFFFFF1A] flex flex-col xl:flex-row rounded-[32px] xl:pl-[35px] items-center xl:items-end boxShadowBudget'>
				<div className='uppercase max-w-[190px] text-lg text-center xl:text-left leading-6 text-white my-[20px] xl:mb-[40px] xl:mr-[20px] '>real estate as a high profitable investment</div>
				<Image src='/man-with-phone.png' alt='man-with-phone' width={322} height={326}/>
			</div>
			<div className='flex flex-col items-end ml-[40px]'>
				<H2 text='Not enough budget?' className='max-w-[470px] mb-[30px]' />
				<Text
					text='We will help you grow capital through real estate investments'
					className='text-white text-2xl max-w-[320px]'
				/>
			</div>
		</section>
	)
}
