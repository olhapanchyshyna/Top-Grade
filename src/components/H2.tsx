import { Unbounded } from 'next/font/google'

const unbounded = Unbounded({
	subsets: ['latin'],
	display: 'swap',
	weight: '300'
})

type H2Props = {
	text: string
}

export default function H2({ text }: H2Props) {
	return (
		<h2 className={`text-[56px] leading-[70px] uppercase text-gray-100 ${unbounded.className}`}>
			{text}
		</h2>
	)
}
