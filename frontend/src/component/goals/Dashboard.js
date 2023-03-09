import React, { useState } from "react";
import Dialog from "../utils/Dialog";
import GoalModal from './GoalModal'

function Dashboard() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <div>
        <h1>Your Goals</h1>
        <div>
          <button onClick={() => setOpenModal(true)}>+ Add Goal</button>
        </div>
      </div>
      <Dialog open={openModal} setOpen={setOpenModal}>
        <GoalModal />
      </Dialog>
    </div>
  );
}

export default Dashboard;
