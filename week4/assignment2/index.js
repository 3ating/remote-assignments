function ajax(url) {
    return fetch(url, {
        method: "GET",
        mode: "cors",
        cache: "default",
    })
        .then((res) => res.json())
        .catch((err) => console.error(err));
}
function render(data) {
    let ul = document.createElement("ul");

    data.forEach((item) => {
        let li1 = document.createElement("li");
        let li2 = document.createElement("li");
        let li3 = document.createElement("li");

        li1.innerHTML = `Name: ${item.name}`;
        li2.innerHTML = `Price: ${item.price}`;
        li3.innerHTML = `Description: ${item.description}`;

        ul.appendChild(li1);
        ul.appendChild(li2);
        ul.appendChild(li3);
    });
    document.body.appendChild(ul);
}

const url = "https://appworks-school.github.io/Remote-Assignment-Data/products";
ajax(url).then((data) => {
    render(data);
});
