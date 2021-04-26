import React from 'react'
import locale from "../locale/data.json";

const ButtonPanel = ({data}) => {
    return (
        <div className="row">
            {!data.PfsAccountInformation[0].accountNumber && <a className="col-sm-3 red" href="https://pfsaccount.porscheusa.com/AutoService/accountEnrollment">{locale.en_us.Link_My_Account_BUTTON}</a>}
            {data.PfsAccountInformation[0].accountNumber && <a className="col-sm-3 red" href="https://pfsaccount.porscheusa.com/AutoService/accountEnrollment">{locale.en_us.Manage_Account_BUTTON}</a>}
            {!data.PfsAccountInformation[0].accountNumber && <a className="col-sm-3" href="https://pfsaccount.porscheusa.com/AutoService/helpCenterFaqs">{locale.en_us.Watch_How_To_Videos_BUTTON}</a>}
            {data.PfsAccountInformation[0].accountNumber && <a className="col-sm-3" href="https://pfsaccount.porscheusa.com/AutoService/helpCenterFaqs">{locale.en_us.Lease_BUTTON}</a>}
            <a className="col-sm-2" href="https://pfsaccount.porscheusa.com/AutoService/helpCenterFaqs">{locale.en_us.FAQ_BUTTON}</a>
            <a className="col-sm-2" href="https://pfsaccount.porscheusa.com/AutoService/helpCenterContact">{locale.en_us.Contact_Us_BUTTON}</a>
        </div>
    )
}

export default ButtonPanel;
