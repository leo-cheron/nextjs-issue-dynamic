import dynamic from 'next/dynamic'

const ServerComponent = dynamic(() => import('../ServerComponentB').then(m => m.ServerComponentB))

export default function ServerComponentExample () {
	return (
		<div>
			ServerComponent is declared but not instanced.
			{/* <ServerComponent />*/}
		</div>
	)
}
