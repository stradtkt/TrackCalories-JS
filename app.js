


const ItemCtrl = (function() {
    //Item Constructor
    const Item = function(id, name, calories) {
        this.id = id;
        this.name = name;
        this.calories = calories;
    }

    //Data Structure / State
    const data = {
        items: [
            {id: 0, name: 'Steak Dinner', calories: 1200},
            {id: 1, name: 'Cookie', calories: 400},
            {id: 2, name: 'Cereal', calories: 500}
        ],
        currentItem: null,
        totalCalories: 0
    }
    return {
        getItems: function() {
            return data.items;
        },
        logData: function() {
            return data;
        }
    }
})();

const UICtrl = (function() {
    const UISelectors = {
        itemList: '#item-list'
    }
    return {
        populateItemList: function(items) {
            let html = '';
            items.forEach(function(item) {
                html += `<li class="collection-item" id="item-${item.id}"><strong>${item.name}: </strong><em>${item.calories}</em> <a href="#" class="secondary-content"><i class="edit-item fas fa-pen-square"></i></a></li>`;
            });
            document.querySelector(UISelectors.itemList).innerHTML = html;
        }
    }

})();

const App = (function(ItemCtrl, UICtrl) {
    return {
        init: function() {
            // console.log('Initializing App...');
            const items = ItemCtrl.getItems();
            // console.log(items);
            UICtrl.populateItemList(items);
        }
    }
})(ItemCtrl, UICtrl);

App.init();