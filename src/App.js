import { useState } from 'react'
import Clicker from './Clicker.js'

export default function App() {
	const [hasClicker, setHasClicker] = useState(true)
	const [count, setCount] = useState(0)

	const buttonClick = () => {
		setHasClicker(!hasClicker)
	}

	const increment = () => {
		setCount(count + 1)
	}

	return (
		<>
			<div>Total count: {count}</div>
			<button onClick={buttonClick}>
				{hasClicker ? 'Hide' : 'Show'} Clicker
			</button>
			{/* {hasClicker ? <Clicker /> : null} */}
			{hasClicker && (
				<>
					<Clicker
						increment={increment}
						keyName='countA'
						color={`hsl(${Math.random() * 360}deg, 100%, 70%)`}
					/>
					<Clicker
						increment={increment}
						keyName='countB'
						color={`hsl(${Math.random() * 360}deg, 100%, 70%)`}
					/>
					<Clicker
						increment={increment}
						keyName='countC'
						color={`hsl(${Math.random() * 360}deg, 100%, 70%)`}
					/>
				</>
			)}
		</>
	)
}
