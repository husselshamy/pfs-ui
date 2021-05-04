import React, { useEffect, useState } from "react";
import Account from './components/Account';
import NoAccount from './components/NoAccount';
import {PContentWrapper, PGrid, PGridItem, PHeadline} from '@porsche-design-system/components-react';
import {porscheContentAreaCommunicator} from "@myporsche/content-area-communicator";
import locale from "./locale/data.json";
import ButtonPanel from "./components/ButtonPanel";
import CreditApplication from "./components/CreditApplication";
import { ICONS_CDN_BASE_URL, ICONS_MANIFEST } from '@porsche-design-system/assets';
const iconUrl = `${ICONS_CDN_BASE_URL}/${ICONS_MANIFEST.arrowRight}`;

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

    let columnSize = 12;
    let accLinked = false;
    let creditApplied = false;
    if (data && data.PfsAccountInformation) {
        if (data.PfsAccountInformation[0].accountNumber) {
            accLinked = true;
        }
        if (data.PfsAccountInformation[0].appliedForCredit) {
            columnSize = 4;
            creditApplied = true;
        }
    }

    return (
    <div>
        {!accLinked && <PHeadline variant="headline-3">{locale.en_us.GENERAL_HEADER_TEXT}</PHeadline>}
        {accLinked && <PHeadline variant="headline-3">{locale.en_us.ACCOUNT_MANAGEMENT_TEXT}</PHeadline>}
        <PGrid className="pfs-wrapper">
            <PGridItem className="account-wrapper" size={{ base: 12, s: columnSize }}>
                {!accLinked && <NoAccount data={data}/>}
                {accLinked  && <Account data={data}/>}
            </PGridItem>
            <PGridItem className="credit-wrapper" size={{ base: 12, s: columnSize }}>
                {creditApplied && <CreditApplication data={data}/>}
            </PGridItem>
        </PGrid>
        <ButtonPanel data={data} />
    </div>
    );
}

export default App;
