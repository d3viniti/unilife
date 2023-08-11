const Backdrop = (props) =>{
    return props.show ? (
        <div className="backdrop" onClick={props.onClick}></div>
    ): null;
};

export default Backdrop;