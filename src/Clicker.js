import { useEffect, useState } from 'react'

export default function Clicker() {
	const [count, setCount] = useState(
		parseInt(localStorage.getItem('count') ?? 0),
	)

	const buttonClick = () => {
		setCount(count + 1)
	}

	useEffect(() => {
		localStorage.setItem('count', count)
	}, [count])

	return (
		<div>
			<h2>Clicks count: {count}</h2>
			<button onClick={buttonClick}>Click me!</button>
		</div>
	)
}
