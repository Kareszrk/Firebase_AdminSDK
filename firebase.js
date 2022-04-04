const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
const admin = require("firebase-admin");
var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const ExampleQuery = async () => {
    const db = getFirestore();
    const data = await db.collection('test').doc("test").get();
    console.log(data.data());
}
ExampleQuery();
