
let personalInfo = {

    Name        : 'Kulsum Diti',
    fatherName  :'Md. Sohorab',
    age         : 24,
    bloodGroup  : 'o+',
    address     : 'Dhaka'

};

 //ডট নোটেশন দিয়ে//

console.log(personalInfo.Name);
console.log(personalInfo.fatherName);
console.log(personalInfo.age);
console.log(personalInfo.bloodGroup);
console.log(personalInfo.address);

//ব্র্যাকেট নোটেশন দিয়ে//

console.log(personalInfo['Name']);
console.log(personalInfo['fatherName']);
console.log(personalInfo['age']);
console.log(personalInfo['bloodGroup']);
console.log(personalInfo['address']);

//নতুন প্রপার্টি যোগ করা//

personalInfo.hobby = "Music";
console.log(personalInfo.hobby);
console.log(personalInfo['hobby']);


