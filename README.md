A sample RESTful API to showcase GET, POST, PUT, DELETE instructions.

This application is containerized and can be run with a simple docker command.

HOW TO USE
- Install Docker
- Download/Clone this repository
- Open terminal in this downloaded repository root
- Execute docker compose up
- Once the server is up and running navigate with your browser to localhost:6868/api/books

DATA
- book
    - id(int) 
    - title(string)
    - description(string)
    - published(bool)

REQUESTS
- POST   /            [title,description,published(=false)]   :: adds a new book
- GET    /                                                    :: shows all books
- GET    /published                                           :: shows all published books
- GET    /{id}                                                :: shows the book with id={id}
- PUT    /{id}        [title,description,published(=false)]   :: updates the book with id={id} with the specified values
- DELETE /                                                    :: deletes all books
- DELETE /{id}                                                :: deletes the book with id={id}
