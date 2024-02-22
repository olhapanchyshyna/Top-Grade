import Image from 'next/image'
import H2 from './H2'
import Text from './Text'

export default function Service() {
	return (
		<section className='flex flex-col md:flex-row justify-between items-center py-[50px] px-[20px] md:py-[80px] md:px-[40px] lg:py-[120px] lg:px-[98px]'>
			<div className='flex flex-col items-center justify-between md:mr-[30px] order-3 md:order-none'>
				<H2
					text='premium service like in Mercedes'
					className='text-[#27252E] max-w-[600px] hidden md:flex'
				/>
				<div className='max-w-[340px] lg:max-w-[430px]'>
					<Text
						className='mt-[30px] md:mt-[60px] mb-[30px] lg:my-[60px] text-start'
						text='TOP GRADE agency was created for those who value service, pleasure from the process, and not the result tortured in the struggle. We are changing the market - the lack of service from the developer should not affect the buyer in any way.'
					/>
					<Text className='text-end md:text-start' text='Everyone promises premium service, but no one explains what it is. I have 17 years of experience in premium customer service, I was one of the top 10 Mercedes sales managers in Russia, and I am used to treating the client as a partner, and not as a bag of money and cockroaches in my head.' />
				</div>
			</div>
			<H2
				text='premium service like in Mercedes'
				className='text-[#27252E] text-center max-w-[600px] mb-[40px] md:hidden order-1 md:order-none'
			/>
			<div className='order-2 md:order-none max-w-[250px] md:max-w-[450px]'>
				<Image
					src='/man.png'
					alt='man'
					width={450}
					height={580}
					className='boxShadowImg rounded-[32px]'
				/>
			</div>
		</section>
	)
}
