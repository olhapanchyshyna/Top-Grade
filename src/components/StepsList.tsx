import { cn } from '@/lib/utils'
import { Unbounded } from 'next/font/google'
import Line from './Line'
import CardContent from './CardContent'

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
		<div className='grid grid-cols-1 md:grid-cols-2 gap-4 justify-between justify-items-center mt-[30px] md:mt-[55px] max-w-[1165px] m-auto'>
			{cardsItem.map(item => {
				return (
					<div
						key={item.id}
						className={`flex flex-col h-[345px] md:h-[370px] xl:h-[320px] w-[320px] lg:w-[430px] xl:w-[568px] py-[30px] md:pt-[30px] md:pb-[50px] px-[40px] xl:pr-[140px] xl:pl-[48px] rounded-[32px] text-white bg-no-repeat bg-cover ${item.bg}`}
					>
						<div
							className={cn(
								`text-4xl lg:text-5xl font-light mb-[22px] ${unbounded.className}`
							)}
						>
							{item.id}
						</div>
						<CardContent item={item}/>
					</div>
				)
			})}
		</div>
	)
}
