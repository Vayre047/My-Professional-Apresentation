import Popup from "reactjs-popup";

function Hobbies({data}) {
    const { Image, Title, Body } = data;
  return (
    <div className="col-sm-4 py-2">
    <Popup className="popup"
        trigger={<img src={Image} alt={Title} />}
        position="top left"                         on="hover"
        >
        <div className="card w-40">
            <div className="header"> {Title} </div>
            <div className="content">{Body}</div>
        </div>
        </Popup>
    </div>
    )
}

export default Hobbies;
