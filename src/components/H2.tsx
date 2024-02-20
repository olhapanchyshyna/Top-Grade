import { cn } from '@/lib/utils'
import { Unbounded } from 'next/font/google'

const unbounded = Unbounded({
	subsets: ['latin'],
	display: 'swap',
	weight: '300'
})

type H2Props = {
	text: string,
	className? : string
}

export default function H2({ text, className }: H2Props) {
	return (
		<h2 className={cn(`text-[56px] leading-[70px] uppercase text-gray-100 ${unbounded.className}`, className)}>
			{text}
		</h2>
	)
}