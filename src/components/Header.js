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
		[theme.breakpoints.down("sm")]: {
			width: "90%",
			margin: "0 auto",
		},
	},
	appbarTitle: {
		flexGrow: "1",
		[theme.breakpoints.down("sm")]: {
			fontSize: "1.2rem",
		},
	},
	aboutUs: {
		color: "#fff",
		fontSize: "2rem",
		cursor: "pointer",
		[theme.breakpoints.down("sm")]: {
			fontSize: "1.2rem",
		},
	},
	colorText: {
		color: "#5AFF3D",
	},
	container: {
		textAlign: "center",

		paddingTop: "20px",
		[theme.breakpoints.down("sm")]: {
			textAlign: "left",
			width: "80%",
		},
	},
	title: {
		color: "#fff",
		fontSize: "4.5rem",
		[theme.breakpoints.down("sm")]: {
			fontSize: "3rem",
		},
	},
	subTitle: {
		color: "#fff",
		fontSize: "1.5rem",
		[theme.breakpoints.down("sm")]: {
			fontSize: "1.2rem",
		},
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
				<p className={classes.subTitle}>resort for techies..</p>
			</div>
		</div>
	);
}
