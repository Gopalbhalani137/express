const fs=require('fs');
let movies=JSON.parse(fs.readFileSync('./data.json'));
/////GET REQUEST ON WEB-API ON /api/movies
exports.getmovie=(req,res)=>{
    res.status(200).json({
        status:"success",
        data:{
            movies:movies
        } 
    });
}

exports.getmovies=(req,res)=>{
    const id=+req.params.id;
    let movie=movies.find(el=>el.id===id)
    if(!movie)
    {
        return res.status(404).json({
            status:"fail",
        })
    }
    res.status(200).json({
        status:"success",
        movies:movie
    })
}
exports.patchapi=(req,res)=>{
    let id=req.params.id*1;
    let movietoupdate=movies.find(el=>el.id==id);
    let index=movies.indexOf(movietoupdate);
    // console.log(index);
    Object.assign(movietoupdate,req.body);
    movies[index]=movietoupdate;
    fs.writeFile('./data.json',JSON.stringify(movies),(err)=>{
        res.status(200).json({
            status:"success",
            data:{
                movie:movietoupdate
            }
        })
    })
}
exports.deleteapi=(req,res)=>{
    let id=req.params.id*1;
    let movietodelete=movies.find(el=>el.id==id);
    let index=movies.indexOf(movietodelete);
    movies.splice(index,1);
    fs.writeFile('./data.json',JSON.stringify(movies),()=>{
        res.status(200).json({
            status:"success",
            data:{
                movies:null
            }
        })
    });
}
exports.postapi=(req,res)=>{
    let newId=movies[movies.length-1].id+1;
   console.log(req.body);
    const newMovie=Object.assign({id:newId},req.body);
    console.log(newMovie);
    movies.push(newMovie);
    fs.writeFile('./data.json',JSON.stringify(movies),()=>{
        res.status(200).json({
            status:"success",
            data:{
                movies:newMovie
            }
        })
    });
}