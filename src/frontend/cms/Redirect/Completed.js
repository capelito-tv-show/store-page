import React, { Component } from "react";
import { Link } from 'react-junctions';

const Completed = () => {
  return(
    <div>
      <h2>追加が完了しました</h2>
      <Link href="/"><button>ホームに戻る</button></Link>
      <Link href="/Admin/"><button>他のメニューを追加する</button></Link>
    </div>
  )
}

export default Completed;
