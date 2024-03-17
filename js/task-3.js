const friends = [
  { name: 'Poly', online: false },
  { name: 'Mango', online: false },
];
console.table(friends);

function findFriendByName (allFriends, friendName) {
for (const friend of allFriends) {
if (friendName === friend.name) {
  return friend;
}
}
}
console.log(findFriendByName (friends, 'Mango'));
