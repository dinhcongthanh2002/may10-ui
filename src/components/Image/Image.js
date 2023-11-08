import React, { forwardRef, useState } from "react";
import images from "../../assets/images";

const Image = forwardRef(
  (
    {
      src,
      alt,
      loading,
      className,
      fallback: customFallback = images.noImage,
      ...props
    },
    ref
  ) => {
    const [fallback, setFallback] = useState("");
    const handleError = () => {
      setFallback(customFallback);
    };

    return (
      <img
        className={className}
        ref={ref}
        src={fallback || src}
        alt={alt}
        loading={loading}
        {...props}
        onError={handleError}
      />
    );
  }
);

export default Image;
