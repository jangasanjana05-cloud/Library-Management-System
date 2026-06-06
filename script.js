function addBook(){

    let book =
    document.getElementById("bookName").value;

    let li =
    document.createElement("li");

    li.innerText = book;

    document
    .getElementById("bookList")
    .appendChild(li);

}