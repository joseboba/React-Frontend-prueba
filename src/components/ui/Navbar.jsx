import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/authActions';

export const Navbar = () => {

  const dispatch = useDispatch()
  
  const handleCloseSesion = () =>{
    localStorage.clear();
    dispatch(logout())
  }

  


  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/user">
        Edit User
      </Link>
      <button
        className="navbar-toggler"
        type="button"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse">

        <ul className="navbar-nav mr-auto">

          <li className="nav-item">
            <Link className="nav-link" to="/">
              Tus carros 
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/new/car">
              Crea un nuevo carro
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/search">
              Buscar
            </Link>
          </li>

        </ul>

        <button className="btn btn-danger" onClick={ handleCloseSesion }>
           Cerrar Sesión
        </button>
      </div>
    </nav>
  );
}
