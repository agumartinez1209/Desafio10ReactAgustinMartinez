import React from 'react'

function Info() {
  return (
    <>
  <section className="container-fluid">
    <div className="row">
      <div className="col-md-3" />
      <div className="col-md-6">
        <h1 className=" text-center mb-5 shadow-sm p-3 color">NOSOTROS</h1>
        <p className="textoAnimado color">
          Tenemos una visión ligada a la tecnología y a un futuro no victoriano
          que sirva de puente para conectar al usuario con las nuevas marcas que
          surgen todos los días.
        </p>
        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval={10000}>
              <img
                src={require("../img/producto50.jpg") }
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item" data-bs-interval={2000}>
              <img
                src={require("../img/producto51.jpg") }
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </section>
</>
  )
}

export default Info