
                //......Object........// 
let ditiAge = 24;
let ditiHairColor = "Black";
let ditiHeight = 5.1;
let address = 'Kishoregonj'
let mySubject = ['Physics', 'math', 'English', 'Bangla'];

            //  Objects declear characteristics (boisistho) 

   /* একটি object যার মধ্যে ৪টি property/key আছে:
            1.Name (String টাইপ) - "Kulsum"
            2.age (Number টাইপ) - 25
            3.profession (String টাইপ) - "Student"
            4.isReading (Boolean টাইপ) - false */

let diti = {Name: 'Diti', age: 24, fathersName: 'sohorab', profession: "Student", hairColor: "Black", height: 5.1};

let personInfo = {
    
    Name        : 'Diti',
    fatherName : 'sohorab',
    profession  : "Student",
    age         : 23,
    height      :  5.1,
    hairColor   : "Black",
    address     : 'dhaka',
    bloodGroup  : 'o+'

     
};

console.log(personInfo);

//..........কীভাবে personInfo অবজেক্ট থেকে নির্দিষ্ট property or key বের করবেন:...//
//১. ডট নোটেশন দিয়ে:

console.log(personInfo.Name);
console.log(personInfo.bloodGroup);
console.log(personInfo.fatherName);

//২. ব্র্যাকেট নোটেশন দিয়ে:

console.log(personInfo["profession"]);
console.log(personInfo["address"]);
console.log(personInfo["hairColor"]);

         //..new Variable e Set kora..//
/*
let stnName = personInfo.Name;
let stnName1 = personInfo["Name"];
console.log(stnName);
console.log(stnName1);
*/

//..3.নতুন প্রপার্টি যোগ করা:

personInfo.hobby = "Music";
console.log(personInfo.hobby);    //ডট নোটেশন দিয়ে//
console.log(personInfo['hobby']);  //ব্র্যাকেট নোটেশন দিয়ে//

//...4.প্রপার্টি আপডেট করা:

personInfo.age = 24;         //ডট নোটেশন দিয়ে//
personInfo['age'] = 24;     //ব্র্যাকেট নোটেশন দিয়ে//
console.log(personInfo);

//...5.প্রপার্টি মুছে ফেলা:

delete personInfo.height;
console.log(personInfo);