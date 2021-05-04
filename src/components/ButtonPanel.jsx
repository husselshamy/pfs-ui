import React from 'react'
import locale from "../locale/data.json";
import { PLink, PButtonGroup, PGrid, PGridItem } from '@porsche-design-system/components-react';

const ButtonPanel = ({data}) => {
    let accStatus = false;
    if (data && data.PfsAccountInformation && data.PfsAccountInformation[0].accountNumber) {
        accStatus = true;
    }
    return (
        <PGrid className="ButtonPanel">
            <PGridItem size={12}>
                <PButtonGroup direction={{base: 'column', s: 'row'}}>
                    {!accStatus && <PLink  variant="primary" href="https://pfsaccount.porscheusa.com/AutoService/accountEnrollment">{locale.en_us.Link_My_Account_BUTTON}</PLink>}
                    {accStatus && <PLink  variant="primary" href="https://pfsaccount.porscheusa.com/AutoService/accountEnrollment">{locale.en_us.Manage_Account_BUTTON}</PLink>}
                    {!accStatus && <PLink href="https://pfsaccount.porscheusa.com/AutoService/helpCenterFaqs">{locale.en_us.Watch_How_To_Videos_BUTTON}</PLink>}
                    {accStatus && <PLink  href="https://pfsaccount.porscheusa.com/AutoService/helpCenterFaqs">{locale.en_us.Lease_BUTTON}</PLink>}
                    <PLink href="https://pfsaccount.porscheusa.com/AutoService/helpCenterFaqs">{locale.en_us.FAQ_BUTTON}</PLink>
                    <PLink href="https://pfsaccount.porscheusa.com/AutoService/helpCenterContact">{locale.en_us.Contact_Us_BUTTON}</PLink>
                </PButtonGroup>
            </PGridItem>
        </PGrid>
    )
}

export default ButtonPanel;
