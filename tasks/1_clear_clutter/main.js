const fs = require('fs');
const path = require('path');

fs.readdir(('E:\\expressjs\\tasks\\1_clear_clutter'), (err, files) =>{
    for(const file of files)
    {
        console.log(file)
        let ext = file.split('.')[1]
        if(ext == 'jpg' || ext == 'txt' || ext == 'pdf')
        {
            if(!fs.existsSync(path.join(__dirname, ext))) fs.mkdir(path.join(__dirname, ext), (err, val)=>{});
            console.log(file)
            fs.rename(path.join(__dirname, file), path.join(__dirname, ext, file), (err, val)=>{});
        }
    }
})