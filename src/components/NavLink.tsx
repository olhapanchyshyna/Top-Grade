"use client"
import React from 'react'
import Link from 'next/link'
import { handleSmoothScroll } from '@/lib/handleSmoothScroll'

type NavLinkProps ={
	children: React.ReactNode
	src: string
}

export default function NavLink({children, src}: NavLinkProps) {
	return (
		<Link href={src} onClick={handleSmoothScroll}>
				{children}
		</Link>
	)
}
