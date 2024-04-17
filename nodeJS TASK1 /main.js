// Задание №1
//  Всем <h3> поставьте текст '!!!'.
let h3name = document.querySelectorAll("h3");
h3name.forEach((elem) => {
  elem.innerText += "!!!";
});

// Задание №2
//  Всем <h3> сделайте текст зеленого цвета.
h3name.forEach((elem) => {
  elem.style.color = "green";
});

// Задание №3
//  Создайте маркированный список,
// При помощи цикла добавьте в маркированный
// список 30 li - элементов с текстом:
// “1 - овечка”, “2 - овечка”,
// “3 - овечка”,
// и так до “30-овечка”;
// Создаем маркированный список
let ul = document.createElement("ul");
for (let i = 1; i <= 30; i++) {
  let li = document.createElement("li");
  li.innerText = i + " - овечка";
  ul.append(li);
}
document.body.append(ul);

// Задание №4
// В css создайте класс .active в
// котором пропишите цвет текста blue.
// Добавьте всем span элементам класс active
// через document.getElementsByTagName.
let spans = document.getElementsByTagName("span");
console.log(spans);
for (let i = 0; i < spans.length; i++) {
  spans[i].className.add = "active";
}
