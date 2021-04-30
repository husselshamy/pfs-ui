import React from 'react'
import CreditApplication from "./CreditApplication";
import ButtonPanel from "./ButtonPanel";
import locale from "../locale/data.json";
import {PHeadline, PContentWrapper, PGrid, PGridItem, PDivider} from '@porsche-design-system/components-react';


const NoAccount = ({data}) => {
    return (
        <div>
            <PGrid className="example-grid">
                <PGridItem size={6}>
                    <div>
                        <PHeadline>{locale.en_us.GENERAL_HEADER_TEXT}</PHeadline>
                    </div>
                    <div>
                        <p>{locale.en_us.NO_ACCOUNT_TEXT}</p><br/>
                        <p>{locale.en_us.ASSISTANCE_TEXT}</p>
                    </div>
                </PGridItem>
                <PGridItem size="6">
                    {data.PfsAccountInformation[0].appliedForCredit && <div><CreditApplication data={data}/></div>}
                </PGridItem>
            </PGrid>
            <ButtonPanel data={data} />
        </div>
    )
}

export default NoAccount;
