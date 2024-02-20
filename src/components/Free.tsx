import Image from 'next/image'
import H2 from './H2'

export default function Free() {
	return (
		<div className=' flex bg-[#FFFFFF0D] w-[1172px] h-[499px] mt-[120px] m-auto rounded-[32px]'>
			<Image src='/agreement.png' alt='agreement' width={550} height={390}/>
			<div className='mt-[100px]'>
				<H2 text='Free for you' />
				<h3 className='text-white font-light max-w-[450px] mt-[70px] ml-[60px]'>{`You don't pay anything - we receive a reward from the developer you choose. So that you understand what kind of work we perform, we immediately sign an agreement with you, where it is clearly stated that nothing is forgotten.`}</h3>
			</div>
		</div>
	)
}
