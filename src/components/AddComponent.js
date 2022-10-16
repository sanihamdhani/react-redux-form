import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postData } from "../features/dataSlice";
import { useNavigate } from "react-router-dom";
import { Button, Form, Container } from "react-bootstrap";
import "./style.css";

const AddComponent = () => {
  const [list, setList] = useState({
    nik: "",
    name: "",
    email: "",
    gender: "",
    divisi: "",
    alamat: "",
    birthday: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (event) => {
    setList({
      ...list,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(postData({ ...list }));
    navigate("/");
  };

  return (
    <div>
      <Container className="mt-5">
        <h1>Form AddUser</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label></Form.Label>
            <Form.Control
              placeholder="NIK"
              type="text"
              value={list.nik}
              onChange={handleChange}
              name="nik"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label></Form.Label>
            <Form.Control
              placeholder="Nama"
              type="text"
              value={list.name}
              onChange={handleChange}
              name="name"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label></Form.Label>
            <Form.Control
              placeholder="Email"
              type="text"
              value={list.email}
              onChange={handleChange}
              name="email"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label></Form.Label>

            <Form.Select
              value={list.gender}
              onChange={handleChange}
              name="gender"
            >
              <option value="laki-laki">Laki-Laki</option>
              <option value="perempuan">Perempuan</option>
            </Form.Select>
          </Form.Group>

          <Form.Group>
            <Form.Label></Form.Label>
            <Form.Control
              placeholder="Alamat"
              type="text"
              value={list.alamat}
              onChange={handleChange}
              name="alamat"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label></Form.Label>

            <Form.Select
              value={list.divisi}
              onChange={handleChange}
              name="divisi"
            >
              <option value="IT">IT</option>
              <option value="Desain">Desain</option>
            </Form.Select>
          </Form.Group>
          <Form.Group>
            <Form.Label></Form.Label>
            <Form.Control
              placeholder="Birthday"
              type="text"
              value={list.birthday}
              onChange={handleChange}
              name="birthday"
            />
          </Form.Group>

          <Form.Group>
            <br></br>
            <Button variant="success" type="submit">
              Submit
            </Button>
          </Form.Group>
        </Form>
      </Container>
    </div>
  );
};

export default AddComponent;
