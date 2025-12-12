import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image  from 'react-bootstrap/Image';
import { cutBigString } from '../utils/utils';
import { Spinner } from 'react-bootstrap';
import { ErrorMessage } from './ErrorMessage';
import { marvelImgUrl } from '../constants';
import { Button } from 'react-bootstrap';


export const RandomHero = ({hero, loading, err, updateHero}) => {
    const {name, description, thumbnail, homepage, wiki} = hero;
    if (err) return <ErrorMessage msg={"An error occured"}/> 
  return (
    <Container fluid="md" className="text-center">
      <Row className="justify-content-md-center">
       <Col className='border'>
       { !loading ? (<>
        <p className='heroImage'>
            <Image src={thumbnail} alt='hero'rounded fluid></Image>
            </p>
        <p>{name}</p>
        <p>{description.length ? cutBigString(description, 70): null}</p>
        <div className='heroFooter'>
            <div><a href={homepage} className='btn btn-outline-primary' rel="noreferrer" target="_blank">Homepage</a></div>
            <div><a href={wiki} className='btn btn-outline-success' rel="noreferrer" target="_blank">Wiki</a></div>
            </div> </>
            ) : <Spinner style={{ width: '6rem', height: '6rem', marginTop: "12rem" }} 
             animation='grow' variant="success"/>
            }
        </Col>
        <Col className='border'>
        <div className='findHero'>
          <p className="heroImage">
            <Image src={marvelImgUrl} alt='marvel' rounded fluid/>
          </p>
            <p>Random hero for today!</p>
        <p>Do you want to know him better? Or choose another one?</p>
           <div className="heroFooter">
             <Button variant="outline-dark" onClick={updateHero}>
              Try it!</Button>
          </div>
            </div>
        </Col>
      </Row>
    </Container>
  );
}