document.querySelector('.submit').addEventListener('click', function () {
    setTimeout(() => {
        document.querySelector('.toast').style.display = 'block';
    }, 2000);
});

document.querySelector('.close').addEventListener('click', function () {
    document.querySelector('.toast').style.display = 'none';
});


const postData = async function () {
    const title = document.querySelector('.title').value;
    const description = document.querySelector('.des').value;
    const date = document.querySelector('.date').value;
    const temp = {
        "title": `${title}`,
        "description": `${description}`,
        "createdAt": `${date}`,
        "updatedAt": `${date}`,
        "checked": false,
        "dueDate": `${date}`,
        "id": ""
    }
    const res = await fetch('https://60b77f8f17d1dc0017b8a2c4.mockapi.io/todos', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(temp)
    });
    const postResponse = await res.json();
    console.log(postResponse);
    // console.log(await res.json());
    // return await res.json();

};
