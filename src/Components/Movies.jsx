import React from "react"
// import { render } from "@testing-library/react"
import { Container, Row,Card,CardBody,CardTitle,Col,CardImg } from "reactstrap"


class Movies extends React.Component{

state={
    movies:[]
}
    componentDidMount=async()=>{
        let response=await fetch("http://www.omdbapi.com/?s=avenger&apikey=24ad60e9",
        {
            method:"GET"
        })
        let json=await response.json()
        let movie=await json.Search
this.setState({
    movies:movie
})
    }
    


render(){
    return(
        <Container className="col-md-12">
            <Row>

{(this.state.movies).map((movie,index) =>
<Col md="3" xs="12">
<Card className="card m-4">
        <CardImg top width="100%" src={movie.Poster} alt="Card image cap" />
        <CardBody>
<CardTitle>{movie.Title}</CardTitle>
          {/* <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button> */}
        </CardBody>
      </Card>
</Col>
)

}
            </Row>

        </Container>
    )
}
}


export default Movies