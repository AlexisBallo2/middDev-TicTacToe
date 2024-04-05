"use client"
import styles from "../../lib/styles/IntroStyles.module.css"

// example component:
function Square() {
	return (
		<div className = {styles.square}> 
		</div>
	)
}

{/* TODO - add a new component with a button labeled "restart" */} 	

function Board() {
	return (
		<div>
			{/* first row */}
			<div className = {styles.squareContainer} >
				<Square />
				<Square />
				<Square />
			</div>
			{/* end of first row */}
			
			{/* TODO - add new rows*/} 	
		</div>
	)
}


export default function reactIntro() {

	return (
		<div>
			View the board below:
			<Board />
			{/* TODO - add your new component here */} 	
		</div>
	)
}
