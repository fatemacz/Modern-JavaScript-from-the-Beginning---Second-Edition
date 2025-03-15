// ==================================================
// replaceWith() Method
// ==================================================
function replaceFirstItem() {
    const firstItem = document.querySelector('li:first-child');

    const li = document.createElement('li');
    li.textContent = 'Replaced First';

    firstItem.replaceWith(li);
}

replaceFirstItem();

// ==================================================
// OuterHTML Property
// ==================================================
function replaceSecondItem() {
    const secondItem = document.querySelector('li:nth-child(2)');

    secondItem.outerHTML = '<li>Replaced Second</li>';
}

replaceSecondItem();

// ========================
// Replace All Items
// ========================
function replaceAllItems() {
    const lis = document.querySelectorAll('li');

    // lis.forEach((item, index) => {
    //   // item.outerHTML = '<li>Replace All</li>';
    //   if (index === 1) {
    //     item.innerHTML = 'Second Item';
    //   } else {
    //     item.innerHTML = 'Replace All';
    //   }
    // });

    lis.forEach(
        (item, index) =>
            (item.outerHTML =
                index === 2 ? '<li>Thrid Item</li>' : '<li>Item</li>')
    );
}

replaceAllItems();

// ==================================================
// replaceChild() Method
// ==================================================
function replaceChildHeading() {
    const header = document.querySelector('header'); // parent
    const h1 = document.querySelector('header h1'); // child

    const h2 = document.createElement('h2'); // new child
    h2.id = 'app-title';
    h2.textContent = 'Shopping List';

    header.replaceChild(h2, h1); // replace old child with new child
}

replaceChildHeading();
