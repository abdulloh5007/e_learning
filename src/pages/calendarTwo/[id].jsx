import style from '../../styles/calendarTwo/Card.module.scss'
import comments from '../../data/comments.json'
import Head from 'next/head'
import { useRouter } from "next/router";
import Image from 'next/image'

export default function Comment({ comment }) {
    const router = useRouter();
    const { id } = router.query;

    // const commentsTop = {
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'space-between',
    //     maxWidth: "1100px",
    //     width: '100%',
    //     margin: '0 auto',
    // }

    return (
        <>
            <Head>
                <title>Comments</title>
                <meta name="description" content="Generated by Abdulloh" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div key={comment.id} className={style.card}>
                <img width={400} height={300} className={style.card__image} src={comment.image} alt='cardTop'/>
                <div className={style.card__top}>
                    <h2>{comment.title}</h2>
                    <div>
                        {
                            comment.icons?.map((e, i) => (
                                <a key={i} href="#">
                                    <img src={e.icon} alt={i} />
                                </a>
                            ))
                        }
                    </div>
                </div>
                <div className={style.card__center}>
                    <b>{comment.textTop}</b>
                </div>
                <div className={style.card__bottom}>
                    <p>
                        {comment.text}
                    </p>
                </div>
            </div>
            <div className={style.commentsTop}>
                <button onClick={() => router.back()}>Back</button>
                <h1>Comments</h1>
            </div>
        </>
    )
}

export async function getStaticPaths() {
    const paths = comments.map(comment => ({
        params: { id: comment.id.toString() },
    }))

    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const comment = comments.find(comment => comment.id.toString() === params.id)

    return { props: { comment } }
}