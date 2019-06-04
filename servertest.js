let express = require('express');
let app = express();
app.get('/api/user', (req, res) => {
    res.json({
        name: "哈哈"
    })
});
app.listen(3030);