import * as admin from 'firebase-admin';

const PRIVATE_KEY = process.env.PRIVATE_KEY as string;

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      clientEmail: process.env.CLIENT_EMAIL,
      projectId: process.env.PROJECT_ID,
      privateKey: PRIVATE_KEY.replace(/\\n/g, '\n')
    }),
    databaseURL: process.env.DATABASE_URL,
  });
}

export const database = admin.database();