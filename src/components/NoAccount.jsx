import React from 'react'
import CreditApplication from "./CreditApplication";
import ButtonPanel from "./ButtonPanel";
import locale from "../locale/data.json";


const NoAccount = ({data}) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <p>{locale.en_us.GENERAL_HEADER_TEXT}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <p>{locale.en_us.NO_ACCOUNT_TEXT}</p>
                    <p>{locale.en_us.ASSISTANCE_TEXT}</p>
                </div>
                {data.PfsAccountInformation[0].appliedForCredit && <div className="td-left-border col-sm-6"><CreditApplication data={data}/></div>}
            </div>
            {!data.PfsAccountInformation[0].appliedForCredit && <div>
                <br/><br/><br/><br/><br/>
            </div>}
            <ButtonPanel data={data} />
        </div>
    )
}

export default NoAccount;
