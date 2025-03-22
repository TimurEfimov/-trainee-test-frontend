import React from "react";

interface Props {
  src?: string;
  alt: string;
  name?: string;
  size: number;
}

export const Avatar: React.FC<Props> = ({ src, alt, name, size }) => {
  const [onLoad, setOnLoad] = React.useState(false);
  const handleImage = () => {
    setOnLoad(true);
  };

  const getRandomColor = () => {
    const colors = [
      "#413344",
      "#614c65",
      "#806485",
      "#936397",
      "#a662a8",
      "#664972",
      "#463c57",
      "#6e8da9",
      "#91bcdd",
      "#567d99",
      "#395e77",
      "#305662",
      "#264d4d",
      "#315c45",
      "#8a9a65",
      "#b6b975",
      "#b65d54",
      "#b60033",
      "#98062d",
      "#800022",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const getInitial = () => {
    return name ? name.charAt(0).toUpperCase() : "";
  };

  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: onLoad ? "transparent" : getRandomColor(),
        color: "#fff",
        fontSize: `${Math.floor(size / 3)}px`,
        fontWeight: "bold",
      }}
    >
      {onLoad ? (
        <img
          src={src}
          alt={alt}
          onLoad={handleImage}
          style={{
            width: "72px",
            height: "72px",
            borderRadius: "50%",
          }}
        />
      ) : (
        getInitial()
      )}
    </div>
  );
};
