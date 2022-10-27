window.onload = () => {
    fillTableUserData();
}

//API data fetching
async function fetchData(resource) {
    const baseURL = 'https://jsonplaceholder.typicode.com/todos/1/';
    const response = await fetch(`${baseURL}${resource}`)
    const data = await response.json()
    return data;
}

//table DOM Manipulation
async function fillTableUserData() {
    const users = await fetchData("users");
    const table = document.getElementById("user-table");
    
    users.map(user => {
        let tableData = "";
        const row = document.createElement('tr');
        const header = document.createElement('th');
        header.textContent=user.username;
        header.classList.add("table-user");
        header.addEventListener('click', () => getUserPosts(user.id));
        //map specific selected data to correct cells
        tableData+=`<td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.address.city}</td>
                    <td>${user.phone}</td>
                    <td>${user.website}</td>
                    <td>${user.company.name}</td>`;
        row.append(header);
        //insert table data created above after header
        row.insertAdjacentHTML('beforeend', tableData);
        table.append(row);
    });
}

//fetch and create posts
async function getUserPosts(id) {
    const posts = await fetchData(`posts?userId=${id}`);
    const postArea = document.getElementById('posts');

    //reset any existing posts
    postArea.innerHTML='';

    posts.map(post => {
        const span = document.createElement('span');
        const p = document.createElement('p');
        const frag = document.createDocumentFragment();

        span.textContent=post.title;
        span.classList.add("post_title");
        p.textContent=post.body;
        p.classList.add("post_text");
        frag.append(span);
        frag.append(p);
        postArea.append(frag);
    })
}


