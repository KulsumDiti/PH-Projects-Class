const salary = 21001;
const isBCS = true;
const height = 68;
const hasCar = false;


/* And (&& 2 ta/je koita condition e thakuk sob-ghula
       full-fill hoile e if er console log e dhukbe) otherwise Else e chole jabe */
 

/* 
  if(salary > 20000 && height > 66){
   console.log('Su----patro');
 }
  else{
   console.log('onno patro khuji')
    } */

/*  OR ( || onk ghula conditon er modde jekono akta full-fill
       hoile e if er console log e dhukbe)*/

if(salary > 25000 || height > 72){
    console.log('eso baba kobul');
}
else {
    console.log('vaag tui mokbul')
}


// more and more condition........... OR EXAMPLE

 /*  if(salary > 25000 || height > 72 || isBCS == true){
         console.log('eso baba kobul');
       }
   else {
        console.log('vaag tui mokbul')
     } */

        //  AND EXAMPLE>>>>>>>>>>>>> //
if(salary > 25000 && height > 72 && isBCS == true){
    console.log('eso baba kobul');
}
else {
    console.log('vaag tui mokbul')
}

// -----------------COMPLEX CONDITION--------------------
if((salary > 25000 && hasCar == true) || isBCS== true ){
    console.log('tomar 14 gosti raji')
}

if((salary > 25000 || hasCar == true) && isBCS== true ){
    console.log('tomar 14 gosti raji')
}
