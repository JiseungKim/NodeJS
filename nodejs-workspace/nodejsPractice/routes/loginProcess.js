var express = require("express");
var router = express.Router();
/*
    parsing 없이 바로 되는 이유
    - app.js의 아래와 같은 부분에서 json 형식으로 들어오는 것을
      자동 parsing 해준다.
        app.use(express.json());
        app.use(express.urlencoded({extended:false}));
*/
router.post("/", function (req, res, next) {
  res.send("login id = " + req.body.id + ", password = " + req.body.password);
});

module.exports = router;
