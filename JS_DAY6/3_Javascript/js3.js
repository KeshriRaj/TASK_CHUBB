
var library=[
    {
        title:"JavaScript",
        price:500,
        readers:[
            {
                name:"Person 1",
                count:300
            },
            {
                name:"Person 2",
                count:400
            }
        ],
        authorDetails:{
            name:"Raj",
            age: 40
        }
    },
    {
        title:"NodeJs",
        price:60,
        readers:[],
        authorDetails:{
            name:"Raj",
            age:40
        }
    }
]

/*1.) Update the count of Person 2 inside readers Array in Javascript;(INCREMENTED) */

library.forEach(function(obj1){
    obj1.readers.forEach(function(obj2){
        if(obj2.name=="Person 2")
        obj2.count+=250;
    })

})
console.log("Updated Count : ",library[0].readers[1].count);

// 2.) Insert a new key called email and assign a value email1@gmail.com and email2@gmail.com  respectively in both authorDetails object; 

library[0].authorDetails.email="email1@gmail.com";
library[1].authorDetails.email="email2@gmail.com";

console.log("First Email Added : ",library[0].authorDetails);
console.log("Second Email Added : ",library[0].authorDetails);


// 3.)  Insert a new reader in the readers array for Nodejs.

let reader={name:"Kunal",Age:22}

library[1].readers.push(reader);

console.log("Insert a new reader in the readers array for Nodejs : ",library[1].readers[0]);



// 4.) Create a New Object in the library for a new Book called SQL. 

let book={
    title:"SQL",
    price:450,
    readers:[
        {
            name:"Maya",
            age:23
        },
        {
            name:"Manish",
            age:25
        }
    ],
    authorDetails:{
        name:"Ansh",
        age:50
    }

}
library.push(book);

console.log("Create a New Object in the library for a new Book called SQL : ",library[2]);


// 5.) Find the datatype of author age in Nodejs Object. 

console.log("Datatype of author age in Nodejs Object : ",typeof(library[2].authorDetails.age));