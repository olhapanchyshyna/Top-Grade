import CardContent from './CardContent'

const cardsItem = [
	{
		id: 1,
		title: 'Simplicity',
		description:
			'We make the process simple with minimal involvement, we involve you only in key moments',
	},
	{
		id: 2,
		title: 'Safety',
		description:
			'We work in a transparent manner, your money is protected by law at the state level (the funds are in your special account)',
	},
	{
		id: 3,
		title: 'Benefit',
		description: 'We do not take fixed fees, most of the income is yours',
	},
]

export default function AdvantagesList() {
	return (
		<div className='flex flex-wrap justify-center lg:justify-between items-center mt-[65px] '>
			{cardsItem.map(item => {
				return (
					<div key={item.id} className='flex flex-col w-[320px] text-white mx-[5px] mb-[40px]'>
						<CardContent item={item}/>
					</div>
				)
			})}
		</div>
	)
}
