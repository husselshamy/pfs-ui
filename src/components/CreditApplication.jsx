import React from 'react'
import locale from "../locale/data.json";
import { PDivider } from '@porsche-design-system/components-react';

const CreditApplication = ({data}) => {
    return (
        <div>
            <div className="divider-vertical-responsive-container-example">
                <PDivider orientation={{base: 'horizontal', l: 'vertical'}}></PDivider>
            </div>
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
