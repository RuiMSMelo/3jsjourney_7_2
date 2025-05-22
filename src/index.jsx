import './style.css'
import { createRoot } from 'react-dom/client'

const root = createRoot(document.querySelector('#root'))

const toto = true

root.render(
	<>
		{/* prettier-ignore */}
		<h1 className="header">
            Hello React - {toto ? 'yes' : 'no'}
        </h1>
		<p>My name is Rui</p>
	</>,
)
