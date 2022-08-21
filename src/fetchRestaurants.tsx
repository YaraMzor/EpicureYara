import Claro from './assets/claro.svg';
import Kabkem from './assets/Kabkem.svg';
import Messa from './assets/Messa.svg';
import nithanthai from './assets/nithanthai.svg';
import tigerlily from './assets/tigerlily.svg';
import Spicy from "./assets/Spicy.svg";
import Vegitarian from "./assets/Vegitarian.svg";
import Vegan from "./assets/Vegan2.svg";

export async function fetchRestaurants() {
    return[
        {
            img:Claro,
            name:'Claro',
            chef:'Ram Shmueli',
            recipe:'Shrimps, Glass Noodles, Kemiri Nuts, Shallots,Lemon Grass, Magic Chili Brown Coconut',
            icon:Spicy,
            price:'88',
        },
        {
            img:Kabkem,
            name:'Kab Kem',
            chef:'Yariv Malili',
            recipe:'Polenta fingers, veal cheek,magic chili cured lemon cream, yellow laksa',
            icon:Vegan,
            price:'78',

        },
        {
            img:Messa,
            name:'Messa',
            chef:'Aviv Moshe',
            recipe:'Shrimps, Glass Noodles, Kemiri Nuts, Shallots,Lemon Grass, Magic Chili Brown Coconut',
            icon:Vegan,
            price:'90',
        },
        {
            img:nithanthai,
            name:'nithan thai',
            chef:'Shahaf Shabtay',
            recipe:'Shrimps, Glass Noodles, Kemiri Nuts, Shallots,Lemon Grass, Magic Chili Brown Coconut',
            icon:Vegan,
            price:'90',
        },
        {
            img:tigerlily,
            name:'Tiger Lilly',
            chef:'Yanir Green',
            recipe:'Shrimps, Glass Noodles, Kemiri Nuts, Shallots,Lemon Grass, Magic Chili Brown Coconut',
            icon:Vegan,
            price:'90',
        },

    ]
    
};