import React from 'react'
import locale from "../locale/data.json";
import { PHeadline } from '@porsche-design-system/components-react';

const CreditApplication = ({data}) => {
    return (
        <div className="creditContent">
            <PHeadline variant="headline-4" align="center">{locale.en_us.CREDIT_APPLICATION_TEXT}</PHeadline>
            <PHeadline variant="headline-5" align="center">{locale.en_us.APPLICATION_SUBMITTED_TEXT}</PHeadline>
            <p>{locale.en_us.CREDIT_FOOTER_1_TEXT}</p>
            <p>{locale.en_us.CREDIT_FOOTER_2_TEXT}</p>
            <p>{locale.en_us.CREDIT_FOOTER_3_TEXT}</p>
            <p>{locale.en_us.CREDIT_FOOTER_4_TEXT}</p>
        </div>
    )
}

export default CreditApplication;
