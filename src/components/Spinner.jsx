import { BarLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto",
};

const Spinner = ({ color = "blue", size = 150 }) => {
  return (
    <div>
      <BarLoader
        size={size}
        color={color}
        cssOverride={override}
        aria-label="Loading..."
      />
    </div>
  );
};

export default Spinner;
