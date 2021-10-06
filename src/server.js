import express from 'express';
import React from 'react';
import RDS from 'react-dom/server';
import App from './app';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
	console.log(`url: ${req.url}, verb: ${req.method}`);
	const markup = RDS.renderToStaticMarkup(<App />);

	const html = `
		<html>
			<head>
				<title>React SS</title>
			</head>
			<body>
				<div id="react-root">${markup}</div>

				<script defer src="js/bundle.js"></script>
			</body>
		</html>
	`;

	res.end(html);
})

app.listen(3000, 'localhost');