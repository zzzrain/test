let mongoose = require('mongoose');
// mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/config');

let db = mongoose.connection
db.on('error', function (err) {
  console.error('error' + err)
})
db.on('open', function () {
  console.log('ok')
})

// String
// Number
// Date
// Buffer
// Boolean
// Mixed
// ObjectId
// Array

// let schema = mongoose.Schema({
//   name: String
// });
// schema.methods.speak = () => {
//   let talking = this.name ? 'Mao name is ' + this.name : 'No name';
//   console.log(talking);
// }
// let Cat = mongoose.model('cat', schema);
// let bbq = new Cat({ name: 'bbq' });
// let sss = new Cat();

// bbq.save(function (err, res) {
//   if (err) return console.error(err);
//   console.log('-----bbq-----', res);
// })

// Cat.find(function (err, res) {
//   if (err) return console.error(err)
//   console.log('-----cat-----', res);
// });

// Cat.find({ name: /bbq/ }, callback);

// 模型骨架
let Schema = new mongoose.Schema({
  username: { type: String },
  password: { type: String, default: 123456 },
  age: { type: Number },
  date: { type: Date, default: '2010-10-10' }
})

// 由schema构造生成Model
let User = mongoose.model('user', Schema);
let data = [
  {username: '张三', age: 15},
  {username: '李四', age: 25, password: 4},
  {username: '赵武', age: 35, password: 5},
  {username: '六六', age: 66, password: 6}
  ];

// User.create(data, function (err, doc) {
//     if (err) {
//       console.error(err);
//     } else {
//       console.log(["SUCCESS"]);
//       console.log(doc);
//     }
//   }
// );

// User.find({ age: {$regex: /6/} }, function (err, res) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('-----查询成功-----');
//     console.log(res);
//   }
// });

// findOne -- 查询单个
// let query = User.findOne({'username': '张三'});
// findById
// let query = User.findById('5c8b8c85efcbbd1cd4279705');
// where
// let query = User.where({'age': 66, password: '6'});
// let query = User.find();
// User.find().select('age').limit(10).sort({ age: -1 }).exec(function (err, res) {
//   if (err) return console.log(err);
//   console.log('-----查询特定字段-----', res);
// });

// updateMany
// User.updateMany({password: {$regex:/3/}, username: '六六'}, { age: 666 }, function (err, res) {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log('------修改成功-----');
//     console.log(res);
//   }
// })

// User.remove({}, function (err, res) {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log('-----删除成功-----');
//     console.log(res);
//   }
// })

User.aggregate({});

// Model.distinct(field, [conditions], [callback])　//去重
// Model.findOneAndUpdate([conditions], [update], [options], [callback])
// Model.findByIdAndUpdate(id, [update], [options], [callback])
// Model.findOneAndRemove(conditions, [options], [callback])
// Model.findOneAndUpdate([conditions], [update], [options], [callback])
// Model.findByIdAndRemove(id, [options], [callback])
// Model.findOneAndRemove(conditions, [options], [callback])

// $or　　　　或关系
// $nor　　　 或关系取反
// $gt　　　　大于
// $gte　　　 大于等于
// $lt　　　　小于
// $lte　　　 小于等于
// $ne        不等于
// $in        在多个值范围内
// $nin       不在多个值范围内
// $all       匹配数组中多个值
// $regex　　 正则，用于模糊查询
// $size　　　匹配数组大小
// $mod　　   取模运算
// $exists　　   字段是否存在
// $elemMatch　　匹配内数组内的元素
// $near　　　邻域查询，查询附近的位置（基于LBS）
// $maxDistance　　范围查询，距离（基于LBS）
// $within　　范围查询（基于LBS）
// $box　　　 范围查询，矩形范围（基于LBS）
// $center          范围醒询，圆形范围（基于LBS）
// $centerSphere　　范围查询，球形范围（基于LBS）
// $slice　　　　查询字段集合中的元素（比如从第几个之后，第N到第M个元素）
// module.exports = User;
