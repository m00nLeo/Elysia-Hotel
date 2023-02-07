const Container = ({ fluid = true, children }) => {
    return (
      <div className={fluid ? "mx-auto w-5/6 fixed" : "mx-auto w-5/6"}>
        {children}
      </div>
    );
  };
  
  export default Container;
