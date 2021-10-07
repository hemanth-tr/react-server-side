import express from 'express';
import React from 'react';
import RDS from 'react-dom/server';
import App from './app';

const app = express();

app.use(express.static('public', { maxAge: 604800 }));

app.get('*', (req, res) => {
	// console.log(`url: ${req.url}, verb: ${req.method}`);

	if (req.url == '/favicon.ico') {
		res.send();
		return;
	}

	const name = "Hemanth"
	const markup = RDS.renderToStaticMarkup(<App url={req.url} />);

	const html = `
		<html>
			<head>
				<title>React SS</title>
				<link rel="stylesheet" href="/css/bootstrap.css" />
			</head>
			<body>
				<div id="react-root">${markup}</div>

				<script defer src="js/bundle.js"></script>
			</body>
		</html>
	`;

	res.setHeader("Cache-Control", "max-age=604800");
	res.end(html);
})

app.listen(3000, 'localhost');