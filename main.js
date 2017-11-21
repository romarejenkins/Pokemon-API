$("button").on("click",function(){
  var num= $("#number").val()
  var pokeUrl="https://pokeapi.co/api/v2/pokemon/"+num;
  console.log("hello!")
  alert("Loading...")
  $.ajax({
    url:pokeUrl,
    success:function(response){
      console.log("Your Pokemon is...")
      $("h2").text("It's..."+response.name+"!")
      console.log(response)
      $("img").attr("src",response.sprites.front_default)
      $("#primType").text("Primary Typing: "+response.types[0].type.name)
      // var dexEntry="https://pokeapi.co/api/v2/evolution-chain/"+num
      // $.ajax({
      //   url:dexEntry,
      //   method: "GET",
      //   success: function(r) {
      //     console.log(r);
      //     $("p").text("evolves to "+ r.chain.evole_to);
      //   },
      //   error: function(er){
      //     console.log(er)
      //   }
      // })
    },
    error:function(e){
      console.log(e)
    }
  })
})
