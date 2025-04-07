import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Grow } from "@mui/material";

const style = {
  width: 400,
  height: 230,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: "8px",
};

interface BasicModalProps {
  show: boolean;
  onHide: () => void;
  children: React.ReactNode;
}

const BasicModal = ({ show, onHide, children }: BasicModalProps) => {
  return (
    <div>
      <Modal
        open={show}
        onClose={onHide}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Grow in={show} style={{ transformOrigin: "center center" }}>
          <Box sx={style}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              style={{ marginBottom: "20px" }}
            >
              Edite sua tarefa
            </Typography>
            {children}
          </Box>
        </Grow>
      </Modal>
    </div>
  );
};

export default BasicModal;
