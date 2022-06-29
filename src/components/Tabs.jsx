import React from "react";
import styled from "styled-components";
import JavaScriptProjects from "./JavaScriptProjects";
import Mern from "./Mern";
import ReactProject from "./ReactProject";
import AllProjects from "./AllProjects";

const TabsWrapper = styled.div`
  border-top: 1px solid #e0e0e0;
  display: grid;
  grid-row: 3px 1fr;
`;

const ActiveLine = styled.div`
  height: 3px;
  width: ${p => `${p.width}px`};
  transform: translateX(${p => `${p.offset}px`});
  background: #9e9e9e;
  transition: all 350ms cubic-bezier(0.15, 0.3, 0.25, 1);
`;

const TabList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  position: relative;
`;
const TabItem = styled.li`
  display: inline-block;
  padding: 8px 20px;
  cursor: pointer;
  &.is-active {
  }
`;

const Tabs = props => {
  const activeRef = React.createRef();
  const none = React.createRef();
  const [selected, setSelected] = React.useState("1all");
  const [offset, setOffset] = React.useState(0);
  const [width, setWidth] = React.useState(0);

  React.useEffect(() => {
    const activeElement = activeRef.current;
    setOffset(activeElement.offsetLeft);
    setWidth(activeElement.clientWidth);
  }, [selected, activeRef]);

  let projects;
  if (selected === "1") {
    projects = <Mern></Mern>
  } else if (selected === "1bis") {
    projects = <ReactProject></ReactProject>
  } else if (selected === "2") {
    projects = <JavaScriptProjects></JavaScriptProjects>
  } else {
    projects = <AllProjects></AllProjects>
  }

  return (
    <div className="z-0">
      <TabsWrapper>
      <ActiveLine width={width} offset={offset} />
      <TabList>
        {props?.items?.map(item => {
          return (
            <TabItem
              key={item.to}
              ref={selected === item.to ? activeRef : none}
              className={selected === item.to ? "is-active" : ""}
              onClick={() => {
                setSelected(item.to)
                props.setSelectedTab(item.to)
              }}
            >
              {item.name}
            </TabItem>
          );
        })}
      </TabList>
    </TabsWrapper>

    {projects}
    </div>
  );
};

export default Tabs;
