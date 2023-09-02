import dynamic from 'next/dynamic'

const ServerComponent = dynamic(() => import('../ServerComponent').then(m => m.ServerComponent))

export default function ServerComponentExample () {
	return (
		<div>
			<ServerComponent />
		</div>
	)
}
