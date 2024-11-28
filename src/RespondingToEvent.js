import React from "react";

function RespondingToEvent() {
  //   const handleClick = () => {
  //     alert("handle click");
  //   };
//   const AlertButton = ({ message, children }) => {
//     console.log({ message, children }, "mess")
//     return (
//       <>
//         <button
//           onClick={() => {
//             console.log({ message, children }, "mess");
//             alert(message);
//           }}
//         >
//           {children}
//         </button>
//       </>
//     );
//   };
  const AlertButton = ({message}) => {
    function handlClick(){
        alert(message);
    }
   
    return (
      <>
      <button onClick={handlClick}>playing game</button>
      </>
    );
  };
  const AnotherButton=({onClick,children})=>{
    return(
        <>
         <button onClick={onClick}>{children}</button>
        </>
    )
  }
  const UploadButton=()=>{
    return(
        <AnotherButton onClick={()=>alert("upload Image")}>Upload Image</AnotherButton>
    )
   
  }
  return (
    // <div>
    //   <button onClick={handleClick}>button</button>
    //   <button onClick={handleClick()}>button</button>
    // </div>
    //In the first example, the handleClick function is passed as an onClick event handler. This tells React to remember it and only call your function when the user clicks the button.

    // In the second example, the () at the end of handleClick() fires the function immediately during rendering, without any clicks. This is because JavaScript inside the JSX { and } executes right away.
    //     <div>
    //   <button onClick={function(){alert("alert me")}}>button</button>
    //   <button onClick={()=>alert("alert")}>button</button>
    // </div>
    // <div>
    //   <button
    //     onClick={function () {
    //       alert("alert me");
    //     }}
    //   >
    //     button
    //   </button>
    //   <button onClick={() => alert("alert")}>button</button>
    // </div>
    <div>
      {/* <button onDoubleClick={alert("hello")}>button</button> */}
      {/* //trigger on everyRender not on click */}
      {/* <button onDoubleClick={()=>alert("hello")}>button</button>  */}
      {/* //trigger on double click */}

      {/* <AlertButton message="play movie">play moviex</AlertButton> */}
      {/* <AlertButton message="image upload">image upload1</AlertButton> */}

        <AlertButton message="play movie">play moviex</AlertButton>
        <UploadButton message="image upload">image upload1</UploadButton>
    </div>
  );
}

export default RespondingToEvent;
