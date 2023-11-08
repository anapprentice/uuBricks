//@@viewOn:imports
import { createComponent, createVisualComponent, Utils, useState } from "uu5g05";
import Uu5TilesElements from "uu5tilesg02-elements";
import Uu5TilesControls from "uu5tilesg02-controls";
import Uu5Tiles from "uu5tilesg02";
import Config from "./config/config.js";
// import { DATA, COLUMN_LIST, Tile } from "uu5tilesg02/assets/mocks/animal-mocks.jsx";
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

const ColumnData = createComponent({
  uu5Tag: Config.TAG + "ColumnData",
  render(props) {
    const { data, value } = props;
    const result = data[value] && typeof data[value] === "object" ? JSON.stringify(data[value]) : data[value];
    return result ?? null;
  },
});

const SERIE_LIST = [
  {
    value: "speciesName",
    label: "Species Name",
    dataItem: (data) => <ColumnData value="speciesName" data={data.data} />,
    visible: "always",
    fixed: "start",
  },
  { value: "class", label: "Class", dataItem: (data) => <ColumnData value="class" data={data.data} /> },
  {
    value: "order",
    label: "Order",
    dataItem: (data) => <ColumnData value="order" data={data.data} />,
    visible: false,
  },
  {
    value: "family",
    label: "Family",
    dataItem: (data) => <ColumnData value="family" data={data.data} />,
    visible: false,
  },
  {
    value: "location",
    label: "Location",
    dataItem: (data) => <ColumnData value="location" data={data.data} />,
    fixed: "end",
  },
];

const SORTER_LIST = [
  {
    key: "speciesName",
    label: "Species name",
    sort: (a, b) => a.speciesName.localeCompare(b.speciesName),
  },
];

const FILTER_LIST = [
  {
    key: "speciesName",
    label: "Species name",
    filter: (item, value) => {
      let fragments = value.split(/[\s,.-;:_]/);
      return fragments.some((frag) => {
        let itemValue =
          typeof item.speciesName === "object" ? Utils.Language.getItem(item.speciesName) : item.speciesName;
        return itemValue.toLowerCase().indexOf(frag.toLowerCase()) !== -1;
      });
    },
    inputProps: { placeholder: { en: "Enter value", cs: "Zadejte hodnotu" } },
  },
];

const List = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "List",
  nestingLevel: ["areaCollection", "area"],
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    // const { children } = props;
    const [filterList, setFilterList] = useState([]);
    const [sorterList, setSorterList] = useState([]);
    const [serieList, setSerieList] = useState(SERIE_LIST);
    //@@viewOff:private

    //@@viewOn:interface
    function onSorterChange(e) {
      setSorterList(e.data.sorterList);
    }
    function onFilterChange(e) {
      setFilterList(e.data.filterList);
    }
    //@@viewOff:interface

    //@@viewOn:render
    const attrs = Utils.VisualComponent.getAttrs(props, Css.main());
    const currentNestingLevel = Utils.NestingLevel.getNestingLevel(props, List);

    return currentNestingLevel ? (
      <div {...attrs}>
        <div>Visual Component {List.uu5Tag}</div>
        <Uu5Tiles.ControllerProvider
          data={[
            {
              id: "tygr01",
              speciesName: "Bengal tiger",
              speciesTaxonomyName: "Panthera tigris",
              class: "Mammalia",
              order: "Carnivora",
              family: "Felidae",
              location: "Asia",
              description: "",
            },
            {
              id: "pavian01",
              speciesName: "Hamadryas baboon",
              speciesTaxonomyName: "Papio hamadryas",
              class: "Mammalia",
              order: "Primates",
              family: "Cercopithecidae",
              location: "Africa",
              description: "",
            },
            {
              id: "malpa01",
              speciesName: "Golden-bellied capuchin",
              speciesTaxonomyName: "Sapajus xanthostemos",
              class: "Mammalia",
              order: "Primates",
              family: "Cebidae",
              location: "America",
              description: "",
            },
            {
              id: "langur01",
              speciesName: "Red-shanked douc",
              speciesTaxonomyName: "Pygathrix nemaeus",
              class: "Mammalia",
              order: "Primates",
              family: "Cercopithecidae",
              location: "Asia",
              description: "",
            },
            {
              id: "orangutan01",
              speciesName: "Sumatran orangutan",
              speciesTaxonomyName: "Pongo abelii",
              class: "Mammalia",
              order: "Primates",
              family: "Hominidae",
              location: "Asia",
              description: "",
            },
            {
              id: "varan02",
              speciesName: "Komodo dragon",
              speciesTaxonomyName: "Varanus komodoensis",
              class: "Reptilia",
              order: "Squamata",
              family: "Varanidae",
              location: "Asia",
              description: "",
            },
          ]}
          filterDefinitionList={FILTER_LIST}
          filterList={filterList}
          onFilterChange={onFilterChange}
          sorterDefinitionList={SORTER_LIST}
          sorterList={sorterList}
          onSorterChange={onSorterChange}
          serieList={serieList}
          onSerieChange={(e) => setSerieList(e.data.serieList)}
        >
          <Uu5TilesControls.FilterBar initialExpanded />
          <Uu5TilesControls.SorterBar initialExpanded />
          <Uu5TilesControls.SerieButton />
          <Uu5TilesControls.SerieManagerModal />
          <Uu5TilesElements.List />
        </Uu5Tiles.ControllerProvider>
      </div>
    ) : null;
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { List };
export default List;
//@@viewOff:exports
