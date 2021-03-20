import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import Vehicle from './Vehicle';



const Home = () => {

    const [transport, setTransport] = useState([])

    useEffect(() => {
        fetch("https://api.mocki.io/v1/dab62bd5")
            .then(res => res.json())
            .then(data => setTransport(data))
    }, [])


    const shuffle = a => {
        for (let i = a.length; i; i--) {
            let j = Math.floor(Math.random() * i);
            [a[i - 1], a[j]] = [a[j], a[i - 1]];
        }
    }

    shuffle(transport);

    return (
        <div style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(https://i.ibb.co/7Xj3wyR/home.jpg)`, height: '95vh' }} >

            <div className="container pt-5">
                <div className="row justify-content-center">
                    {
                        transport.map(vehicle => <Vehicle vehicle={vehicle} key={vehicle.id}></Vehicle>)
                    }
                </div>
            </div>

        </div >
    );
};

export default Home;