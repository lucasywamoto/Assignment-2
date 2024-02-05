const studentNames = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Hannah", "Ian", "Jasmine"];

sendMessages = (array, message) => {
    array.forEach((name, index) => {

        var localeDateTime = (new Date()).toLocaleString();
        
        setTimeout(() => {
            const smallElement = document.createElement("small");
            smallElement.textContent = localeDateTime;
            document.body.appendChild(smallElement);
            
            const messageElement = document.createElement("div");
            messageElement.textContent = name + ": Hi, " + name + "! " + message;
            document.body.appendChild(messageElement);
        }, 500 * index);

    });
}

sendMessages(studentNames, "Welcome to JavaScript class 🙂");