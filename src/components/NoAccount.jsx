import React from 'react'
import locale from "../locale/data.json";

const NoAccount = ({data}) => {
    return (
        <div>
            <p>{locale.en_us.NO_ACCOUNT_TEXT}</p><br/>
            <p>{locale.en_us.ASSISTANCE_TEXT}</p>
        </div>
    )
}

export default NoAccount;
