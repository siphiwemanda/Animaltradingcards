const Animal = (Name, Img, Level, Description, Training, Speed, Cost) => {
    return{
        Name,
        Img,
        Level,
        Description,
        Training,
        Speed,
        Cost,
    }
}
const EagleDescription = "Eagles are some of the largest birds. They are at the top of the food chain. Eagles have amazing eyesight and can detect prey up to two miles away"
const Panda = Animal('The Panda', '../img/panda.js', 300, 'hello i am a panda', 800,22,800)
const Eagle = Animal('The Eagle','../img/eagle.png', 4, EagleDescription, 20,16,150 )
const Bear = Animal('The Bear', '../img/bear.png', 4,'ima bear',20,16,150)
const Dog = Animal('The Doggo', '..img/dog.png',4,'im a dog',4,5,8000)

console.log(Panda)
console.log(Eagle)
console.log(Bear)
console.log(Dog)
