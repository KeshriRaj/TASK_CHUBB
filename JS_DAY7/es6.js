// 1.)chunk
let chunks = (val, s) => {
    let l = val.length;
    let i=0;
    let ar=[];
    while(i<l)
    {
        ar.push(val.slice(0,s))
        val.splice(0,s);
         i=i+s;
    }
    return ar

}

let anss = ['1', '2', '3', '4', '5', '6']

ans=chunks(['1', '2', '3', '4', '5', '6'], 2)
console.log("After dividing ",anss," into chunks = ",ans)

// 2.) pull

let pulls=(arr,val)=>{
    for(i=0;i<val.length;i++)
    {
        let x=0;
        while(x<arr.length)
        {
            if(val[i]==arr[x])
            {
            arr.splice(x,1);
            }
            x++;
        }
    }
    return arr;

}
let ans2=[];
ans2=pulls(['a', 'b', 'c', 'a', 'b', 'c'],['a','c']);
console.log("After Pulling off ",['a','c']," from ",['a', 'b', 'c', 'a', 'b', 'c']," = ",ans2)


//3.) difference

let differences=(arr,val)=>{
    for(i=0;i<val.length;i++)
    {
        let x=0;
        while(x<arr.length)
        {
            if(val[i]==arr[x])
            {
            arr.splice(x,1);
            }
            x++;
        }
    }
    return arr;

}
let ans3=[];
ans3=pulls([2,1,3,5,6],[2,3]);
console.log("Difference between",[2,1,3,5,6],"&",[2,3],"=",ans3)

//4.) take

var takes=(val,n)=>{
    return val.slice(0,n);
}

let ans4 = takes([1,2,3,4,5],3);
console.log("Taking first ",3," element from",[1,2,3,4,5]," = ",ans4)

//5.) filter

var filters=(users,val)=>{
    let vote=[];
    for(item in users)
    {
        if(users[item]>=18)
        vote.push(users[item]);
    }
    return vote;
}

let pp=[25,56,14,18];
console.log("The person that can votes among(filter function) ",pp," is ",filters(pp,18));



//6.) find
var find=(users,val)=>{
    let vote=[];
    for(item in users)
    {
        if(users[item]>=18)
        {
        vote.push(users[item]);
        break;
        }
    }
    return vote;
}

let pp1=[14,56,14,18];
console.log("The 1st person that can votes among(find function) ",pp1," is ",find(pp1,18));






// 7.) sum

var sum_array=(val)=>{
    let s=0;
    for(var i=0;i<val.length;i++)
    {
        s=s+val[i];
    }
    return s;
}

let ans7=sum_array([4,5,4,7,9]);
console.log("Sum of elements in array([4,5,4,7,9]) = ",ans7)

//9.) 
// 8.) Reduce 


var reduce_fun=(arr)=>{
    let ss=0;
    for(let i=0;i<arr.length;i++)
    {
       ss+=arr[i]; 
    }

    return ss;
}

let xyz=[5,6,7,8];
console.log("Reduce of ",xyz," = ",reduce_fun(xyz));


// 8.)  gte
var gte=(arr,n)=>{
    let arr3=[];
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i]>=n)
        {
        arr3.push(arr[i]);
        }

    }
    return arr3;

}
let arr2=[5,87,14,5,1]
console.log("Elements in array (gte)",arr2," >=6  is ",gte(arr2,6));
// 9.) keys

var get_values=(obj1)=>{
    let arr=[];
    for(val in obj1)
    {
        arr.push((val));
    }
    return arr
}
var x1={'first': "Javascript",'second': 2,'third': 'test'};
console.log("Keys for object ",x1,"=",get_values(x1));

//10.) values
var get_values=(obj1)=>{
    let arr=[];
    for(var key in obj1)
    {
        arr.push((obj1[key]));
    }
    return arr
}
var x1={'first': "Javascript",'second': 2,'third': 'test'};
console.log("Values for object ",x1,"=",get_values(x1));


// 11.) camelCase
var camelcase_fun=(str)=>{
    let arr=[];
    for(let i=0;i<str.length-1;i++)
    {
    if(str[i]==' ')
    {
        arr.push(i);
        if(str.charCodeAt(i+1)>=65 && str.charCodeAt(i+1)<=90)
        {
            continue;
        }
        else if(str.charCodeAt(i+1)>=97 && str.charCodeAt(i+1)<=122)
        {
            let f=str.substr(0,i);
            let s=str.substr(i+2);
            let r=str.charAt(i+1).toUpperCase();
            str=f+r+s;
            
        }
    }
}
return str;

}

var ans11=camelcase_fun("Love javaScript exercises");
console.log("Camelcase for 'Love javaScript exercises' = ", ans11);

//12.) endsWith
var ends_with_fun=(str,str2)=>{
    let x=str.length;
    let j=0;
    for(let i=x-str2.length;i<str.length;i++)
    {
        if(str[i]!=str2[j])
        {
        return false;
        }
        j++;
    }
    return true;
}

console.log("Is 'Hello everyone' ends with 'one' ?",ends_with_fun("Hello everyone","one"))


//13.) tail
var tail_fun=(arr)=>{
    return arr.slice(1)
}

let xx=[1,2,3,4,5,7,8];
var ans13=tail_fun([1,2,3,4,5,7,8])
console.log("Tail of ",xx," = ",ans13);

//14.) union

var union_arr=(arr1,arr2)=>{
    let new_aarr=[];
    for(let i=0;i<arr1.length;i++)
    {
        if(!(callbk(new_aarr,arr1[i])))
        {
            new_aarr.push(arr1[i]);
        }
    }

    for(let i=0;i<arr2.length;i++)
    {
        if(!(callbk(new_aarr,arr2[i])))
        {
            new_aarr.push(arr2[i]);
        }
    }
    return new_aarr;
}
var callbk=(new_aarr,x)=>{
    for(let i=0;i<new_aarr.length;i++)
    {
        if(new_aarr[i]==x)
        {
        return true;
        }
        else
        {
        return false;
        }
    }
}
let p1=[2,1,3];
let p2=[2,8,9,2];
let ans15=union_arr([2,1,3],[2,8,9,2]);
console.log("Union for array ",p1,p2," is ",ans15)
