let voucher=JSON.parse(localStorage.getItem("purchase"))
console.log(voucher)

for(key in voucher){
    

    

    let img=document.createElement("img")
img.src=voucher.image
let amount=document.createElement("p")
amount.innerText=voucher.amount

}
