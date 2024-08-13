import React from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const params = useParams();
  const { product_id, photo_id } = params;
  return (
    <div>
      <h2>ProductDetail {product_id}</h2>
      <h2>Photo {photo_id}</h2>
    </div>
  );
}

export default ProductDetail;
