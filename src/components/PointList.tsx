import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'
import Button from './Button'
import Line from './Line'

const cardsItem = [
	{
		id: 1,
		img: '/point-card-1.png',
		alt: 'card-1',
		title: 'With an atmospheric terrace',
		description:
			'It is a form of solution-based thinking with the intent of producing a constructive ',
		bg: 'bg-[url(/point-card-1-bg.png)]',
		col: '',
	},
	{
		id: 2,
		img: '/point-card-2.png',
		alt: 'card-2',
		title: 'Panoramic view of the Seine River',
		description:
			'It is a form of solution-based thinking with the intent of producing a constructive',
		bg: 'bg-[#1E1D23]',
		col: '',
	},
	{
		id: 3,
		img: '/point-card-3.png',
		alt: 'card-3',
		title: 'In the central area',
		description:
			'It is a form of solution-based thinking with the intent of producing a constructive ',
		bg: 'bg-[#3327B9]',
		col: '',
	},
	{
		id: 4,
		img: '/point-card-4.png',
		alt: 'card-4',
		title: 'Notre-Dame from the window',
		description:
			'It is a form of solution-based thinking with the intent of producing a constructive ',
		bg: 'bg-[#7167E9]',
		col: 'lg:col-start-2 col-end-3',
	},

	{
		id: 5,
		img: '/point-card-5.png',
		alt: 'card-5',
		title: 'In a historical building',
		description:
			'It is a form of solution-based thinking with the intent of producing a constructive ',
		bg: 'bg-[url(/point-card-5-bg.png)]',
		col: '',
	},
]

export default function PointList() {
	return (
		<div className='flex flex-col justify-center items-center md:grid xl:grid-cols-3 md:grid-cols-2 md:justify-items-center md:gap-8 xl:justify-end mt-[30px] sm:mt-[55px]'>
			{cardsItem.map(item => {
				return (
					<Card
						key={item.id}
						className={`flex flex-col justify-between w-[300px] h-[450px] md:h-[490px] md:w-[320px] lg:w-[355px] rounded-[32px] mb-[20px] md:mb-[0px] ${item.bg} ${item.col}`}
					>
						<Image
							src={item.img}
							alt={item.alt}
							width={370}
							height={200}
							className='rounded-[32px] mb-[17px] md:mb-[32px] h-[200px]'
						/>
						<CardHeader className='pt-[0px]'>
							<CardTitle className='text-white text-lg md:text-xl font-semibold mb-[6px]'>
								{item.title}
							</CardTitle>
							<Line className='mb-[16px]'/>
							<CardDescription className='text-slate-200 text-xs md:text-base font-light mt-[16px]'>
								{item.description}
							</CardDescription>
						</CardHeader>

						<CardFooter className='lg:pb-[40px]'>
							<Button text='Get catalog' />
						</CardFooter>
					</Card>
				)
			})}
		</div>
	)
}
