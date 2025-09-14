'use client'

import dynamic from 'next/dynamic'

const ClientComponentB = dynamic(() => import('./ClientComponentB'))

export default () => {
	return <ClientComponentB />
}
