import H2 from './H2'
import Header from './Header'
import Logo from './Logo'
import Subtitle from './Subtitle'

export default function FirstScreen() {
	return (
		<section className="bg-[url('/main-bg.png')] bg-no-repeat max-w-[1366px] h-[750px] m-auto pt-[80px] pb-[62px] pl-[68px] flex flex-col">
			<div className='max-w-[671px]'>
				<Logo />
				<div className='mt-[170px] flex flex-col items-center'>
					<H2 text='we find housing' />
					<Subtitle text='that meets your requirements' className='text-center max-w-[400px] mt-[30px]'/>
				</div>
				<Header/>
			</div>
		</section>
	)
}
