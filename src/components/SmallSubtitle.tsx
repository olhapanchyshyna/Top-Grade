import { cn } from '@/lib/utils'
import React from 'react'

type SSmallSubtitleProps = {
	text: string
	className?: string
}

export default function SmallSubtitle({text, className}: SSmallSubtitleProps) {
	return (
		<h3
			className={cn(
				`text-sm sm:text-[18px] lg:text-[24px] lg:leading-[32px] text-black font-light`,
				className
			)}
		>
			{text}
		</h3>
	)
}
