import express from 'express';
import React from 'react';
import RDS from 'react-dom/server';
import App from './app';

const app = express();

app.use(express.static('public', { maxAge: 5000 }));
app.use(express.static('static', { maxAge: 60000 }));

app.get('*', (req, res) => {

	const markup = RDS.renderToStaticMarkup(<App url={req.url} />);

	const html = `
		<html>
			<head>
				<title>React SS</title>
				<link rel="icon" href="favicon.ico" type="image/x-icon" />
				<link rel="stylesheet" href="/css/bootstrap.css" />
			</head>
			<body>
				<div id="react-root">${markup}</div>

				<script defer src="js/bundle.js"></script>
			</body>
		</html>
	`;

	res.setHeader("Cache-Control", "max-age=5000");
	res.end(html);
})

app.listen(3000, 'localhost');