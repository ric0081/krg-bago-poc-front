import { Link } from "react-router-dom";

export const Nabvar = () => {
  return (
    <div>
      <div className='p-grid p-fluid'>
        <div className='p-col-12'>
          <div className='card card-w-title'>
            <h1>Navbar</h1>
            <p>
              <Link to='/'>Home</Link>
            </p>
            <p>
              <Link to='/table-data-one'>TableDataOne</Link>
            </p>
            <p>
              <Link to='/table-data-two'>TableDataTwo</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
