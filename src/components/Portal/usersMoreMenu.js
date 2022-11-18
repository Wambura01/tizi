import { useRef, useState } from "react";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
// material
import { Menu, IconButton } from "@mui/material";
import UpdateUser from "./updateUser";

export default function UsersMoreMenu({ userId, userData }) {
  const ref = useRef(null);
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <IconButton ref={ref} onClick={() => setOpen(true)}>
        <MoreVertOutlinedIcon width={20} height={20} />
      </IconButton>
      <Menu
        open={isOpen}
        anchorEl={ref.current}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: { width: 200, maxWidth: "100%" },
        }}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <UpdateUser userId={userId} userData={userData} />
      </Menu>
    </>
  );
}
