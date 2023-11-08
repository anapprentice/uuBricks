//@@viewOn:imports
import { createVisualComponent, Utils } from "uu5g05";
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
  <p>
    <strong>Id:</strong> {props.data.id}
  </p>
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
    const attrs = Utils.VisualComponent.getAttrs(props, Css.main());
    const currentNestingLevel = Utils.NestingLevel.getNestingLevel(props, Detail);

    return (
      <>
        {currentNestingLevel === "area" && <AreaView {...attrs} {...props} />}
        {currentNestingLevel === "box" && <AreaView {...attrs} {...props} />}
        {currentNestingLevel === "spot" && <InlineView {...attrs} {...props} />}
        {currentNestingLevel === "inline" && <InlineView {...attrs} {...props} />}
      </>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { Detail };
export default Detail;
//@@viewOff:exports
