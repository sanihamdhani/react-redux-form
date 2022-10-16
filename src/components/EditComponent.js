import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Form, Container } from "react-bootstrap";
import { dataSelector, getData, updateData } from "../features/dataSlice";
import "./style.css";

const EditComponent = () => {
  const [list, setList] = useState({
    nik: "",
    name: "",
    email: "",
    gender: "laki-laki",
    alamat: "",
    divisi: "IT",
    birthday: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const singleData = useSelector((state) => dataSelector.selectById(state, id));

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  useEffect(() => {
    setList({
      nik: singleData.nik,
      name: singleData.name,
      email: singleData.email,
      gender: singleData.gender,
      divisi: singleData.divisi,
      alamat: singleData.alamat,
      birthday: singleData.birthday,
    });
  }, [singleData]);

  const handleChange = (event) => {
    setList({
      ...list,
      [event.target.name]: event.target.value,
    });
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    dispatch(updateData({ ...list, id }));
    navigate("/");
  };

  return (
    <div>
      <Container className="mt-5">
        <h1>Form Edit User</h1>
        <Form onSubmit={handleUpdate}>
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

export default EditComponent;
