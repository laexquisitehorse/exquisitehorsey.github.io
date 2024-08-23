function filterItems() {
    let input = document.getElementById('searchInput');
    let filter = input.value.toLowerCase();
    let itemList = document.getElementById('itemList');
    let items = itemList.getElementsByClassName('item');

    for (let i = 0; i < items.length; i++) {
        let item = items[i];
        let text = item.textContent || item.innerText;
        if (text.toLowerCase().indexOf(filter) > -1) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    }
}
