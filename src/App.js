import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./pages/Home";
const useStyles = makeStyles((theme) => ({
	root: {
		// minHeight: "100vh",
		// minWidth: "100vw",
		height: "100%",
		backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/bg.jpg"})`,
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
	},
}));
export default function App() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<CssBaseline />
			<Router>
				{/* <Header /> */}
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="contact" element={<div>Contact</div>} />
				</Routes>
			</Router>
		</div>
	);
}
