// import React from 'react'
import { useRef, useState, useEffect, useReducer, useMemo } from "react";
import sinhVienReducer from "./toDoList/sinhVienReducer";

function QuanLySinhVien() {
  // const sinhViens = [
  //     {
  //         id: 1,
  //         name: 'Nguyen Van A',
  //         diem: 9
  //     },
  //     {
  //         id: 1,
  //         name: 'Nguyen Van A',
  //         diem: 9
  //     }
  // ]
  const truongDiems = ["diem1", "diem2"];
  const [sinhViens, dispatch] = useReducer(sinhVienReducer, []);
  const [sinhVienForm, setSinhVienForm] = useState({
    name: "",
    diem1: 0,
    diem2: 0,
    diemTB: 0,
  });
  const nameRef = useRef();
  const diemRef = useRef();

  useEffect(() => {
    const storedSinhViens = JSON.parse(localStorage.getItem("sinhViens"));
    console.log(storedSinhViens);
    if (storedSinhViens) {
      dispatch({
        type: "SET",
        payload: storedSinhViens,
      });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("sinhViens", JSON.stringify(sinhViens));
  }, [sinhViens]);

  const diemTB = useMemo(() => {
    return (sinhVienForm.diem1 + sinhVienForm.diem2) / 2;
  }, [sinhVienForm.diem1, sinhVienForm.diem2]);

  useEffect(() => {
    setSinhVienForm((prevState) => ({
      ...prevState,
      diemTB: diemTB,
    }));
  }, [diemTB]);

  const handleChangeForm = (e) => {
    setSinhVienForm((prevState) => {
      let valueInp = e.target.value;
      if (truongDiems.includes(e.target.name)) {
        valueInp = Number(valueInp);
        console.log(valueInp);
        if (isNaN(valueInp)) {
          alert("diem so phai la mot con so");
        }
        return {
          ...prevState,
          [e.target.name]: valueInp ? valueInp : 0,
        };
      }
      return {
        ...prevState,
        [e.target.name]: valueInp,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form", sinhVienForm);
    dispatch({
      type: "ADD",
      payload: {
        ...sinhVienForm,
        id: Date.now(),
      },
    });
    setSinhVienForm({
      name: "",
      diem1: 0,
      diem2: 0,
      diemTB: 0,
    });
    nameRef.current.focus();
  };

  const handleDele = (sinhVienId) => {
    dispatch({
      type: "DELETE",
      payload: sinhVienId,
    });
  };

  return (
    <div>
      <h1>Quan Ly Sinh Vien</h1>
      <form action="#" onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            onChange={handleChangeForm}
            ref={nameRef}
            value={sinhVienForm.name}
            id="name"
            name="name"
            type="text"
          />
        </div>
        <div>
          <label>Diem so 1: </label>
          <input
            onChange={handleChangeForm}
            ref={diemRef}
            value={sinhVienForm.diem1}
            id="diem1"
            name="diem1"
            type="text"
          />
        </div>
        <div>
          <label>Diem so 2: </label>
          <input
            onChange={handleChangeForm}
            ref={diemRef}
            value={sinhVienForm.diem2}
            id="diem2"
            name="diem2"
            type="text"
          />
        </div>
        <div>
          <label>Diem so trung binh: </label>
          <input
            onChange={handleChangeForm}
            ref={diemRef}
            value={sinhVienForm.diemTB}
            id="diemTB"
            name="diemTB"
            type="text"
          />
        </div>
        <button type="submit">submit</button>
      </form>
      <ul style={{ marginTop: "40px" }}>
        <li style={{ listStyle: "none", marginBottom: "5px" }}>
          <span style={{ marginRight: "10px" }}>Ten Sinh Vien</span>
          <span style={{ marginRight: "10px" }}>Diem so 1</span>
          <span style={{ marginRight: "60px" }}>Diem so 2</span>
          <span style={{ marginRight: "10px" }}>Diem TB</span>
        </li>
        {sinhViens.map((item) => {
          return (
            <li
              style={{ listStyle: "none", marginBottom: "5px" }}
              key={item.id}
            >
              <span style={{ marginRight: "100px" }}>{item.name}</span>
              <span style={{ marginRight: "100px" }}>{item.diem1}</span>
              <span style={{ marginRight: "100px" }}>{item.diem2}</span>
              <span style={{ marginRight: "100px" }}>{item.diemTB}</span>

              <button
                onClick={() => {
                  handleDele(item.id);
                }}
              >
                delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default QuanLySinhVien;
