"use client"
import styles from "../../lib/styles/IntroStyles.module.css"

// example component:
function C1() {
	return (
		<div>
			Testing
		</div>
	)
}


export default function reactIntro() {

	return (
		<div>
			<h1 className = {styles.title}>
			Hello
			</h1>
			<C1 />
		</div>
	)
}
