const model={
    Animals:[
        {
            animalName: 'The Eagle',
            img: '../img/eagle.png',
            level: 4,
            description: "\t\t\t\tEagles are some of the largest birds. They are at the top of the food chain. Eagles have amazing eyesight and can detect prey up to two miles away.\n",
            Training:20,
            Speed: 16,
            Cost:150,
        },
        {
            animalName: 'The Panda',
            img: '../img/panda.png',
            level: 4,
            description: "\t\t\t\tEagles are some of the largest birds. They are at the top of the food chain. Eagles have amazing eyesight and can detect prey up to two miles away.\n",
            Training:20,
            Speed: 16,
            Cost:150,
        },
        {
            animalName: 'The Bear',
            img: '../img/bear.png',
            level: 4,
            description: "\t\t\t\tEagles are some of the largest birds. They are at the top of the food chain. Eagles have amazing eyesight and can detect prey up to two miles away.\n",
            Training:20,
            Speed: 16,
            Cost:150,
        },
        {
            animalName: 'The Doggo',
            img: '../img/dog.png',
            level: 4,
            description: "\t\t\t\tEagles are some of the largest birds. They are at the top of the food chain. Eagles have amazing eyesight and can detect prey up to two miles away.\n",
            Training:20,
            Speed: 16,
            Cost:150,
        }
    ],
};
    const cardView ={
        init: function () {
            this.Animals.animalName = document.getElementsByClassName("card-animal-name")
            this.dogelemname = document.getElementById('Dog-name');
            this.dogelemcount = document.getElementById('Dog-count');
            this.dogelemimg = document.getElementById('Dog-img');
            this.render();
            this.dogelemimg.addEventListener('click' , function () {
                controller.clicked();

            });
        },

    render: function (){
        this.dogelemimg.src=currentDog.img;
        this.dogelemname.textContent=currentDog.name;
    },


    rendercount: function () {
        this.dogelemcount.textContent=currentDog.clickCount;
    },
    };
    const doglist = {
        init: function(){
            this.listdog= document.getElementById('Dog-list');
            this.render()
        },

    render: function () {
        let i, elem;
        for(i=0;i < model.Dogs.length;i++){
            elem= document.createElement('li');
            elem.textContent =model.Dogs[i].name;
            this.listdog.appendChild(elem);
            elem.addEventListener('click', function (dog) {
                return function(){
                    controller.setDog(dog)
                };
            }(model.Dogs[i]));

        }
    }
};
    let controller ={

    init: function(){
        currentDog = model.Dogs[0];
        cardView.init();
        doglist.init();
    },

    clicked: function () {
        currentDog.clickCount++;
        dogview.rendercount()
    },

    setDog: function(dog){
        currentDog=dog;
        dogview.render();
        dogview.rendercount()
    }
    };
    controller.init();
