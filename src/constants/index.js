import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "خانه" },
    { href: "#about-us", label: "درباره ما" },
    { href: "#products", label: "محصولات" },
    { href: "#contact-us", label: "تماس با ما" },
];

export const statistics = [
    { value: '1k+', label: 'برند' },
    { value: '500+', label: 'کفش' },
    { value: '250k+', label: 'مشتری' },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];



export const products = [
    {
        imgURL: shoe4,
        name: "نایکی مدل Air Jordan-01",
        price: "$200.20",
    },
    {
        imgURL: shoe5,
        name: "نایکی مدل Air Jordan-10",
        price: "$210.20",
    },
    {
        imgURL: shoe6,
        name: "نایکی مدل Air Jordan-100",
        price: "$220.20",
    },
    {
        imgURL: shoe7,
        name: "نایکی مدل Air Jordan-001",
        price: "$230.20",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "ارسال رایگان",
        subtext: "با خدمات حمل و نقل رایگان ما از خرید لذت ببرید."
    },
    {
        imgURL: shieldTick,
        label: "پرداخت امن",
        subtext: "با گزینه های پرداخت امن ما، تراکنش های بدون نگرانی را تجربه کنید."
    },
    {
        imgURL: support,
        label: "دوست داریم به شما کمک کنیم",
        subtext: "تیم اختصاصی ما اینجاست تا در هر مرحله به شما کمک کند."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'علی محمدی',
        rating: 4.5,
        feedback: "توجه به جزئیات و کیفیت محصول فراتر از انتظار من بود. بسیار توصیه میکنم!"
    },
    {
        imgURL: customer2,
        customerName: 'سارا رضایی',
        rating: 4.5,
        feedback: "این محصول نه تنها انتظارات من را برآورده کرد، بلکه فراتر از آن بود. من قطعا بازهم مشتری نایکی خواهم بود!"
    }
];


export const footerLinks = [
    {
        title: "محصولات",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Nike Cortez", link: "/" },
        ],
    },
    {
        title: "کمک میخوای؟",
        links: [
            { name: "درباره ما", link: "/" },
            { name: "سوالات متداول", link: "/" },
            { name: "نحوه کارکرد سایت", link: "/" },
            { name: "سیاست های امنیتی", link: "/" },
            { name: "سیاست های پرداخت", link: "/" },
        ],
    },
    {
        title: "راه های ارتباط با ما",
        links: [
            { name: "customer@nike.com", link: "mailto:customer@nike.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];
