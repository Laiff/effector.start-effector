import React from "react";
import { useStore } from "effector-react";
import { Button } from "@material-ui/core";
import { DataListModal } from "./components/DataListModal";
import { DataList } from "./components/DataList";
import "./App.css";
import {
  $modalVisibility,
  $todos,
  getDataFx,
  setModalVisibility
} from "./effector";

function App() {
  const isVisible = useStore($modalVisibility);
  const isLoading = useStore(getDataFx.pending);
  const data = useStore($todos);

  return (
    <div className="App">
      <Button
        color="primary"
        variant="contained"
        onClick={() => setModalVisibility(true)}
      >
        Открыть модальное окно
      </Button>

      <DataListModal
        isVisible={isVisible}
        isLoading={isLoading}
        onSubmit={getDataFx}
        onClose={() => setModalVisibility(false)}
      />

      <DataList isLoading={isLoading} data={data} />
    </div>
  );
}

export default App;
