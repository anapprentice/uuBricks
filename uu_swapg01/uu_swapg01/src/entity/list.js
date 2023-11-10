//@@viewOn:imports
import { Entity } from "uu_swapg01-core";
import { withErrorBoundary } from "uu_plus4u5g02-elements";
import { withEditModal, withMargin } from "uu5g05-bricks-support";
//@@viewOff:imports

let List = Entity.List;
List = withMargin(List);
List = withEditModal(List);
List = withErrorBoundary(List);

//@@viewOn:exports
export { List };
export default List;
//@@viewOff:exports
