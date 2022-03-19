import React, { useEffect, useState } from 'react'

const Queries = [
    {
        que: 'What type of plants are called low maintenance plants?',
        ans: 'Plants that can withstand the season change, require little to no watering, have a natural resistance to diseases, don’t grow aggressively and look good in all seasons are called low maintenance plants. Aloe Vera, Snake plant and Jade plant are some of the low maintenance plants.'
    },
    {
        que: ' Is it a good option to choose a gift like a plant?',
        ans: ' Choosing a gift like a plant is considered quite thoughtful. It cleans the air, provides a relaxing atmosphere and is healthy to have around. It is a gift to cherish for years to come.'
    },
    {
        que: 'Will plants be delivered with a planter?',
        ans: 'The plants that are available on our website come with colourful pots and planters.'
    },
    {
        que: 'What types of plants can be placed in the home?',
        ans: 'You don’t need a huge garden or terrace space to add a bold green statement to your home. All you need is a little space and some green babies to rock your area. Lucky bamboo plant, Spider plant, Tulsi and Ferns are the popular types of plants placed at home.'
    },
    {
        que: 'How often do plants need to be watered when placed indoors or at home?',
        ans: 'The amount of water varies depending on the plant and the type of soil. Most indoor plants need water every 1 -3 weeks. Rest, pour water only when the soil is dry.'
    },
    {
        que: 'What types of delivery options are available for plants?',
        ans: ' We provide same-day, fixed time and even mid night delivery for plants.'
    },
    {
        que: 'Is the same day plant delivery option available?',
        ans: 'Yes. We offer same-day plant delivery via our express delivery option.'
    }

]

