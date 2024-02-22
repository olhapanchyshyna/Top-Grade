import H2 from './H2'
import Header from './Header'
import Logo from './Logo'
import Subtitle from './Subtitle'
import DinamicImage from './DinamicImage'

export default function FirstScreen() {
	return (
		<section className="flex flex-col lg:flex-row justify-between container relative bg-[url('/main-bg.png')] bg-no-repeat bg-cover h-[680px] min-[430px]:h-[760px] sm:h-[800px] lg:h-[744px] pl-[40px]">
			<div className='flex justify-between flex-col max-w-[671px] pt-[30px] lg:pt-[80px] pb-[20px] lg:pb-[62px]'>
				<Logo />
				<div className='mt-[50px] items-normal lg:items-center lg:mt-[140px] xl:mt-[170px] flex flex-col'>
					<H2 text='we find housing' />
					<Subtitle text='that meets your requirements' className='text-center max-w-[400px] mt-[15px] lg:mt-[30px]'/>
				</div>
				<Header/>
			</div>
			<DinamicImage/>
		</section>
	)
}
