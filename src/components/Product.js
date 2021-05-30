import React from "react";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import styles from "../styles/Product.module.css";
import CurrencyFormat from "react-currency-format";

function Product({ id, image, title, price, description, category }) {
  const MAX_RATING = 5;
  const MIN_RATING = 1;
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );
  const [hasPrime] = useState(Math.random() < 0.5);
  return (
    <div
      // className="relative flex flex-col m-5 bg-white z-30 p-10 container "
      // className={styles.page_wrapper}
      className=" z-30"
    >
      <div className={styles.page_inner}>
        <div className="row">
          <p className="absolute pl-5 text-xs italic text-gray-400">
            {category}
          </p>
          <div className={styles.el_wrapper}>
            <div className={styles.box_up}>
              <Image
                className={styles.img}
                src={image}
                height={200}
                width={200}
                objectFit="contain"
              />
              <div className={styles.img_info}>
                <div className={styles.info_inner}>
                  <span className={styles.p_name}>
                    <h4 className="my-3">{title}</h4>
                  </span>
                </div>
                <div className={"flex " + styles.p_company}>
                  {Array(rating)
                    .fill()
                    .map((_, index) => (
                      <StarIcon key={index} className="h-5 text-yellow-500" />
                    ))}

                  {hasPrime && (
                    <div className="flex items-center space-x-2 -mt-5 ml-5 ">
                      <img
                        className="w-12"
                        src="https://links.papareact.com/fdw "
                      />
                      <p>
                        <br />
                        Free 24-Hr Delivery{" "}
                      </p>
                    </div>
                  )}
                </div>
                <p className={styles.a_size}>{description}</p>
              </div>
            </div>
            <div>
              <div className={styles.box_down}>
                <div className={styles.h_bg}>
                  <div className={styles.h_bg_inner}></div>
                </div>
                <div className={styles.cart}>
                  <span className={styles.price}>
                    <CurrencyFormat
                      rendertext={(value) => <strong>{value}</strong>}
                      value={price * 100}
                      displayType={"text"}
                      thousandSeparator={true}
                      thousandSpacing={"2s"}
                      prefix={"₹"}
                    />
                  </span>

                  <span className={styles.add_to_cart}>
                    <button className={"bts" + styles.txt}>Add to Cart</button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
