import React from 'react'
import Slider from 'react-slick'
import locale from "../locale/data.json";
import { PText } from '@porsche-design-system/components-react';

const Account = ({data}) => {
    const SliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div>
            <Slider {...SliderSettings}>
                {data.PfsAccountInformation.map((acc, index) => (
                    <div key={index}>
                        <p className="accNumber">Account: {acc.accountNumber}</p>
                        <p className="paymentDue">Next payment due on March </p>
                        <p className="payment">Past due: $1,234</p>
                        <p className="endDate">Contract end date: November 1, 2023</p>
                    </div>
                ))}
            </Slider>
            <br/>
            {!data.PfsAccountInformation[0].appliedForCredit && <PText>{locale.en_us.SELECT_OPTION_TEXT}</PText>}
        </div>
    )
}

export default Account;
