// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { getDatabase, ref, set, get, child } from 'firebase/database';
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
  // res.status(200).json({ name: 'John Doe' });

    // increment the views
    if (req.method === 'POST') {
      const test = set(ref(database, 'views'), 1);
      return res.status(200).json({
        total: test
      });
    }
  
    // fetch the views
    if (req.method === 'GET') {
      console.log('database', database);
      get(child(ref(getDatabase()), 'views')).then((snapshot) => {
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