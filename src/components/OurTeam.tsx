import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'
import Image from 'next/image'
import CardContent from './CardContent'
import H2 from './H2'

const cardsItem = [
	{
		id: 1,
		title: 'Name',
		description: 'Customer Service Department',
	},
	{
		id: 2,
		title: 'Name',
		description: 'Analytics department',
	},
	{
		id: 3,
		title: 'Name',
		description: 'Support department',
	},
	{
		id: 4,
		title: 'Name',
		description: 'department',
	},
]

export default function OurTeam() {
	return (
		<section className='bg-[#111827] py-[50px] px-[20px] md:py-[80px] md:px-[40px] lg:py-[130px] lg:px-[98px]'>
			<H2 text='selected the best' className='' />
			<h2 className='text-2xl lg:text-4xl text-white font-thin uppercase max-w-[450px] lg:max-w-[870px] mt-[15px]'>
				so that you get not only the result, but also pleasure from the process
			</h2>

			<Carousel
				opts={{
					align: "start",
					loop: true,
				}}
				className='my-[60px] text-white w-full max-w-6xl'
			>
				<CarouselContent className='-ml-1'>
					{cardsItem.map(item => {
						return (
							<CarouselItem
								key={item.id}
								className='flex flex-col items-center lg:items-start pl-6 md:basis-1/2 lg:basis-1/3'
							>
								<Image
									src='/man.png'
									alt='man'
									width={450}
									height={580}
									className='rounded-[32px] mb-[32px] mx-auto max-w-[300px] lg:max-w-none lg:w-full'
								/>
								<CardContent item={item} />
							</CarouselItem>
						)
					})}
				</CarouselContent>

				<CarouselPrevious className='top-[110%] sm:top-[105%] md:top-[115%] left-[10px] sm:left-[20px] w-[150px] bg-transparent' />
				<CarouselNext className='top-[110%] sm:top-[105%] md:top-[115%] right-[10px] sm:right-[20px] w-[150px] bg-transparent' />
			</Carousel>
		</section>
	)
}
