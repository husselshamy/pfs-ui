import React from 'react'
import locale from "../locale/data.json";
import { PButton, PFlex, PFlexItem } from '@porsche-design-system/components-react';

const ButtonPanel = ({data}) => {
    return (
        <PFlex wrap={{ base: 'wrap', l: 'nowrap' }} justifyContent="space-around">
            <PFlexItem>{!data.PfsAccountInformation[0].accountNumber && <PButton href="https://pfsaccount.porscheusa.com/AutoService/accountEnrollment">{locale.en_us.Link_My_Account_BUTTON}</PButton>}</PFlexItem>
            <PFlexItem>{data.PfsAccountInformation[0].accountNumber && <PButton href="https://pfsaccount.porscheusa.com/AutoService/accountEnrollment">{locale.en_us.Manage_Account_BUTTON}</PButton>}</PFlexItem>
            <PFlexItem>{!data.PfsAccountInformation[0].accountNumber && <PButton href="https://pfsaccount.porscheusa.com/AutoService/helpCenterFaqs">{locale.en_us.Watch_How_To_Videos_BUTTON}</PButton>}</PFlexItem>
            <PFlexItem>{data.PfsAccountInformation[0].accountNumber && <PButton href="https://pfsaccount.porscheusa.com/AutoService/helpCenterFaqs">{locale.en_us.Lease_BUTTON}</PButton>}</PFlexItem>
            <PFlexItem><PButton href="https://pfsaccount.porscheusa.com/AutoService/helpCenterFaqs">{locale.en_us.FAQ_BUTTON}</PButton></PFlexItem>
            <PFlexItem><PButton href="https://pfsaccount.porscheusa.com/AutoService/helpCenterContact">{locale.en_us.Contact_Us_BUTTON}</PButton></PFlexItem>
        </PFlex>
    )
}

export default ButtonPanel;
