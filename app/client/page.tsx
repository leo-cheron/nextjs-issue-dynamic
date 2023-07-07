'use client'

import dynamic from 'next/dynamic'

const ServerComponentA = dynamic(() => import('../ServerComponentA').then(m => m.ServerComponentA))
const ServerComponentB = dynamic(() => import('../ServerComponentB').then(m => m.ServerComponentB))

export default function ServerComponentExample () {
	const load = false

	return (
		<div>
			Client Page
			{/* <ServerComponentA />
			<ServerComponentB /> */}
		</div>
	)
}
