import React from 'react'
import CreditApplication from "./CreditApplication";
import ButtonPanel from "./ButtonPanel";
import locale from "../locale/data.json";
import { PHeadline, PContentWrapper } from '@porsche-design-system/components-react';

const Account = ({data}) => {
    return (
        <PContentWrapper>
            <div>
                <div>
                    <PHeadline>{locale.en_us.ACCOUNT_MANAGEMENT_TEXT}</PHeadline>
                </div>
            </div>
            <div>
                <div>
                    <br/>
                    <p className="center">Account: {data.PfsAccountInformation[0].accountNumber}</p>
                    <p className="center">Next payment due on March </p>
                    <p className="center payment">Past due: $1,234</p>
                    <p className="center">Contract end date: November 1, 2023</p>
                </div>
                {data.PfsAccountInformation[0].appliedForCredit && <div><CreditApplication data={data}/></div>}
            </div>
                <br/>
                {!data.PfsAccountInformation[0].appliedForCredit && <div>
                    <h2>{locale.en_us.SELECT_OPTION_TEXT}</h2>
                </div>}
            <ButtonPanel data={data} />
        </PContentWrapper>
    )
}

export default Account;
