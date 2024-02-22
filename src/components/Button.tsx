import { cn } from '@/lib/utils'

type ButtonProps = {
	text: string
	className?: string
}

export default function Button({ text, className }: ButtonProps) {
	return (
		<button className={cn(`text-white text-base md:text-lg w-[314px] h-[61px] text-center rounded-[100px] border-white border`, className)}>{text}</button>
	)
}
