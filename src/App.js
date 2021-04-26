import React, { useEffect, useState } from "react";
import Account from './components/Account';
import NoAccount from './components/NoAccount';
import { PContentWrapper } from '@porsche-design-system/components-react';

function App(props) {

    // const [data, setData] = useState();
    const [msg, setMsg] = useState();
    // useEffect ( () => {
    //     fetch('http://localhost:3000/posts/1')
    //         .then(res => res.json())
    //         .then(data => setData(data));
    // }, []);

    useEffect(() => {
        const handler = event => {
            setMsg(event.data.apiKey);
        }
        window.addEventListener("message", handler)
        return () => window.removeEventListener("message", handler)
    }, []);

    const data =     {
        "id": 1,
        "PfsAccountInformation":
            [
                {
                    "accountNumber": msg,
                    "daysToMaturity": -30,
                    "paymentDueDate": "2018-05-18T00:00:00.000+0000",
                    "lastStatementDate": "2018-04-30T00:00:00.000+0000",
                    "product": "LEASE",
                    "paperlessPreference": false,
                    "vin": "WP0AA2A78FL004006",
                    "showMaturity": true,
                    "appliedForCredit": true
                }
            ]
    };

    return (
    <PContentWrapper>
        {data && data.PfsAccountInformation && !data.PfsAccountInformation[0].accountNumber && <NoAccount data={data}/>}
        {data && data.PfsAccountInformation && data.PfsAccountInformation[0].accountNumber && <Account data={data}/>}
    </PContentWrapper>
    );
}

export default App;
