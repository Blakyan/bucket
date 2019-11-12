/*--------------- ajouter des éléments dans le panier-----------------*/
var tt = document.querySelector('#tt'); // total total from the bucket
var pts = document.querySelectorAll('#pt') // total prices from the bucket
var nbrs = document.querySelectorAll('#nbr'); // retreive number of items for an article from the bucket
var pus = document.querySelectorAll('#pu')  // retreive all the unit prices from the bucket
var pdtnames = document.querySelectorAll('#pdtname'); // retreive article names from the bucket
var z = 0;
var boutonElt = document.getElementById("btn-panier");
var boutonElt1 = document.getElementById("btn-panier1");
var boutonElt2 = document.getElementById("btn-panier2");
var boutonElt3 = document.getElementById("btn-panier3");


      // Ajout d'un gestionnaire pour l'événement click
      boutonElt.addEventListener("click", function () {
            //console.log(boutonElt.parentElement.childNodes[3].childNodes[1].textContent); // product name
           // console.log(boutonElt.parentElement.childNodes[3].childNodes[3].textContent);
           var pdtnames = document.querySelectorAll('#pdtname');
           // console.log (pdtnames.length);
           /* Vérifier si le tableau contient des éléments */
           if (pdtnames.length === 0 ) { // ajouter un élément dans le tableau
                  var insertedRow = document.createElement("tr"); // Création d'un élément li
                  insertedRow.classList = "ar"; // Définition de son identifiant
                  insertedRow.innerHTML = '<th id="pdtname" scope="row">'+boutonElt.parentElement.childNodes[3].childNodes[1].textContent+'</th>'
                  +'<td id="nbr">1</td>'
                  +'<td id="pu">'+boutonElt.parentElement.childNodes[3].childNodes[3].textContent+'</td>'
                  +'<td id="pt"></td> '; // Définition de son contenu textuel
                  // Ajout du nouvel élément avant l'identifiant identifié par "php"
                  document.getElementById("tableau").insertBefore(insertedRow, 
                  document.getElementById("tr"));

                  var pts = document.querySelectorAll('#pt');
                  var nbrs = document.querySelectorAll('#nbr'); // retreive number of items for an article from the bucket
                  var pus = document.querySelectorAll('#pu');

                  z=0;
                  for (var i = 0; i < pts.length; i++) {
                        var x = parseInt(nbrs[i].textContent);
                        var y = parseInt(pus[i].textContent);
                        var pt = x*y;
                        pts[i].textContent = pt;
                        z= z+pt;
                    }
                  
                    tt.textContent = z+' XAF';

           } else {
                 var bool = false;
            var pdtnames = document.querySelectorAll('#pdtname');
                  for (var i = 0; i < pdtnames.length; i++) {
                       // console.log(pdtnames[i].textContent);
                       // console.log(boutonElt.parentElement.childNodes[3].childNodes[1].textContent);
                       var pts = document.querySelectorAll('#pt');
                       var nbrs = document.querySelectorAll('#nbr'); // retreive number of items for an article from the bucket
                       var pus = document.querySelectorAll('#pu');
                         if (pdtnames[i].textContent === boutonElt.parentElement.childNodes[3].childNodes[1].textContent){
                              console.log('yes')
                              nbrs[i].textContent = parseInt(nbrs[i].textContent) + 1;
                              z=0;
                              for (var i = 0; i < pts.length; i++) {
                                    var x = parseInt(nbrs[i].textContent);
                                    var y = parseInt(pus[i].textContent);
                                    //console.log(nbrs[i].textContent);
                                    var pt = x*y;
                                    pts[i].textContent = pt;
                                    z= z+pt;
                                }
                              
                                tt.textContent = z+' XAF';
                                bool = true;
                              break;
                              
                              //console.log('yes');
                        }
                  }
                        if(bool=== false) {
                              var insertedRow = document.createElement("tr"); // Création d'un élément li
                                    insertedRow.classList = "ar"; // Définition de son identifiant
                                    insertedRow.innerHTML = '<th id="pdtname" scope="row">'+boutonElt.parentElement.childNodes[3].childNodes[1].textContent+'</th>'
                                    +'<td id="nbr">1</td>'
                                    +'<td id="pu">'+boutonElt.parentElement.childNodes[3].childNodes[3].textContent+'</td>'
                                    +'<td id="pt"></td> '; // Définition de son contenu textuel
                                    // Ajout du nouvel élément avant l'identifiant identifié par "php"
                                    document.getElementById("tableau").insertBefore(insertedRow, 
                                    document.getElementById("tr"));

                                    var pts = document.querySelectorAll('#pt') // total prices from the bucket
                                    var nbrs = document.querySelectorAll('#nbr'); // retreive number of items for an article from the bucket
                                    var pus = document.querySelectorAll('#pu')
                                          z=0;
                                    for (var i = 0; i < pts.length; i++) {
                                          var x = parseInt(nbrs[i].textContent);
                                          var y = parseInt(pus[i].textContent);
                                          var pt = x*y;
                                          pts[i].textContent = pt;
                                          z= z+pt;
                                      }
                                    
                                      tt.textContent = z+' XAF';
                        }            
                   //console.log(pdtnames);
           }
           
      });

      // Ajout d'un gestionnaire pour l'événement click
      boutonElt1.addEventListener("click", function () {
            var pdtnames = document.querySelectorAll('#pdtname');
           // console.log (pdtnames.length);
           /* Vérifier si le tableau contient des éléments */
           if (pdtnames.length === 0 ) { // ajouter un élément dans le tableau
                  var insertedRow = document.createElement("tr"); // Création d'un élément li
                  insertedRow.classList = "ar"; // Définition de son identifiant
                  insertedRow.innerHTML = '<th id="pdtname" scope="row">'+boutonElt1.parentElement.childNodes[3].childNodes[1].textContent+'</th>'
                  +'<td id="nbr">1</td>'
                  +'<td id="pu">'+boutonElt1.parentElement.childNodes[3].childNodes[3].textContent+'</td>'
                  +'<td id="pt"></td> '; // Définition de son contenu textuel
                  // Ajout du nouvel élément avant l'identifiant identifié par "php"
                  document.getElementById("tableau").insertBefore(insertedRow, 
                  document.getElementById("tr"));

                  var pts = document.querySelectorAll('#pt');
                  var nbrs = document.querySelectorAll('#nbr'); // retreive number of items for an article from the bucket
                  var pus = document.querySelectorAll('#pu');

                  z=0;
                  for (var i = 0; i < pts.length; i++) {
                        var x = parseInt(nbrs[i].textContent);
                        var y = parseInt(pus[i].textContent);
                        var pt = x*y;
                        pts[i].textContent = pt;
                        z= z+pt;
                    }
                  
                    tt.textContent = z+' XAF';

           } else {
                 var bool = false
                  var pdtnames = document.querySelectorAll('#pdtname');
                  for (var i = 0; i < pdtnames.length; i++) {
                       // console.log(pdtnames[i].textContent);
                       // console.log(boutonElt.parentElement.childNodes[3].childNodes[1].textContent);
                       var pts = document.querySelectorAll('#pt');
                       var nbrs = document.querySelectorAll('#nbr'); // retreive number of items for an article from the bucket
                       var pus = document.querySelectorAll('#pu');
                         if (pdtnames[i].textContent === boutonElt1.parentElement.childNodes[3].childNodes[1].textContent){
                              console.log('yes1')
                              nbrs[i].textContent = parseInt(nbrs[i].textContent) + 1;
                              z=0;
                              for (var i = 0; i < pts.length; i++) {
                                    var x = parseInt(nbrs[i].textContent);
                                    var y = parseInt(pus[i].textContent);
                                    //console.log(nbrs[i].textContent);
                                    var pt = x*y;
                                    pts[i].textContent = pt;
                                    z= z+pt;
                                }
                              
                                tt.textContent = z+' XAF';
                                bool= true
                              break;
                              
                              //console.log('yes');
                        }
                  }
                        if (bool === false) {
                             // console.log('yes');
                              var insertedRow = document.createElement("tr"); // Création d'un élément li
                                    insertedRow.classList = "ar"; // Définition de son identifiant
                                    insertedRow.innerHTML = '<th id="pdtname" scope="row">'+boutonElt1.parentElement.childNodes[3].childNodes[1].textContent+'</th>'
                                    +'<td id="nbr">1</td>'
                                    +'<td id="pu">'+boutonElt1.parentElement.childNodes[3].childNodes[3].textContent+'</td>'
                                    +'<td id="pt"></td> '; // Définition de son contenu textuel
                                    // Ajout du nouvel élément avant l'identifiant identifié par "php"
                                    document.getElementById("tableau").insertBefore(insertedRow, 
                                    document.getElementById("tr"));

                                    var pts = document.querySelectorAll('#pt'); // total prices from the bucket
                                    var nbrs = document.querySelectorAll('#nbr'); // retreive number of items for an article from the bucket
                                    var pus = document.querySelectorAll('#pu');
                                          z=0;
                                    for (var i = 0; i < pts.length; i++) {
                                          var x = parseInt(nbrs[i].textContent);
                                          var y = parseInt(pus[i].textContent);
                                          var pt = x*y;
                                          pts[i].textContent = pt;
                                          z= z+pt;
                                      }
                                    
                                      tt.textContent = z+' XAF';

                        }            
            }
                   //console.log(pdtnames);
      });

      // Ajout d'un gestionnaire pour l'événement click
      boutonElt2.addEventListener("click", function () {
            var pdtnames = document.querySelectorAll('#pdtname');
           // console.log (pdtnames.length);
           /* Vérifier si le tableau contient des éléments */
           if (pdtnames.length === 0 ) { // ajouter un élément dans le tableau
                  var insertedRow = document.createElement("tr"); // Création d'un élément li
                  insertedRow.classList = "ar"; // Définition de son identifiant
                  insertedRow.innerHTML = '<th id="pdtname" scope="row">'+boutonElt2.parentElement.childNodes[3].childNodes[1].textContent+'</th>'
                  +'<td id="nbr">1</td>'
                  +'<td id="pu">'+boutonElt2.parentElement.childNodes[3].childNodes[3].textContent+'</td>'
                  +'<td id="pt"></td> '; // Définition de son contenu textuel
                  // Ajout du nouvel élément avant l'identifiant identifié par "php"
                  document.getElementById("tableau").insertBefore(insertedRow, 
                  document.getElementById("tr"));

                  var pts = document.querySelectorAll('#pt');
                  var nbrs = document.querySelectorAll('#nbr'); // retreive number of items for an article from the bucket
                  var pus = document.querySelectorAll('#pu');

                  z=0;
                  for (var i = 0; i < pts.length; i++) {
                        var x = parseInt(nbrs[i].textContent);
                        var y = parseInt(pus[i].textContent);
                        var pt = x*y;
                        pts[i].textContent = pt;
                        z= z+pt;
                    }
                  
                    tt.textContent = z+' XAF';

           } else {
                 var bool = false
                  var pdtnames = document.querySelectorAll('#pdtname');
                  for (var i = 0; i < pdtnames.length; i++) {
                       // console.log(pdtnames[i].textContent);
                       // console.log(boutonElt.parentElement.childNodes[3].childNodes[1].textContent);
                       var pts = document.querySelectorAll('#pt');
                       var nbrs = document.querySelectorAll('#nbr'); // retreive number of items for an article from the bucket
                       var pus = document.querySelectorAll('#pu');
                         if (pdtnames[i].textContent === boutonElt2.parentElement.childNodes[3].childNodes[1].textContent){
                              console.log('yes1')
                              nbrs[i].textContent = parseInt(nbrs[i].textContent) + 1;
                              z=0;
                              for (var i = 0; i < pts.length; i++) {
                                    var x = parseInt(nbrs[i].textContent);
                                    var y = parseInt(pus[i].textContent);
                                    //console.log(nbrs[i].textContent);
                                    var pt = x*y;
                                    pts[i].textContent = pt;
                                    z= z+pt;
                                }
                              
                                tt.textContent = z+' XAF';
                                bool= true
                              break;
                              
                              //console.log('yes');
                        }
                  }
                        if (bool === false) {
                             // console.log('yes');
                              var insertedRow = document.createElement("tr"); // Création d'un élément li
                                    insertedRow.classList = "ar"; // Définition de son identifiant
                                    insertedRow.innerHTML = '<th id="pdtname" scope="row">'+boutonElt2.parentElement.childNodes[3].childNodes[1].textContent+'</th>'
                                    +'<td id="nbr">1</td>'
                                    +'<td id="pu">'+boutonElt2.parentElement.childNodes[3].childNodes[3].textContent+'</td>'
                                    +'<td id="pt"></td> '; // Définition de son contenu textuel
                                    // Ajout du nouvel élément avant l'identifiant identifié par "php"
                                    document.getElementById("tableau").insertBefore(insertedRow, 
                                    document.getElementById("tr"));

                                    var pts = document.querySelectorAll('#pt'); // total prices from the bucket
                                    var nbrs = document.querySelectorAll('#nbr'); // retreive number of items for an article from the bucket
                                    var pus = document.querySelectorAll('#pu');
                                          z=0;
                                    for (var i = 0; i < pts.length; i++) {
                                          var x = parseInt(nbrs[i].textContent);
                                          var y = parseInt(pus[i].textContent);
                                          var pt = x*y;
                                          pts[i].textContent = pt;
                                          z= z+pt;
                                      }
                                    
                                      tt.textContent = z+' XAF';

                        }            
            }
                   //console.log(pdtnames);
      });

      // Ajout d'un gestionnaire pour l'événement click
      // Ajout d'un gestionnaire pour l'événement click
      boutonElt3.addEventListener("click", function () {
            var pdtnames = document.querySelectorAll('#pdtname');
           // console.log (pdtnames.length);
           /* Vérifier si le tableau contient des éléments */
           if (pdtnames.length === 0 ) { // ajouter un élément dans le tableau
                  var insertedRow = document.createElement("tr"); // Création d'un élément li
                  insertedRow.classList = "ar"; // Définition de son identifiant
                  insertedRow.innerHTML = '<th id="pdtname" scope="row">'+boutonElt3.parentElement.childNodes[3].childNodes[1].textContent+'</th>'
                  +'<td id="nbr">1</td>'
                  +'<td id="pu">'+boutonElt3.parentElement.childNodes[3].childNodes[3].textContent+'</td>'
                  +'<td id="pt"></td> '; // Définition de son contenu textuel
                  // Ajout du nouvel élément avant l'identifiant identifié par "php"
                  document.getElementById("tableau").insertBefore(insertedRow, 
                  document.getElementById("tr"));

                  var pts = document.querySelectorAll('#pt');
                  var nbrs = document.querySelectorAll('#nbr'); // retreive number of items for an article from the bucket
                  var pus = document.querySelectorAll('#pu');

                  z=0;
                  for (var i = 0; i < pts.length; i++) {
                        var x = parseInt(nbrs[i].textContent);
                        var y = parseInt(pus[i].textContent);
                        var pt = x*y;
                        pts[i].textContent = pt;
                        z= z+pt;
                    }
                  
                    tt.textContent = z+' XAF';

           } else {
                 var bool = false
                  var pdtnames = document.querySelectorAll('#pdtname');
                  for (var i = 0; i < pdtnames.length; i++) {
                       // console.log(pdtnames[i].textContent);
                       // console.log(boutonElt.parentElement.childNodes[3].childNodes[1].textContent);
                       var pts = document.querySelectorAll('#pt');
                       var nbrs = document.querySelectorAll('#nbr'); // retreive number of items for an article from the bucket
                       var pus = document.querySelectorAll('#pu');
                         if (pdtnames[i].textContent === boutonElt3.parentElement.childNodes[3].childNodes[1].textContent){
                              console.log('yes1')
                              nbrs[i].textContent = parseInt(nbrs[i].textContent) + 1;
                              z=0;
                              for (var i = 0; i < pts.length; i++) {
                                    var x = parseInt(nbrs[i].textContent);
                                    var y = parseInt(pus[i].textContent);
                                    //console.log(nbrs[i].textContent);
                                    var pt = x*y;
                                    pts[i].textContent = pt;
                                    z= z+pt;
                                }
                              
                                tt.textContent = z+' XAF';
                                bool= true
                              break;
                              
                              //console.log('yes');
                        }
                  }
                        if (bool === false) {
                             // console.log('yes');
                              var insertedRow = document.createElement("tr"); // Création d'un élément li
                                    insertedRow.classList = "ar"; // Définition de son identifiant
                                    insertedRow.innerHTML = '<th id="pdtname" scope="row">'+boutonElt3.parentElement.childNodes[3].childNodes[1].textContent+'</th>'
                                    +'<td id="nbr">1</td>'
                                    +'<td id="pu">'+boutonElt3.parentElement.childNodes[3].childNodes[3].textContent+'</td>'
                                    +'<td id="pt"></td> '; // Définition de son contenu textuel
                                    // Ajout du nouvel élément avant l'identifiant identifié par "php"
                                    document.getElementById("tableau").insertBefore(insertedRow, 
                                    document.getElementById("tr"));

                                    var pts = document.querySelectorAll('#pt'); // total prices from the bucket
                                    var nbrs = document.querySelectorAll('#nbr'); // retreive number of items for an article from the bucket
                                    var pus = document.querySelectorAll('#pu');
                                          z=0;
                                    for (var i = 0; i < pts.length; i++) {
                                          var x = parseInt(nbrs[i].textContent);
                                          var y = parseInt(pus[i].textContent);
                                          var pt = x*y;
                                          pts[i].textContent = pt;
                                          z= z+pt;
                                      }
                                    
                                      tt.textContent = z+' XAF';

                        }            
            }
                   //console.log(pdtnames);
      });


/* var pns = document.querySelectorAll('#pn'); // retreive product names
var pps = document.querySelectorAll('#pp'); */ // retreive all product unit prices 

/*-------------- opérations à l'intérieur du panier-----------------*/

//console.log(document.getElementsByTagName('td'));
for (var i = 0; i < pts.length; i++) {
      var x = parseInt(nbrs[i].textContent);
      var y = parseInt(pus[i].textContent);
      var pt = x*y;
      pts[i].textContent = pt;
      z= z+pt;
  }

  tt.textContent = z+' XAF';



  