import { useDispatch, useSelector } from "react-redux";

import { selectAuthUser } from "../../redux/auth/selectors";

import css from "./UserMenu.module.css";
import { apiLogout } from "../../redux/auth/operations";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectAuthUser);

  return (
    <div className={css.wrapper}>
      <div>
        <h3>{user.name}</h3>
        <p>{user.email}</p>
      </div>

      <button
        type="button"
        onClick={() => {
          dispatch(apiLogout());
        }}
      >
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;
