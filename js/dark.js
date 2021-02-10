class DarkWindow {

  static song_id;

  static createDarkWindow() {
    let darkWindowCss = {
      position: "fixed",
      width: "100%",
      height: "100%",
      background: "rgba(0,0,0,0.9)",
      top: 0,
      left: 0,
      zIndex: 999,
      display: "none",
      justifyContent: "center",
      alignItems: "center",
    };

    let darkBoxCss = {
      maxWidth: "400px",
      width: "100%",
      minHeight: "400px",
      background: "silver",
      textAlign: "center",
    };

    $("body").prepend(`
    <div class="dark_window">

   

 
    <span class="carousel-control-prev-icon" aria-hidden="true" id="next_left"></span>
   
  




    <div class="dark_box p-3">
    <a class="fw-bold float-end" id="close">X</a>
        <img src="" style="border-radius:7px;" class="w-50 my-3">
        <h3></h3>
        <div class ="my-2" id="artist_id"></div>
        <audio  controls src=""></audio>
      </div>



    

 
     <span class="carousel-control-next-icon " aria-hidden="true" id="next_right"></span>
   




    </div>
    `);

    $(".dark_window").css(darkWindowCss);
    $(".dark_window .dark_box").css(darkBoxCss);

    DarkWindow.darkViewEvents();
  }

  static darkViewEvents() {
    $(".dark_window #close").on("click", () => {
      $(".dark_window").fadeOut(300);
    });

    
    $("#next_right").on("click", () => {
      if (DarkWindow.song_id < songs_ar.length - 1) {
        DarkWindow.song_id++;

        console.log(songs_ar[DarkWindow.song_id]);
        DarkWindow.showDarkWindow(
          songs_ar[DarkWindow.song_id].album.cover_medium,
          songs_ar[DarkWindow.song_id].title,
          songs_ar[DarkWindow.song_id].preview,
          songs_ar[DarkWindow.song_id].artist.name,
          DarkWindow.song_id
        );
      }
    });

    $("#next_left").on("click", () => {
      if (DarkWindow.song_id > 0) {
        DarkWindow.song_id--;
        console.log(songs_ar[DarkWindow.song_id]);
        DarkWindow.showDarkWindow(
          songs_ar[DarkWindow.song_id].album.cover_medium,
          songs_ar[DarkWindow.song_id].title,
          songs_ar[DarkWindow.song_id].preview,
          songs_ar[DarkWindow.song_id].artist.name,
          DarkWindow.song_id
        );
      }
    });
  }

  static showDarkWindow(_urlImg, _titleH3, _audio, _artist, _id) {
    $("header nav").css("z-index", 0);
    $("#holdGoUp button").addClass("d-none");
    $(".dark_window").fadeIn(600);
    // בברירת מחדל הפייד אין הופכים את האלמנט לבלוק
    $(".dark_window").css("display", "flex");
    $(".dark_window img").attr("src", _urlImg);
    $(".dark_window h3").html(_titleH3);
    $("#artist_id").html("Artist: " + _artist);
    $(".dark_window audio").attr("src", _audio);
    DarkWindow.song_id = _id;
  }
}
