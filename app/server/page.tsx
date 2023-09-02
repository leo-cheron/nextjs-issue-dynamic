import dynamic from 'next/dynamic'

const ServerComponent = dynamic(() => import('../ServerComponent').then(m => m.ServerComponent))

export default function ServerComponentExample () {
	const load = false

	return (
		<div>
			Server Page
			{/* <ServerComponent />*/}
		</div>
	)
}
