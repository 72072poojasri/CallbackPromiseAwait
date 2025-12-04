// function fun1(fun2){
//     console.log("fun1");
//     fun2();
// }
// function fun2(){
//     console.log("fun2");
// }
// fun1(fun2);

function getUserDetails(id, getUserSubjects){
    console.log("getting user details by userId", id);
    getUserSubjects({userroll : "678"})
};
function getUserSubjects(userroll, getUserMarks){
    console.log("getting user subject by roll number", userroll);
    getUserMarks({subid: "en-1"})
};
function getUserMarks(userSubId){
    console.log("getting user marks with subid",userSubId)
};
getUserDetails("123", function(userRoll){
    getUserSubjects(userRoll, function(userSubId){
        getUserMarks(userSubId)
    })
});