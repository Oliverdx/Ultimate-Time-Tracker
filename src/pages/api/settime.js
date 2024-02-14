const lowdb = require("lowdb");
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const db = lowdb(adapter);

export default (req, res) => {
  const payload =  JSON.parse(req.body);

  const userData = db.get("users")
    .find({ id: parseInt(payload.userId) })
    .value();

  delete payload.userId;

  userData.times.push({
    id: userData.times.length,
    ...payload
  });

  db.write();

  return res.status(200).json({data: 'Success'});
}
