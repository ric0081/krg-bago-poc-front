import { Sidebar } from "primereact/sidebar";
import logo from "../assets/logo.png";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

export const MySidebar = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Sidebar
        visible={true}
        modal={false}
        baseZIndex={1000000}
        showCloseIcon={false}
      >
        <img src={logo} alt='bago' width='100px' style={{ margin: "20px 0" }} />
        <br />
        <Button
          type='button'
          label='Home'
          icon='pi pi-home'
          style={{ background: "#9f177e", width: "85%" }}
          onClick={() => navigate("/")}
        />
        <br />
        <br />
        <Button
          type='button'
          label='TableDataOne'
          icon='pi pi-table'
          style={{ background: "#9f177e", width: "85%" }}
          onClick={() => navigate("/table-data-one")}
        />
        <br />
        <br />
        <Button
          type='button'
          label='TableDataTwo'
          icon='pi pi-table'
          style={{ background: "#9f177e", width: "85%" }}
          onClick={() => navigate("/table-data-two")}
        />
      </Sidebar>
    </div>
  );
};
export default MySidebar;
