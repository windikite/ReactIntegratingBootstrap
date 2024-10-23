import { Container, Nav, Navbar } from "react-bootstrap"

function NavigationBar(){
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">Silph Co</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/404">404</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
      </Navbar>
    )
}

export default NavigationBar