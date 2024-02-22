import { cn } from '@/lib/utils'

type SubtitleProps = {
	text: string
	className?: string
}

export default function Subtitle({ text, className }: SubtitleProps) {
	return (
		<h3
			className={cn(
				`text-lg md:text-2xl lg:text-3xl xl:text-4xl lg:leading-[50px] uppercase text-gray-100 font-extralight`,
				className
			)}
		>
			{text}
		</h3>
	)
}
