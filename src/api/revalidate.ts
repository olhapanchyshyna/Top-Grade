export default async function handler (req:any, res:any) {

	let slug = req.query.slug;
	let path = '';

	if(req.query.type === 'post') {
			path = '/blog/' + slug;
	}
	else if(req.query.type === 'page') {
			path = '/' + slug;
	}
	else if(req.query.type === 'home') {
			path = '/blog';
	}

	if (req.query.secret !== process.env.REVALIDATION_SECRET) {
			return res.status(401).json({ message: 'Invalid token' });
	}

	try {
			await res.revalidate(path);
			return res.json({ revalidated: true });
	}
	catch (error: unknown) {
			return res.status(500).send(error.message);
	}
}