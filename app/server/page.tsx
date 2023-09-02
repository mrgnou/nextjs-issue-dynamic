import dynamic from 'next/dynamic'

const ServerComponent = dynamic(() => import('../ServerComponentA').then(m => m.ServerComponentA))

export default function ServerComponentExample () {
	return (
		<div>
			Server Page
			{/* <ServerComponent />*/}
		</div>
	)
}
