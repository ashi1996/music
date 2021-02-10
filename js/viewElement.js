let checkLike = false;

const viewElement = () => {

  $("#id_btn").on("click", () => {

    let searchInput = $("#id_input").val().trim();
    if (searchInput == "") {
      searchInput == "sia"
    }
    else {
      let newUrl = `https://deezerdevs-deezer.p.rapidapi.com/search?rapidapi-key=0553c29e4bmsh3a239d5a07dbdb4p1e9ae1jsnc9399dacde13&q=${searchInput}`
      doApi(newUrl);
      if(searchInput.length > 10 ){
        searchInput = searchInput.substr(0,10)+"..."
      }
      $("#search_info").html(`
      <div>Top Results for</div>
      <h3 class="text-center yourSearc display-4" id="search_info">"${searchInput}"</h3>
      `)
      $("#id_input").val("")
    }
  })











  $("#id_input").on("keydown", (e) => {
    
    if(e.keyCode == 13){

      let searchInput = $("#id_input").val().trim();
    if (searchInput == "") {
      searchInput == "sia"
    }
    else {
      let newUrl = `https://deezerdevs-deezer.p.rapidapi.com/search?rapidapi-key=0553c29e4bmsh3a239d5a07dbdb4p1e9ae1jsnc9399dacde13&q=${searchInput}`
      doApi(newUrl);
      if(searchInput.length > 10 ){
        searchInput = searchInput.substr(0,10)+"..."
      }
      $("#search_info").html(`
      <div>Top Results for</div>
      <h3 class="text-center yourSearc display-4" id="search_info">"${searchInput}"</h3>
      `)
      $("#id_input").val("")
    }
    }
  })

























  $("#id_select").on("change", () => {
    let sorTby = $("#id_select").val();
    sortMoviesBy(sorTby);
    
  })

  $("main nav a").on("click", function () {
    let searchInput = $(this).data("year");
    let newUrl = `https://deezerdevs-deezer.p.rapidapi.com/search?rapidapi-key=0553c29e4bmsh3a239d5a07dbdb4p1e9ae1jsnc9399dacde13&q=${searchInput}`
    doApi(newUrl);
    $("#search_info").html("")
  })

}

const like = () => {
  
  $(window).on("scroll", () => {
    let wTop = $(window).scrollTop();
    let wH = $(window).height();
    let dH = $(document).height();
    
    if (wTop + wH >= dH - 10) {
        if (!checkLike) {
        $(".like").addClass("d-flex");
        $(".like").fadeIn(8000);
      }
      
      $(".like").on("click", () => {

        $(".like").removeClass("d-flex")
        $(".like").fadeOut();
        checkLike = true;
      })
      
    }
  })
}
  

