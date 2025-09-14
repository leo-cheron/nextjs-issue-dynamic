import DynComponentA from '../DynComponentA'
import DynComponentB from '../DynComponentB'

export default async ({params}) => {
	params = await params

	return (
		<div>
			{params.comps.includes('a') ? <DynComponentA /> : null}
			{params.comps.includes('b') ? <DynComponentB /> : null}
		</div>
	)
}
