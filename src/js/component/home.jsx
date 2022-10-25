import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

let color = "red";

const Home = () => {
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Hello Rigo!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>

			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>

			<div className="traffic-ight">
				const [color, setColor] = useState("red");
				const [color, setColor] = useState("yellow");
				const [color, setcolor] = useState("green");
				const [color, setcolor] = useState("purple");


				//render compnents into the DOM
			</div>
		</div>

		
	
	);
};

export default Home;
