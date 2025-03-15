/*
        <!-- beforebegin -->
        <p>
            <!-- afterbegin -->
                foo
            <!-- beforeend -->
        </p>
        <!-- afterend -->
*/

// ==================================================
// insertAdjacentElement Example
// ==================================================
function insertElement(command) {
    const filter = document.querySelector('.filter'); // filter div

    const p = document.createElement('p');
    p.textContent = `insertAdjacentElement: ${command}`;

    filter.insertAdjacentElement(command, p);
}

// insertElement('beforebegin');
// insertElement('afterbegin');
// insertElement('beforeend');
// insertElement('afterend');

/*
    <p>insertAdjacentElement: beforebegin</p>                   <== beforebegin
    <div class="filter">                                                <== filter - <div>
        <p>insertAdjacentElement: afterbegin</p>                <== afterbegin
        <input
            type="text"
            class="form-input-filter"
            id="filter"
            placeholder="Filter Items"
        />
        <p>insertAdjacentElement: beforeend</p>                 <== beforeend
    </div>                                                              <== filter - </div>
    <p>insertAdjacentElement: afterend</p>                      <== afterend
*/

// ==================================================
// insertAdjacentText Example
// ==================================================
function insertText(command) {
    const item = document.querySelector('li:first-child'); // first li item

    console.log(item);

    item.insertAdjacentText(command, `insertAdjacentText: ${command}`);
}

// insertText('beforebegin');
// insertText('afterbegin');
// insertText('beforeend');
// insertText('afterend');

/*
    <ul id="item-list" class="items">
        insertAdjacentText: beforebegin                         <== beforebegin
        <li>                                                            <== li:first-child - <li>
        insertAdjacentText: afterbegin                          <== afterbegin
            Apples
            <button class="remove-item btn-link text-red">
                <i class="fa-solid fa-xmark"></i>
            </button>
        insertAdjacentText: beforeend                           <== beforeend
        </li>                                                           <== li:first-child - </li>
        insertAdjacentText: afterend                            <== afterend
        <li>
            Orange Juice
            <button class="remove-item btn-link text-red">
                <i class="fa-solid fa-xmark"></i>
            </button>
        </li>
        <li>
            Oreos
            <button class="remove-item btn-link text-red">
                <i class="fa-solid fa-xmark"></i>
            </button>
        </li>
        <li>
            Milk
            <button class="remove-item btn-link text-red">
                <i class="fa-solid fa-xmark"></i>
            </button>
        </li>
    </ul>
*/

// ==================================================
// insertAdjacentHTML example
// ==================================================
function insertHTML(command) {
    const clearBtn = document.querySelector('#clear'); // button with id clear

    clearBtn.insertAdjacentHTML(
        command,
        `<h2>insertAdjacentHTML: ${command}</h2>`
    );
}

// insertHTML('beforebegin');
// insertHTML('afterbegin');
// insertHTML('beforeend');
// insertHTML('afterend');

/*
    <h2>insertAdjacentHTML: beforebegin</h2>                    <== beforebegin
    <button id="clear" class="btn-clear">                               <== #clear - <button>
        <h2>insertAdjacentHTML: afterbegin</h2>                 <== afterbegin
        Clear All
        <h2>insertAdjacentHTML: beforeend</h2>                  <== beforeend
    </button>                                                            <== #clear - </button>
    <h2>insertAdjacentHTML: afterend</h2>                       <== afterend
*/

// ==================================================
// insertBefore Example (call parent element)
// ==================================================
function insertBeforeItem() {
    const li = document.createElement('li'); // new li item
    li.textContent = '***insertBefore***';

    const thirdItem = document.querySelector('li:nth-child(3)'); // insert before this third li item

    const ul = document.querySelector('ul'); // parent ul element
    ul.insertBefore(li, thirdItem); // insert new li item before third li item
}

insertBeforeItem();

/*
    <ul id="item-list" class="items">
        <li>
            Apples
            <button class="remove-item btn-link text-red">
                <i class="fa-solid fa-xmark"></i>
            </button>
        </li>
        <li>
            Orange Juice
            <button class="remove-item btn-link text-red">
                <i class="fa-solid fa-xmark"></i>
            </button>
        </li>
        <li>***insertBefore***</li>                             <== insertBefore
        <li>                                                            <== li:nth-child(3) - third li item before insertBefore
            Oreos
            <button class="remove-item btn-link text-red">
                <i class="fa-solid fa-xmark"></i>
            </button>
        </li>
        <li>
            Milk
            <button class="remove-item btn-link text-red">
                <i class="fa-solid fa-xmark"></i>
            </button>
        </li>
    </ul>
*/
