import ArrowLeft from '@mui/icons-material/KeyboardBackspace';
import Book from '@mui/icons-material/ImportContacts';
import React from 'react';

// icons
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';

import Head from 'next/head'
import style from '../styles/calendarTwo.module.scss'
import Time from '@mui/icons-material/AccessTime';

function calendarTwo() {

    const styleBook = {
        transform: "translateX(-10px)",
    };

    return (
        <>
            <Head>
                <title>Calendar</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={style.container}>
                <div className={style.head}>
                    <div className={style.head__left}>
                        <ArrowLeft className={style.button} />
                        <div className={style.cards}>
                            <h2>Change Simplification</h2>
                            <div className={style.cards__card}>
                                <b>
                                    <Book style={styleBook} />
                                    Lesson 01 : Introduction about XD
                                </b>
                                <p>30 mins</p>
                            </div>
                            <div className={style.cards__card}>
                                <b>
                                    <Book style={styleBook} />
                                    Lesson 01 : Introduction about XD
                                </b>
                                <p>30 mins</p>
                            </div>
                            <div className={style.cards__card}>
                                <b>
                                    <Book style={styleBook} />
                                    Lesson 01 : Introduction about XD
                                </b>
                                <p>30 mins</p>
                            </div>
                            <div className={style.cards__card}>
                                <b>
                                    <Book style={styleBook} />
                                    Lesson 01 : Introduction about XD
                                </b>
                                <p>30 mins</p>
                            </div>
                        </div>
                        <div className={style.cards}>
                            <h2>PRACTICE QUIZ</h2>
                            <div className={style.cards__card}>
                                <b>
                                    <Book style={styleBook} />
                                    Lesson 01 : Introduction about XD
                                </b>
                                <p>30 mins</p>
                            </div>
                            <div className={style.cards__card}>
                                <b>
                                    <Book style={styleBook} />
                                    Lesson 01 : Introduction about XD
                                </b>
                                <p>30 mins</p>
                            </div>
                            <div className={style.cards__card}>
                                <b>
                                    <Book style={styleBook} />
                                    Lesson 01 : Introduction about XD
                                </b>
                                <p>30 mins</p>
                            </div>
                            <div className={style.cards__card}>
                                <b>
                                    <Book style={styleBook} />
                                    Lesson 01 : Introduction about XD
                                </b>
                                <p>30 mins</p>
                            </div>
                            <div className={style.cards__card}>
                                <b>
                                    <Book style={styleBook} />
                                    Lesson 01 : Introduction about XD
                                </b>
                                <p>30 mins</p>
                            </div>
                            <div className={style.cards__card}>
                                <b>
                                    <Book style={styleBook} />
                                    Lesson 01 : Introduction about XD
                                </b>
                                <p>30 mins</p>
                            </div>
                            <div className={style.cards__card}>
                                <b>
                                    <Book style={styleBook} />
                                    Lesson 01 : Introduction about XD
                                </b>
                                <p>30 mins</p>
                            </div>
                            <div className={style.cards__card}>
                                <b>
                                    <Book style={styleBook} />
                                    Lesson 01 : Introduction about XD
                                </b>
                                <p>30 mins</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.head__right}>
                        <div className={style.top}>
                            <h2>Learn about Adobe XD & Prototyping</h2>
                            <div>
                                <b>Introduction about XD</b>
                                <p>
                                    <Time style={styleBook} /> 1 hour
                                </p>
                            </div>
                        </div>
                        <div className={style.bottom}>
                            <h2>Share and refer</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodeiusmodadipiscing elit, sed do eiusmodLoremLorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodeiusmodadipiscing elit, sed do eiusmodLorem
                                eiusmodLorem dolor sit amet, consectetur adipiscing
                            </p>
                            <div className={style.coments}>
                                <div className={style.coments__card}>
                                    <div className={style.coments__card__top}>
                                        <h2>O6 Super Coins on the way</h2>
                                        <div>
                                            <a href="#">
                                                <TwitterIcon/>
                                            </a>
                                            <a href="#">
                                                <FacebookIcon/>
                                            </a>
                                            <a href="#">
                                                <YouTubeIcon/>
                                            </a>
                                            <a href="#">
                                                <InstagramIcon/>
                                            </a>
                                            <a href="#">
                                                <TelegramIcon/>
                                            </a>
                                            <a href="#">
                                                <WhatsAppIcon/>
                                            </a>
                                        </div>
                                    </div>
                                    <b>Lorem ipsum dolor sit amet, consectetur adi</b>
                                    <div className={style.coments__card__bottom}>
                                        <p>
                                        Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodeiusmodadipiscing elit, sed do eiusmodL
                                        </p>
                                    </div>
                                </div>
                                <div className={style.coments__card}>
                                    <div className={style.coments__card__top}>
                                        <h2>O6 Super Coins on the way</h2>
                                        <div>
                                            <a href="#">
                                                <TwitterIcon/>
                                            </a>
                                            <a href="#">
                                                <FacebookIcon/>
                                            </a>
                                            <a href="#">
                                                <YouTubeIcon/>
                                            </a>
                                            <a href="#">
                                                <InstagramIcon/>
                                            </a>
                                            <a href="#">
                                                <TelegramIcon/>
                                            </a>
                                            <a href="#">
                                                <WhatsAppIcon/>
                                            </a>
                                        </div>
                                    </div>
                                    <b>Lorem ipsum dolor sit amet, consectetur adi</b>
                                    <div className={style.coments__card__bottom}>
                                        <p>
                                        Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodeiusmodadipiscing elit, sed do eiusmodL
                                        </p>
                                    </div>
                                </div>
                                <div className={style.coments__card}>
                                    <div className={style.coments__card__top}>
                                        <h2>O6 Super Coins on the way</h2>
                                        <div>
                                            <a href="#">
                                                <TwitterIcon/>
                                            </a>
                                            <a href="#">
                                                <FacebookIcon/>
                                            </a>
                                            <a href="#">
                                                <YouTubeIcon/>
                                            </a>
                                            <a href="#">
                                                <InstagramIcon/>
                                            </a>
                                            <a href="#">
                                                <TelegramIcon/>
                                            </a>
                                            <a href="#">
                                                <WhatsAppIcon/>
                                            </a>
                                        </div>
                                    </div>
                                    <b>Lorem ipsum dolor sit amet, consectetur adi</b>
                                    <div className={style.coments__card__bottom}>
                                        <p>
                                        Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodeiusmodadipiscing elit, sed do eiusmodL
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default calendarTwo