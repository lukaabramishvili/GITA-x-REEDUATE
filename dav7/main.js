// 1

async function fetchWithRetry(url, retries = 5) {
    for (let i = 1; i <= retries; i++) {
        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`HTTP Error: ${response.status}`);
            }

            const data = await response.json();
            console.log("Success:", data);
            return data;
        } catch (error) {
            console.log(`Attempt ${i} failed`);

            if (i === retries) {
                console.error("All retries failed:", error.message);
            }
        }
    }
}

fetchWithRetry("https://jsonplaceholde.typicode.com/users");




// 2

async function getFastestResponse() {
    try {
        const result = await Promise.race([
            fetch("https://dummyjson.com/users").then(res => res.json()),
            fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json())
        ]);

        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

getFastestResponse();




// 3

async function getProducts() {
    try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();

        const filteredProducts = data.products.filter(
            product => product.price > 10
        );

        console.log(filteredProducts);
    } catch (error) {
        console.error(error);
    }
}

getProducts();




// 4

async function getWebDevelopers() {
    try {
        const response = await fetch("https://dummyjson.com/users");
        const data = await response.json();

        const developers = data.users
            .filter(
                user =>
                    user.company?.title?.toLowerCase() === "web developer"
            )
            .map(user => ({
                firstName: user.firstName,
                lastName: user.lastName,
                city: user.address?.city,
                email: user.email,
                phone: user.phone
            }));

        console.log(developers);
    } catch (error) {
        console.error(error);
    }
}

getWebDevelopers();




// 5

async function getAllData() {
    try {
        const urls = [
            "https://dummyjson.com/recipes",
            "https://dummyjson.com/comments",
            "https://dummyjson.com/todos",
            "https://dummyjson.com/quotes"
        ];

        const responses = await Promise.all(
            urls.map(url => fetch(url))
        );

        const data = await Promise.all(
            responses.map(response => response.json())
        );

        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

getAllData();