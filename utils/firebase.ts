import * as admin from 'firebase-admin';

const DATABASE_URL = process.env.NEXT_PUBLIC_PRIVATE_KEY as string;

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      clientEmail: process.env.NEXT_PUBLIC_CLIENT_EMAIL,
      projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
      privateKey: DATABASE_URL.replace(/\\n/g, '\n')
    }),
    databaseURL: process.env.NEXT_PUBLIC_DATABASE_URL
  });
}

export const database = admin.database();