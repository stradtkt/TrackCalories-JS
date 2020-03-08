

//Item Controller
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
        addItem: function(name, calories) {
            let ID;
            //create id
            if(data.items.length > 0) {
                ID = data.items[data.items.length - 1].id + 1;
            } else {
                ID = 0;
            }
            //calories to number
            const calories = parseInt(calories);
            //create new item
            newItem = new Item(ID, name, calories);
            //add to items array
            data.items.push(newItem);
            return newItem;
        },
        logData: function() {
            return data;
        }
    }
})();


//UI Controller
const UICtrl = (function() {
    const UISelectors = {
        itemList: '#item-list',
        addBtn: '.add-btn',
        itemName: '#item-name',
        itemCalories: '#item-calories'
    }
    return {
        populateItemList: function(items) {
            let html = '';
            items.forEach(function(item) {
                html += `<li class="collection-item" id="item-${item.id}"><strong>${item.name}: </strong><em>${item.calories}</em> <a href="#" class="secondary-content"><i class="edit-item fas fa-pen-square"></i></a></li>`;
            });
            document.querySelector(UISelectors.itemList).innerHTML = html;
        },
        getItemInput: function() {
            return {
                name: document.querySelector(UISelectors.itemName).value,
                calories: document.querySelector(UISelectors.itemCalories).value
            }
        },
        getSelectors: function() {
            return UISelectors;
        }
    }

})();


//App Controller
const App = (function(ItemCtrl, UICtrl) {

    const loadEventListeners = function() {
        //Get UI Selectors
        const UISelectors = UICtrl.getSelectors();
        //Add item event
        document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);
    }

    const itemAddSubmit = function(e) {
        const input = UICtrl.getItemInput();
        
        if(input.name !== '' && input.calories !== '') {
            //Add item
            const newItem = ItemCtrl.addItem(input.name, input.calories);

        }
        e.preventDefault();
    }

    return {
        init: function() {
            // console.log('Initializing App...');
            const items = ItemCtrl.getItems();
            // console.log(items);
            UICtrl.populateItemList(items);
            //load event listeners 
            loadEventListeners();
        }
    }
})(ItemCtrl, UICtrl);

App.init();