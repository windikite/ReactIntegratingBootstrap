import { Button, Card, Image } from "react-bootstrap";

function HomePage() {
    const products = [
        {
            "title": "Pokeball",
            "text": "Catches pokemon!",
            "src": "https://www.pokemoncenter.com/images/DAMRoot/High/10000/P10371_703E12069_02.jpg"
        },
        {
            "title": "Greatball",
            "text": "Catches stronger pokemon!",
            "src": "https://www.pokemoncenter.com/images/DAMRoot/High/10000/P10372_703E12068_05.jpg"
        },
        {
            "title": "Ultraball",
            "text": "Catches even stronger pokemon!",
            "src": "https://www.pokemoncenter.com/images/DAMRoot/High/10000/P8737_710-95846_04.jpg"
        },
        {
            "title": "Moon Ball",
            "text": "Catches nocturnal pokemon!",
            "src": "https://fbi.cults3d.com/uploaders/20803239/illustration-file/53490ab5-da9d-408a-b918-cb97d5e4d6d6/moon-ball-render.jpg"
        },
        {
            "title": "Dusk Ball",
            "text": "Catches dark pokemon!",
            "src": "https://m.media-amazon.com/images/I/71cBqKP74ZL.jpg"
        },
        {
            "title": "Heavy Ball",
            "text": "Catches heavy pokemon!",
            "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6jMURAzgRNmVhOBO1CgqWkHiRfkP9WnZYkw&s"
        },
        {
            "title": "Dive Ball",
            "text": "Catches nocturnal pokemon!",
            "src": "https://www.pokemoncenter.com/images/DAMRoot/High/10000/P9458_703-98665_02.jpg"
        }
    ]
    function createCard(title, text, src, key){
        return (
            <Card className="ms-2 me-2 mb-2 p-0 shadow border-info" style={{width: '13rem', height: "20rem"}} key={key}>
                <Card.Img variant="top" src={src} style={{width: "100%"}}  />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {text}
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
    return (
        <div className="bg-dark mx-auto p-5 border border-info" style={{heigt: "2000px"}}>
            <h1 className="text-info mx-auto">SILPH CO</h1>
            <Image className="mb-3" src="/silphLogo.jpg" fluid rounded />
            <Card className="mx-auto mb-3 border-info p-0 w-100" style={{maxWidth: "1000px"}}>
                <Card.Img className="object-fit-cover" variant="top" src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/01/pkmpokeballedit.jpg"  />
                <Card.Body>
                    <Card.Title>Now announcing our Fall 25% off sale!</Card.Title>
                    <Card.Text>
                    Find the best deals on all of your training needs!
                    </Card.Text>
                </Card.Body>
            </Card>
            <Button className="mb-3" variant="primary" style={{boxShadow: "5px 5px 5px black"}}>Shop Now</Button>
            <h2 className="text-info mx-auto">Browse our collection of timeless pokemon-catching accessories right here!</h2>
            <div className="bg-dark-subtle w-100 h-100 mx-auto p-2 rounded d-flex justify-content-between flex-wrap">
                {products.map((x, i) => createCard(x.title, x.text, x.src, i))}
            </div>
        </div>
    )
}

export default HomePage