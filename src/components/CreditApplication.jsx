import React from 'react'
import locale from "../locale/data.json";

const CreditApplication = ({data}) => {
    return (
        <div>
            <p>{locale.en_us.CREDIT_APPLICATION_TEXT}</p>
            <p>{locale.en_us.APPLICATION_SUBMITTED_TEXT}</p>
            <p>{locale.en_us.CREDIT_FOOTER_1_TEXT}</p>
            <p>{locale.en_us.CREDIT_FOOTER_2_TEXT}</p>
            <p>{locale.en_us.CREDIT_FOOTER_3_TEXT}</p>
            <p>{locale.en_us.CREDIT_FOOTER_4_TEXT}</p>
        </div>
    )
}

export default CreditApplication;
