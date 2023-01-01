// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { database } from '@utils/firebase';

export default async function handler(req: any, res: NextApiResponse) {
  if (req.method === 'POST') {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    const ipAddress = data.ip;

    const countRef = database.ref('views').child(req.query.slug).child('count');
    const ipRef = database.ref('views').child(req.query.slug).child('ipAddresses').child('ip');
    let count = 0;

    const ipSnapshot = await ipRef.once('value');
    if (ipSnapshot.exists()) {
      // IP address has already made a request, return the current count
      const countSnapshot = await countRef.once('value');
      count = countSnapshot.val();
    } else {
      // IP address has not made a request, update the count
      const { snapshot } = await countRef.transaction((currentViews) => {
        if (currentViews === null) {
          return 1;
        }
        return currentViews + 1;
      });
      count = snapshot.val();
      // add the IP address to the list of IP addresses
      ipRef.set(ipAddress);
    }

    return res.status(200).json({
      total: count,
    });
  }
}