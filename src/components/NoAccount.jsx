import React from 'react'
import CreditApplication from "./CreditApplication";
import ButtonPanel from "./ButtonPanel";
import locale from "../locale/data.json";
import {PHeadline, PContentWrapper, PGrid, PGridItem, PDivider} from '@porsche-design-system/components-react';


const NoAccount = ({data}) => {
    return (
        <div className="noAccContainer">
            <p>{locale.en_us.NO_ACCOUNT_TEXT}</p><br/>
            <p>{locale.en_us.ASSISTANCE_TEXT}</p>
        </div>
    )
}

export default NoAccount;
