import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router';

const arrayicon = <FontAwesomeIcon icon={faLongArrowAltRight} />


const Vehicle = (props) => {

    const { photoURL, name, id } = props.vehicle;

    const history = useHistory();


    return (
        <div className="col-md-3 col-sm-12 py-3 " style={{ width: "268px" }} >
            <div className="card text-center" style={{ width: "15rem" }}>
                <img src={photoURL} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <button onClick={() => history.push(`/vehicle/${id}`)} className="btn btn-secondary">Buy Ticket <span>{arrayicon}</span></button>
                </div>
            </div>
        </div >
    );
};

export default Vehicle;