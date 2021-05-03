import React, { useEffect, useState } from "react";
import Account from './components/Account';
import NoAccount from './components/NoAccount';
import {PContentWrapper, PGrid, PGridItem, PHeadline} from '@porsche-design-system/components-react';
import {porscheContentAreaCommunicator} from "@myporsche/content-area-communicator";
import locale from "./locale/data.json";
import ButtonPanel from "./components/ButtonPanel";
import CreditApplication from "./components/CreditApplication";

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

    const data = {
        "id": 1,
        "PfsAccountInformation": [
            {   "accountNumber" : 40,
                "daysToMaturity": -30,
                "paymentDueDate": "2018-05-18T00:00:00.000+0000",
                "lastStatementDate": "2018-04-30T00:00:00.000+0000",
                "product": "LEASE",
                "paperlessPreference": false,
                "vin": "WP0AA2A78FL004006",
                "showMaturity": true,
                "appliedForCredit": true
            },
            {   "accountNumber" : 50,
                "daysToMaturity": -30,
                "paymentDueDate": "2018-05-18T00:00:00.000+0000",
                "lastStatementDate": "2018-04-30T00:00:00.000+0000",
                "product": "LEASE",
                "paperlessPreference": false,
                "vin": "WP0AA2A78FL004006",
                "showMaturity": true,
                "appliedForCredit": true
            },
        ]
    };
    let columnSize = 4;
    if (!data.PfsAccountInformation[0].appliedForCredit) {
        columnSize = 12;
    }

    let accStatus = false;
    if (data && data.PfsAccountInformation && data.PfsAccountInformation[0].accountNumber) {
        accStatus = true;
    }

    return (
    <div>
        {!accStatus && <PHeadline variant="headline-3">{locale.en_us.GENERAL_HEADER_TEXT}</PHeadline>}
        {accStatus && <PHeadline variant="headline-3">{locale.en_us.ACCOUNT_MANAGEMENT_TEXT}</PHeadline>}
        <PGrid className="example-grid">
            <PGridItem size={{ base: 12, s: columnSize }}>
                {!accStatus && <NoAccount data={data}/>}
                {accStatus  && <Account data={data}/>}
            </PGridItem>
            <PGridItem size={{ base: 12, s: columnSize }}>
                {data.PfsAccountInformation[0].appliedForCredit && <div><CreditApplication data={data}/></div>}
            </PGridItem>
        </PGrid>
        <ButtonPanel data={data} />
    </div>
    );
}

export default App;
