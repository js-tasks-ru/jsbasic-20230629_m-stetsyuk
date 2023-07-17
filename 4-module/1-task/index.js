function makeFriendsList(friends) {
  let ul = document.createElement('ul');

  friends.forEach((el) => {
    let li = document.createElement('li');

    li.textContent = `${el.firstName} ${el.lastName}`;
    ul.append(li);
  });

  return ul;
}
