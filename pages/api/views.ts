import type { NextApiRequest, NextApiResponse } from 'next';
import { database } from '@utils/firebase';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (typeof req.query.slug !== 'string') return;
  if (req.method === 'POST') {
    const countRef = database.ref('views').child(req.query.slug).child('count');
    let count = 0;

    const cookie = req.headers.cookie;
    if (cookie && cookie.includes('visited=true')) {
      // User has already visited the page, return the current count
      const countSnapshot = await countRef.once('value');
      count = countSnapshot.val();
    } else {
      // User has not visited the page before, update the count
      const { snapshot } = await countRef.transaction((currentViews) => {
        if (currentViews === null) {
          return 1;
        }
        return currentViews + 1;
      });
      count = snapshot.val();
      // Set the visited cookie to true
      res.setHeader('Set-Cookie', 'visited=true; Max-Age=86400');
    }

    return res.status(200).json({
      total: count,
    });
  }

  if (req.method === 'GET') {
    const countRef = database.ref('views').child(req.query.slug).child('count');
    const countSnapshot = await countRef.once('value');
    const count = countSnapshot.val();

    return res.status(200).json({ total: count });
  }
};

export default handler;