class Song {
  constructor(_parent , _item ,_songId){
    this.parent = _parent;
    this.img = _item.album.cover_medium;
    this.title = _item.title;
    this.sortTitle = _item.title;
    this.idSong = _songId; 

    if(this.title.length > 10){
      this.sortTitle = _item.title.substr(0,10)+"...";
    }
    this.artist = _item.artist.name;
    this.sortArtist = _item.artist.name;
    if(this.artist.length > 17){
      this.sortArtist = _item.artist.name.substr(0,17)+"...";
    }

    this.audio = _item.preview;
    this.duration = _item.duration;
    this.newDuration = JSClock(_item.duration)
    console.log(this.newDuration)
  }

  render(){
    
    let newDiv = $(`<div class="col-lg-3 col-md-4 p-2 my-3 text-center" >`);
    $(this.parent).append(newDiv);
    $(newDiv).append(` 
    <img src="${this.img}"  class="card-img-top w-100" alt="..." style=" cursor: pointer;">
    <div class="bg-white  p-2" style=" cursor: pointer;">
    <h2 class=>${this.sortTitle}</h2>
    <div class=>Singer: ${this.sortArtist}</div>
    <div class=>Duration: ${this.newDuration}</div>
    
  </div>`);

  let newBtn = $(`<button class="btn m-2 playBtn btn-danger"><i class="play fa fa-play fw-bolder" aria-hidden="true"></i></button>`);
  $(newDiv).append(newBtn);

  // $(newBtn).on("click" , ()=>{
  //   DarkWindow.showDarkWindow(this.img , this.title , this.audio, this.artist , this.idSong);
  // })
  
  $(newDiv).on("click" , ()=>{
    DarkWindow.showDarkWindow(this.img , this.title , this.audio, this.artist , this.idSong);
  })

  }
}




