function highlight(table) {
  for (let tr of table.children[1].rows) {
    console.log(tr);
    let available = tr.cells[3];
    let gender = tr.cells[2].textContent;
    let age = +tr.cells[1].textContent;

    if (available.hasAttribute('data-available')) {
      switch (available.dataset.available) {
      case 'true':
        tr.classList.add('available');
        break;
      case 'false':
        tr.classList.add('unavailable');
      }
    } else {
      tr.hidden = true;
    }

    switch (gender) {
    case 'm':
      tr.classList.add('male');
      break;
    case 'f':
      tr.classList.add('female');
    }

    if (age < 18) {
      tr.style.textDecoration = 'line-through';
    }
  }
}
