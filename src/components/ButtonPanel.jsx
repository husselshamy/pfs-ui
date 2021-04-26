import React from 'react'
import locale from "../locale/data.json";
import { PLink, PButtonGroup, PGrid, PGridItem } from '@porsche-design-system/components-react';

const ButtonPanel = ({data}) => {
    return (
        <PGrid className="example-grid">
            <PGridItem size={9}>
                <PButtonGroup>
                    {!data.PfsAccountInformation[0].accountNumber && <PLink  variant="primary" hideLabel={{ base: true, s: false }} href="https://pfsaccount.porscheusa.com/AutoService/accountEnrollment">{locale.en_us.Link_My_Account_BUTTON}</PLink>}
                    {data.PfsAccountInformation[0].accountNumber && <PLink  variant="primary" hideLabel={{ base: true, s: false }} href="https://pfsaccount.porscheusa.com/AutoService/accountEnrollment">{locale.en_us.Manage_Account_BUTTON}</PLink>}
                    {!data.PfsAccountInformation[0].accountNumber && <PLink hideLabel={{ base: true, s: false }} href="https://pfsaccount.porscheusa.com/AutoService/helpCenterFaqs">{locale.en_us.Watch_How_To_Videos_BUTTON}</PLink>}
                    {data.PfsAccountInformation[0].accountNumber && <PLink  hideLabel={{ base: true, s: false }} href="https://pfsaccount.porscheusa.com/AutoService/helpCenterFaqs">{locale.en_us.Lease_BUTTON}</PLink>}
                    <PLink  hideLabel={{ base: true, s: false }} href="https://pfsaccount.porscheusa.com/AutoService/helpCenterFaqs">{locale.en_us.FAQ_BUTTON}</PLink>
                    <PLink  hideLabel={{ base: true, s: false }} href="https://pfsaccount.porscheusa.com/AutoService/helpCenterContact">{locale.en_us.Contact_Us_BUTTON}</PLink>
                </PButtonGroup>
            </PGridItem>
            <PGridItem size={3}></PGridItem>
        </PGrid>
    )
}

export default ButtonPanel;
