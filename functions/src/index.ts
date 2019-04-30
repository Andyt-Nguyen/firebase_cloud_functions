import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//

// export const getArizonaWeather = functions.https.onRequest( async (req, res) => {
//     try {
//         const areaSnapshot = await admin.firestore().doc('areas/greater-arizona').get();
//         const cities = areaSnapshot.data().cities;
//         const promises = []
//         for( const city in cities){
//             const p = admin.firestore().doc(`cities/weather/${city}`).get();
//             promises.push(p);
//         } 
//         const citySnapshots = await Promise.all(promises);
//         const results = [];
//         citySnapshots.forEach(citySnap => {
//             const data = citySnap.data();
//             results.push(data);
//         })
//         res.status(200).send(results);
//     } catch (e) {
//         res.status(500).send(e);
//     }
    

// })
// export const onTucsonWeatherUpdate = functions.firestore.document('cities-weather/tucson-az-us').onUpdate(change => {
//     const after = change.after.data();
//     const payload = {
//         data: {
//             temp: String(after.temp),
//             conditions: after.conditions,
//         }
//     }

//     return admin.messaging().sendToTopic('cities-weather/tucson-az-us', payload)
//     .catch(e => {
//         console.log('FCM failed', e);
//     })
// });
export const getTucsonWeather = functions.https.onRequest( async (req, res) => {
    console.log(req.query)
    console.log("THE query", req.query)
    try {
        const snapShot = await admin.firestore().doc(`cities-weather/${req.query.city}`).get();
        res.send(snapShot.data());
    } catch (e) {
        console.log(e);
        res.status(500).send(e);
    }
})