import React, { Component } from "react";
import '../assets/CSS/image.css';
import pic1 from '../assets/images/pic1.jpeg';
import pic2 from '../assets/images/pic2.jpeg';
import pic3 from '../assets/images/pic3.jpeg';
import pic4 from '../assets/images/pic4.jpg';
import pic5 from '../assets/images/pic5.jpg';
import pic6 from '../assets/images/pic6.jpg';
import pic7 from '../assets/images/pic7.jpg';
import pic8 from '../assets/images/pic8.jpg';
import pic9 from '../assets/images/pic9.jpg';
import pic10 from '../assets/images/pic10.jpg';
import pic11 from '../assets/images/pic11.jpg';
import pic12 from '../assets/images/pic12.jpg';
import pic13 from '../assets/images/pic13.jpg';
import pic14 from '../assets/images/pic14.jpg';
import pic15 from '../assets/images/pic15.jpg';
import pic16 from '../assets/images/pic16.jpg';
import pic17 from '../assets/images/pic17.jpg';
import pic18 from '../assets/images/pic18.jpg';
import pic19 from '../assets/images/pic19.jpg';
import pic20 from '../assets/images/pic20.jpg';
import pic21 from '../assets/images/pic21.jpg';
import pic22 from '../assets/images/singingKing.jpg';
import frame1 from '../assets/images/frame1.jpg';
import frame2 from '../assets/images/frame2.jpg';
import frame3 from '../assets/images/frame3.jpg';
import frame4 from '../assets/images/frame4.jpg';
import frame5 from '../assets/images/frame5.jpg';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { Container, CardColumns, Card } from "react-bootstrap";

class Collage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            picture: {},
            picArray: [{ src: pic1, description: "UnNamed01" }, { src: pic2, description: "UnNamed002" }, { src: pic3, description: "UnNamed003" }, { src: pic4, description: "Color Prism" }, { src: pic5, description: "Silent Torment" }, { src: pic6, description: "UnNamed006", }, { src: pic7, description: "UnNamed007", }, { src: pic8, description: "UnNamed008", }, { src: pic9, description: "UnNamed009", }, { src: pic10, description: "NyKey", }, { src: pic11, description: "UnNamed011" }, { src: pic12, description: "UnNamed012", }, { src: pic13, description: "UnNamed013" }, { src: pic14, description: "UnNamed014", }, { src: pic15, description: "Tree Head", }, { src: pic16, description: "UnNamed016", }, { src: pic17, description: "UnNamed017", }, { src: pic18, description: "UnNamed018", }, { src: frame1, description: "UnNamedF01", }, { src: frame2, description: "UnNamedF02", }, { src: frame3, description: "UnNamedF03", }, { src: frame4, description: "UnNamedF04", }, { src: frame5, description: "UnNamedF05", }, { src: pic19, description: "UnNamed004", }, { src: pic20, description: "UnNamed005", }, { src: pic21, description: "UnNamed010", }, { src: pic22, description: "Singing King", }],
            isOpen: false,
            index: 0
        }
    }

    // handlePopup = (index) => (
    //     this.setState({ isOpen: true, index: index })
    // )

    render() {
        const { index, isOpen } = this.state;
        let picArray = this.state.picArray;

        const pictures = picArray.map((picture, index) => {
            return (

                <Card key={index}>

                    <Card.Img variant="top" key={index} src={picture.src} className="singleImage" onClick={() => {
                        this.setState({ isOpen: true, index: index })
                        console.log({ 'picture': picture })
                        console.log({ 'index': index })
                    }} />
                    <Card.Footer>
                        <small className="text-muted">{picture.description}</small>
                    </Card.Footer>

                </Card>

            )
        })

        return (
            <Container>
                <h1 style={{ textAlign: "center", fontSize: 50 }}><span style={{ border: "solid black", padding: 5, paddingLeft: 50, paddingRight: 50 }}> Gallery </span></h1>
                <br></br>
                <CardColumns>
                    {pictures}

                    {isOpen && (
                        <Lightbox
                            mainSrc={picArray[index].src}
                            nextSrc={picArray[(index + 1) % picArray.length].src}
                            prevSrc={picArray[(index + picArray.length - 1) % picArray.length].src}
                            onCloseRequest={() => this.setState({ isOpen: false })}
                            onMovePrevRequest={() =>
                                this.setState({
                                    index: (index + picArray.length - 1) % picArray.length,
                                })
                            }
                            onMoveNextRequest={() =>
                                this.setState({
                                    index: (index + 1) % picArray.length,
                                })
                            }
                        />
                    )}
                </CardColumns>
            </Container>
        )
    }
}

export default Collage;

