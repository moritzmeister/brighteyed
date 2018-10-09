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
            data.allItems['inc'].push(newItem);
            return newItem;
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
            html = '<tr id="inc-%id%"><td class="item__description">%description%</td><td class="item__record">%record%</td></tr>';
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
    return {
        init: function() {
            setupEventListeners();
        }
    }
    
})(budgetController, UIController);

controller.init();

