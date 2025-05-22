import { useState } from 'react'
import Clicker from './Clicker.js'

export default function App() {
	const [hasClicker, setHasClicker] = useState(false)

	const buttonClick = () => {
		setHasClicker(!hasClicker)
	}

	return (
		<>
			<button onClick={buttonClick}>
				{hasClicker ? 'Show' : 'Hide'} Clicker
			</button>
			{/* {hasClicker ? <Clicker /> : null} */}
			{hasClicker && <Clicker />}
		</>
	)
}
