




const section={
    women:{colthes:[
        "https://travel-to-turkeys.com/wp-content/uploads/2020/05/%D9%85%D8%B5%D8%A7%D8%AF%D8%B1-%D8%B4%D8%B1%D9%83%D8%A7%D8%AA-%D8%AA%D8%B5%D9%86%D9%8A%D8%B9-%D8%A7%D9%84%D8%A8%D8%AF%D9%84%D8%A9-%D8%A7%D9%84%D8%AA%D8%B1%D9%83%D9%8A%D8%A9.jpg",
        "https://dorar.at/imup2/2015-10/68756.htb17er5fvxxxxayxpxxq6xxfxxxr.jpg",
        "https://dorar.at/imup2/2015-10/68756.women-039-s-black-beige-pants-2015-new-office.jpg",
        "https://dorar.at/imup2/2015-10/68756.new-2015-autumn-formal-font-b-pantsuits-b-font-fon.jpg",
        "https://kblat.net/wp-content/uploads/2019/10/2261.jpg"
    ] ,shoes:[
       " https://image.shutterstock.com/z/stock-photo-bright-colored-women-s-shoes-on-a-solid-background-copy-space-text-1062752402.jpg",
       "https://image.freepik.com/free-photo/sport-running-shoes_1203-3414.jpg",
       "https://image.freepik.com/free-photo/pair-trainers_144627-3800.jpg",
       "https://image.freepik.com/free-photo/colorful-sport-shoes-mustard-color-wall_151013-4913.jpg"
    ],accessories:[
        "https://images-na.ssl-images-amazon.com/images/I/81UEwSXETfL._SL1500_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/81RmPeMmCQL._SL1500_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/9171ETGQLKL._SL1500_.jpg"
    ],Handbags:[]},
    mens:{colthes:[] ,shoes:[],accessories:[]},
    gril:{colthes:[] ,shoes:[],accessories:[]},
    kitchen:{cover:[],Dining_room:[],accessories:[]}
    }
    let body=document.querySelector("body")
    let divItem1=document.querySelector("item1")
    let colthes=document.querySelector("#clothes")
    colthes.addEventListener("click",myColthes(women.colthes))
    
   
    const myColthes=(array) =>{
      for(let i=0;i<array.length;i++){
let div=document.createElement("div")
divItem1.append(div)
let a=document.createElement("a")
div.append(a)
a.href=array[i]

      }
      return
    }