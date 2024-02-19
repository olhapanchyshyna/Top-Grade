import { cn } from '@/lib/utils'
import { Manrope } from 'next/font/google'

const manrope = Manrope({
	subsets: ['latin'],
	weight: '200',
})

type SubtitleProps = {
	text: string,
	className? : string
}

export default function Subtitle({ text, className }: SubtitleProps) {
	return <h3 className={cn(`text-[36px] leading-[50px] uppercase text-gray-100 ${manrope.className}`, className)}>{text}</h3>
}
