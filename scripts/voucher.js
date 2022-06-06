
const url=`https://masai-vouchers-api.herokuapp.com/api/vouchers`
fetch(url)
.then(function (res){
    return res.json()
})
.then(function(res){
    appendData(res[0].vouchers)
    console.log(res[0].vouchers)
})
.catch(function(err){
    console.log("err:", err)
})

function appendData(data){
data.forEach(function(el){
    let voucher=document.createElement("div")

    let img=document.createElement("img")
    img.src=el.image
    let name=document.createElement("p")
    name.innerText=el.name;
    let price=document.createElement("p")
    price.innerText=el.price
    let buy=document.createElement("button")
buy.innerText="BUY"
  buy.addEventListener("click",function(){
      buycard(el)
  })

  voucher.append(img,name,price,buy)
    document.querySelector("#voucher_list").append(voucher)
})
}

let book=[]

function buycard(el){
book.push(el)
localStorage.setItem("purchase",JSON.stringify(book))
let price =el.price
console.log(price)


let user=JSON.parse(localStorage.getItem("user"))
console.log(user)
for(key in user){
var    amount=user.amount
}

console.log(amount)
if(amount>price){
var total=Number(amount)-Number(price)


console.log(total)
alert("Hurray! purchase successful")


}
else{
alert("Sorry! insufficient balance")
}
}

