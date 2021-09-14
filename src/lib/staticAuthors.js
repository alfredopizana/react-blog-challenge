const AUTHORS = [
    {
        authorId:"12",
        name: "Miguel Angel Marquez",
        email:"mike@kodemia.mx"
    },
    {
        authorId:"13",
        name: "Misael Mancilla",
        email:"misael@kodemia.mx"
    },
    {
        authorId:"14a",
        name: "Alfredo Pizana",
        email:"alfredo@kodemia.mx"
    },
    {
        authorId:"15a",
        name: "Israel Salinas",
        email:"israel@kodemia.mx"
    },
    {
        authorId:"16a",
        name: "Carlos Alcala",
        email:"carlos@kodemia.mx"
    }
]

export default {
        getRandomAuthor(){
            const randomIndex = Math.floor(Math.random() * AUTHORS.length)
            return AUTHORS[randomIndex];
        }
}