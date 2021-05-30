import React from "react";
import Product from "./Product";

function ProductFeed({ products }) {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto pl-5">
      {products
        .slice(0, 4)
        .map(({ id, image, title, price, description, category }) => {
          return (
            <Product
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
            />
          );
        })}
      <img
        className="relative object-center md:col-span-full"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Vernac13th/1500x150_V2_Eng._CB412582591_.jpg"
        alt="banner"
      />
      <div className="md:col-span-2 bg-white mt-3 mb-3">
        {products
          .slice(4, 5)
          .map(({ id, image, title, price, description, category }) => {
            return (
              <Product
                key={id}
                id={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
              />
            );
          })}
      </div>

      {products
        .slice(5, products.length)
        .map(({ id, image, title, price, description, category }) => {
          return (
            <Product
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
            />
          );
        })}
      <div className="md:col-span-2 bg-white mt-3 mb-3">
        {products
          .slice(13, 14)
          .map(({ id, image, title, price, description, category }) => {
            return (
              <Product
                key={id}
                id={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
              />
            );
          })}
      </div>
    </div>
  );
}

export default ProductFeed;
