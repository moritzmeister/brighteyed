var budgetController = (function() {
    var Patient = function(id, description, city, hash) {
        this.id = id;
        this.description = description;
        this.city = city;
        this.hash = hash;
    };
    
    var data = {
        allItems: {
            inc: []
        }
    };
    
    return {
        addItem: function(des, city, hash) {
            var newItem, ID;
            if(data.allItems['inc'].length > 0){
                ID = data.allItems['inc'][data.allItems['inc'].length-1].id + 1;
            } else {
                ID = 0;
            }
            newItem = new Patient(ID, des, city, hash);
            data.allItems['inc'].unshift(newItem);
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
        inputCity: '.add__city',
        inputHash: '.add__hash',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list'
    };
    return {
        getInput: function () {
            return {
                description: document.querySelector(DOMstrings.inputDescription).value,
                city: document.querySelector(DOMstrings.inputCity).value,
                hash: document.querySelector(DOMstrings.inputHash).value
            }
        },
        clearFields : function() {
            var fields, fieldsArr;
            fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputCity + ', ' + DOMstrings.inputHash);
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
            html = '<tr id="inc-%id%"><td class="item__description">%description%</td><td class="item__city">%city%</td><td class="item__hash">%hash%</td></tr>';
            
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%city%', obj.city);
            newHtml = newHtml.replace('%hash%', obj.hash);
            
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
            newItem = budgetCtrl.addItem("<a href=\"doctorPatientView.hbs\">" + input.description + "</a>", input.city, input.hash);
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

var searchItem = function () {
      var input, filter, table, tr, td, i;
      input = document.getElementById("myInput");
      console.log("myInput");
      filter = input.value.toUpperCase();
      table = document.getElementById("myTable");
      tr = table.getElementsByTagName("tr");
      for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
          if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }       
      }
}