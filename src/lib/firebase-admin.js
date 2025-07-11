import admin from "firebase-admin";

if (!admin.apps.length) {
	admin.initializeApp({
		credential: admin.credential.cert({
			projectId: process.env.FIREBASE_PROJECT_ID,
			clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
			privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n")
		}),
		databaseURL: "https://test-61fe4-default-rtdb.asia-southeast1.firebasedatabase.app"
	});
}

var db = admin.database();

export { db };
