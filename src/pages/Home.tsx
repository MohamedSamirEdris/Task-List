import { useContext } from "react";
import { Tasks } from "../components";
import { AddButton } from "../styles";

import { Tooltip } from "@mui/material";
import { AddRounded } from "@mui/icons-material";
import { UserContext } from "../contexts/UserContext";
import { useResponsiveDisplay } from "../hooks/useResponsiveDisplay";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { user } = useContext(UserContext);
  const { tasks, settings } = user;

  const n = useNavigate();
  const isMobile = useResponsiveDisplay();

  return (
    <>
      <Tasks />

      {!isMobile && (
        <Tooltip title={tasks.length > 0 ? "Add New Task" : "Add Task"} placement="left">
          <AddButton
            animate={tasks.length === 0}
            glow={settings[0].enableGlow}
            onClick={() => n("add")}
            aria-label="Add Task"
          >
            <AddRounded style={{ fontSize: "44px" }} />
          </AddButton>
        </Tooltip>
      )}
    </>
  );
};

export default Home;
