import React from 'react';
import { Wrapper, Navigation, NavButton} from './style';
import { ProductOverview } from '@components/ProductOverview/index.jsx';
import { ProductFeature } from '@components/ProductFeature/index.jsx';
import { atom } from 'recoil';

export const ProductDetail = () => {

    const optionSelectState = atom({
        key:'optionSelectState',
        default:[]
    })

    const onLinkClick = (event) => {
        //스크롤이벤트
        //let getMeTo = document.getElementById(name);
        //getMeTo.scrollIntoView({behavior: 'smooth'}, true);
    };

    const data = {
        "id": 3,
        "imgUrl": "https://cdn.imweb.me/thumbnail/20220622/420f289e15350.jpg",
        "name": "국산 강원도 화천 생 아스파라거스 1kg, 2kg",
        "price": 40000,
        "is_best": true,
        "is_sold_out": false,
        "is_sale": true,
        "sale_price": 0.5,
        "message": '미생물을 이용한 친환경 농법으로 길러 더욱 맛있는 국내산 친환경 생 아스파라거스',
        "origin": "강원도",
        "deliveryInfo": {
            '원산지':'강원도 화천군',
            '배송 방법':'택배',
            '배송비': '4,000원 (40,000원 이상 무료 배송)',
        },
        "productInfoImgUrl": "https://cdn.imweb.me/upload/S201907022014f7de8adf6/b196b2ba9b092.jpg",
        "option": [
            {
                "id": 1,
                "name": "1kg",
                "price": 40000
            },
            {
                "id": 2,
                "name": "2kg",
                "price": 76000
            }
        ]
    }
    
    return (
        <Wrapper>
            <ProductOverview data={data} optionSelectState={optionSelectState}/>
            <Navigation>
                <NavButton onClick={onLinkClick}>상품정보</NavButton>
                <NavButton onClick={onLinkClick}>리뷰</NavButton>
                <NavButton onClick={onLinkClick}>문의</NavButton>
            </Navigation>
            <ProductFeature productInfoImgUrl={data.productInfoImgUrl}/>
        </Wrapper>
    );
};

export default ProductDetail;