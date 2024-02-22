import { cn } from '@/lib/utils'
import React from 'react'


type TextProps = {
	text: string,
	className? : string
}

export default function Text({ text, className }:TextProps) {
	return (
		<div className={cn(`text-sm md:text-base lg:text-lg font-light`, className)}>
			{text}
		</div>
	)
}
