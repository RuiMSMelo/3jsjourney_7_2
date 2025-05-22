import { useEffect, useState } from 'react'

export default function Clicker({ increment, keyName, color = 'green' }) {
	const [count, setCount] = useState(
		parseInt(localStorage.getItem(keyName) ?? 0),
	)

	useEffect(() => {
		return () => {
			localStorage.removeItem(keyName)
		}
	}, [])

	useEffect(() => {
		localStorage.setItem(keyName, count)
	}, [count])

	const buttonClick = () => {
		setCount(count + 1)
		increment()
	}

	return (
		<div>
			<h2 style={{ color }}>Clicks count: {count}</h2>
			<button onClick={buttonClick}>Add</button>
		</div>
	)
}
