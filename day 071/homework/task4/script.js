// 5) შექმენით searchPosts მოდული DummyJSON API [https://dummyjson.com/posts?q=searchText](https://dummyjson.com/posts?q=searchText) გამოყენებით form submit-ზე გამოყენებული სიტყვით გაფილტრეთ მხოლოდ ის პოსტები რომელთა title შეიცავს საძიებო სიტყვას renderInfo ფუნქციით გამოიტანეთ title body views და tags გამოიყენეთ for of და აჩვენეთ ტექსტი თუ არც ერთი პოსტი არ მოიძებნა
// Requirements

// 1. HTML search input და form
// 2. async fetchInfo ფუნქცია რომელიც გამოიტანს data.posts
// 3. filter გამოყენება title.includes() შესამოწმებლად
// 4. for of ლუპი პოსტების გადასაყვანად DOM-ში
// 5. შეტყობინება თუ ძიებამ შედეგი ვერ მოიტანა

const input = document.querySelector("input")
const btn = document.querySelector("button")
const div = document.querySelector("div")

async function fetchPosts() {
    try {
        const res = await fetch("https://dummyjson.com/posts")
        const data = await res.json()
        const posts = data.posts
        div.innerHTML = ""
        for (const post of posts) {
            div.innerHTML += `
                <div class="posts">
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                    <p>Views: ${post.views}</p>
                    <p>Tags: ${post.tags}</p>
                </div>
            `
        }
    } catch (e) {
        console.log(`error: ${e}`)
    }
}
fetchPosts()

async function searchPost() {
    const searchText = input.value.toLowerCase()
    try {
        const res = await fetch(`https://dummyjson.com/posts/search?q=${searchText}`)
        const data = await res.json()
        const posts = data.posts
        div.innerHTML = ""
        if (posts.length === 0) {
            div.innerHTML = "<p>No posts found</p>"
            return
        }
        for (const post of posts) {
            div.innerHTML += `
                <div class="posts">
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                    <p>Views: ${post.views}</p>
                    <p>Tags: ${post.tags}</p>
                </div>
            `
        }
    } catch (e) {
        console.log(`error: ${e}`)
    }
}
btn.addEventListener("click", searchPost)