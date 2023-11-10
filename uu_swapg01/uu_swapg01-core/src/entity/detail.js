//@@viewOn:imports
import { createVisualComponent, useState, Utils } from "uu5g05";
import Uu5Elements from "uu5g05-elements";
import Config from "./config/config.js";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
const Css = {
  main: () => Config.Css.css({}),
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const AreaView = (props) => (
  <div style={{ background: "cornflowerblue" }}>
    <p>
      <strong>Id:</strong> {props.data.id}
    </p>
    <p>
      <strong>Name:</strong> {props.data.speciesName}
    </p>
    <p>
      <strong>Class:</strong> {props.data.class}
    </p>
  </div>
);

const InlineView = (props) => (
  <span onClick={props.onClick}>
    <strong>Id:</strong> {props.data.id}
  </span>
);

const Detail = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Detail",
  nestingLevel: ["area", "box", "spot", "inline"],
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    data: {},
  },
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    // const { data } = props;
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const [open, setOpen] = useState();
    const attrs = Utils.VisualComponent.getAttrs(props, Css.main());
    const currentNestingLevel = Utils.NestingLevel.getNestingLevel(props, Detail);
    const queryString = window.location.search;
    const urlParamsSearch = new URLSearchParams(queryString);
    const urlParamsEntries = urlParamsSearch.entries();
    let urlParams = {};
    for(const entry of urlParamsEntries) {
      let value = entry[1];
      if (entry[0] === "data") {
        value = JSON.parse(entry[1]);
      }
      urlParams[entry[0]] = value;
    }
    let data = {...props, ...urlParams};

    return (
      <>
        <Uu5Elements.Modal {...data} header={"header"} open={open} onClose={() => setOpen(false)}>
          <AreaView {...attrs} {...data} />
        </Uu5Elements.Modal>

        {currentNestingLevel === "area" && <AreaView {...attrs} {...data} />}
        {currentNestingLevel === "box" && <AreaView {...attrs} {...data} />}
        {currentNestingLevel === "spot" && <InlineView {...attrs} {...data} onClick={() => setOpen(true)} />}
        {currentNestingLevel === "inline" && <InlineView {...attrs} {...data} onClick={() => setOpen(true)} />}
      </>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { Detail };
export default Detail;
//@@viewOff:exports
