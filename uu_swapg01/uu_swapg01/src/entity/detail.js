//@@viewOn:imports
import { Entity } from "uu_swapg01-core";
import { withErrorBoundary } from "uu_plus4u5g02-elements";
import { withEditModal, withMargin } from "uu5g05-bricks-support";
//@@viewOff:imports

let Detail = Entity.Detail;
Detail = withMargin(Detail);
Detail = withEditModal(Detail);
Detail = withErrorBoundary(Detail);

//@@viewOn:exports
export { Detail };
export default Detail;
//@@viewOff:exports
