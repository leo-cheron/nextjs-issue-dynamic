import dynamic from 'next/dynamic'

const ServerComponentA = dynamic(() => import('../ServerComponentA'))
const ServerComponentB = dynamic(() => import('../ServerComponentB'))

export default async ({params}) => {
	params = await params

	return (
		<div>
			{params.comps.includes('a') ? <ServerComponentA /> : null}
			{params.comps.includes('b') ? <ServerComponentB /> : null}
		</div>
	)
}
