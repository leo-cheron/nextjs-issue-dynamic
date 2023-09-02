import dynamic from 'next/dynamic'

const ServerComponentA = dynamic(() => import('./ServerComponentA'))
const ServerComponentB = dynamic(() => import('./ServerComponentB'))

export default () => {
	return (
		<div>
			<ServerComponentA />
			<ServerComponentB />
		</div>
	)
}
