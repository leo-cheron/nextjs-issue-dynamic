import dynamic from 'next/dynamic'

const ServerComponentA = dynamic(() => import('../ServerComponentA').then(m => m.ServerComponentA))
const ServerComponentB = dynamic(() => import('../ServerComponentB').then(m => m.ServerComponentB))

export default function ServerComponentExample () {
	return (
		<div>
			Server Page
			<ServerComponentA />
			<ServerComponentB />
		</div>
	)
}
