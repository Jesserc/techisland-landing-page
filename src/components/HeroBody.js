import React from "react";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		padding: "10px",
		fontFamily: "Nunito",
		backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/bg.jpg"})`,
	},
	container: {
		width: "100%",
		// height: "100%",
		textAlign: "center",
		display: "flex",
		justifyContent: "space-evenly",
		alignItems: "center",
		color: "#fff",
		display: "grid",
		gridTemplateColumns: "repeat(2, 2fr)",
		gridGap: "20px",
		gridAutoRows: "minmax(80px, auto)",
		padding: "20px",
		[theme.breakpoints.down("sm")]: {
			textAlign: "left",
			width: "100%",
			height: "100%",
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			justifyContent: "center",
		},
	},
	body: {
		// width: "90%",
		padding: "20px",
		fontSize: "1.5rem",
		backgroundColor: "#474649",
		opacity: "0.8",
		[theme.breakpoints.down("sm")]: {
			paddingBottom: "20px",
			marginBottom: "20px",
			backgroundColor: "#474649",
			opacity: "0.8",
			width: "90%",
			// height: "50%",
			margin: "0 auto",
			fontSize: "1.3rem",
			paddingLeft: "15px",
		},
	},
	button: {
		backgroundColor: "lightgreen",
		color: "#fff",
		opacity: "100%",
		bordeRadius: "5px",
		border: "none",
		padding: "10px",
		fontSize: "1.2rem",
		marginTop: "20px",
		[theme.breakpoints.down("sm")]: {
			marginTop: "10px",
			fontSize: "1rem",
		},
	},
}));
const HeroBody = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<div className={classes.container}>
				<div className={classes.body}>
					<h1 className={classes.title}>Bora Bora</h1>
					<p>
						lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</p>
					<button className={classes.button}>Book Now</button>
				</div>
				<div className={classes.body}>
					<h1 className={classes.title}>Bora Bora</h1>
					<p>
						lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</p>
					<button className={classes.button}>Book Now</button>
				</div>
				<div className={classes.body}>
					<h1 className={classes.title}>Bora Bora</h1>
					<p>
						lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</p>
					<button className={classes.button}>Book Now</button>
				</div>
				<div className={classes.body}>
					<h1 className={classes.title}>Bora Bora</h1>
					<p>
						lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</p>
					<button className={classes.button}>Book Now</button>
				</div>
			</div>
		</div>
	);
};

export default HeroBody;
