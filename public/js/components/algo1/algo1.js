 let algo1 = {
     templateUrl: 'js/components/algo1/algo1.html',
     controller: [function() {
         'use  strict'


         function friend(friends) {


             return friends.filter(x => x.length == 4);
         }

         this.myFriends = friend(["Ryan", "Kieran", "Mark"])

     }]
 }
 export default algo1