const Container = ({ fluid = false, children }) => {
    return (
      <div className={fluid ? "mx-auto px-4 max-w-xl md:max-w-2xl lg:max-w-screen-xl" : "mx-auto  max-w-screen-xl px-4"}>
        {children}
      </div>
    );
  };
  
  export default Container;
