import ServerComponentA from '../../ServerComponentA'
import ServerComponentB from '../../ServerComponentB'

export default async ({params}) => {
	params = await params

	return (
		<div>
			{params.comps.includes('a') ? <ServerComponentA /> : null}
			{params.comps.includes('b') ? <ServerComponentB /> : null}
		</div>
	)
}
