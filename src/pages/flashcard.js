import React from "react";
import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default class FlashCard extends Component {
    
    constructor(){
        super(); //required to use this.prop
        
        //this is referring to the instance of this component
        this.state = {
            FlashCards: [],
            index: 0,
            isLoaded: false,
            term: true
        }
    }
    
   async componentDidMount(){ //will run when this component runs

        const data = await [
            {
                    Catagory: "Object",
                    Definition: 'Round bouncy object',
                    Term: 'Ball'
                },
                {
                    Catagory: 'Shape',
                    Definition: 'a plane figure with three straight sides and three angles',
                    Term: 'Triangle'
                },
                {
                    Catagory: 'Place',
                    Definition: 'An insitution for educating individuals',
                    Term: 'School'
                }
        ]
            this.setState({FlashCards: data}); //use setState to update the state of component
            this.setState({isLoaded: true});
    }

    render(){
        return(
            <>
            
            <Container className='center'>
                <Row>
                    <Col>
                   <h1>{this.state.isLoaded ? this.state.FlashCards[1].Term : ''}</h1>
                   <h1>{this.state.isLoaded ? this.state.FlashCards[1].Definition : ''}</h1>
                    </Col>
                </Row>
            </Container>

            <Container className='center'>
                <Row>
                    <Col>
                   <button className='btn btn-danger'>Previous</button>
                   <button className='btn btn-primary'>See Definition</button>
                   <button className='btn btn-warning'>Next</button>
                    </Col>
                </Row>
            </Container>

            </>
        )
    }
}
