import './Burger.css';

let style = {
	width: "300px",
	height: "auto",
	borderTop: "2px solid #000",
	display: "inline-block",
	backgroundColor: "#ddd",
	padding: "10px",
	margin: "10px",
	boxShadow: "0px 5px red"
}

function Burger(){
	return (
		<>
			<div style={style}>
				<h1>Crabby Patty</h1>
				<p>Lorem ipsum</p>
				<mark>&#8369; 50.00</mark>
				<hr/>
				<button>Order Now</button>
			</div>
		</>
	)
}

export default Burger