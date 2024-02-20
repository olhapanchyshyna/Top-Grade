import { cn } from '@/lib/utils'
import { Unbounded } from 'next/font/google'
import Image from 'next/image'

const cardsItem = [
	{
		id: 1,
		title: 'We find what meets your requirements',
		description:
			'Request analysis, selection of options, organization of impressions',
		bg: "bg-[url('/steps-card-1-bg.png')]",
	},
	{
		id: 2,
		title: "We'll keep you informed",
		description:
			'We share news about how the area is developing and how construction is going. We inform you in advance about the commissioning of the house',
		bg: 'bg-[#3327B9]',
	},
	{
		id: 3,
		title:
			'We help in accepting the apartment upon transfer from the developer',
		description:
			'Before accepting the apartment and signing the documents, we will find all the shortcomings that can be corrected at the expense of the developer',
		bg: 'bg-[#7167E9]',
	},
	{
		id: 4,
		title: 'We take care of the property registration process',
		description: 'Bureaucracy',
		bg: "bg-[url('/steps-card-2-bg.png')]",
	},
]

const unbounded = Unbounded({ subsets: ['latin'] })

export default function StepsList() {
	return (
		<div className='flex flex-wrap justify-between mt-[55px] max-w-[1165px] m-auto'>
			{cardsItem.map(item => {
				return (
					<div
						key={item.id}
						className={`flex flex-col w-[568px] pt-[30px] pr-[140px] pb-[50px] pl-[48px] mb-[30px] rounded-[32px] text-white ${item.bg}`}
					>
						<div
							className={cn(
								`text-5xl font-light mb-[22px] ${unbounded.className}`
							)}
						>
							{item.id}
						</div>
						<div className='text-xl font-semibold mb-[16px] max-w-[342px]'>
							{item.title}
						</div>
						<Image
							src='/steps-card-line.svg'
							width={359}
							height={1}
							alt='white line'
						/>
						<div className='text-base font-normal mt-[16px] max-w-[385px]'>
							{item.description}
						</div>
					</div>
				)
			})}
		</div>
	)
}
