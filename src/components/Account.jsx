import React from 'react'
import CreditApplication from "./CreditApplication";
import ButtonPanel from "./ButtonPanel";
import locale from "../locale/data.json";
import { PHeadline, PContentWrapper, PGrid, PGridItem } from '@porsche-design-system/components-react';

const Account = ({data}) => {
    return (
        <div>
            <PGrid className="example-grid">
                <PGridItem size={6}>
                    <PHeadline>{locale.en_us.ACCOUNT_MANAGEMENT_TEXT}</PHeadline>
                    <p className="center">Account: {data.PfsAccountInformation[0].accountNumber}</p>
                    <p className="center">Next payment due on March </p>
                    <p className="center payment">Past due: $1,234</p>
                    <p className="center">Contract end date: November 1, 2023</p>
                </PGridItem>
                <PGridItem size={6}>
                    {data.PfsAccountInformation[0].appliedForCredit && <div><CreditApplication data={data}/></div>}
                    <br/>
                    {!data.PfsAccountInformation[0].appliedForCredit && <div>
                        <h2>{locale.en_us.SELECT_OPTION_TEXT}</h2>
                    </div>}
                </PGridItem>
            </PGrid>
            <PGrid className="example-grid">
                <PGridItem size={10}>
                    <ButtonPanel data={data} />
                </PGridItem>
            </PGrid>
        </div>
    )
}

export default Account;
