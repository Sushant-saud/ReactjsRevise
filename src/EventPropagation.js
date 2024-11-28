import React from "react";

function EventPropagation() {
    console.log("render")
  const handleFirst = (e) => {
    e.stopPropagation();
    alert("handleFirst");
  };
  const handlSecond = (e) => {
    e.stopPropagation();
    alert("handleSecond");
  };
  const handleDiv = (e) => {
    alert("parentDiv");
  };

  return (
    <>
      <div
        onClick={handleDiv}
        style={{
          width: 500,
          height: 500,
          backgroundColor: "green",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button
          onClick={handleFirst}
          style={{ width: 100, height: 100, backgroundColor: "gray" }}
        >
          button1
        </button>
        <button
          onClick={handlSecond}
          style={{ width: 100, height: 100, backgroundColor: "red" }}
        >
          button2
        </button>
        {/* Event handlers will also catch events from any children your component
      might have. We say that an event “bubbles” or “propagates” up the tree: it
      starts with where the event happened, and then goes up the tree.
      If you click on either button, its onClick will run first, followed by the parent 
      <div>’s onClick. So two messages will appear. If you click the toolbar itself, 
      only the parent <div>’s onClick will run.
      bubble:In event bubbling, the event starts from the target element and bubbles up to the root of the DOM tree
      capture: In event capturing, the event starts from the root and propagates down to the target element.*/}

        {/* Stopping propagation */}

        {/* Event handlers receive an event object as their only argument. 
      By convention, it’s usually called e, which stands for “event”.
      That event object also lets you stop the propagation. 
      If you want to prevent an event from reaching parent components, you need to call e.stopPropagation() */}

        {/* Preventing default behavior */}
        {/* Some browser events have default behavior associated with them. For example, a <form> submit event, which happens when a button inside of it is clicked, will reload the whole page by default: */}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("Submitting!");
        }}
      >
        <input />
        <button>Send</button>
      </form>
    </>
  );
}

export default EventPropagation;
