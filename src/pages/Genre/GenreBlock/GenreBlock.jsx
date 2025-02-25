/* eslint-disable react/prop-types */
import classNames from "classnames/bind";
import styles from "./GenreBlock.module.scss";

import { slugify } from "../../..//helpers/Format";

const cx = classNames.bind(styles);

function GenreBlock({ props }) {
  console.log('🚀 ~ GenreBlock ~ props:', props)
  return (
    <div
      className={cx("genre__block")}
      onClick={() => props?.handleSelectGenre(slugify(props?.title))}
    >
      <img
        src={props?.image}
        alt=''
        className={cx(props?.isSelected && "selected")}
      />
      <span className={cx("genre__name")}>{props?.title}</span>
    </div>
  );
}

export default GenreBlock;
