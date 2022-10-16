import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { dataSelector, getData, deleteData } from "../features/dataSlice";
import { Button, Container, Table } from "react-bootstrap";
import "./style.css";

const ShowComponent = () => {
  const dispatch = useDispatch();
  const dataget = useSelector(dataSelector.selectAll);

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <div>
      <Container>
        <h1>TABEL USER</h1>
        <br></br>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Alamat</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {dataget.map((dat, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{dat.name}</td>
                <td>{dat.alamat}</td>
                <td>
                  <Link
                    className="btn btn-warning m-2 text-light"
                    to={`/edit/${dat._id}`}
                  >
                    Edit
                  </Link>

                  <Button
                    className="btn-danger"
                    onClick={() => dispatch(deleteData(dat._id))}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default ShowComponent;
