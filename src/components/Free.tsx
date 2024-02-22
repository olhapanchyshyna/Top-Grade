import Image from 'next/image'
import H2 from './H2'
import Text from './Text'

export default function Free() {
	return (
		<div className='flex flex-col md:flex-row items-center lg:items-baseline bg-[#FFFFFF0D] max-w-[1172px] h-auto md:h-[440px] lg:h-[499px] mt-[120px] m-auto rounded-[32px] pb-[30px] px-[20px] md:px-[0px] md:pb-[0px] md:pr-[40px]'>
			<Image src='/agreement.png' alt='agreement' width={550} height={390} className='my-auto w-[350px] h-[300px] md:w-[450px] md:h-[360px] xl:w-[550px] xl:h-[390px]'/>
			<div className='mt-[0px] lg:mt-[100px]'>
				<H2 text='Free for you' />
				<Text className='text-white max-w-[450px] mt-[40px] lg:mt-[70px] ml-[30px] lg:ml-[60px]' text={`You don't pay anything - we receive a reward from the developer you choose. So that you understand what kind of work we perform, we immediately sign an agreement with you, where it is clearly stated that nothing is forgotten.`}/>
			</div>
		</div>
	)
}
