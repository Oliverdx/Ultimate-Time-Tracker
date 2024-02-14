const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const db = low(adapter);

export default (req, res) => {
  const { query } = req;
  const users = db.get('users');

  if(query.user){
    const userlist = JSON.parse(JSON.stringify(users));
    const userObj = userlist.find(user => user.id === parseInt(query.user));
    
    if(!userObj)
      return res.status(404).json({message: 'error'});

    return res.status(200).json(userObj);
  }else
    res.status(200).json(users);
}

