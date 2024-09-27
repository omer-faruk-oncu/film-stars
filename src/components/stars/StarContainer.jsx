import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import { movieStarsData } from "../../helpers/data";
import StarCard from "./StarCard";
import {useState} from 'react';

const StarContainer = () => {

    const [search, setSearch] = useState('')
  //console.log(movieStarsData);
  //console.log(search)

 const filteredStars = movieStarsData.filter(star => star.name.toLowerCase().includes(search.trim().toLowerCase()))

console.log(filteredStars)

  return (
    <div>
      <Form.Control
        className="w-50 mx-auto my-4"
        type="search"
        placeholder="Search star..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Container className="card-container p-3 rounded-4 my-3">
        <Row xs={1} sm={2} md={3} lg={4} className="justify-content-center g-5" >
          {filteredStars.map((star) => (
            <StarCard star={star} key={star.id}/>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default StarContainer;