export const FactsWhyUs = () => {
    
    return (
        <>
            <style jsx>{`
                .accordion-button::after {
                    transition: all 0.4s;
                    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='%23333' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z' clip-rule='evenodd'/%3e%3c/svg%3e");
                    transform: scale(.7) !important;
                }
                .accordion-button:not(.collapsed)::after {
                    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='%23333' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M0 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1z' clip-rule='evenodd'/%3e%3c/svg%3e");
                }
            `}</style>
            <div className="my-4 d-block d-sm-none" >
                <div className="accordion" id="myAccordion">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseOne">Why Us</button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                            <div className="card-body">
                                    <div className="w-large-90 mt-0 mt-md-5">
                                        <div className="faqs ">
                                            <h6 className="fs-18 my-3">
                                                Buy Plants Online for a Fresh Air
                                            </h6>
                                            <p className="fs-14 text-muted text-justify">
                                                With increasing pollution, the ecosystem is being burdened day by day. So we are not being able to breathe in fresh air which is the sole reason behind growing rate of illness. To combat this, we plead you to inculcate as much greenery as you can at your home. We are here to inform you that now you can buy garden plants, small plants for home, nursery plants in India. Apart from that you can also shop for plant seeds online in India. Keeping plants in house is a favored idea from ancient ages. If you want to buy plants online from Ferns N Petals it's an plant nursery, all you need to do is place the order with us and we will ensure that <a href="" className="td-none">same day delivery of plant </a> is made using our express delivery options. House plants generally include bamboo sticks, <a href="" className="td-none">money plant</a>, marenta, scufflera, jasmine, etc. Thinking from health front, these plants are conducive to good living in clear air. <a href="" className="td-none">Outdoor plants</a> can be various flowering plants like pothos, dracaena, coleus, rose, mussaenda, etc. which are to be watered daily for a lovely view of your garden. We are one of the renowned online plant nursery in India, catering to the different needs of the customers. We suggest buying online plants by placing order for plants online to save your precious time. Online shopping of plants are a noble idea to grace up your living area. You can also send indoor plants online in India to your friends and family and promote greenery.
                                            </p>
                                        </div>
                                        <div className="faqs">
                                            <h6 className="fs-18 my-3">
                                                Green Plants: The Gift Idea called Life
                                            </h6>
                                            <p className="fs-14 text-muted text-justify">
                                                Green Plant online shopping is a growing sphere and we are the numerouno player here as we have initiated this concept. When it comes to gifting and surprising, we are the reliable service provider here. You can send plants to India using our impeccable delivery services. Gifting a plant is quite a deed as plants are living things to be nurtured just as we take care of our child. They give us oxygen which is why we should protect them. Place order for <a href="" className="td-none"></a> online, which would give you fresh air and also deck up the whole house with its life. You can buy plants online and deliver it to your friend’s place with ease. Nowadays purchasing plants online is very simple and interesting in single place we can explore numerous plant. There are various options for <a href="" className="td-none">indoor plants</a> explained below: Bonsai plants are gifted with a deep meaning. Some traditions say that bonsai never dies which if thought deeply complements the fact that our soul never dies. So gifting bonsai plants online surely confers that life is to be preserved with care. <a href="" className="td-none">Bamboo plants online</a> are an awesome gift to be presented to your dear friends as it refers to happiness, long life, and Money Plant refers for wealth and prosperity.
                                            </p>
                                        </div>
                                        <div className="plants_table my-3">
                                            <table className="w-100" >
                                                <thead>
                                                    <tr className="text-center ">
                                                        <th className=""><h6 className="bg-grey" >Variety</h6></th>
                                                        <th className=""><h6 className="bg-grey" >Services</h6></th>
                                                        <th className=""><h6 className="bg-grey" >Types</h6></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="text-center ">
                                                        <td className="">
                                                            <div className="table_cols bg-lt-grey">
                                                                <p className="" ><a href="" className="td-none">Flowering Plants</a> </p>
                                                            </div>
                                                        </td>
                                                        <td className="">
                                                            <div className="table_cols bg-lt-grey">
                                                                <p className="" >Same Day Delivery</p>
                                                            </div>
                                                        </td>
                                                        <td className="" bgcolor="red" cellSpacing="5">
                                                            <div className="table_cols bg-lt-grey">
                                                                <p className=" lg_hide_over_text" >Rose, Poinsettia, Lily, Jasmine, Hibiscus, Anthurium, Marigold </p>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="text-center">
                                                        <td className="">
                                                            <div className="table_cols bg-grey">
                                                                <p className="" ><a href="" className="td-none">Good Luck Plants</a> </p>
                                                            </div>
                                                        </td>
                                                        <td className="">
                                                            <div className="table_cols bg-grey">
                                                                <p className="" >Free Delivery Across India</p>
                                                            </div>
                                                        </td>
                                                        <td className="">
                                                            <div className="table_cols bg-grey">
                                                                <p className=" lg_hide_over_text" >Bamboo, Plams, Money Plant, Peace Lily, Jade, English Ivy etc..</p>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="text-center">
                                                        <td className="">
                                                            <div className="table_cols bg-lt-grey">
                                                                <p className="" ><a href="" className="td-none">Medicinal Plants</a> </p>
                                                            </div>
                                                        </td>
                                                        <td className="">
                                                            <div className="table_cols bg-lt-grey">
                                                                <p className="" >Fixed Time Delivery</p>
                                                            </div>
                                                        </td>
                                                        <td className="">
                                                            <div className="table_cols bg-lt-grey">
                                                                <p className=" lg_hide_over_text" >Aloe Vera, Tulsi, Rose, Elaichi Nimbu Bonsai, Ajwain etc..</p>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="text-center">
                                                        <td className="">
                                                            <div className="table_cols bg-grey">
                                                                <p className="" ><a href="" className="td-none">Desktop Plants</a> </p>
                                                            </div>
                                                        </td>
                                                        <td className="">
                                                            <div className="table_cols bg-grey">
                                                                <p className="" >Next Day Delivery</p>
                                                            </div>
                                                        </td>
                                                        <td className="">
                                                            <div className="table_cols bg-grey">
                                                                <p className=" lg_hide_over_text" >Spiral Bamboo, Ficus, Jade Terrarium, Spider Plant etc..</p>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="faqs">
                                            <h6 className="fs-18 my-3">
                                                Spread Positivity, Greenery and Beauty with Special Lucky Plant
                                            </h6>
                                            <p className="fs-14 text-muted text-justify">
                                                <span className="d-block mt-3">It is a common gifting trend that a large number people are opting for green plants as gifts for their loved ones instead of traditional chocolates and other gifts. This is because green garden plants are known to improve the air quality as well as the internal home decor. If you want to offer good luck and health to your special ones, you need to select the desired house plants like Money Plant, Bonsai, Bamboo Plant, Holy Tulsi, and many from our vast collection of home plants.</span>
                                                <span className="d-block mt-3">These plants are a perfect idea of gifting that can assure the healthy, blossoming and flourishing love for your near and dear ones. You can place them anywhere in your home be it a balcony, terrace, corners, courtyard and any other desired place in your home. Give a new look to the internal surroundings of your home from these plants for home and maintain the positive aura with the help of these household plants.</span>
                                                <span className="d-block mt-3">You can also send <a href="" className="td-none">artificial plants</a> online to brighten up your living area in an effortless manner. The amazing benefits of these artificial plants are that you don’t have to water them on a daily basis and can still create a positive aura and ambience around your home. To meet the ever increasing demand of its customers, the online portal brings to you a wide variety of artificial plants online in India and abroad in a smooth manner.</span>
                                            </p>
                                        </div>
                                        <div className="faqs">
                                            <h6 className="fs-18 my-3">
                                                Ferns N Petals: The Best Online Plant Shop in India
                                            </h6>
                                            <p className="fs-14 text-muted text-justify">
                                                We have almost webbed the whole world in gifting flowers and cakes. You can <a href="" className="td-none">send plants to Delhi Mumbai</a>, Pune, Delhi, Bangalore, Hyderabad or any other destination with a click of the mouse. Plants online shopping have also taken a boost and we have succeeded in promoting greenery in people’s lives. We have a worldwide delivery for most of the mentioned items and our same-day delivery is a unique idea to keep the folks happy. Ferns and Petals also serves express delivery, where the gift would reach the destination in just 2 hours. We pride ourselves in being the best online plant shop and are more than happy to serve humanity for a noble cause. You can order plants online to India or any other international destination with absolute ease.
                                            </p>
                                        </div>
                                        <div className="faqs">
                                            <h6 className="fs-18 my-3">
                                                Order Thoughtful Valentine’s Day Plants
                                            </h6>
                                            <p className="fs-14 text-muted text-justify">
                                                Valentine’s is a day of romance, which is why everywhere you see, you get lovable and cheesy gift ideas. However, when you love someone deeply, you would like to buy something beneficial for them. On that note, if you have a partner, be it your husband or girlfriend who is a plant lover, we have just the present for them. You must take a look at the extensive range of plants in our midst that will help you create the perfect green den for your beau. Be it the heart-shaped Hoya plant or the air-purifying Sansevieria, it will look stunning. These green buddies come in different sizes and aesthetic pots that will beautify the recipient’s home or office. So, whether you order a Money plant or a Ficus Bonsai, these plants will give the home a fresh and green look. Not to forget the several incredible benefits of having indoor and outdoor plants. So, what are you waiting for? <a href="" className="td-none">Send plants for Valentine’s Day</a> to the one who would appreciate it far more than a cheesy gift from the local store. Moreover, there is nothing quite as romantic and thoughtful as having a partner who knows just what to give you as a gift.
                                            </p>
                                        </div>
                                        <div className="faqs">
                                            <h6 className="fs-18 my-3">
                                                Plants in an affordable range with Ferns N Petals Vouchers
                                            </h6>
                                            <p className="fs-14 text-muted text-justify">
                                                We all read it in childhood that plant is our life as we derive oxygen from it. But how many of you are thinking to gift a plant to your loved ones? This is one of the noblest of all gifts and with plant offers in FNP, you can get the beneficial plants at an affordable rate. With plant as a gift, you would make the place of the gift receiver a better one. Because plants promote a healthy mind and body. We have some amazing lucky bamboo plants in our stock which enhances the quality of life. For a harmonious and peaceful life, you can place an order for this constructive plant by availing the current <a href="" className="td-none">FNP voucher codes</a>.
                                            </p>
                                        </div>
                                        {
                                            Queries?.map((e, i) => {
                                                return <div className="queries my-3" key={i}>
                                                    <h5 className="fs-22 fw-500">
                                                        <span className="me-2">Q.</span>
                                                        {e.que}
                                                    </h5>
                                                    <p className="fs-14 text-muted">
                                                        <span className="me-2">Ans</span>
                                                        {e.ans}
                                                    </p>
                                                </div>
                                            })
                                        }
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-none d-sm-block w-large-90 mt-0 mt-md-5">
                    <div className="faqs ">
                        <h6 className="fs-18 my-3">
                            Buy Plants Online for a Fresh Air
                        </h6>
                        <p className="fs-14 text-muted text-justify">
                            With increasing pollution, the ecosystem is being burdened day by day. So we are not being able to breathe in fresh air which is the sole reason behind growing rate of illness. To combat this, we plead you to inculcate as much greenery as you can at your home. We are here to inform you that now you can buy garden plants, small plants for home, nursery plants in India. Apart from that you can also shop for plant seeds online in India. Keeping plants in house is a favored idea from ancient ages. If you want to buy plants online from Ferns N Petals it's an plant nursery, all you need to do is place the order with us and we will ensure that <a href="" className="td-none">same day delivery of plant </a> is made using our express delivery options. House plants generally include bamboo sticks, <a href="" className="td-none">money plant</a>, marenta, scufflera, jasmine, etc. Thinking from health front, these plants are conducive to good living in clear air. <a href="" className="td-none">Outdoor plants</a> can be various flowering plants like pothos, dracaena, coleus, rose, mussaenda, etc. which are to be watered daily for a lovely view of your garden. We are one of the renowned online plant nursery in India, catering to the different needs of the customers. We suggest buying online plants by placing order for plants online to save your precious time. Online shopping of plants are a noble idea to grace up your living area. You can also send indoor plants online in India to your friends and family and promote greenery.
                        </p>
                    </div>
                    <div className="faqs">
                        <h6 className="fs-18 my-3">
                            Green Plants: The Gift Idea called Life
                        </h6>
                        <p className="fs-14 text-muted text-justify">
                            Green Plant online shopping is a growing sphere and we are the numerouno player here as we have initiated this concept. When it comes to gifting and surprising, we are the reliable service provider here. You can send plants to India using our impeccable delivery services. Gifting a plant is quite a deed as plants are living things to be nurtured just as we take care of our child. They give us oxygen which is why we should protect them. Place order for <a href="" className="td-none"></a> online, which would give you fresh air and also deck up the whole house with its life. You can buy plants online and deliver it to your friend’s place with ease. Nowadays purchasing plants online is very simple and interesting in single place we can explore numerous plant. There are various options for <a href="" className="td-none">indoor plants</a> explained below: Bonsai plants are gifted with a deep meaning. Some traditions say that bonsai never dies which if thought deeply complements the fact that our soul never dies. So gifting bonsai plants online surely confers that life is to be preserved with care. <a href="" className="td-none">Bamboo plants online</a> are an awesome gift to be presented to your dear friends as it refers to happiness, long life, and Money Plant refers for wealth and prosperity.
                        </p>
                    </div>
                    <div className="plants_table my-3">
                        <table className="" width="100%" >
                            <thead>
                                <tr className="text-center ">
                                    <th className=""><h6 className="bg-grey" >Variety</h6></th>
                                    <th className=""><h6 className="bg-grey" >Services</h6></th>
                                    <th className=""><h6 className="bg-grey" >Types</h6></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="text-center ">
                                    <td className="">
                                        <div className="table_cols bg-lt-grey">
                                            <p className="" ><a href="" className="td-none">Flowering Plants</a> </p>
                                        </div>
                                    </td>
                                    <td className="">
                                        <div className="table_cols bg-lt-grey">
                                            <p className="" >Same Day Delivery</p>
                                        </div>
                                    </td>
                                    <td className="">
                                        <div className="table_cols bg-lt-grey">
                                            <p className=" lg_hide_over_text" >Rose, Poinsettia, Lily, Jasmine, Hibiscus, Anthurium, Marigold </p>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="text-center">
                                    <td className="">
                                        <div className="table_cols bg-grey">
                                            <p className="" ><a href="" className="td-none">Good Luck Plants</a> </p>
                                        </div>
                                    </td>
                                    <td className="">
                                        <div className="table_cols bg-grey">
                                            <p className="" >Free Delivery Across India</p>
                                        </div>
                                    </td>
                                    <td className="">
                                        <div className="table_cols bg-grey">
                                            <p className=" lg_hide_over_text" >Bamboo, Plams, Money Plant, Peace Lily, Jade, English Ivy etc..</p>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="text-center">
                                    <td className="">
                                        <div className="table_cols bg-lt-grey">
                                            <p className="" ><a href="" className="td-none">Medicinal Plants</a> </p>
                                        </div>
                                    </td>
                                    <td className="">
                                        <div className="table_cols bg-lt-grey">
                                            <p className="" >Fixed Time Delivery</p>
                                        </div>
                                    </td>
                                    <td className="">
                                        <div className="table_cols bg-lt-grey">
                                            <p className=" lg_hide_over_text" >Aloe Vera, Tulsi, Rose, Elaichi Nimbu Bonsai, Ajwain etc..</p>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="text-center">
                                    <td className="">
                                        <div className="table_cols bg-grey">
                                            <p className="" ><a href="" className="td-none">Desktop Plants</a> </p>
                                        </div>
                                    </td>
                                    <td className="">
                                        <div className="table_cols bg-grey">
                                            <p className="" >Next Day Delivery</p>
                                        </div>
                                    </td>
                                    <td className="">
                                        <div className="table_cols bg-grey">
                                            <p className=" lg_hide_over_text" >Spiral Bamboo, Ficus, Jade Terrarium, Spider Plant etc..</p>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="faqs">
                        <h6 className="fs-18 my-3">
                            Spread Positivity, Greenery and Beauty with Special Lucky Plant
                        </h6>
                        <p className="fs-14 text-muted text-justify">
                            <span className="d-block mt-3">It is a common gifting trend that a large number people are opting for green plants as gifts for their loved ones instead of traditional chocolates and other gifts. This is because green garden plants are known to improve the air quality as well as the internal home decor. If you want to offer good luck and health to your special ones, you need to select the desired house plants like Money Plant, Bonsai, Bamboo Plant, Holy Tulsi, and many from our vast collection of home plants.</span>
                            <span className="d-block mt-3">These plants are a perfect idea of gifting that can assure the healthy, blossoming and flourishing love for your near and dear ones. You can place them anywhere in your home be it a balcony, terrace, corners, courtyard and any other desired place in your home. Give a new look to the internal surroundings of your home from these plants for home and maintain the positive aura with the help of these household plants.</span>
                            <span className="d-block mt-3">You can also send <a href="" className="td-none">artificial plants</a> online to brighten up your living area in an effortless manner. The amazing benefits of these artificial plants are that you don’t have to water them on a daily basis and can still create a positive aura and ambience around your home. To meet the ever increasing demand of its customers, the online portal brings to you a wide variety of artificial plants online in India and abroad in a smooth manner.</span>
                        </p>
                    </div>
                    <div className="faqs">
                        <h6 className="fs-18 my-3">
                            Ferns N Petals: The Best Online Plant Shop in India
                        </h6>
                        <p className="fs-14 text-muted text-justify">
                            We have almost webbed the whole world in gifting flowers and cakes. You can <a href="" className="td-none">send plants to Delhi Mumbai</a>, Pune, Delhi, Bangalore, Hyderabad or any other destination with a click of the mouse. Plants online shopping have also taken a boost and we have succeeded in promoting greenery in people’s lives. We have a worldwide delivery for most of the mentioned items and our same-day delivery is a unique idea to keep the folks happy. Ferns and Petals also serves express delivery, where the gift would reach the destination in just 2 hours. We pride ourselves in being the best online plant shop and are more than happy to serve humanity for a noble cause. You can order plants online to India or any other international destination with absolute ease.
                        </p>
                    </div>
                    <div className="faqs">
                        <h6 className="fs-18 my-3">
                            Order Thoughtful Valentine’s Day Plants
                        </h6>
                        <p className="fs-14 text-muted text-justify">
                            Valentine’s is a day of romance, which is why everywhere you see, you get lovable and cheesy gift ideas. However, when you love someone deeply, you would like to buy something beneficial for them. On that note, if you have a partner, be it your husband or girlfriend who is a plant lover, we have just the present for them. You must take a look at the extensive range of plants in our midst that will help you create the perfect green den for your beau. Be it the heart-shaped Hoya plant or the air-purifying Sansevieria, it will look stunning. These green buddies come in different sizes and aesthetic pots that will beautify the recipient’s home or office. So, whether you order a Money plant or a Ficus Bonsai, these plants will give the home a fresh and green look. Not to forget the several incredible benefits of having indoor and outdoor plants. So, what are you waiting for? <a href="" className="td-none">Send plants for Valentine’s Day</a> to the one who would appreciate it far more than a cheesy gift from the local store. Moreover, there is nothing quite as romantic and thoughtful as having a partner who knows just what to give you as a gift.
                        </p>
                    </div>
                    <div className="faqs">
                        <h6 className="fs-18 my-3">
                            Plants in an affordable range with Ferns N Petals Vouchers
                        </h6>
                        <p className="fs-14 text-muted text-justify">
                            We all read it in childhood that plant is our life as we derive oxygen from it. But how many of you are thinking to gift a plant to your loved ones? This is one of the noblest of all gifts and with plant offers in FNP, you can get the beneficial plants at an affordable rate. With plant as a gift, you would make the place of the gift receiver a better one. Because plants promote a healthy mind and body. We have some amazing lucky bamboo plants in our stock which enhances the quality of life. For a harmonious and peaceful life, you can place an order for this constructive plant by availing the current <a href="" className="td-none">FNP voucher codes</a>.
                        </p>
                    </div>
                    {
                        Queries?.map((e, i) => {
                            return <div className="queries my-3" key={i}>
                                <h5 className="fs-22 fw-500">
                                    <span className="me-2">Q.</span>
                                    {e.que}
                                </h5>
                                <p className="fs-14 text-muted">
                                    <span className="me-2">Ans</span>
                                    {e.ans}
                                </p>
                            </div>
                        })
                    }
                </div>
        </>
    )
}


// {
       
// }