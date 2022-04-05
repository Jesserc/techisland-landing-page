import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		height: "100vh",
		fontFamily: "Nunito",
	},
	appbar: {
		background: "none",
	},
	appbarWrapper: {
		width: "80%",
		margin: "0 auto",
	},
	appbarTitle: {
		flexGrow: "1",
	},
	aboutUs: {
		color: "#fff",
		fontSize: "2rem",
		cursor: "pointer",
	},
	colorText: {
		color: "#5AFF3D",
	},
	container: {
		textAlign: "center",
	},
	title: {
		color: "#fff",
		fontSize: "4.5rem",
	},
	subTitle: {
		color: "#fff",
		fontSize: "1.5rem",
	},

	goDown: {
		color: "#5AFF3D",
		fontSize: "4rem",
	},
}));
export default function Header() {
	const navigate = useNavigate();
	const aboutNav = () => {
		navigate("/about");
	};

	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar className={classes.appbar} elevation={0}>
				<Toolbar className={classes.appbarWrapper}>
					<h1 className={classes.appbarTitle}>
						Tech<span className={classes.colorText}>Island.</span>
					</h1>
					<p className={classes.aboutUs} onClick={aboutNav}>
						About Us
					</p>
				</Toolbar>
			</AppBar>
			<div className={classes.container}>
				<h1 className={classes.title}>
					Welcome to <br /> Tech
					<span className={classes.colorText}>Island.</span>
				</h1>
				<p className={classes.subTitle}>resorts just for techies..</p>
			</div>
		</div>
	);
}
