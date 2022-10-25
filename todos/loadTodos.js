const getData = async function () {
    const response = await fetch(`https://60b77f8f17d1dc0017b8a2c4.mockapi.io/todos`);
    const data = await response.json();
    console.log(data);
    const revData = data.reverse();
    console.log(revData);
    const ul = document.querySelector("#paginated-list");
    console.log(ul);
    for (const index of data) {
        const html = `
            <div class="todo">
                <div class="todo-header">
                    <input type="radio" class="radio">
                    <h2>${index.title}</h2>
                    <span>${index.dueDate}</span>
                    <div class="editTrash">
                        <button class="btn" onclick="putData(this.id)"><img src="/todos/icons8-edit-32.png" alt="edit icon"></button>
                        <button class="btn" onclick="deleteData(this.id)"><img src="/todos/icons8-trash-32.png" alt="trash icon"></button>
                    </div>
                </div><br>
                <p>${index.description}</p>
            </div>
    `;
        const li = document.createElement('li');
        li.innerHTML = html;
        ul.appendChild(li);
    }
};

getData();

async function deleteData(id) {
    // console.log(id);
    await fetch(`https://60b77f8f17d1dc0017b8a2c4.mockapi.io/todos/${id}`, { method: "DELETE" });
    getData();
};

async function putData(id) {
    await fetch(`https://60b77f8f17d1dc0017b8a2c4.mockapi.io/todos/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(id)
    });
};