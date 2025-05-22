import { useEffect, useRef, useState } from 'react'

export default function Clicker({ increment, keyName, color = 'green' }) {
	const [count, setCount] = useState(
		parseInt(localStorage.getItem(keyName) ?? 0),
	)
	const buttonRef = useRef()

	useEffect(() => {
		buttonRef.current.style.backgroundColor = 'papayawhip'
		buttonRef.current.style.color = 'salmon'

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
			<button ref={buttonRef} onClick={buttonClick}>
				Add
			</button>
		</div>
	)
}
