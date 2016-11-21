import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/task2A', async (req, res) => {
	const sum = (+req.query.a || 0 ) + (+req.query.b || 0);
	res.send(sum.toString());
});

app.get('/task2B', async (req, res) => {

try {

	let fullName = fullname.toLowerCase(req.query.fullnamem.trim());
	conssole.log(fullname);
	//fullname = fullname.toLowerCase();
	let arr = fullname.split(/[\s]+/);
	let result = '';

	if ( (!arr) || (arr=='') || (/[0-9\d_\/]/.test(arr)) ) res.send('Invalid fullname');

	if (arr.length <= 0 || arr.length > 3) {	res.send('Invalid fullname'); }

		else if (arr.length === 3) {	result = arr[2].charAt(0).toUpperCase() + arr[2].substr(1) + ' '
        + arr[0].charAt(0).toUpperCase() + '. ' + arr[1].charAt(0).toUpperCase() + '.';
  } else if (arr.length === 2) {
  	result = arr[1].charAt(0).toUpperCase() + arr[1].substr(1) + ' '
        + arr[0].charAt(0).toUpperCase() + '.';
  } else if (arr.length === 1) {
  	result = arr[0].charAt(0).toUpperCase() + arr[0].substr(1);
  }
  res.send(result);


	} catch (err) {
			console.log(err);
			return res.json({
				err
		})
	}

	});

app.listen(3000, () => {
	console.log('Example app listening on port 3000!')
});
