var budgetController = (function() {
    var Income = function(id, description, record) {
        this.id = id;
        this.description = description;
        this.record = record;
    };
    
    var data = {
        allItems: {
            inc: []
        }
    };
    
    return {
        addItem: function(des, record) {
            var newItem, ID;
            if(data.allItems['inc'].length > 0){
                ID = data.allItems['inc'][data.allItems['inc'].length-1].id + 1;
            } else {
                ID = 0;
            }
            newItem = new Income(ID, des, record);
            data.allItems['inc'].unshift(newItem);
            return newItem;
        },
        deleteItem: function(ID) {
            var ids, index;
            
            ids = data.allItems['inc'].map(function(current) {
                return current.id;
            });
            index = ids.indexOf(ID);
            if (index !== -1) {
                data.allItems['inc'].splice(index, 1);
            }
        },
        testing: function() {
            console.log(data);
        }
    }
}) ();

var UIController = (function() {
    var DOMstrings = {
        inputDescription: '.add__description',
        inputRecord: '.add__record',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list'
    };
    return {
        getInput: function () {
            return {
                description: document.querySelector(DOMstrings.inputDescription).value,
                record: document.querySelector(DOMstrings.inputRecord).value
            }
        },
        deleteListItem: function(selectorID) {
            var element = document.getElementById(selectorID);
            element.parentNode.removeChild(element);  
        },
        clearFields : function() {
            var fields, fieldsArr;
            fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputRecord);
            var fieldsArr = Array.prototype.slice.call(fields);
            fieldsArr.forEach(function(current, index, array) {
                current.value = "";
            fieldsArr[0].focus();
            });
        },
        getDOMStrings :function() {
            return DOMstrings;
        },
        addListItem: function(obj) {
            var html, newHtml, element, itemPercentage;
            element = DOMstrings.incomeContainer;
            html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__record">%record%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%record%', obj.record);
            
            //Insert Html to DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        }
    }
})();

var controller = (function(budgetCtrl, UICtrl) {
    var DOM = UICtrl.getDOMStrings();
    var setupEventListeners = function () {
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
        document.addEventListener('keypress', function(event) {
            if(event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });
        document.querySelector('.container').addEventListener('click', ctrlDeleteItem);
    };
    var ctrlAddItem = function() {
        //get input data & add to controller.
        var input, newItem;
        input = UICtrl.getInput();
        if(input.description !==""){
            newItem = budgetCtrl.addItem(input.description, input.record);
            UICtrl.addListItem(newItem);
            UICtrl.clearFields();
        }
    };
    var ctrlDeleteItem = function(event) {
        var itemID, split, ID;
        itemID = event.target.parentNode.parentNode.parentNode.id;
        
        if (itemID){
            splitID = itemID.split('-');
            ID = parseInt(splitID[1]);
        }
        budgetCtrl.deleteItem(ID);
        UICtrl.deleteListItem(itemID);
    };
    return {
        init: function() {
            setupEventListeners();
        }
    }
    
})(budgetController, UIController);

controller.init();

