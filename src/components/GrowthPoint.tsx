import React from 'react'
import H2 from './H2'
import SmallSubtitle from './SmallSubtitle'
import PointList from './PointList'

export default function GrowthPoint() {
	return (
		<section className='bg-[#E5EAEB] py-[50px] px-[20px] md:py-[80px] md:px-[40px] lg:py-[132px] lg:px-[98px]'>
			<H2 text='not an apartment, but a growth point' className='text-black max-w-[300px] sm:max-w-[500px] lg:max-w-[750px] mb-[15px] sm:mb-[30px]'/>
			<SmallSubtitle text='To reach a new level, you need a quality environment and a motivating environment - choose yours' className='lg:max-w-[600px] sm:max-w-[450px] max-w-[300px] '/>
			<PointList/>
		</section>
	)
}
