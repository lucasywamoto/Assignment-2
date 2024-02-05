const studentNames = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Hannah", "Ian", "Jasmine"];
let i = 0;

sendMessages = (array) => {
    array.forEach((name, index) => {
        setTimeout(() => {
            document.write(name + ": Hi, " + name + "! Welcome to JavaScript class 🙂<br>");
        }, 500 * index);
    });
}

sendMessages(studentNames);
