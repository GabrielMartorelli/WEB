var fruits = ["Banana", "Laranja", "Maça", "Manga"];
document.getElementById("demo").innerHTML = fruits;
document.getElementById("demo2").innerHTML = fruits.length;

function myFunction() {
    fruits[fruits.length] = "Limão";
    fruits[fruits.length] = "Cramberry";
    fruits[fruits.length] = "Morango";
    document.getElementById("demo").innerHTML = fruits;
    document.getElementById("demo2").innerHTML = fruits.length;
}