import axios from "axios";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";

export default function NewBeer() {

    const [newBeer, setNewBeer] = useState({
        name: "",
        tagline:"",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: 1,
        contributed_by: ""
    })

    const handleChange = (e) => {
        e.preventDefault()
        setNewBeer({...newBeer, [e.target.name]: e.target.value })
        console.log(newBeer)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(newBeer)

        axios.post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)
            .then ((response) => {
                setNewBeer ({
                    name: "",
                    tagline:"",
                    description: "",
                    first_brewed: "",
                    brewers_tips: "",
                    attenuation_level: 1,
                    contributed_by: "",
                    image_url: "https://www.engenhocaracuipe.com.br/wp-content/uploads/2017/09/cachouro.png"
                })
            })
    }
        


  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Beer Name</Form.Label>
        <Form.Control
            type="text"
            placeholder="Enter the beer name"
            name="name"
            onChange={handleChange}
            value={newBeer.name}

        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Beer Tagline</Form.Label>
        <Form.Control
            type="text"
            placeholder="Enter the beer tagline"
            name="tagline"
            onChange={handleChange}
            value={newBeer.tagline}

        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Beer Description</Form.Label>
        <Form.Control
            type="text"
            placeholder="Enter the beer description"
            name="description"
            onChange={handleChange}
            value={newBeer.description}
        
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Beer First Brewed</Form.Label>
        <Form.Control
            type="text"
            placeholder="Enter the beer first brewed"
            name="first_brewed"
            onChange={handleChange}
            value={newBeer.first_brewed}

        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Beer Brewers Tips</Form.Label>
        <Form.Control
            type="text"
            placeholder="Enter the beer brewers tips"
            name="brewers_tips"
            onChange={handleChange}
            value={newBeer.brewers_tips}

        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Beer Attenuation Level</Form.Label>
        <Form.Control
            type="text"
            placeholder="Enter the beer attenuation level"
            name="attenuation_level"
            onChange={handleChange}
            value={newBeer.attenuation_level}

        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Contributed By</Form.Label>
        <Form.Control
            type="text"
            placeholder="Enter the name"
            name="contributed_by"
            onChange={handleChange}
            value={newBeer.contributed_by}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Image URL</Form.Label>
        <Form.Control
            type="text"
            placeholder="Enter the name"
            name="image_url"
            onChange={handleChange}
            value={newBeer.image_url}
        />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
