let products = [

    {
        id:1,
        name:"Maggie Noodles",
        price:10,
        category:"Food",
        quantity:150,
        pic:"https://www.bmartt.com/wp-content/uploads/2021/07/Maggi-2-minute-Noodles.-70g.png"
    },
    {
        id:2,
        name:"Coca Cola",
        price:40,
        category:"Drink",
        quantity:200,
        pic:"https://freepngimg.com/save/5491-coca-cola-bottle-png-image/1014x3933"
    },
    {
        id:3,
        name:"Amul Cheese",
        price:90,
        category:"Dairy",
        quantity:30,
        pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR-a0oHUdZRy_0j0ahsnHobGyAFhws8RV7tA&usqp=CAU"
    },
    {
        id:4,
        name:"Gatorade Energy Drink",
        price:70,
        category:"Drink",
        quantity:50,
        pic:"https://5.imimg.com/data5/CX/AO/MY-21356805/gatorade-blue-bolt-flavour-sports-drink-500x500.jpg"
    },
    {
        id:5,
        name:"Go Cheese",
        price:120,
        category:"Dairy",
        quantity:22,
        pic:"https://awesomedairy.com/wp-content/uploads/2017/02/Go-slice-cheese-plain-200gm.png",
    }
]



function displayData(arr)
{
    document.getElementById("data").innerHTML="";

    arr.forEach((product,index)=>{
        let row = document.createElement("tr");

        let numberTd = document.createElement("td");
        numberTd.append(index+1);

        let nameTD = document.createElement("td");
        nameTD.append(product.name);

        let priceTD = document.createElement("td");
        priceTD.append(product.price)

        let categoryTD = document.createElement("td");
        categoryTD.append(product.category)

        let quantityTD = document.createElement("td");
        quantityTD.append(product.quantity)

        let picTD = document.createElement("td");
        let proPic = document.createElement("img");
        proPic.setAttribute("src",product.pic);
        picTD.appendChild(proPic)

        row.appendChild(numberTd)
        row.appendChild(nameTD);
        row.appendChild(priceTD);
        row.appendChild(categoryTD);
        row.appendChild(quantityTD);
        row.appendChild(picTD);

        document.getElementById("data").appendChild(row);
    })
}

displayData(products)

let filterStatus = false;
function openfiltersection()
{
    if (filterStatus==false){
        document.getElementById("filter_box").style.marginLeft="0";
        filterStatus = true;
    }
    else{
        document.getElementById("filter_box").style.marginLeft="-25%";
        filterStatus = false;
    }
}

let filters = {
    category:null,
    quantity:null,
    minPrice:null,
    maxPrice:null
}

function setfilters(property,value){
    
    if(value!="")
    {
        filters[property] = value;

        if(property === "minPrice")
        {
            // document.getElementById("minPrice").max=Number(value);
            document.getElementById("highMinPriceLable").innerText=Number(value);
            document.getElementById("maxPrice").min=Number(value)+1;
            document.getElementById("lowMaxPriceLable").innerText=Number(value)+1;
        }
        if(property === "maxPrice"){
            document.getElementById("highMaxPriceLable").innerText=Number(value);
        }
    }
    else{
        filters[property] = null;
    } 
    console.log(filters)
    
}

function filter(){

    let fliteredData = products;

    if(filters.category!==null)
    {
        fliteredData=fliteredData.filter((product,index)=>{
            return product.category.toUpperCase() === filters.category.toUpperCase();
        })
    }

    if(filters.quantity !==null)
    {
        fliteredData=fliteredData.filter((product,index)=>{
            return Number(filters.quantity) <= product.quantity;
        })
    }

    if(filters.minPrice!=null){
        fliteredData=fliteredData.filter((product,index)=>{
            return Number(filters.minPrice) <= product.price;
        })
    }

    if(filters.maxPrice!=null){
        fliteredData=fliteredData.filter((product,index)=>{
            return Number(filters.maxPrice) >= product.price;
        })
    }

    displayData(fliteredData);
}