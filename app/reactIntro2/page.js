"use client"

// example component:
function Square() {
	return (
		<div className = "w-10 h-10 border-black border-2 "> 
		</div>
	)
}

{/* TODO - add a new component with a button labeled "restart" */} 	

function Board() {
	return (
		<div>
			{/* first row */}
			<div className = "flex flex-row" >
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
