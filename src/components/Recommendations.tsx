import H2 from './H2'
import Line from './Line'

export default function Recommendations() {
	return (
		<section className="bg-[url('/recommendation-bg.png')] bg-no-repeat bg-cover py-[50px] px-[20px] md:py-[80px] md:px-[40px] lg:py-[132px] lg:px-[98px]">
			<H2 text='98% come to us through recommendations' className='text-center' />
			<div className='flex flex-col items-center bg-[#FFFFFF0D] py-[50px] md:py-[64px] px-[40px] lg:px-[auto] mt-[20px] md:mt-[54px] rounded-[32px] text-white text-base md:text-xl'>
				<div className='max-w-[770px] text-center mb-[30px]'>
					The principal element of Suprematism in painting, as in architecture,
					is its liberation from all social or materialist tendencies. Through
					Suprematism, art comes into its pure and unpolluted form.
				</div>
				<Line />
				<div className='mt-[15px]'>Name</div>
			</div>
		</section>
	)
}
