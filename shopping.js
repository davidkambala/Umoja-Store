var item1= 0;
var item2= 0;
var item3= 0;
var item4= 0;
var item5= 0;
var item6= 0;
var item7= 0;
var item8= 0;
var item9= 0;
var item10= 0;
var count=0;
var total=0;
var item1price=1999;
var item2price=1299;
var item3price=2999;
var item4price=799;
var item5price=999;
var item6price=1999;
var item7price=1299;
var item8price=2999;
var item9price=799;
var item10price=999;

function count_item(){
    count++;
    document.getElementById("items_num").innerHTML= "x" + count;
    document.getElementById("num").innerHTML= count + " ";
}
function pd_swap1() {
  let select = document.getElementById("ITEM1");
  let selectedOption = select.options[select.selectedIndex].value;

  if (selectedOption == "Property1") {

        item1price=1999;
        document.getElementById("pd_item1").innerHTML="RTX 3060 GPU<br>12th GEN CORE I7  <br> $1999.00 ";
    } 
    else if (selectedOption == "Property2") {
        item1price=2499;
        document.getElementById("pd_item1").innerHTML="RTX 3080 GPU<br>12th GEN CORE I9  <br> $2499.00 ";
  } 
}

function pd_swap6() {
  let select = document.getElementById("ITEM6");
  let selectedOption = select.options[select.selectedIndex].value;

  if (selectedOption == "Property1") {

        item6price=1999;
        document.getElementById("pd_item6").innerHTML="RTX 3060 GPU<br>12th GEN CORE I7  <br> $1999.00 ";
    } 
    else if (selectedOption == "Property2") {
        item6price=2499;
        document.getElementById("pd_item6").innerHTML="RTX 3080 GPU<br>12th GEN CORE I9  <br> $2499.00 ";
  } 
}


