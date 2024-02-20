import H2 from './H2'
import StepsList from './StepsList'
import Subtitle from './Subtitle'

export default function Steps() {
	return (
		<section className='bg-[#111827] py-[120px]'>
			<H2 text='we take the whole routine' className='text-center' />
			<Subtitle text='when buying real estate' className='text-center' />
			<StepsList/>
		</section>

	)
}
