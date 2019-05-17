const utils = require('./dbUtils');

const userModel = utils.initSchema({
    name: String,
    age: Number,
    email: String,
    tel: String
}, 'user');

utils.add(userModel, {
    name: 'lixiao',
    age: 23,
    email: '564113123@qq.com',
    tel: '17784451971'
}, {
    tel: '17784451971'
}).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
});

utils.add(userModel, {
    name: 'lixiao',
    age: 24,
    email: '564113123@qq.com',
    tel: '15023657627'
}, {
    tel: '15023657627'
}).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
});

utils.add(userModel, {
    name: 'xtt',
    age: 24,
    email: '564113123@qq.com',
    tel: '18380106260'
}, {
    tel: '18380106260'
}).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
});


// utils.findById(userModel, '5cde7025cd2c51146c074e69').then(res => {
//     if (res) {
//         console.log(res);
//     } else {
//         console.log('no data');
//     }
// }).catch(err => {
//     console.log(err);
// });

// utils.find(userModel, {
//     name: 'lixiao'
// }).then(res => {
//     console.log(res);
// }).catch(err => {
//     console.log(err);
// });

// utils.delete(userModel, {
//     name: { $in: ['lixiao', 'xtt']}
// }).then(res => {
//     console.log(res);
// }).catch(err => {
//     console.log(err);
// });

// utils.updateById(userModel, '5cde7025cd2c51146c074e69', {
//     age: 18,
//     email: 'doushilie@qq.com'
// }).then(res => {
//     console.log(res);
// }).catch(err => {
//     console.log(err);
// });