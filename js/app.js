var tudoList = document.querySelector("#todolist");
var todoinput = document.querySelector("#todoinput");


todoinput.addEventListener(
    'keyup',
    
    function (e) {
        if (e.key == "Enter" && todoinput.value !="") {

            var items = document.createElement('li')

            items.innerHTML = `<span class="todotext">${this.value}</span>
                <button  class="todoremove">Remove</button>`

            tudoList.appendChild(items)
            this.value = ""

            items.querySelector('.todoremove').addEventListener(
                'click', 
                function () {
                items.remove();
            }
        );

            items.querySelector('.todotext').addEventListener(
                'click', 
                function () {
                this.classList.toggle('stick');
            }
        );

        }

    }
)