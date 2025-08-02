
   //...........Object Key.........//

let personalInfo = {

    Name        : 'Kulsum Diti',
    fatherName  :'Md. Sohorab',
    age         : 24,
    bloodGroup  : 'o+',
    address     : 'Dhaka'

};
           //.......কেবল key বের করতে: Object.keys()........// 

 const mySelf = Object.keys(personalInfo);
 console.log(mySelf);

          //........কেবল value বের করতে: Object.values().......// 

const myValues = Object.values(personalInfo);
console.log(myValues);

           //.......Object.entries() - key এবং value উভয়ই বের করতে:.....//

const fullData = Object.entries(personalInfo);
console.log(fullData);

          //.....Nested object :  Nested Object বলতে বোঝায় একটি অবজেক্টের মধ্যে অন্য একটি অবজেক্ট থাকা।..//

const myInfo = {

    name       : "kulsum", 
    age        : 24,
    profession : "Student", 
    isReading  : false, 
    address    :{ 
                street: "123 Main Street", 
                city: "Kishoreganj", 
                country: "Bangladesh" 
                },
    hobbies: ["traveling", "Reading", "Gardening"],
    status : {
           isMarried : true,
           Children : ['Son', 'Daughter']
        }

};
         //......Nested Object থেকে ডেটা অ্যাক্সেস:......//
         
console.log(myInfo.address.country);
console.log(myInfo.status.Children[0]);
console.log(myInfo.hobbies[2]);




            

