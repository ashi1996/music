let songs_ar;

const doApi  = async (_url) =>{
  try{
    let resp = await fetch(_url)
    let data = await resp.json();

    console.log(data.data)
    
    showsSongs(data.data);

    if(data.data == ""){
      $("#id_row").append(`<h3 class="text-danger">No Results Founs.</h3>`);
    }
    songs_ar = data.data;
  }
  catch (err){
    console.log(data);
  }
}

 const sortMoviesBy = (_sortBy) =>{
  songs_ar = _.sortBy(songs_ar,_sortBy);
  showsSongs(songs_ar);
}


const showsSongs = (_ar) =>{
  $("#id_row").empty();
  _ar.map((item , i) => {


// id for song



    let song = new Song("#id_row" , item , i);
    song.render();
  })
} 


const  JSClock = (_duration) => {
  let time =(_duration/60).toFixed(1);
  let minute = (time.toString().split(".")[0])
  let second = (time.toString().split(".")[1])
  let temp = "";
  temp += ((minute < 10) ? '0' : ':') + minute;
  temp += ((second < 10) ? ':0' : ':') + second;
  return temp;
}

