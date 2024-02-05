const studentNames = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Hannah", "Ian", "Jasmine"];
let i = 0;

sendMessages = (array, message) => {
    array.forEach((name, index) => {
        var jsonDate = (new Date()).toJSON();
        setTimeout(() => {
            document.write("<small>" + jsonDate + "</small><br>");
            document.write(jsonDate + name + ": Hi, " + name + "! " + message + "🙂<br><br>");
        }, 500 * index);
    });
}

sendMessages(studentNames, "Welcome to JavaScript class");
