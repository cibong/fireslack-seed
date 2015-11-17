angular.module('angularfireSlackApp')
  .factory('messages',function($firebaseArray,FirebaseUrl){
    var channelMessagesRef = new firebase(FirebaseUrl+'channelMessages');
    var userMessagesRef = new Firebase(FirebaseUrl+'userMessages');

    return{
      forChannel: function(channelId){
          return $firebaseArray(channelMessagesRef.child(channelId));
      },
      forUsers: function(uid1, uid2){
        var path = uid1 < uid2 ? uid1+'/'+uid2 : uid2+'/'+uid1;

        return $firebaseArray(userMessagesRef.child(path));
      }
    };
  });