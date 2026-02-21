import React from 'react'

export const Content = () => {
    return (


        <main className="container-fluid my-5">
        <div className="row">
            
            <div className="col-lg-8">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h2>Productos</h2>
                <span className="text-muted">Mostrando 6 productos</span>
            </div>

            <div className="row g-3">

                {/** Producto Card */}
                <div className="col-md-4">
                    <div className="card shadow-sm">
                    <img
                        src="/img/bafle.png"
                        className="card-img-top product-img"
                        alt="producto 1"
                    />
                    <div className="card-body">
                        <h5 className="card-title">Nombre del Producto</h5>
                        <p className="card-text fw-bold">COP $199.000</p>

                        <span className="badge bg-success mb-3">
                        En stock
                        </span>

                        <div className="d-flex gap-2">
                        <button className="btn btn-outline-primary btn-sm">
                            Editar
                        </button>
                        <button className="btn btn-outline-danger btn-sm">
                            Eliminar
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card shadow-sm">
                    <img
                        src="/img/audifonos.png"
                        className="card-img-top product-img"
                        alt="producto 2"
                    />
                    <div className="card-body">
                        <h5 className="card-title">Audífonos Sony</h5>
                        <p className="card-text fw-bold">COP $1.155.900</p>

                        <span className="badge bg-success mb-3">
                        En stock
                        </span>

                        <div className="d-flex gap-2">
                        <button className="btn btn-outline-primary btn-sm">
                            Editar
                        </button>
                        <button className="btn btn-outline-danger btn-sm">
                            Eliminar
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card shadow-sm">
                    <img
                        src="/img/audifonos2.png"
                        className="card-img-top product-img"
                        alt="producto 3"
                    />
                    <div className="card-body">
                        <h5 className="card-title">Audífonos Kz Castor</h5>
                        <p className="card-text fw-bold">COP $77.347</p>

                        <span className="badge bg-success mb-3">
                        En stock
                        </span>

                        <div className="d-flex gap-2">
                        <button className="btn btn-outline-primary btn-sm">
                            Editar
                        </button>
                        <button className="btn btn-outline-danger btn-sm">
                            Eliminar
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card shadow-sm">
                    <img
                        src="/img/camara.png"
                        className="card-img-top product-img"
                        alt="producto 4"
                    />
                    <div className="card-body">
                        <h5 className="card-title">Cámara Dji Osmo Action</h5>
                        <p className="card-text fw-bold">COP $2.449.900</p>

                        <span className="badge bg-success mb-3">
                        En stock
                        </span>

                        <div className="d-flex gap-2">
                        <button className="btn btn-outline-primary btn-sm">
                            Editar
                        </button>
                        <button className="btn btn-outline-danger btn-sm">
                            Eliminar
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
                    <div className="col-md-4">
                    <div className="card shadow-sm">
                    <img
                        src="/img/alexa.png"
                        className="card-img-top product-img"
                        alt="producto 5"
                    />
                    <div className="card-body">
                        <h5 className="card-title">Asistente Virtual Alexa</h5>
                        <p className="card-text fw-bold">COP $233.922</p>

                        <span className="badge bg-success mb-3">
                        En stock
                        </span>

                        <div className="d-flex gap-2">
                        <button className="btn btn-outline-primary btn-sm">
                            Editar
                        </button>
                        <button className="btn btn-outline-danger btn-sm">
                            Eliminar
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card shadow-sm">
                    <img
                        src="/img/conduccionosea.png"
                        className="card-img-top product-img"
                        alt="producto 6"
                    />
                    <div className="card-body">
                        <h5 className="card-title">Audifonos Por Conducción Osea</h5>
                        <p className="card-text fw-bold">COP $22.320</p>

                        <span className="badge bg-success mb-3">
                        En stock
                        </span>

                        <div className="d-flex gap-2">
                        <button className="btn btn-outline-primary btn-sm">
                            Editar
                        </button>
                        <button className="btn btn-outline-danger btn-sm">
                            Eliminar
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
                

            </div>
            </div>

            {/* Formulario */}
            <div className="col-lg-4">
            <div className="card shadow">
                <div className="card-header bg-primary text-white">
                Agregar producto
                </div>

                <div className="card-body">
                <div className="mb-3">
                    <label className="form-label">Nombre del producto</label>
                    <input type="text" className="form-control" />
                </div>

                <div className="row mb-3">
                    <div className="col">
                    <label className="form-label">Precio (COP)</label>
                    <input type="number" className="form-control" />
                    </div>
                    <div className="col">
                    <label className="form-label">Stock</label>
                    <input type="number" className="form-control" />
                    </div>
                </div>

                <div className="mb-3">
                    <label className="form-label">Categoría</label>
                    <select className="form-select">
                    <option>Selecciona una categoría</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label className="form-label">URL de imagen</label>
                    <input type="text" className="form-control" />
                </div>

                <div className="mb-3">
                    <label className="form-label">Descripción</label>
                    <textarea className="form-control" rows="3"></textarea>
                </div>

                <div className="d-flex gap-2">
                    <button className="btn btn-success w-100">
                    Agregar al catálogo
                    </button>
                    <button className="btn btn-secondary w-100">
                    Limpiar
                    </button>
                </div>

                </div>
            </div>
            </div>

        </div>
        </main>
    )
}
