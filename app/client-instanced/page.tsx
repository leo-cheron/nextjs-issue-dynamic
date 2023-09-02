import dynamic from 'next/dynamic'

const ServerComponent = dynamic(() => import('../ServerComponentB').then(m => m.ServerComponentB))

export default function ServerComponentExample () {
	return (
		<div>
			<ServerComponent />
		</div>
	)
}
