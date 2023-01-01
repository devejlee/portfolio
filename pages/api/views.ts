// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { getDatabase, ref, set, get, child, update } from 'firebase/database';
import { database } from '@utils/firebase';

// type Data = {
//   total: number
// }

// export type PostStats = {
//   views: number
// }

export const test = async (req: any, res: NextApiResponse<any>) => {
  res.status(200).json({ name: 'John Doe' });
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
      let count = 0;
      // increment the view
      await get(child(ref(getDatabase()), 'views')).then(async (snapshot) => {
        if (snapshot.exists()) {
          console.log('snapshot.val()', snapshot.val());
          const updatedCount = snapshot.val()[`${req.query.slug}`].count + 1;
          update(ref(database), {
            [`/views/${req.query.slug}/count`]: updatedCount
          });
          count = updatedCount;
        } else {
          console.log('No data available');
          const response = await fetch('https://api.ipify.org?format=json');
          const data = await response.json();
          const ipAddress = data.ip;

          set(ref(database, `/views/${req.query.slug}`), { 
            ipAddresses: { 
              ip: ipAddress 
            },
            count: 1
          });
          count = 1;
        }
      }).catch((error) => {
        console.error(error);
      });

      return res.status(200).json({
        views: count
      });
    }
  
    // fetch the views
    if (req.method === 'GET') {
      console.log('req.query', req.query);
      get(child(ref(getDatabase()), 'views')).then((snapshot) => {
        console.log('snapshot', snapshot);
        if (snapshot.exists()) {
          console.log('snapshot.val()', snapshot.val());
          return res.status(200).json({ total: snapshot.val() });
        } else {
          console.log('No data available');
        }
      }).catch((error) => {
        console.error(error);
      });
    }
}