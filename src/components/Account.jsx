import React from 'react'
import CreditApplication from "./CreditApplication";
import ButtonPanel from "./ButtonPanel";
import locale from "../locale/data.json";

const Account = ({data}) => {
    return (
        <div className="container">
            <div className="row">
                <div className="left-text col-sm-12">
                    <p>{locale.en_us.ACCOUNT_MANAGEMENT_TEXT}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <br/>
                    <p className="center">Account: {data.PfsAccountInformation[0].accountNumber}</p>
                    <p className="center">Next payment due on March </p>
                    <p className="center payment">Past due: $1,234</p>
                    <p className="center">Contract end date: November 1, 2023</p>
                </div>
                {data.PfsAccountInformation[0].appliedForCredit && <div className="td-left-border col-sm-6"><CreditApplication data={data}/></div>}
            </div>
                <br/>
                {!data.PfsAccountInformation[0].appliedForCredit && <div>
                    <h2>{locale.en_us.SELECT_OPTION_TEXT}</h2>
                </div>}
            <ButtonPanel data={data} />
        </div>
    )
}

export default Account;
