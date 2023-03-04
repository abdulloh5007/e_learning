import Link from "next/link";
import React, { useEffect, useState, useContext } from 'react'
import { Context } from "../../components/Context/Context";

export default function Comment() {
  const { link, setLink } = useContext(Context)
  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await res.json();
      setData(data);
    }

    fetchData();
  }, []);

  return (
    <div>
      {
        data.map((e, i) => (
          <div key={i}>
            <Link onClick={() => setLink(e)} href={`/comment/${e.id}`}>
              <b>{e.title}</b> <br /> <br />
            </Link>
          </div>
        ))
      }
    </div>
  );
}
