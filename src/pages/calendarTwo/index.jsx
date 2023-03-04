import ArrowLeft from '@mui/icons-material/KeyboardBackspace';
import Book from '@mui/icons-material/ImportContacts';
import React, { useState, useEffect } from 'react';
import Link from 'next/link'
// icons
import MenuIcon from '@mui/icons-material/Menu';

import Head from 'next/head'
import style from '../../styles/calendarTwo.module.scss'
import Time from '@mui/icons-material/AccessTime';
import { coment } from '../../data/data';
import { Box, Button, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

function calendarTwo() {

    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box

            sx={{ maxWidth: 450 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <div className={style.head__leftResp}>
                    <Link href='/calendar' className={style.button}><ArrowLeft /></Link>
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
            </List>
            <Divider />
        </Box>
    );


    // function createMarkup(icon) {
    //     return {__html: icon}
    // }

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
                        <Link href='/calendar' className={style.button}><ArrowLeft /></Link>
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
                    <div className={style.hamburgerMenu}>
                        {[`Menu`].map((anchor) => (
                            <React.Fragment key={anchor}>
                                <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
                                <Drawer
                                    anchor={anchor}
                                    open={state[anchor]}
                                    onClose={toggleDrawer(anchor, false)}
                                >
                                    {list(anchor)}
                                </Drawer>
                            </React.Fragment>
                        ))}
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
                                {
                                    coment.map((e, i) => (
                                        <div key={i} className={style.coments__card}>
                                            <div className={style.coments__card__top}>
                                                <h2>{e.title}</h2>
                                                <div>
                                                    {
                                                        e.icons?.map((e, i) => (
                                                            <a key={i} href="#">
                                                                <img src={e.icon} alt={i} />
                                                            </a>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                            <div className={style.coments__card__center}>
                                                <b>{e.textTop}</b>
                                                <Link href={`/calendarTwo/${e.id}`}>
                                                    <span>See More</span>
                                                </Link>
                                            </div>
                                            <div className={style.coments__card__bottom}>
                                                <p>
                                                    {e.text}
                                                </p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default calendarTwo