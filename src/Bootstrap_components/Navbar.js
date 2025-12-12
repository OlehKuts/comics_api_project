import Nav from 'react-bootstrap/Nav';

export const Navbar = ({changePage, pageList}) => {
    return (
        <>
    <Nav className="justify-content-end" style={{margin: "10px auto 30px auto"}}>
        <Nav.Item>
          <Nav.Link href="/home"  onClick={() => changePage(0)}
          style={{color: pageList[0].isVisible ? "deepskyblue" : "gray"}}>Random hero</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => changePage(1)} 
          style={{color: pageList[1].isVisible ? "deepskyblue" : "gray"}}>
            Heroes
          </Nav.Link>
        </Nav.Item>
      </Nav>
      </>
    )
}