function pd_swap2() {
    let select = document.getElementById("ITEM2");
    let selectedOption = select.options[select.selectedIndex].value;
    
    if (selectedOption == "Property1") {
      item2price=1299;
      document.getElementById("pd_item2").innerHTML="RTX 3050 GPU <br>AMD RYZEN 5 <br> $1299.00 ";
    } 
    else if (selectedOption == "Property2") {
      item2price=1799;
      document.getElementById("pd_item2").innerHTML="RTX 3060 GPU<br>AMD RYZEN 7  <br> $1799.00 ";
    } 
  }

  function pd_swap7() {
    let select = document.getElementById("ITEM7");
    let selectedOption = select.options[select.selectedIndex].value;
    
    if (selectedOption == "Property1") {
      item7price=1299;
      document.getElementById("pd_item7").innerHTML="RTX 3050 GPU <br>AMD RYZEN 5 <br> $1299.00 ";
    } 
    else if (selectedOption == "Property2") {
      item7price=1799;
      document.getElementById("pd_item7").innerHTML="RTX 3060 GPU<br>AMD RYZEN 7  <br> $1799.00 ";
    } 
  }

  function pd_swap3() {
    let select = document.getElementById("ITEM3");
    let selectedOption = select.options[select.selectedIndex].value;
    
    if (selectedOption == "Property1") {
      item3price=2999;
      document.getElementById("pd_item3").innerHTML="M1 PRO <br>32GB RAM <br> <b>$2999.00</b>";
    } 
    else if (selectedOption == "Property2") {
      item3price=5999;
      document.getElementById("pd_item3").innerHTML="M1 MAX <br>64GB RAM <br> $5999.00";
    } 
  }

  function pd_swap8() {
    let select = document.getElementById("ITEM8");
    let selectedOption = select.options[select.selectedIndex].value;
    
    if (selectedOption == "Property1") {
      item8price=2999;
      document.getElementById("pd_item8").innerHTML="M1 PRO <br>32GB RAM <br> <b>$2999.00</b>";
    } 
    else if (selectedOption == "Property2") {
      item8price=5999;
      document.getElementById("pd_item8").innerHTML="M1 MAX <br>64GB RAM <br> $5999.00";
    } 
  }

  function pd_swap4() {
    let select = document.getElementById("ITEM4");
    let selectedOption = select.options[select.selectedIndex].value;
    
    if (selectedOption == "Property1") {
      item4price=799;
      document.getElementById("pd_item4").innerHTML="GTX 1650 GPU<br>12th GEN CORE I5<br> $799.00";
    } 
    else if (selectedOption == "Property2") {
      item4price=999;
      document.getElementById("pd_item4").innerHTML="RTX 3050 GPU<br>12th GEN CORE I7<br> $999.00 ";
    } 
  }

  function pd_swap9() {
    let select = document.getElementById("ITEM9");
    let selectedOption = select.options[select.selectedIndex].value;
    
    if (selectedOption == "Property1") {
      item9price=799;
      document.getElementById("pd_item9").innerHTML="GTX 1650 GPU<br>12th GEN CORE I5<br> $799.00";
    } 
    else if (selectedOption == "Property2") {
      item9price=999;
      document.getElementById("pd_item9").innerHTML="RTX 3050 GPU<br>12th GEN CORE I7<br> $999.00 ";
    } 
  }

  function pd_swap5() {
    let select = document.getElementById("ITEM5");
    let selectedOption = select.options[select.selectedIndex].value;
    
    if (selectedOption == "Property1") {
      item5price=999;
      document.getElementById("pd_item5").innerHTML="INTEL HD GRAPHICS 620 <br>11th GEN CORE I5<br> $999.00";
    } 
    else if (selectedOption == "Property2") {
      item5price=1099;
      document.getElementById("pd_item5").innerHTML="INTEL HD GRAPHICS 620 <br>11th GEN CORE I7<br> $1099.00";
    } 
  }

  function pd_swap10() {
    let select = document.getElementById("ITEM10");
    let selectedOption = select.options[select.selectedIndex].value;
    
    if (selectedOption == "Property1") {
      item10price=999;
      document.getElementById("pd_item10").innerHTML="INTEL HD GRAPHICS 620 <br>11th GEN CORE I5<br> $999.00";
    } 
    else if (selectedOption == "Property2") {
      item10price=1099;
      document.getElementById("pd_item10").innerHTML="INTEL HD GRAPHICS 620 <br>11th GEN CORE I7<br> $1099.00";
    } 
  }

function item_1(){
    item1+=item1price;
}
function item_2(){
    item2+=item2price;
}
function item_3(){
    item3+=item3price;
}
function item_4(){
    item4+=item4price;
}
function item_5(){
    item5+=item5price;
}
function item_6(){
  item6+=item6price;
}
function item_7(){
  item7+=item7price;
}
function item_8(){
  item8+=item8price;
}
function item_9(){
  item9+=item9price;
}
function item_10(){
  item10+=item10price;
}

function total_pr (){
    
    total= item1 + item2 + item3 + item4 + item5 + item6 + item7 + item8 + item9 + item10;
    document.getElementById("total_price").innerHTML= "$" + total;
    document.getElementById("totalprice").innerHTML= "$" + total;
}
function empty_cart(){
    document.getElementById("total_price").innerHTML= "0";
    document.getElementById("items_num").innerHTML= "x" + "0";
    document.getElementById("totalprice").innerHTML= "$0.00" ;
    document.getElementById("num").innerHTML= "0";
    count=0;
    total=0;
    item1=0;
    item2=0;
    item3=0;
    item4=0;
    item5=0;
    item6=0;
    item7=0;
    item8=0;
    item9=0;
    item10=0;
}
function validateForm() {
    if(total<1000){
        total+=(total)*0.1;
        alert("10% delivery cost added to the total cost");
        document.getElementById("total_price").innerHTML= total;
        document.getElementById("totalprice").innerHTML= "$" + total;
    }
    
    var choice = prompt("Do you accept the cost ? yes (Type 1) or no (Type 0)");
    if(choice==1){
        alert("Thank you");
        return true;
    }
    else if(choice==0){
        alert("application withdraw");
        return false;
    }
  }
